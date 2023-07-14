import React, {useEffect} from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import {FiSend} from 'react-icons/fi'
import {BiPlanet} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
            <div data-aos="fade-up" className="text">
              <small>KEEP EXPLORING</small>
              <h2>Travel with Swifter</h2>
            </div>

            <div data-aos="fade-up" className="inputDiv flex">
              <input type="text" placeholder='Enter your E-mail' />
              <button data-aos="fade-up" className='btn flex' type='submit'>
                SEND <FiSend className="icon"/>
              </button>
            </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
               <BiPlanet className="icon"/> Swifter
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Welcome to Swifter, your passport to unforgettable travel experiences. We are dedicated to curating exceptional journeys that ignite your sense of adventure and create lifelong memories. 
             Let us whisk you away to discover the world's wonders, one remarkable journey at a time. Embrace the extraordinary with Swifter, and let your travel dreams take flight.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
          </div>

          <div className="footerLinks grid">

             <div data-aos="fade-up" data-aos-duration="3000"  className="linkGroup">
               <span className="groupTitle">
                OUR AGENCY
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
               </li>
             </div>

             <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
               <span className="groupTitle">
                PARTNERS
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Rent Cars
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Hostels
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                 TripAdvisor
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Atlantis
               </li>
             </div>

             <div data-aos="fade-up" data-aos-duration="5000"  className="linkGroup">
               <span className="groupTitle">
                BRANCHES
               </span>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  London
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  California
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Dubai
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Canada
               </li>

               <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Spain
               </li>
             </div>

             
          </div>

          <div className="footerDiv flex">
              <small>Swifter.com</small>
              <small>COPYRIGHTS RESERVED - Aarav Joshi 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer