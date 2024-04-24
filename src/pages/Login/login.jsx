import Logo from '../../components/Logo';
import image11 from '../../../public/todoimage.jpg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import customAxios from '../../../utils/customAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const onChange = (e, key) => {
    setLogin({ ...login, [key]: e.target.value });
  };
  console.log(login);
  const gotoSignUpPage = () => {
    navigate('/user/signup');
  };
  const gotoHomePage = () => {
    navigate('/user/home');
  };

  const postLogin = async () => {
    try {
      const response = await customAxios.post('/user/login', login);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log(response.data);

      toast.success('Login successfull, Welcome back user', {
        onClose: () => {
          gotoHomePage();
        },
        autoClose: 1000,
      });
    } catch (e) {
      toast.error('Email or password incorrect');
    }
  };

  return (
    <div className="main2">
      <ToastContainer />
      <div className="navbar1">
        <Logo></Logo>
      </div>
      <div className="main1">
        <div className="image1">
          <img src={image11} alt="no imagee" />
        </div>
        <div className="login-card">
          <h1>Log in</h1>
          <p>Enter email and Password of User</p>
          <Input placeholder="Email" onChange={e => onChange(e, 'email')} />
          <Input
            placeholder="Password"
            type="Password"
            onChange={e => onChange(e, 'password')}
          />
          <div className="btn-container">
            <Button onClick={postLogin}>Login</Button>
          </div>
          <p className="signup-link">
            Are you a new User ?<span onClick={gotoSignUpPage}>Join now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
