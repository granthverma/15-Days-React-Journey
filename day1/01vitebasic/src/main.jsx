import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {

  return( 
    <div>
      <h1>Custom App ||| ✨</h1>
    </div>
  )
  
}

// const reactElements = {
//   type: 'A',
//   props :{
//       href :'https://granthcodes.com/',
//       target : '_blank'
//   },
//   children: 'Click me to  visit portfolio'
// }

// direct ho  raha toh pass karte hai  nahi hoga beacause ye object hai 
//systax right nahi hai  
// method hai kya argument


const anElement = (
  <a href='https://google.com' target='_blank'> vist gooogle </a>
)

const thriduser = "himanshu ji"

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com' , target: 'blank'},
  'click me to visit google by react element',
  thriduser
)


// there render from react 





ReactDOM.createRoot(document.getElementById('root')).render(
  
    //  <App />

    // <anElement/>

     reactelement

    // MyApp()  fnf hai toh run kiya ja sakate hai but don't follow 
  
)


/**
 * App.jsx ek function hai toh hum bhi funcation create kar sakte hai
 * MyApp name aur us call leta hai hum
 * behind the scenes jsx wale par parsing into tree structure 
 * 
 */