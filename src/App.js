import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout from './components/Layout';
import PrdoductDetails, {loader as productDetailLoader} from './pages/ProductDetails';
import CategoryPage, {loader as categoryPageLoader} from './pages/CategoryPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route 
      index 
      element={<Home />}
      loader={homeLoader}/>
    <Route 
      path='cart'
      element={<Cart />}
      />
    <Route 
      path='login'
      element={<Login />}
      />
    <Route 
      path=':category'
      loader= {categoryPageLoader}
      element={<CategoryPage />}
    />
    <Route 
      path=':category/:id'
      loader={productDetailLoader}
      element={<PrdoductDetails />}
      />

    
      
  </Route>
 
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
