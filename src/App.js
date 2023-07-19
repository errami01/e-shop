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
import CheckoutLayout, {loader as checkoutLayoutLoader} from './layout/CheckoutLayout';
import PersonalInfos, {action as personalInfosAction} from './pages/checkout/PersonalInfos';
import Shipping, {action as shippingAction} from './pages/checkout/Shipping';
import Payment from './pages/checkout/Payment';
import { requireAuth } from './utils/requireAuth';
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
          loader={()=>{
            requireAuth()
            return null
          }}
        />
        <Route 
          path='orders'
          element={<CustOrders />}
          loader={()=>{
            requireAuth('/orders')
            return null
          }}
        >
          <Route
            index
            element={<OpenOrders />}
          />
          <Route
            path='closed' 
            element={<ClosedOrders />}
            loader={()=>{
              requireAuth('/closed')
              return null
            }}
          />
        </Route>
        <Route 
          path='mailbox'
          element={<CustMailbox />}
          loader={()=>{
            requireAuth('/mailbox')
            return null
          }}
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
      loader={checkoutLayoutLoader}
    >
        <Route 
          index
          element={<PersonalInfos />}
          action={personalInfosAction}
        />
        <Route 
          path='shipping'
          element={<Shipping />}
          action={shippingAction}
        />
        <Route 
          path='payment'
          element={<Payment />}
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
