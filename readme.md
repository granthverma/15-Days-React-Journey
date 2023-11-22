# My 15-Day React Journey
Welcome to my 15-day React journey repository! 🚀

Overview

In this repository, I document my learning experience with React over the course of 15 days. As a beginner in React, I embarked on this journey to understand the fundamentals, explore best practices, and build practical projects to solidify my knowledge

What's Inside

.Daily Progress: Each day is a new chapter in my learning journey. I've documented the concepts I covered, challenges faced, and the code I wrote each day.

.Projects: I've included the projects I worked on during this period. From simple components to more complex applications, these projects showcase the evolution of my React skills.

.Resources: Find a curated list of resources that helped me along the way. Whether it's tutorials, articles, or documentation, these resources can be valuable for fellow React enthusiasts.



# Day 1

## 1. Read React documentation and related resources

<a href="https://react.dev/" target="_blank">React documentation</a>


## 2. How To Start Your First Projects 

Read the article to know how to Start Your  Journey !!!
 
<a href="https://react.dev/learn/start-a-new-react-project" target="_blank"> Start React Journey </a>




## 3. Step 1: Create a GitHub Repository :
 To put your project up on GitHub, you will need to create a repository for it to live in.

<a href="https://docs.github.com/en/get-started/quickstart/create-a-repo" target="_blank">How To Create GitHub Repository </a>


##  Git commands for initializing a repository : 
 ````
     
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/granthverma/15-Days-React-Journey.git
  git push -u origin main


 ````

## 4. Understanding the Basics


Certainly! Before you start creating a React app, there are some basic things !!!! :


1. React's Dual Realm:
a : Unleashing Power on the Web with React DOM  💻 


b : Crafting Mobile Magic with React Native 📲 📲


![Alt text](react.png)


2. Managing Packages and Executing Commands for Seamless Development

## a.Node Package Manager (npm): 

 npm comes bundled with Node.js, a JavaScript runtime. It serves as a package manager for JavaScript, allowing developers to easily install, share, and manage dependencies. Whether you're building a web application, a server-side application, or even a command-line tool, npm is an indispensable tool in your JavaScript toolkit 🏗️

## b. Executing Packages with Ease (npx) :
 
" npx" is a package runner tool that comes bundled with npm (Node Package Manager). It was introduced to address the challenge of running packages without installing them globally. Instead of cluttering your global npm space with packages you might only use occasionally, "npx" allows you to run packages directly.
    
## 5. Set up a simple React project using Create React App (CRA).🚀 

1.  Install Node.js and npm 💻:
    Make sure you have Node.js and npm installed on your machine. You can download them from the official website:<a href="https://nodejs.org/en/" target="_blank">Node.js.</a> 

 2. Check Your Node Version :
    Open your terminal or command prompt and run the following command to check your node version :

    ````
    node -v


    ````
 3.  Create a New React App:
     Now can create a new React app by running the following command:

     ````
      npx create-react-app my-first-react-app (name of your app)
     ````

4.  Navigate to Your Project Directory:

     ````
       cd my-first-react-app

     ````

5. Start the Development Server:
   Start the development server with the following command:

   ````
    npm run start
     ````

This command will start the development server and open your new React app in your default web browser. You should see a sample React app with a "Welcome to React" message.

Now you have successfully launched your first React project! You can start editing the files in the "src" directory to build your React components and customize your application.


## 6 . Understanding React Scripts in package.json

When you scaffold a new React project using tools like create-react-app, you'll notice a set of predefined scripts in the package.json file. These scripts are integral to managing and running various aspects of your React application.


1. "start"

   The "start" script is your go-to command during the development phase. When you run npm start in the terminal, this script kicks off the development server, allowing you to preview your React application in the browser. It enables hot-reloading, meaning any changes you make to your code will instantly reflect in the browser without requiring a manual refresh.

   ```
       "start": "react-scripts start",
   ```

 2. "build"
    
    As your React application progresses and you prepare to deploy it to a production environment, the "build" script comes into play. Executing npm run build triggers this script, which generates a production-ready build of your application. This build is optimized for performance, and the output is typically a set of static files that can be easily served by a web server.

  ```
      "build": "react-scripts build"
       
   ```

 3. "test"

    Testing is a crucial aspect of any software development process, and the "test" script facilitates running your application's test suite. Executing npm test launches the test runner, allowing you to verify that your components and functions behave as expected. This script is especially valuable in maintaining the reliability and integrity of your codebase.

  ```

    "test": "react-scripts test"
   
   ```
    

 4. "eject"

   While React strives to provide a streamlined and opinionated development experience, there may be instances where you need more control over your project configuration. The "eject" script allows you to "eject" from the default configuration provided by create-react-app, exposing all the configuration files (such as webpack and Babel) so you can customize them according to your needs.

  ```

   "eject": "react-scripts eject"

 ```

 Important Note: Ejecting is a one-way operation, so it's advisable to use this script with caution and understand the implications.



In conclusion, these scripts in the "scripts" section of your package.json file serve as powerful tools for developing, testing, building, and customizing your React application. By leveraging these scripts effectively, you can streamline your development workflow and ensure a smooth deployment process.



***Important Command *** 


1. cd .:
```
cd: Change directory command.

.: Refers to the current director

```

So, cd . essentially means "change to the current directory," which is a no-op (no operation) as you are already in that directory.

2.ls:

```
 ls 
 ls: List the contents of the current directory.

 after ls  package.json must visible to start

```


### Congratulations ✨ Your First React App

![Alt text](ReactfirstApp.png)




# VITE 

Now Days We Use Vite Beacause Fast compilation less Time Compare To React-create -app


### Getting Started Vite || Read Vite documentation 


<a href="https://vitejs.dev/guide/" target="_blank">  Getting Started Vite </a>

 ## Start Your First Vite Project

1. First Step

```
npm create vite@latest

```

2. Second Step 👣 👣.

Project Name :  Whatever You Want Your Project Name

```
? Project name: › vite-project

my-first-project

```

3. Third Step 👣 👣.

Select a framework:  Drop Down The 

```

    Vanilla
    Vue
    React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others


    Select React


```
4. Fourth Step 👣 👣.

Select a variant: › - Use arrow-keys. Return to submit.
        



```
 TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC


    Select JavaScript

```

##  Here are the steps to run a Vite app

1. Open your terminal or command prompt.

2. Change the directory to "01vitebasic":

```
 cd 01vitebasic

 //Refers to the current director


 README.md       index.html      package.json    public          src             vite.config.js

 // make sure package.json  is present

```

3.Install the necessary dependencies using npm:

```
npm install


// node modules is missing to install missing package run this command


```


4. Start the development server with the following command:

```
  npm run dev
 

```


### Congratulations ✨ Your First Vite App

> Important Notes :clean the defults Scr files and code

![Alt text](vitefirstapp.png)


## Day 2  Understand The React Flow And Structure 
 
 
### File Structure 

1. Pubilc Folder : index.html , images 


a1. index.html file : it just normal html file 
![Alt text](<pubilefile and other files.png>)
```
 <noscript>You need to enable JavaScript to run this app.</noscript>

 // its basically  means that if a user has JavaScript disabled in their browser, they will see the message "You need to enable JavaScript to run this app."
 <div id="root"></div>  

 // id name its depend on you whatever name you want !!!



```
> This is the entry point of your React application, and it's the place where the virtual DOM is attached to the actual DOM, allowing React to manage the UI updates efficiently. The root element is typically defined in the ReactDOM.render() function call in your JavaScript code

b1. manifest.json : The manifest.json file is a standard file used in web development to provide metadata and configuration details about a web application. It is commonly associated with Progressive Web Apps (PWAs) and is used to define various properties such as the application's name, icons, theme colors, and other settings.


c1. robots.txt : The robots.txt file is a text file placed on a website's server to provide instructions to web crawlers or robots about how to interact with the site's pages. It's a part of the Robots Exclusion Standard and is used to control which areas of a site should be crawled or not crawled by search engines and other web robots


2. Other files : 

2a. .gitignore:  a .gitignore file to specify files and directories that should be ignored by Git, preventing them from being tracked in your version control system. Here's a basic example of a .gitignore file for a typical React project:


2b. package-lock.json: In a React project (or any Node.js project), the package-lock.json file is automatically generated and maintained by the Node Package Manager (npm) or Yarn. It serves a crucial role in ensuring the consistency of installed packages across different environments and during different installations.


3c.  package.json :The package.json file is a metadata file for a Node.js project, and it is used to manage the project's dependencies, scripts, and other configurations. In a React project, the package.json file is a key component for managing the project's dependencies, scripts, and various settings.

4d. Readme.md : The README.md file typically serves as the primary documentation for your project, providing information about its purpose, how to set it up, how to use it, and any other relevant details for developers or contributors









makedown comment future refencence


# H1
## H2
### H3


**bold text**

*italicized text*


> blockquote



1. First item
2. Second item
3. Third item




- First item
- Second item
- Third item



`code`



	---



  ![alt text](image.jpg)

  [title](https://www.example.com)



  	Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.


- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media