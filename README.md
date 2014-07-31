# Boilerplate theme [![](https://badge.fury.io/js/jsonresume-theme-boilerplate.png)](https://www.npmjs.org/package/jsonresume-theme-boilerplate)

This is the boilerplate theme for [JSON Resume](http://jsonresume.org/).

## Getting started

To get started with theme development, this is what you'll need:

- [node.js](http://howtonode.org/how-to-install-nodejs)
- [npm](http://howtonode.org/introduction-to-npm)

If you're on Linux, you can simply run:

```
sudo apt-get install nodejs-legacy npm
```

Or if you're on OSX and got [Homebrew](http://brew.sh/) installed:
```
brew install node
```

### Install the command line

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

Go ahead and install it:

```
sudo npm install -g resume-cli
```

### Download theme

Lets go ahead and clone the repository:

```
git clone http://github.com/jsonresume/jsonresume-theme-boilerplate
```

### Install npm packages

We need to install the dependencies. `cd` into the theme folder and run:

```bash
sudo npm install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

While inside the theme folder, simply run:

```
resume serve
```

If successful, you should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!  
__The theme development can now begin.__

## License

Available under [the MIT license](http://mths.be/mit).
