import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders3-1.jpg",
  "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders1.jpg",
  "https://www.omega-academy.net/wp-content/uploads/2022/02/sliders2-1.jpg",
  // Add more image URLs as needed
];

export default function Carousel() {
  const settings = {
    dots: true,
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
            style={{ width: "100%", height: "35vh" }}
          />
        </div>
      ))}
    </Slider>
  );
}
