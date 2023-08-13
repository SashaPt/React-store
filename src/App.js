import './App.css';
import { BestSellers } from './BestSellers';
import { Header } from './Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Product } from './Product';

const router = createBrowserRouter([
  {
    path: "/React-store/",
    element: <BestSellers/>,
  },
  {
    path: "product/:productId",
    element: <Product/>,
},
]);

function App() {
  return <div className='appContainer'>
    <Header/>
    <hr className='divider'/>
    <RouterProvider router={router} />
    
  </div>;
}

export default App;
