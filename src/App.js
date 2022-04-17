import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Page/Home/CheckOut/CheckOut';
import Home from './Page/Home/Home/Home';
import Register from './Page/Home/Home/Register/Register';
import RequireAuth from './Page/Home/Home/RequireAuth/RequireAuth';
import Login from './Page/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/service/checkout/:serviceId' element={<CheckOut></CheckOut>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
