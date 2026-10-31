# fe-esthetic-project
Webpage for esthetic purposes

Install the Angular CLI
You can use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

To install the Angular CLI, open a terminal window and run the following command:

content_copy
npm install -g @angular/cli
On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following execution policy:

content_copy
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
Carefully read the message displayed after executing the command and follow the instructions. Make sure you understand the implications of setting an execution policy.

Create a workspace and initial application
You develop apps in the context of an Angular workspace.

To create a new workspace and initial starter app:

Run the CLI command ng new and provide the name my-app, as shown here:

content_copy
ng new my-app
The ng new command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.

The CLI creates a new workspace and a simple Welcome app, ready to run.


Run the application
The Angular CLI includes a server, for you to build and serve your app locally.

Navigate to the workspace folder, such as my-app.

Run the following command:

content_copy
cd my-app
ng serve --open
The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

If your installation and setup was successful, you should see a page similar to the following.
