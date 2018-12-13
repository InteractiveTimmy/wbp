# wbp

## Description

WBP is a simple Web Boiler Plate that primarily utilizes the following dependencies:
 
 * [React](https://github.com/facebook/react)
 * [Redux](https://github.com/reduxjs/redux)
 * [Redux Thunk](https://github.com/reduxjs/redux-thunk)
 * [Redux Saga](https://github.com/redux-saga/redux-saga)
 * [Webpack](https://github.com/webpack/webpack)
 * *See [package.json](https://github.com/InteractiveTimmy/wbp/blob/master/package.json) for a full list of dependencies*

Most of what is needed to start building web applications is installed and easily accessible, along with an extra **Sample** React Component to use as a helper template.

## Installation

Since this project is a boiler plate, the best way to initialize a new project is to clone this repository and modify the files within the `./src/` directory.

## Usage

### Examples

The current build, located in `./build/`, is an example app that utilizes the **Sample** component. This component uses all available resources simultaniously as a demonstration of what dependencies are currently installed. To run this example, simply clone this repository and run `npm run start` from the application's root directory. This will start a webserver at [localhost:8080](http://localhost:8080/) that can be accessed via your browser.

### Building

This boiler plate can be triggered to build via Webpack in one of two ways, depending on the intended usage:

 * `npm run build` - builds a production version of the web application to the `./build/` directory
 * `npm run build-dev` - builds a development version of the web application to the `./build/` directory

### Starting

Since this bioler plate utilizes Webpack, it is possible to run a live development server while modifying files located in the `./src/` directory.

 * `npm run start` - starts a webserver using `http-server` which will server the `./build/` directory under http://localhost:8080/
 * `npm run start-dev` - starts a watching devserver using `webpack-dev-server`. This will watch the `./src/` directory and rebuild the website into a temporary cache upon detected changes.