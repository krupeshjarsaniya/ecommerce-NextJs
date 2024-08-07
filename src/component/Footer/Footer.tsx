'use client'
import React, { FC } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-change'>
        <Container>    
        <Row className='py-4'>
            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-2 mt-2">
                <h6>JEWELRY</h6>

                <p className='mt-3'>Time less craftsmanship, contemporary elegance. Discover our curated collections and express your individuality with every exquisite piece, reflecting your style and grace</p>

                <div className='d-flex justify-content-between w-75'>

                    <div className='rounded-circle p-2 d-flex justify-content-center align-item-center bg-white'>
                <FaFacebookF />
                </div>

                <div className='rounded-circle p-2 d-flex justify-content-center align-item-center bg-white'>
                <FaTwitter />
                </div>

                <div className='rounded-circle p-2 d-flex justify-content-center align-item-center bg-white'>
                
                <FaLinkedinIn />
                </div>

                <div className='rounded-circle p-2 d-flex justify-content-center align-item-center bg-white'>
                <FaInstagram />
                </div>

                <div className='rounded-circle  p-2 d-flex justify-content-center align-item-center bg-white'>
                <FaPinterestP />
                </div>

                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-2 mt-2">
                <h6>Contact Us</h6>

                <ul className='mt-3 ps-1 list-unstyled'>
                    <div className='d-flex align-items-center mt-2 mb-3'>
                    <MdEmail size={19} /><li className=' mx-2'>support@example.com</li>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                    <FaPhoneAlt /><li className='mx-2'>+120 279 532 13</li>
                    </div>
                    <div className='d-flex align-items-center mb-3'>
                    <FaLocationDot size={19} /><li className=' mx-2'>1hd, 010 lorem ,NY 900001, United States</li>
                    </div>
                </ul>
                
            </Col>

            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-2 mt-2">
                <h6>Quick Links</h6>

                <div className='mt-3 d-flex'>
                <ul className='ps-1 list-unstyled'>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>About us</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>FAQ</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Contact Us</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Shipping & Returns</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Privacy Policy</a></li>
                </ul>

                <ul className='ps-1 list-unstyled'>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Earrings</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Necklaces</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Bracelets</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Rings</a></li>
                    <li className=' mx-2'><a href='#' className='text-decoration-none text-secondary'>Jewelry Box</a></li>
                </ul>
                </div>

            </Col>

            <Col xs={12} sm={12} md={6} lg={3} xl={3} className="mb-2 mt-2">
                <h6>DownLoad App</h6>

                <p className='mt-3'>Elevate your style with our app. Explore curated collactions, shop with ease, and adorn yourself in timeless elegance, all at your fingertips. </p>

            </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Footer