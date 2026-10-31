import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import AppServerModule from './src/main.server';
import { RESPONSE } from './src/app/response.token';

const errorPage = (heading: string, text: string) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${heading} | Topkare</title>
<style>
body{margin:0;min-height:100vh;display:grid;place-items:center;background:#fefae0;color:#1d2a21;font-family:system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;text-align:center;padding:1.5rem}
main{max-width:34rem}h1{margin:0 0 1rem;color:#3a5a40;font-size:clamp(1.6rem,5vw,2.4rem)}
p{margin:0 0 1.5rem;font-size:1.1rem;line-height:1.6}
a{display:inline-block;padding:.8rem 2rem;border-radius:999px;background:#3a5a40;color:#fefae0;font-weight:700;text-decoration:none}
a:hover{background:#2f4a34}
</style></head><body><main>
<h1>${heading}</h1>
<p>${text}</p>
<a href="/">Back to home</a>
</main></body></html>`;
const ERROR_PAGE = errorPage('Something went wrong', 'Please try again in a moment. If the problem continues, come back a little later.');
const BAD_REQUEST_PAGE = errorPage('That address looks wrong', 'We could not understand that web address. Please check it and try again.');

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
    maxAge: '1y',
    fallthrough: false, // a missing asset is a fast 404, not a full SSR render
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    // /404 is prerendered (for static hosts); the engine serves that file as-is, so set the status here.
    if (req.path.replace(/\/+$/, '') === '/404') res.status(404);

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

  // Final error middleware: never leak Express's default error page (stack trace, disk paths).
  server.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    const status = err?.status === 400 || err?.statusCode === 400 || err instanceof URIError ? 400
      : err?.status === 404 || err?.statusCode === 404 ? 404 : 500;
    res.status(status).type('html').send(status === 400 ? BAD_REQUEST_PAGE : status === 404 ? errorPage('Not found', 'We could not find that file.') : ERROR_PAGE);
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
