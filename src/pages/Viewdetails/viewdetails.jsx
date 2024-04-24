import { useEffect, useState } from 'react';
import customAxios from '../../../utils/customAxios';
import Logo from '../../components/Logo';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { Checkbox } from 'antd';
import Button from '../../components/Button';
import './viewdetails.css';

const Viewdetails = () => {
  const { id } = useParams();
  const [details, setdetails] = useState([]);
  const navigate = useNavigate();
  const viewfulldetails = async () => {
    const response = await customAxios.get(`/user/viewdetails/${id}`);
    setdetails(response.data);
  };

  useEffect(() => {
    viewfulldetails();
  }, []);
  //   console.log(details);

  const oncheckbox = id => {
    console.log(id);
  };
  const onhomebut = () => {
    navigate('/user/home');
  };

  return (
    <div className="viewdetails">
      <Logo></Logo>
      <div className="viewdetails1">
        <div className="head">
          <h1 className="underline">{details.title}</h1>
        </div>

        <div className="checking">
          <div className="left">
            <div className="todohead">
              <h1 className="underline">TO DO</h1>
            </div>
            {details.items &&
              details.items.map((item, i) => {
                console.log(item);

                return item.checked == false ? (
                  <Checkbox
                    onClick={() => {
                      oncheckbox(item._id);
                    }}
                  >
                    {item.todo}
                  </Checkbox>
                ) : (
                  ''
                );
              })}
          </div>

          <div className="right">
            <div className="todohead">
              <h1 className="underline">COMPLETED</h1>
            </div>
            {details.items &&
              details.items.map((item, i) => {
                console.log(item);

                return item.checked == true ? (
                  <Checkbox
                    onClick={(e, i) => {
                      oncheckbox(e, i);
                    }}
                  >
                    {item.todo}
                  </Checkbox>
                ) : (
                  ''
                );
              })}
          </div>
        </div>
        <Button className="viewdetailsbut" onClick={onhomebut}>
          DONE
        </Button>
      </div>
    </div>
  );
};
export default Viewdetails;
