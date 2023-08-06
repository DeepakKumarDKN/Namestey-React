### What is NPM ?
```
NPM is something which manages our packages, it is the standard repositry for all the packages. NPM doesnot stand for Node Package Manager because no where in the documentation it is written that NPM Stands for node package manager but yes its works as a node package manager.

```
### What is Parcel/Webpack and why do we need it ?
```
Both Parcel and Webpack both are the Bundlers which bundels our App it packages our app perfectly so that it can be shipped to production both the bundlers do the same work. The Webpack is slower as compared to the Parcel.

We Need it because it does a lot of things for us behind the scenes  such as minifying, optimizing, bundling, host our file,it cleans our code etc etc. Parcel build's a server for us which support Hot Module Replacement that mean as soon as we do some changes in our code file it quickly do the changes rebilds it and send it to the browser 

It is very Easy as Compared to the Webpack because it doesnot need configuration. Zero Configuration

```
### What is the diffrence between  dependencies and devDependencies ?

```
Both dependencies and devDependencies are the are the json objects both contain the name and version of he packages which are needed for application development.

dependencies are the normal dependencies which required in runtime to install dependencies we can just write 

npm install package_name

devDependencies alo contain the name and version of the project which are required only for development purposes, to install the devDependencies we can just write 

npm install -D package_name
```
### What is npx ?
```
npx mean Node Packgage Execute. it helps in executing, it comes along with npm i mean when we install npm then automatically npx will get installed. It is a Node Package runner than can execute any package from npm registry wityhout even installing it that package.
```

### what is the diffrence between package.json and package-lock.json
```
Both are the important files of our project 

package.json:- 

1. It is the core file of any project
2. package.json is something we will get when we will bring npm to our project. 
3. package.json keeps some meta data about our project like name, version, description , license information not only the meta data it also keep track of the the packages we have installed in our project for example i have installed Parcel Bundler in our project. 
4. so its keeps the data about what version of bundler we are using whether we are using as normal dependency or as devDependency.

5. it can be created by using npm init and as well as by writting it manually.
        npm init 

package-lock.json:-

1. it can be created by npm install 
2. package-lock.json basically it lock the version/ dependencies.
3. Keeps the track of the exact version.
4. it is located inside the node_modules as well as inside the root directory

```