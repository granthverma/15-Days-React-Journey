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


## Day 2  Understand The React & Vite Flow And Structure 
 
 
### File Structure in React

1. Pubilc Folder : index.html , images 


a1. index.html file : it just normal html file  , single page application
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



3. Now we talk about src files :

![Alt text](<scr files.png>)


3a. App.js : the App.js file is often a central component where the main structure of your application is defined. This is where you might organize and compose other components to build the overall structure of your user interface.

Here is a simple example of what an App.js file in a React project might look like:

```

// Import necessary modules and components
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Define the App component
// 
function App() {
  return (
    // JSX representing the structure of your application
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;


```


3b.index.js : the index.js file is typically the entry point for rendering your React application into the HTML page. It is used to import the main React component and render it into the DOM. The ReactDOM.render function is commonly used for this purpose.

(name kuch bhi ho skata hai )


Here is a basic example of what an index.js file might look like in a React project:

```

// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming App is your main React component
import './index.css'; // Optionally, import styles

// Render the App component into the root element in the HTML

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    <App />
    
   

);

//const root = name of  fnf
//ReactDOM = react dom its virtual dom of react (tree structure)
//createRoot = create a root 
// document.getElementById = selected the id 
// root.render = render the root 



```



### Create Component In React : 

1. Functional Components: 

```

// function name  start with capital letter
function Hero() {

    return(

        <> //fragment components  its only one component beacause we use 
     
         <h2> Second Components</h2>
         
         <p>  Components are the building blocks of a React application,
             and they can be thought of as reusable, independent pieces of code 
            that encapsulate a specific functionality or UI element.</p>


            <p>

          some imporant rule must you follow   
                1. file name start with capital letter  its for good  coding practice
                2. function name start with capital letter 
                3. when you create a function first letter must in capital letter
                4. export fnf ,default Name 
                5. import in app js 
                6  call in fnf name 
                7. fragment components
                
            </p>
        </>
       

      
    )
    
}


export default Hero 


// export for import in app.js its main componets 

```

### Vite Flow And Structure :

> mostly some as react, there some files we discuss are following:  

![Alt text](<vitefilestructure .png>)


1 .  index.html :  Some as react major diffence is script file direct load in index.html


```
 <body>
    <div id="root"></div>

  <!-- The root div where your React app will be mounted -->

   <script type="module" src="/src/main.jsx"></script>

<!-- The script tag importing your main JavaScript module -->

  </body>

```

1a .there is script file is not loading thats why we use script direct in html file

```
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
<!--  there is script file is not loading thats why we use script direct in html file  -->


```

2 . main.jsx :the main.jsx file serves as the entry point for your application. This file is responsible for rendering the root component of your React app into the DOM. It is often the file specified in the src attribute of the script tag in your HTML file.


```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Render the root component into the root element in the HTML 
// major differnce direct work not holding any root elements 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// .render direct render file 
```

3  App.jsx :App.jsx file as part of your React project, it would typically contain the definition of your main App component. 

```
import { useState } from 'react'
import Zero from './Zero' //Zero is another component 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<h1> Hello Nameste , its My first Vite  React App ✨ </h1>
<h2>  Chai☕️ aur React 💻 || By Hitesh Sir 👨🏻‍🏫 </h2>

<Zero/> // called the compontent ,Other components and content can be added 
    </>
    
     
        
    
  )
}

export default App



```





### Create Component In Vite :

  some as react only file name change .js  to.jsx 




1. file name start with Capital letter ex - Zero.jsx
2. function name also start with capital letter ex - Zero
3. if use more one things in zero file use fragment components because they allow only one compontes
4. export  default zero  when export then you able to import components in main app files 
5. import zero compontes in App.jsx
6. called the compontent in App.jsx file ,Other components and content according to your projects 



```
function Zero(params) {

    return (

        <h1>this is second compontent in jsx </h1>
    )
    
}


export default Zero

```




### second compontent in vite 

![Alt text](<vite second compents.png>)





## Day 3 || Create your own react library and JSX




1.Create a folder (Customreact)

a1.Create two file - index.html and CustomReact.js 


2.Now we talk about index.html


```
<body>
    <div id="root"></div> 
    <!-- name depend on you  -->
 <script src="Customreact.js"></script>
 <!-- create custome js file its directly script come  -->

</body>


```

<div> with the id "root." Additionally, you are including a custom JavaScript file named "Customreact.js" using the <script> tag.



3.CustomReact.js ; in this file we talk about how to create elements and render the files
                    we discuss 2 approach a: basic approach , b: loop approach

                
> all short-notes in code file in hindi for better understanding


```

// basic approach 

function ownRender(reactElements ,thridcontainer) {

// render two things what (kya )aur  where (kha )
// what (kya) -reactElements
// where (kha) -thridcontainer


    // const domELe = document.createElement(reactElements.type)
    // domELe.innerHTML =reactElements.children

    /**
     * 1. store value  in domELe
     * 2. create element in reactElements and type of element
     * 3. access the value by domELe innerHTML  in reactElements ki children value
     */

//     domELe.setAttribute('href' ,reactElements.props.href)
//     domELe.setAttribute('target' ,reactElements.props.target)

//     thridcontainer.appendChild(domELe)
// 


//  by loop -------------

const  domELe =document.createElement(reactElements.type)
domELe.innerHTML = reactElements.children

/**
 * same as direct 
 */
for (const prop in reactElements.props ) {
    if(prop === 'children')continue;
    domELe.setAttribute(prop ,reactElements.props[prop])
    
}

thridcontainer.appendChild(domELe)


}

/**
 * for in loop liya then prop in mein reactElements.props define kiya
 * old mein pahale check karne ke liya  if use kiya karte tha
 * aur check karte tha ki prop agar equal hai child property ki continue karo
 * nahi toh stop kar do 
 * same hai bas name change pahle direact name tha now us hai prop bol rha hai 
 * then [] arry props likha raha hai 
 */


 /**
     * 1. jo element create kiya tha us mein attribute set karna 
     * 2. aue reactElements ki propety ko lena
     * 3. then value get kar thrid container mein appendchild se
     */


const reactElements = {
    type: 'A',
    props :{
        href :'https://granthcodes.com/',
        target : '_blank'
    },
    children: 'Click me to  visit portfolio'
}

/**
 * phale ek element create karo object hai jo ki type set karo imp baat
 * type mein only single value store kar saket ho
 * then whatever property you want us set kar do
 * 
 * what want you show on web in come with child 
 */

const secondContainer = document.querySelector('#root')

ownRender(reactElements ,secondContainer)



/**
 * jaise react mein hota root kaise value store hota hai yha par secondContainer
 * mein store hai aur document ki query selector se root ko select kiya hai 
 * 
 * own render jo create kiya tha wo hai 
 * us mein reactElements - jaise mein sare element hai 
 * secondContainer - jaise mein value store ki hai 
 */




```


### Deep UnderStanding main.jsx and app.jsx


1. In App.jsx we create method so we can create own methods in main.jsx
1a. we directly call fnf but we don't use it not good practice thats why 
    we use <MyApp/> , MyApp()

```
function MyApp() {

  return( 
    <div>
      <h1>Custom App ||| ✨</h1>
    </div>
  )
  
}
 

ReactDOM.createRoot(document.getElementById('root')).render(
  
   

    // MyApp()  fnf hai toh run kiya ja sakate hai but don't follow 
  
)
```

2. tree structure (object ) inject :

its not 

```


// const reactElements = {
//   type: 'A',
//   props :{
//       href :'https://granthcodes.com/',
//       target : '_blank'
//   },
//   children: 'Click me to  visit portfolio'
// }

//direct ho  raha toh pass karte hai , nahi hoga because to ye object hai

```
2a. systax is not right and  we must react rules 


2b . its right way to create the element 

```

const anElement = (
  <a href='https://google.com' target='_blank'> vist gooogle </a>
)

```

3 Evaluate  Expression : We Evaluate value  thriduser in reactelement by using Expression {} 
3a . only final value be pass in this n most don't use any loops
3b we React.createElement method create element , react bible inject them

```
const thriduser = "himanshu ji"

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com' , target: 'blank'}, // target element 
  'click me to visit google by react element', // child
  thriduser //Evaluate  Expression
)


////



ReactDOM.createRoot(document.getElementById('root')).render(
  
    

     reactelement

    
  
)

```


## REACT BEHIND THE SCENES :


<a href="https://github.com/facebook/react/" target="_blank">REACT BEHIND THE SCENES || GITHUB REPO </a> 


## Day 4 || Hello Dosto Day start with Error ❗️❗️❗️❗️❗️



```
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/granthverma/15-Days-React-Journey.git'

```

Kya kare ab Hum ❓❓❓❓❓❓


Pura Internet Par 2 hours invest kar ke baad Solution mile gaya ||
May be Aapko bhi Kaam aa jaye ✅ ✅ ✅...

1.first Step 👣

```
git fetch origin main:tmp

```

1. main:tmp: This part specifies that you want to fetch the changes for the remote main branch and store them locally in a branch named tmp. The format is source:destination, where source is the remote branch, and destination is the local branch where you want to store the changes.


2.Second Step 👣 : So, the command is saying: "Push the changes from my local branch tmp to the remote repository (origin).

```
git push origin tmp

```


3.Third Step 👣 👣 👣 : 

```
git rebase tmp

```

The command git rebase tmp is used to rebase your current branch onto the tmp branch. This means that the commits in your current branch will be moved to the tip of the tmp branch, effectively incorporating the changes from tmp into your branch.


4. Fourth Step :  Congratulations You Solve This Issue  ✨ ✨ ✨

```

git push

```


### Second Issue :   Github contribution only show the activity when we make a new repository ,  commit inside github ????????  

kafi dino se main commit vs code terminal mein karta but git ke contribution mein kuch show nahi hota ye kafi bada issue ho gaya mera liya toh kya kiya jaya   ❓❓❓❓❓❓ 


karna chahiye to kya nahi hota hai toh Internet ki help se hum laga es issue solve karna mein toh solution yha raha 

first step :  Go to into Your github Settings
![Alt text](githubissue.png)

1. check your email (only one email allow  granth@gmail.com)
2.then next step  check : To verify that the configuration has been set correctly, you can use the same git config user.email command as before.
![Alt text](githubemail.png)

```
git config user.email


```

This will output the email address currently associated with your Git commits.


3 .Configure or Change Email Address: If you need to configure or change the email address, use:

```
git config --global user.email "your.email@example.com"


```

Replace "your.email@example.com" with the email address you want to use for your Git commits. The --global option sets this configuration globally for your user, so it will be used for all your Git repositories. If you want to set it only for a specific repository, omit the --global option and run the command within the repository


4. Verify Configuration: To verify that the configuration has been set correctly, you can use the same git config user.email command as before.

```
git config user.email

```
It should now display the updated email address.

### Note:

The email address you configure in Git should match the email address associated with your GitHub or GitLab account if you want your contributions to be linked to your account on those platforms. It's important to use the same email address for your commits that you use on the version control hosting service to ensure proper attribution.

# HOOKS | useState(0) 

basic hooks are following :

1: useState: useState is used to add state to functional components. It returns an array with two elements: the current state value and a function that lets you update it.

## Counter App Project with Assignments 

```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
// set value of counter  useState koi bhi value defaluts value
//two value  first - count
// setcount Second - its fnf is variable updated karne ke liya  man lo yhi main source hai 
  // let helpful hai counter app ke liya 


  const addValue = () => {
    if (counter <100) {
      counter =  counter+1
      setCounter(counter)

      
    } else {
      alert("You've reached the maximum value (100)!");
      
    }
// add value concept easy hai only function lena callback name kuch bhi ho sakta hai 
// assignment mile tha value 100 tk (20 tha but 100 le liya ) ek loop lekar  counter< 100 se ho jaya 
// ek add on alert bhi le liya  value reach then alert message 
  } ;


  const removeValue = () => {

    if (counter > 0) {
      counter =  counter-1
    setCounter(counter)
      
    }  else {
      alert("You've reached the minimum value (0)!");
      
    }
    

    
  } ;

  // some concept like add on 

  
  const ResetValue = () => {
    
    counter = 0 ;
    setCounter(counter)
    
  };
// reset value  counter = 0 le li  now reset hota hai zero aa jayegi 
  return (
    <>
      
      <h1>The-Counter</h1>
      <h2>Counter Value :{counter} </h2>
      <h3> The Counter count the value  0 to 100</h3>


      <button onClick={addValue}>Increment </button>
      
     <button onClick={removeValue}>decrement</button>
      
        
<br/>
      <button onClick={ResetValue}> Reset Value</button> 
    </>
  )
}


// hooks is updated hoga data  , import { useState } from 'react' yhi se aata hooks 

export default App



```

### DAY5 || START DAY-5 WITH READ ABOUT OTHER HOOKS

its not part hitesh sir playlist but we read it 



2. useEffect : useEffect is used to perform side effects in your components, such as fetching data, subscribing to services, or manually changing the DOM.


```
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Perform side effect (e.g., data fetching) here
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
};


```

3. useContext: useContext is used to consume values from a React context.
```

import React, { useContext } from 'react';

const MyContext = React.createContext();

const ComponentUsingContext = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Value from context: {contextValue}</p>
    </div>
  );
};



```








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




