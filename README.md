# react-demo

## Installation

    npm install

## Directory structure

    dist/             #all the generated files live here
      bundled.css       #the bundled styles
      bundled.js        #the bundled scripts
      __reports__/
        mocha.json        #the test results for consumption by Bamboo
        coverage/
          index.html        #the detailed test coverage information

    src/              #all the source files live here

      assets/           #all the style, script and related files live here
        index.js          #the script entry file where you should write/require your code
        index.scss        #the style entry file where you should write/require your code
        test/             #the script tests live here
          index.js

      content/          #all the content files live here e.g. <img>s and other assets used by HTML but not the styles and scripts
        ...

    tasks/            #all the gulp tasks live here

    gulpfile.js       #the gulp entry file
    package.json      #the dependency information for your scripts, styles and build tools

## Build tasks

#### all

Run all the things!

    gulp all

You'll probably want to use this whenever you pull to get any new dependencies, and before you push to make sure you've
recorded all your dependencies, formatted your code appropriately and haven't caused any regressions.

#### default

Bundles the styles and scripts.

    gulp

If you're not using the `watch` task you'll probably want to use this task whenever you change the code.

#### watch

Listens for changes to your style, script and package.json files and bundles/installs them when they change.

    gulp watch

You'll want to use this whenever you're making changes to the code.

#### clean

Deletes all the generated files from the `./dist` directory.

    gulp clean

Run this task when you want to re-bundle styles and scripts from a clean slate.

#### test

    gulp test

Run all the tests in PhantomJS.

#### debug

    gulp debug

Run a test server so you can debug the tests in the browser.

#### optimise

    gulp optimise

Optimise all the styles, scripts and assets.
