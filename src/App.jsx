import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut';
import Certificates from './Components/certificates/Certificates'
import Notfound from './Components/Notfound/Notfound'

function App() {
  const router = createHashRouter([
    { path: '/', element: <LayOut /> , children :[

      { index :true , element: <Home /> },
      {  path: '/home' , element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/certificates', element: <Certificates /> },
      { path: '/contact', element: <Contact /> },
      { path: '/portfolio', element: <Portfolio /> },
    ] },
  
    { path: '*', element: <Notfound /> },


  ])
  return (<>
    <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
