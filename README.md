# IntuitDF15Demo
Intuit Demo - Service Cloud Keynote Dreamforce 2015
====================

###Install and Build

```bash
- npm install
```
```bash
- bower install
```

### Grunt Build task

To build the app (create the '/build' folder with content) you need to run the following command:

```bash
grunt build
```

###Grunt "Serve" Task

To serve the project (accessing it through http://localhost:8080 to test it), you need to run the following command:
```bash
grunt
```

Note: the `/build` folder is not going to be generated or updated. After work with this server, you need to run `grunt build` manually to update the `/build` folder with the latest changes.

###Deploy to GH-Pages

This project will be deployed on http://mchousfdc.github.io/IntuitDF15Demo/build/

To update the app you need to run the following commands:
- Update the branch master using the command: 
```bash
git pull origin master
```
- Deploy to gh-pages branch
```bash
git push origin master:gh-pages
```
