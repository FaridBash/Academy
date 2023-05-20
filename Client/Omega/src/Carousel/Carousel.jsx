import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const images = [
//   "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders3-1.jpg",
//   "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders1.jpg",
//   "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders2-1.jpg",
//   // Add more image URLs as needed
// ];
const images = [
  "https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1548504773-429e84f586d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  "https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
  // Add more image URLs as needed
];

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    nextArrow: null,
    prevArrow: null,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
         
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "92vh"}}
            />
     
        </div>
      ))}
    </Slider>
  );
}
