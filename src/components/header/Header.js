import React ,{useState}from 'react';
import {
  BsFillPersonFill,
  BsBullseye,
  BsTrophyFill,
  BsHouseDoorFill,
  BsFileEarmarkPost,
} from 'react-icons/bs';
import {Navigate} from 'react-router-dom';
import './Header.css'
const Header = () => {
  const [redirect,setRedirect]=useState(false);
  function backToLogin(){
    setRedirect(true);
  }
 if(redirect){
   return(<Navigate to='/login'/>)
 }
 else{ return (
    <div className='main_header_div'>
      <div className='left_sub_header_div'>
        
        <span className='header_span'>
          <BsHouseDoorFill />
          Home
        </span>
      </div>
			<div className='right_sub_div'>
      <span className='header_span'>
        <BsFileEarmarkPost />
        Projects
      </span>
      <span className='header_span'>
        <BsBullseye />
        Goal
      </span>
      <span className='header_span'>
        <BsTrophyFill />
        Skills
      </span>
      <span className='header_span'>
        <BsFillPersonFill />
        Account
      </span>
      <span className='header_span' onClick={backToLogin}>LogOut</span>
			</div>
    </div>
  );}
};
export default Header;
