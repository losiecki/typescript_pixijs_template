Template for PixiJS (TypeScript)
=============


Template for PixiJS TypeScript project with live reload, build and deploy to distribution features.

Modules loaded via systemjs. Bundle script minifies all modules and bundles into one file.


Global modules required:
typescript, 
gulp,
live-server

```
$> npm install -g typescript gulp-cli live-server
```

### npm commands: ###

- start - creates server, watches for html changes and copies html file to the build folder.

- dist - copies and minifies all files (into dist folder), creates files revisions, deletes console logs

Typescript is compiled manually via VS Code (Ctrl+Shift+b)