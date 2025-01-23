// Header.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogoff } from '../redux/actions/TokenAction';

const Header = () => {
const { token } = useSelector((state) => state.tokenReducer);
  const dispatch=useDispatch();
  const doLogout=()=>{
    dispatch(doLogoff())
  }
  return (
    <header style={headerStyle}>
      <h1>My Website</h1>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/private">Home</Link></li>
          <li><Link to="/private/about">About</Link></li>
          <li><Link to="/private/data">Add Data</Link></li>
          <li><Link to="/private/service">Service</Link></li>
          <li style={{cursor:"pointer"}} onClick={doLogout}>Logout</li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#282c34',
  padding: '10px 20px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  listStyleType: 'none',
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '20px',
};

export default Header;
