import Carousel from "../../Carousel/Carousel";
import { NavLink } from 'react-router-dom'
import "./HomePage.css";
import logo from '../../assets/newlogo.png'
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
        <NavLink></NavLink>
      </div>
    </div>
  );
}
