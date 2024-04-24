import Logo from '../../components/Logo';
import image11 from '../../../public/food.jpg';
import Buttonn from '../../components/Button';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import customAxios from '../../../utils/customAxios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    image: '',
  });
  const onChange = (e, key) => {
    setSignUp({ ...signUp, [key]: e.target.value });
  };
  console.log(signUp);
  const gotoLogin = () => {
    navigate('/');
  };

  const postSignUp = async () => {
    try {
      await customAxios.post('/user/signup', signUp);
      toast.success('Signup successfull, please login', {
        onClose: () => {
          gotoLogin();
        },
        autoClose: 1000,
      });
    } catch (err) {
      toast.error('Email or password incorrect');
    }
  };

  const onUpload = e => {
    if (e.file && e.file.response) {
      setSignUp({ ...signUp, image: e.file.response.url });
    }
  };
  return (
    <div className="main2">
      <ToastContainer />
      <div className="navbar1">
        <div className="left1">
          <Logo></Logo>
        </div>
      </div>
      <div className="main1">
        <div className="image1">
          <img src={image11} alt="no image found" />
        </div>

        <div className="signup-card">
          <h1>SignUp</h1>
          <p>Are You a new user, enter every fields</p>
          <Input placeholder="Name" onChange={e => onChange(e, 'name')} />
          <Input placeholder="Email" onChange={e => onChange(e, 'email')} />
          <Input
            placeholder="Password"
            type="Password"
            onChange={e => onChange(e, 'password')}
          />

          <Input
            placeholder="Confirm Password"
            type="Password"
            onChange={e => onChange(e, 'confirmPassword')}
          />
          <div className="image56">
            <Upload
              name="file"
              action="http://localhost:4444/upload/image"
              onChange={onUpload}
            >
              <Button icon={<UploadOutlined />}>Click to Upload Image</Button>
            </Upload>
          </div>

          <div className="btn-container">
            <Buttonn onClick={postSignUp}>SignUp</Buttonn>
          </div>
          <p className="login-link">
            Already registered? <span onClick={gotoLogin}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
