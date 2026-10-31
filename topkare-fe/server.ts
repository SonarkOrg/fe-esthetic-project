import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';
import { RESPONSE } from './src/app/response.token';

const ERROR_PAGE = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Something went wrong | Topkare</title>
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fefae0;color:#1d2a21;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;text-align:center;padding:1.5rem}
main{max-width:34rem}h1{margin:0 0 1rem;color:#3a5a40;font-size:clamp(1.6rem,5vw,2.4rem)}
p{margin:0 0 1.5rem;font-size:1.1rem;line-height:1.6}
a{display:inline-block;padding:.8rem 2rem;border-radius:999px;background:#3a5a40;color:#fefae0;font-weight:700;text-decoration:none}
a:hover{background:#2f4a34}
</style></head><body><main>
<h1>Something went wrong</h1>
<p>Please try again in a moment. If the problem continues, come back a little later.</p>
<a href="/">Back to home</a>
</main></body></html>`;

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: baseUrl },
          { provide: RESPONSE, useValue: res },
        ],
      })
      .then((html) => res.send(html))
      .catch((err) => {
        console.error('SSR render failed for', originalUrl, err);
        res.status(500).type('html').send(ERROR_PAGE);
      });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
