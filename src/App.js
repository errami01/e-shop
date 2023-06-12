import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout, {loader as layoutLoader} from './layout/Layout';
import PrdoductDetails, {loader as productDetailLoader} from './pages/ProductDetails';
import CategoryPage, {loader as categoryPageLoader} from './pages/CategoryPage';
import Cart from './pages/Cart';
import Login, {action as loginAction} from './pages/Login';
import NotFound from './pages/NotFound';
import ErrorComponent from './components/ErrorComponent';
import CustomerLayout from './layout/CustomerLayout'
import MyAccount from './pages/MyAccount';
const router = createBrowserRouter(createRoutesFromElements(
  <Route 
    path='/' 
    loader={layoutLoader}
    element={<Layout />}
    errorElement={<ErrorComponent/>}
    >
    <Route 
      index 
      element={<Home />}
      loader={homeLoader}/>
    <Route
      path='customer'
      element={<CustomerLayout />} 
    >
        <Route 
          index
          element={<MyAccount />}
        />

    </Route>
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
      path='category/:category'
      loader= {categoryPageLoader}
      element={<CategoryPage />}
    />
    <Route 
      path=':category/:id'
      loader={productDetailLoader}
      element={<PrdoductDetails />}
      />
    <Route
      path='*'
      element={<NotFound />} 
    />
    
      
  </Route>
 
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
