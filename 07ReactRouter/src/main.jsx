import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/pages/Layout.jsx'
import Home from './components/organisms/Navbar/Home.jsx'
import About from './components/organisms/Navbar/About.jsx'
import Contact from './components/organisms/Navbar/Contact.jsx'
import User from './components/organisms/Navbar/User.jsx'
import './index.css'
import Github, { GithubInfoLoader } from './components/organisms/Navbar/Github.jsx'

// one way 
// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout/>,
//       children: [
//         {path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "Contact",
//           element: <Contact/>
//         }
//       ]
//     }
// ])

// another way 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route loader={GithubInfoLoader} path="github/" element={<Github/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>,
)
