import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout, {loader as layoutLoader} from './layout/Layout';
import PrdoductDetails, {loader as productDetailLoader} from './pages/ProductDetails';
import CategoryPage, {loader as categoryPageLoader} from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import Login, {action as loginAction, loader as loginLoader} from './pages/Login';
import NotFound from './pages/NotFound';
import ErrorComponent from './components/ErrorComponent';
import CustomerLayout, {loader as customerLayoutLoader} from './layout/CustomerLayout'
import CustAccount, {loader as myAccountLoader} from './pages/customer/CustAccount';
import CustOrders from './pages/customer/CustOrders';
import OpenOrders from './pages/customer/OpenOrders';
import ClosedOrders from './pages/customer/ClosedOrders';
import CustMailbox from './pages/customer/CustMailbox';
import CustWishlist from './pages/customer/CustWishlist';
import CheckoutLayout from './layout/CheckoutLayout';
import PersonalInfos from './pages/checkout/PersonalInfos';
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
      loader={customerLayoutLoader}
      element={<CustomerLayout />} 
    >
        <Route 
          index
          element={<CustAccount />}
        />
        <Route 
          path='orders'
          element={<CustOrders />}
        >
          <Route
            index
            element={<OpenOrders />}
          />
          <Route
            path='closed' 
            element={<ClosedOrders />}
          />
        </Route>
        <Route 
          path='mailbox'
          element={<CustMailbox />}
        />
        <Route 
          path='wishlist'
          element={<CustWishlist />}
          loader={myAccountLoader}
        />

    </Route>
    <Route 
      path='cart'
      element={<CartPage />}
      />
    <Route 
      path='login'
      action={loginAction}
      loader={loginLoader}
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
      path='checkout'
      element={<CheckoutLayout />}
    >
      <Route 
        index
        element={<PersonalInfos />}
      />
    </Route>
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
