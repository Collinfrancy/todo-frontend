import { useEffect, useState } from 'react';
import customAxios from '../../../utils/customAxios';
import './home.css';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [onlisting, onlistingtodos] = useState([]);
  const navigate = useNavigate();

  const gettodos = async () => {
    const response = await customAxios.get('/user/listing');
    onlistingtodos(response.data);
  };

  useEffect(() => {
    gettodos();
  }, []);
  // console.log(onlisting);

  const onviewdetails = async id => {
    navigate(`/user/viewdetails/${id}`);
  };

  const onClickproject = () => {
    navigate('/user/newproject');
  };

  return (
    <div className="mainhome">
      <Logo onClick={onClickproject} completed="true"></Logo>
      <div className="todolistin">
        {onlisting &&
          onlisting.map((item, i) => {
            return (
              <div className="mm">
                <h3>Project Name: </h3>
                <h3 className="reg">{item.title}</h3>
                <h3> Number Of Todos: </h3>
                <h3 className="reg">{item.items.length}</h3>
                <h3> Created At :</h3>
                <h3 className="reg">{item.createdAt}</h3>
                <Button
                  onClick={i => {
                    onviewdetails(item._id);
                  }}
                >
                  view Details
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
