
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Header/Header';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
    // children: [
      
    // ],
  },
 
]);

function App() {
  

  return <div id='app-container'>
    <RouterProvider router={route}/>
  </div>
}

export default App
