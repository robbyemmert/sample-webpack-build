Title: The Newbie’s Guide to Web App Transpiling with Webpack  
By: Robby Emmert

### The need for speed

When I was a college student, I would walk to class every day across a campus that was sometimes less than intuitive to navigate.  Every day, I was in a hurry to get through the wind and snow, and rushing to make it to class on time.  About three quarters through one semester, I realized that my usual route to class was about 30% longer than it needed to be.  The efficiency nerd I am was frustrated.  How much time could I have saved with a little bit of up-front exploration and creativity?  In the ever-changing world of software development, fraught with tight budgets and deadlines, there are some tools that are easily overlooked, that given a little exploration and creativity can give you a significant competitive edge.

Webpack is such an easily overlooked tool.  It’s hard to describe in a sentence what it does (since it does so many things, most of them highly technical), it’s not client-facing, and it’s not exactly something you can bill for.  However, webpack can be a total game changer for designers and developers, novices and experts alike.  Most importantly, it’s a platform for consolidating, validating, and bundling app resources on which people can share workflow optimizations, and synchronize efforts.  Webpack performs all of the menial tasks related to preparing your code for distribution (internally, as well as externally), leaving you time to just create.  Webpack runs on any operating system, is extremely small, fast to use, and generally painless when configured properly.  That being said, without a bit of introduction, Webpack can be a bit of a headache, especially if you’re not used to using a terminal (or command line).  We will make significant use of the terminal in this tutorial, but fear not, it doesn’t have to be painful!

### Step 1: Node JS

Webpack uses the Node JS runtime.  Node is fast becoming the Swiss Army Knife of web developers.  If you don’t already have it, I recommend downloading it with Node Version Manager (NVM).  NVM can save you lots of pain in setting up and switching Node versions.  You can install it:
- For Mac: https://github.com/creationix/nvm
- For Windows: https://github.com/coreybutler/nvm-windows

Once NVM is installed, install a recent version of Node JS.  If you end up working on multiple projects with different versions of Node, you might want to install several versions:
- Windows: `nvm install x.x.x all`		(where ‘x.x.x’ is the version you want).
- Mac: `nvm install x.x.x`				(where ‘x.x.x’ is the version you want).

Once you have Node installed, you can activate the version you want to use with:
`nvm use x.x.x` (where x.x.x is the version you want to activate).

If you’re using Mac or Linux, you might want to add that line to your bash profile (a file in your home directory called `.bashrc` for Linux, or `.bash_profile` for Mac).

Type `node -v` in your terminal.  If you see the number (x.x.x) that you entered above, then all is well.

### Step 2: Initialize the project
