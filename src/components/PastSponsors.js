import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PastSponsors = () => {
  const sponsors = [
    { name: 'Sponsor 1', imageUrl: '/files/sponsor/bal.png' },
    { name: 'Sponsor 2', imageUrl: '/files/sponsor/jane.svg.png' },
    { name: 'Sponsor 3', imageUrl: '/files/sponsor/crimson.jpg' },
    { name: 'Sponsor 4', imageUrl: '/files/sponsor/r.png' },
    { name: 'Sponsor 5', imageUrl: '/files/sponsor/qoom.png' },
    { name: 'Sponsor 6', imageUrl: '/files/sponsor/sas.png' },
    { name: 'Sponsor 7', imageUrl: '/files/sponsor/linode.png' },
    { name: 'Sponsor 8', imageUrl: '/files/sponsor/pass.jpeg' },
    { name: 'Sponsor 9', imageUrl: '/files/sponsor/magoosh.png' },
    { name: 'Sponsor 10', imageUrl: '/files/sponsor/mlh.png' },
    { name: 'Sponsor 11', imageUrl: '/files/sponsor/interview-cake.jpg' },
    { name: 'Sponsor 12', imageUrl: '/files/sponsor/taskade.png' },
    { name: 'Sponsor 13', imageUrl: '/files/sponsor/wolfram.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800, // Slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box mt="50px" mx="auto" px={{ base: "20px", md: "150px" }}>
      <Heading as="h2" mb="4" size="s">HISTORY</Heading>
      <Heading as="h2" mb="3" size="md">We're really proud</Heading>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <Box key={index} borderRadius="s" overflow="hidden" px={2}>
            <Image src={sponsor.imageUrl} alt={sponsor.name} maxWidth="150px" maxHeight="150px" objectFit="cover" mb="3" mx="auto" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PastSponsors;
