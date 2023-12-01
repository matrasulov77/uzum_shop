import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";
import carousel_img1 from "../Assets/Pictures/banner1.png";
import carousel_img2 from "../Assets/Pictures/banner2.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (
      <div>
        <Slider {...settings}>
          <Box>
            <Image src={carousel_img1} width={"100%"} height={'400px'}/>
          </Box>
          <Box>
            <Image src={carousel_img2} width={"100%"} height={'400px'}/>
          </Box>
          <Box>
            <Image src={carousel_img1} width={"100%"} height={'400px'}/>
          </Box>
        </Slider>
      </div>
    );
  }
}
