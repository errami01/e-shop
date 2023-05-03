import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home, {loader as homeLoader} from './pages/Home'
import Layout from './components/Layout';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route 
    index 
    element={<Home />}
    loader={homeLoader}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
