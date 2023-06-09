import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout, {loader as layoutLoader} from './components/Layout';
import PrdoductDetails, {loader as productDetailLoader} from './pages/ProductDetails';
import CategoryPage, {loader as categoryPageLoader} from './pages/CategoryPage';
import Cart from './pages/Cart';
import Login, {action as loginAction} from './pages/Login';
const router = createBrowserRouter(createRoutesFromElements(
  <Route 
    path='/' 
    loader={layoutLoader}
    element={<Layout />}
    errorElement={<h1>An error has occured</h1>}
    >
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
      action={loginAction}
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
