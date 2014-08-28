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

Lets go ahead and download a [copy of the repository](https://github.com/jsonresume/jsonresume-theme-boilerplate/archive/master.zip).

### Install npm packages

We need to install the dependencies. `cd` into the theme folder we just downloaded and run:

```bash
sudo npm install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

While inside the theme folder, simply run:

```
resume serve
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!

__The theme development can now begin.__

## Development

### Overview

Now that you have your boilerplate theme installed, go through a quick overview of each of the files needed for your JSONResume theme:

* `package.json`: Your package.json is required by all npm packages. Everytime you want to release a new update of your theme, you'll need to update it's version number.
* `index.js`: This is the file that will return the needed HTML to the theme server. You can use it to process some things with your theme first, but we'll talk about that a bit later.
* `resume.template`: This is your actual template. This file is sent to the `index.js` for it to sent to the theme server.
* `style.css`: This is where all the CSS of your project goes. Since the `index.js` only returns HTML, the contents of this file are put between `<style>` tags in your `resume.template` file.

In order to get values from an actual JSONResume, you'll need to use a templating system, such as [Mustache](http://mustache.github.io/) or [Handlebars](http://handlebarsjs.com/). The default boilerplate theme uses Handlebars.

### package.json

Because you'll need to publish this as your own soon, you'll need to change some of the fields. You can replace the name field with your own theme name, so long as it starts with `jsonresume-theme-`. This prefix will allow your theme to be found by the theme server during deployment.

Next, you'll want to change the description and author. You can change the description to anything you'd like, and the author should be your name.

If you are also putting your theme up on Github, you'll probably want to keep the repository field, but replace the url with your own.

Lastly, you can put all of your theme dependencies in the `dependencies` field. As you can see, we already have [Handlebars](http://handlebarsjs.com/) as one of the dependencies. If you wish not to use Handlebars, you may remove this, and replace it with another templating system.

### index.js

The `index.js` is where all the compiliing of your theme, and neccessary edits will go.

At the top, you can already see the Node.js `require` function being used with the dependencies. You can obviously add own dependencies, if you are planning on using a different templating system, you can remove it.

The most important part of `index.js` is the `render` function. This is where all the compilation goes. This render function is expected to take a resume object (from a `resume.json`), and should return HTML. In this case, it is returning a compiled Handlebars document. If you removed the Handlebars dependency, you'll want to remove it and replace it with your own templating system compilation.

Above the `return` line are css and template variables. Using the Node.js `fs` module, it reads first the `style.css` and the `resume.template`.

### resume.template

The `resume.template` file is where the actual template is. It contains all of the markup needed for your resume. By default, this is a Handlebars document, but it can obviously be changed into a different templating document.

### style.css

Last but not least, the `style.css` defines your styles. Technically, this is completely optional, as you could just write all of your styles in the `<style>` tags of your `resume.template`. As the `index.js`, the contents of the `style.css` are put into the `<style>` tags of your compiled theme later, yet again, this is something can change.

## Deployment

If you are familar with NPM, you should be done with this in no time.

If you already have an NPM account, you can run `npm login` and enter your username and password. If not, you can run `npm adduser` and fill in the proper fields.

If you changed the dependencies or added new ones, you'll want to run `npm install` again, and just to make sure, run `npm update` to get the latest version of each dependency.

When you are done with that, you may go into your package.json, and edit the version number. When all of the above is finished, you may run `npm publish` to release your theme to the public. Now everyone can use your theme with their resume.

When updating your theme, you'll need to change the version number and run `npm publish` again.

## License

Available under [the MIT license](http://mths.be/mit).
