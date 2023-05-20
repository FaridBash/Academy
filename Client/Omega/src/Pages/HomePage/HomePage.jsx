import Carousel from "../../Carousel/Carousel";
// import { NavLink } from 'react-router-dom';
import "./HomePage.css";
import logo from '../../assets/newlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import {faWarehouse} from '@fortawesome/free-solid-svg-icons'
import {faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons'

// import {faOmega} from '@fortawesome/free-solid-svg-icons'
export default function HomePage() {
  return (
    <div id="homepage-container">
      <div id="slider-container">
        <Carousel />
      </div>
      <div id="opacity-container">
        
      </div>
      <div id="homepage-text">
        <img src={logo} alt="logo" id="homepage-logo"/>
      </div>
    <div id="homepage-boxes">
    <div className="homepage-box">
    <FontAwesomeIcon icon={faWarehouse} beatFade size="2xl" />
   
    <div className="box-text">
      <h3>أوميغا في سطور</h3>
      <h4>...إقرأ المزيد</h4>
    </div>
    </div>
    <div className="homepage-box">
    <FontAwesomeIcon icon={faChalkboardTeacher} beatFade size="2xl" />
    <div className="box-text">
      <h3>دوراتنا</h3>
      <h4>...إقرأ المزيد</h4>
    </div>
    </div>
    <div className="homepage-box">
    <FontAwesomeIcon icon={faPeopleGroup} beatFade size="2xl" />
    <div className="box-text">
      <h3>طاقمنا الأكاديمي</h3>
      <h4>...إقرأ المزيد</h4>
    </div>
    </div>
    </div>



    </div>
  );
}
