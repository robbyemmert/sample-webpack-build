# Sample Webpack Environment
By: Robby Emmert

### Dependencies  
1. **Node JS**:  
If you don't have Node JS, you'll need it for this tutorial.  I suggest installing it with NVM (as it can save lots of headaches when switching Node versions).  [Here's](docs/NVMIntro.md) how to get it set up.
2. **Mac, Windows, or Linux**  

### Quick Start
1. Clone this repository with `git clone https://github.com/robbyemmert/sample-webpack-build.git`.
2. (**optional**) if you want to use this code for your own project, and you plan to use git, re-point the project to your own repository: `git remote set-url origin LINK` where LINK is the url to your own repository (see [this link](https://help.github.com/articles/changing-a-remote-s-url/) if you want more info).  You should also update `package.json` with your project's information.
3. `cd` into the just-cloned project folder.
4. Type `npm install` to install all of the Node JS dependencies for the project (see the full list in `package.json`).
6. Type `npm run start` to start the Webpack Dev Server.  Your project is running (with live-reloading code) at http://localhost:8080.  As soon as you save a file, it should re-load in real time in your browser.
