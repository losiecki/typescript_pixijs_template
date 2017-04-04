
Template for PixiJS TypeScript project with live reload, build and deploy to distribution features.

Modules loaded via systemjs. Bundle script minifies all modules and bundles into one file.


Global modules required:
typescript, 
gulp,
live-server


npm commands:

dev - creates server, compiles typescript code on the fly to the build folder, copies html file to the build folder.

dist - copies and minifies all files (into dist folder), creates revisions, deletes console logs.

Commands are also available via vscode tasks
