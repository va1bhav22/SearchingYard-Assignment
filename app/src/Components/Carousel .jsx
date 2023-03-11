import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/action/action';
import Slider from 'react-slick';

const Carousel = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
const d=data.data
  useEffect(() => {
    dispatch(fetchData(5)); // fetch 5 movies from the API
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider    {...settings}>
      {d.results?.map(ele => (
        <div key={ele.id}>
          <h3>{ele.title}</h3>
          {/* <img src={ele.image} alt={movie.title} /> */}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
