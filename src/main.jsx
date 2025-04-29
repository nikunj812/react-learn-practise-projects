/********* Switch, DiceGame, WeightConverter, Light Project **********/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/********* PortFolio Demo **********/

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
// import Home, { homeConsole } from './components/PortFolio/Home/Home'
// import Portfolio from './Portfolio'
// import Projects, { projectsConsole } from './components/PortFolio/Projects/Projects'
// // import App from './App.jsx'

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Portfolio />,
// //     children: [
// //       {
// //         path: '',
// //         element: <Home />
// //       },
// //       {
// //         path: '/projects',
// //         element: <Projects />
// //       }
// //     ]
// //   }
// // ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='' element={<Portfolio />}>
//       <Route 
//         loader={homeConsole}
//         path='' element={<Home />} />
//       <Route 
//       loader={projectsConsole}
//       path='projects' element={<Projects />} />
//     </Route>
//   )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )
