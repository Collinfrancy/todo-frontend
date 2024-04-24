import { Route, Routes } from 'react-router-dom';
import UserSignup from './pages/Signup/signup';
import UserLogin from './pages/Login/login';
import Newproject from './pages/Newproject/newproject';
import UserHome from './pages/Home/home';
import Viewdetails from './pages/Viewdetails/viewdetails';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/user/signup" element={<UserSignup></UserSignup>}></Route>
        <Route path="/" element={<UserLogin></UserLogin>}></Route>
        <Route path="/user/home" element={<UserHome></UserHome>}></Route>
        <Route
          path="/user/newproject"
          element={<Newproject></Newproject>}
        ></Route>
        <Route
          path="/user/viewdetails/:id"
          element={<Viewdetails></Viewdetails>}
        ></Route>
      </Routes>
    </>
  );
};
export default App;
