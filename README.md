### Deployment on GitHub pages

Push an existing repository from the command line\
`git remote add origin <repozitorij>`\

This package would help us to create a gh-pages branch on Github and also serve our bundled react files on the branch.

`yarn add gh-pages`

Locate the package.json file in your root directory, add this line of code to your script: "homepage": "link-to-your-repository", and save.

<pre>
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://dklarin.github.io/apartmani",
  "dependencies": {...
</pre>

In your package.json file, locate “scripts” add these lines of code:

<pre>
"scripts": {    
   "start": "react-scripts start",
   "predeploy": "yarn run build",
   "deploy": "gh-pages -b master -d build",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject"
},
</pre>

Deploy to GitHub Pages:

`yarn run deploy`

Link: [How to deploy React App to GitHub Pages](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)
