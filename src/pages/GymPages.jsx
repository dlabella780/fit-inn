import React from 'react'
import "./GymPages.css"
import { FcCancel } from 'react-icons/fc';
import { FaRestroom } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaDumbbell } from 'react-icons/fa';
import { IoBarbellSharp } from 'react-icons/io5'; 
import { GiWeightLiftingUp } from 'react-icons/gi'; 
import { Typography, Button, Box, Container } from "@material-ui/core";
import { Link, NavLink} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sampleImage from '../components/ViewGym/gym1.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BookForm from '../components/BookForm/BookForm';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Sink',
  },
];


export const GymA = () => {
  return (
    <div>                                                                                                                  
        <div className='gym-name'>
            <h2>Gym A</h2>
            <FaStar /> 5 Location
        </div>
        
        <Container>
        <Box sx={{ width: 600, height: 400, overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={2} gap={8}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </Box>
        </Container>

        <h2 className='about-gym'>About Gym</h2>
        <div className='info-about'>
            <h3>
            <FaDumbbell /> Dumbell
            <br></br>
            <IoBarbellSharp /> Barbell
            <br></br>
            <GiWeightLiftingUp /> Squat machine
            <br></br>
            <FcCancel /> No pet allowed
            <br></br>
            <FaRestroom /> Restroom  available 
            </h3> 
        </div>

        <BookForm />

        {/* <div className='sliders'>
        <Carousel>
            <img src='/components/ViewGym/gym1.jpg' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
          </Carousel>
        </div> */}

        {/* <div className='product-pro'>
          <h1 className='about-gym'>
            About the gym
            <br></br>
            <FaDumbbell /> Dumbell
            <br></br>
            <IoBarbellSharp /> Barbell
            <br></br>
            <GiWeightLiftingUp /> Squat machine
            <br></br>
            <FcCancel /> No pet allowed
            <br></br>
            <FaRestroom /> Restroom  available 
          </h1> 
        </div> */}

        {/* <div className='booking-form'>
          <h1 className='title-book'>19.99$/month <FaStar /> 5</h1>
          <form className="date-form">   
            <h2>Date Joined</h2>     
            <input           
                type="text"          
                name='date'          
                placeholder='MM/DD/YYYY'/>         
          </form>
          <form className="duration-form">   
            <h2>Duration</h2>     
            <input           
                type="text"          
                name='duration'          
                placeholder='How long'/>         
          </form>
          <form className="quantity-form">   
            <h2>Quantity</h2>     
            <input           
                type="text"          
                name='amount'          
                placeholder='0'/>         
          </form>

            <Button className='button-book' 
            component={Link} to="/confirmed" 
            variant="contained" color="primary">
              Book
            </Button>
        </div> */}

        {/* <div className='sliders'>
          <Carousel>
            <img src='https://www.californiafamilyfitness.com/hubfs/2021/2021%20Indoor%20Gym%20Page%20Photos/MDT/Midtown_Freeweights.jpg' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
            <img src='https://via.placeholder.com/150' alt='imagem' title='imagem' />
          </Carousel>
        </div> */}
    </div>
  )
}

export const GymB = () => {
    return (
      <div>                                                                                                                  
          Gym B
      </div>

      
    )
  }

  
