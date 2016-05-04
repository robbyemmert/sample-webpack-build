# Intro to Node JS with NVM

## Setup

### For Mac/Linux
Visit https://github.com/creationix/nvm and find a command that looks like this:  
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`  

Run that command in your terminal.  

### For Windows  
Visit https://github.com/coreybutler/nvm-windows/releases and click the `nvm-setup.zip` file associated with the latest release. (1.1.0 at the time this was written).

Extract and run the installer inside of that zip file.

## Usage

### For Mac/Linux
You might have to restart your terminal after installing NVM.

To install the latest version of node:  
`nvm install node`  

To install a specific version of node:  
`nvm install x.x.x` *(where x.x.x is the version you want).*

To activate the latest version of node (assuming it is installed):  
`nvm use node`

To activate a specific version of node (assuming it is installed):  
`nvm use x.x.x` *(where x.x.x is the version you want).*

Tip: You might want to put a `nvm use x.x.x` command in your bash profile, so that NVM defaults to a specific version automatically every time you open a terminal.  You'll want to add the use command to your `.bash_profile` file on Mac, or your `.bashrc` file on Linux.

### For Windows
You might have to restart your command line after installing NVM.

To install the latest version of node:  
`nvm install latest all` *(**optional**: you can change the word `all` to either `32` or `64` to only install one architecture of node.  Adding `all` tells NVM to install both)*

To install a specific version of node:  
`nvm install x.x.x all` *(where x.x.x is the version you want)*

To activate a specific version of node:
`nvm use x.x.x` *(where x.x.x is the version you want)*
