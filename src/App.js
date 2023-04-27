import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home />}/>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
