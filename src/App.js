import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout, {loader as layoutLoader, action as layoutAction} from './layout/Layout';
import PrdoductDetails, {loader as productDetailLoader, action as productDetailAction} from './pages/ProductDetails';
import CategoryPage, {loader as categoryPageLoader} from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import Login, {action as loginAction, loader as loginLoader} from './pages/Login';
import NotFound from './pages/NotFound';
import ErrorComponent from './components/ErrorComponent';
import CustomerLayout, {loader as customerLayoutLoader} from './layout/CustomerLayout'
import CustAccount, {loader as custAccountLoader} from './pages/customer/CustAccount';
import CustOrders from './pages/customer/CustOrders';
import OpenOrders from './pages/customer/OpenOrders';
import ClosedOrders, {loader as closedOrdersLoader} from './pages/customer/ClosedOrders';
import CustMailbox from './pages/customer/CustMailbox';
import CustWishlist from './pages/customer/CustWishlist';
import CheckoutLayout, {loader as checkoutLayoutLoader} from './layout/CheckoutLayout';
import PersonalInfos, {action as personalInfosAction, loader as personalInfosLoader} from './pages/checkout/PersonalInfos';
import Shipping, {action as shippingAction, loader as shippingLoader} from './pages/checkout/Shipping';
import Payment, {action as paymentAction} from './pages/checkout/Payment';
import { requireAuth } from './utils/requireAuth';
import CheckoutPhase from './pages/checkout/CheckoutPhase';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import SignUp, { action as signUpAction} from './pages/SignUp';
import ProductDetailsSkeleton from './pages/ProductDetailsSkeleton';
import HomeSkeleton from './pages/HomeSkeleton';
import CategoryPageSkeleton from './pages/CategoryPageSkeleton';
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route 
    path='/' 
    element={<Layout />}
    errorElement={<ErrorComponent/>}
    loader={layoutLoader}
    action={layoutAction}
    >
    <Route 
      index 
      element={<Home />}
      loader={homeLoader}
      handle={<HomeSkeleton />}
    />
    <Route
      path='customer'
      loader={customerLayoutLoader}
      element={<CustomerLayout />} 
    >
        <Route 
          index
          element={<CustAccount />}
          loader={custAccountLoader}
        />
        <Route 
          path='orders'
          element={<CustOrders />}
          loader={({request})=>{
            requireAuth(request)
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
            loader={closedOrdersLoader}
          />
        </Route>
        <Route 
          path='mailbox'
          element={<CustMailbox />}
          loader={({request})=>{
            requireAuth(request)
            return null
          }}
        />
        <Route 
          path='wishlist'
          element={<CustWishlist />}
          loader={({request})=>{
            requireAuth(request)
            return null
          }}
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
      path='signup'
      element={<SignUp />}
      action={signUpAction}
    />
    <Route 
      path='category/:category'
      loader= {categoryPageLoader}
      element={<CategoryPage />}
      handle={<CategoryPageSkeleton />}
    />
    <Route 
      path=':category/:id'
      loader={productDetailLoader}
      element={<PrdoductDetails />}
      action={productDetailAction}
      handle={<ProductDetailsSkeleton/>}
      />
    <Route 
      path='checkout'
      element={<CheckoutLayout />}
      loader={checkoutLayoutLoader}
    >
        <Route 
          index
          element={<CheckoutPhase />}
        />
        <Route 
          path='personalInfos'
          element={<PersonalInfos />}
          action={personalInfosAction}
          loader={personalInfosLoader}
        />
        <Route 
          path='shipping'
          element={<Shipping />}
          action={shippingAction}
          loader={shippingLoader}
        />
        <Route 
          path='payment'
          element={<Payment />}
          action={paymentAction}
        />
    </Route>
    <Route
      path='*'
      element={<NotFound />} 
    />
    
      
  </Route>
  <Route
    path='/admin'
    element={<AdminLayout />}
  >
    <Route
      index
      element={<Dashboard />}/>
  </Route>
  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
