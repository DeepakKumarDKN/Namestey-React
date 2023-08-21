### What is NPM ?
```
NPM is something which manages our packages, it is the standard repositry for all the packages. 
NPM doesnot stand for Node Package Manager because no where in the documentation it is written 
that NPM Stands for node package manager but yes its works as a node package manager.

```
### What is Parcel/Webpack and why do we need it ?
```
Both Parcel and Webpack both are the Bundlers which bundels our App it packages our app perfectly 
so that it can be shipped to production both the bundlers do the same work. The Webpack is slower 
as compared to the Parcel.

We Need it because it does a lot of things for us behind the scenes  such as minifying, optimizing, 
bundling, host our file,it cleans our code etc etc. Parcel build's a server for us which 
support Hot Module Replacement that mean as soon as we do some changes in our code file it 
quickly do the changes rebuilds it and send it to the browser 

It is very Easy as Compared to the Webpack because it doesnot need configuration. Zero Configuration

A bundler is able to compress our code.

It does the minification by saving the longer one variable in the shorter ones to save some space.
for example doctor is repleced with d.

Make your code as small as possible.

If we have a function that is never used, it will detect that and remove that particular function 



```
### What is the diffrence between  dependencies and devDependencies ?

```
Both dependencies and devDependencies are the are the json objects both contain the name 
and version of the packages which are needed for application development.
dependencies are the normal dependencies which required in runtime to install 
dependencies we can just write 

npm install package_name

devDependencies also contain the name and version of the project which are required only 
for development purposes, to install the devDependencies we can just write 

npm install -D package_name
```
### What is npx ?
```
npx mean Node Packgage Execute. it helps in executing, it comes along with npm 
i mean when we install npm then automatically npx will get installed. 
It is a Node Package runner that can execute any package from npm 
registry wit+hout even installing it that package.
```

### what is the diffrence between package.json and package-lock.json
```
Both are the important files of our project 

package.json:- 

1. It is the core file of any project
2. package.json is something we will get when we will bring npm to our project. 
3. package.json keeps some meta data about our project like name, version, description , 
license information not only the meta data it also keep track of the the packages 
we have installed in our project for example i have installed Parcel Bundler in our project. 
4. so its keeps the data about what version of bundler we are using whether 
we are using as normal dependency or as devDependency.

5. it can be created by using npm init and as well as by writting it manually.
        npm init 

package-lock.json:-

1. it can be created by npm install 
2. package-lock.json basically it lock the version/ dependencies.
3. Keeps the track of the exact version.
4. it is located inside the node_modules as well as inside the root directory

```

### What is Hot Module Replacement ?
```
It is one of the super powers we get through parcel. Parcel does this thing for us 
it's mean if we are doing any changes to any file or to any module then it will 
keep the track of each and every files and automatically it does the updation apply those 
changes  during the runtime  and then automatically update the browser without refreshing the 
whole page.

```

### What is Tree Shaking ?
```
removing the unwanted things from the code. Three shaking is the best way to reduce the size of the 
bundle and improve performance.

It is a concept by which we can eliminate the Dead Code or unused code from our project.

when it comes to building an optimized codebase Tree Shaking is must required as it can 
reduce the bundle seize of the application. The packages wgich we have installed or the dependencies 
which we have installed in our application can result in laggy performance application it can make slow

The reason is because most of the packages we have installed  we don't really neeed all the packages 
we need only a few things just a small part of the bundle for example installing parcel bundle in our 
application 

when we go to the node modules we can see that Parcel have installed a lot of things but still
we dont need all of them we just need a few of them 
```
### List down your 5 super powers of parcel and describe any 3 of them in your own words ?

1. Hot Module Replacement
2. File Watching
3. Tree Shaking
4. Bundling
5. Compressing
`
```  
Hot Module Replacement
-----------------------
Parcel does this thing for us 
it's mean if we are doing any changes to any file or to any module then it will 
keep the track of each and every files and automatically it does the updation apply those 
changes  during the runtime  and then automatically update the browser without refreshing the 
whole page.

File Watching
--------------
it will tell us in which file we are doing the change not only file in which module i hae done the changes 
with the helo of fileWatcher. Filewatchar is written in c++

so if wehave done any changes to index.html then due to the File Watcher it will get to know that yes some changes are being made
in the index.html and all these are being done by parcel these are one of the pluspoint of using parcel Bundler.

Tree Shaking
------------
It is a concept by which we can eliminate the Dead Code or unused code from our project.

when it comes to building an optimized codebase Tree Shaking is must required as it can 
reduce the bundle seize of the application. The packages which we have installed or the dependencies 
which we have installed in our application can result in laggy performance application it can make slow

```
### What is .gitignore ? What should we add and not add into git ?

```
This tells us what should we add into our project and what to not. if we want that this is a very long file 
and there is no need of adding this one to our project because it may takes a lot of space so we can add those 
particular files into our .gitignore file.

for example:
lets talk about node modules no need of adding node_modules into our git repositry so i will obviously make a 
.gitignore file and will add node_modules into it but not only node_modules which ever file we think that is 
not necessary we can add those files into .gitignore
```

### what is node_modules is it a good idea to push that into git ?

```
node_modules is a collection of packages with its dependencies, its just like a database it contain the actual data of the 
dependencies that our project need. 

we can find a lot of packages inside it/ modules inside it, suppose we are using some module and by mistake we delete 
the node_modules folder we will get an error because it will not be able to locate the modules we have imported in our project. 

when we install something (npm install) then it will download those things from the web and copied it into the node_modules
folder and we can use them by importing them. 

no it's not a good idea to push that into git because we can get the node modules autopmatically only by typing the 
command npm install and its is also a very large file so its will take a lot of space so its not required.
```