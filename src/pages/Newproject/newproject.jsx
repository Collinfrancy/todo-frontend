import Logo from '../../components/Logo';
import image12 from '../../../public/bck1.jpg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newproject.css';
import customAxios from '../../../utils/customAxios.js';

const Newproject = () => {
  const [input, addinput] = useState({});
  const [values, setValues] = useState([]);
  const [updatebutton, updating] = useState({});
  const [news, newone] = useState({});
  const [a, b] = useState({});
  const navigate = useNavigate();

  const onprojectname = e => {
    b(e.target.value);
  };
  // console.log(a);

  const ontodo = e => {
    addinput({ ...input, todo: e.target.value, checked: false });
  };

  // console.log(input);

  const ongoingClick = () => {
    setValues([...values, input]);
    addinput({ todo: '' });
  };
  // console.log(values);

  const trash = i => {
    console.log(i);
    const updatedValue = [...values];
    const [removedValue] = updatedValue.splice(i, 1);
    setValues(updatedValue);
  };

  const update = i => {
    const updatedValue = [...values];
    const newValue = updatedValue[i];
    addinput(newValue);
    const num = 'done';
    updating(num);
  };

  const onupdateClick = () => {
    setValues([...values, input]);
    addinput({ todo: '' });
  };

  const ondone = () => {
    newone({ title: a, items: [...values] });
  };
  // console.log(news);

  const ok = async () => {
    try {
      await customAxios.post('/user/todo', news);
      // console.log('sett');
      navigate('/user/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newproject">
      <div className="navbar1">
        <Logo></Logo>
      </div>
      <div className="todos">
        <div className="heading">
          <h1>Todo List</h1>
        </div>
        <div className="addtodos">
          <Input
            placeholder="PROJECT NAME"
            className="new1"
            onChange={onprojectname}
          />
          <div className="addtodos1">
            <div className="b">
              <input
                type="text"
                className="new2"
                placeholder="Add todos"
                onChange={ontodo}
                value={input.todo}
              />
            </div>
            <div className="but">
              {updatebutton == 'done' ? (
                <Button onClick={onupdateClick}>UPDATE</Button>
              ) : (
                <Button onClick={ongoingClick}>ADD</Button>
              )}
            </div>
          </div>

          <div className="mainmapping">
            <div className="maping">
              {values.map((item, i) => {
                return (
                  <Card
                    item={item}
                    completed="true"
                    trash={() => {
                      trash(i);
                    }}
                    update={() => {
                      update(i);
                    }}
                  ></Card>
                );
              })}
            </div>

            <div className="mappingbtn">
              {values.length ? (
                <Button className="donebtn" onClick={ondone}>
                  DONE
                </Button>
              ) : (
                ''
              )}
            </div>
          </div>
          <Button onClick={ok} className="finish">
            FINISH
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newproject;
