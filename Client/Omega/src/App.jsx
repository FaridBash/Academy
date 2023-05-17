
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Header/Header';
import HomePage from './Pages/HomePage/HomePage';


const route = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [ 
    {
      path: "/",
      element: <HomePage/>
    },
    {
      // path: "/aboutus",
      // element: <Carousel/>
    },
      
    ],
  },
 
]);

function App() {
  

  return <div id='app-container'>
    <RouterProvider router={route}/>
  </div>
}

export default App
