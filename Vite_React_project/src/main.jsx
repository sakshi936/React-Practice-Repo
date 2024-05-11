import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return (
//     <div>
//       <h1>Custom App||</h1>
//     </div>
//   )
// }

// const ReactElement ={   
//   type: 'a',
//   props: {
//       href:  'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const ReactEle = React.createElement(    // React create ele method that work when we give a fun as <App/>
//   'a',
//   {href: 'https://google.com',target: '_blank'},
//   'click to visit google'
// )

// const Newele = ( 
// <a href="google.com" target='_blanck'> Visit google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,

//  <MyApp/>

//  <ReactElement/> // ReactEle is an object not a fun so it can't use as <MyApp/> & also render in react has some 
// MyApp()  // we also can execute fun normally 



// Newele

// ReactEle

)
