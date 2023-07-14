import React, {useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora, a mesmerizing tropical paradise nestled in the South Pacific, enchants with its turquoise lagoons, overwater bungalows, pristine white-sand beaches, and vibrant coral reefs. A dream destination awaits you.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Bali, an enchanting island in Indonesia, captivates visitors with its lush rice terraces, ancient temples, vibrant cultural heritage, stunning beaches, and warm hospitality. Discover blissful serenity in this tropical haven.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'CULTURAL RELAX',
    fees: '$3,000',
    description: 'Santorini, a captivating Greek island gem, captivates with its whitewashed buildings perched on cliffs overlooking the Aegean Sea. Immerse yourself in breathtaking sunsets, volcanic beaches, and the rich history of this enchanting destination.'
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Capri',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$2,500',
    description: 'Capri, an enchanting Italian island in the Tyrrhenian Sea, captivates with its rugged coastline, crystal-clear blue waters, breathtaking cliffs, charming streets, and the iconic Blue Grotto. Unforgettable beauty awaits you.'
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Majorca',
    location: 'Spain',
    grade: 'CULTURAL RELAX',
    fees: '$1,500',
    description: 'Majorca, the gem of the Balearic Islands, captivates with its stunning coastline, golden beaches, charming villages, rich history, and vibrant nightlife. Experience the perfect blend of relaxation and adventure in this Mediterranean paradise.'
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Ko Samui',
    location: 'Thailand',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: "Ko Samui, a tropical haven in Thailand's Gulf, beckons with its palm-fringed beaches, crystal-clear waters, lush jungles, vibrant nightlife, and rejuvenating spas. Discover serenity and excitement in this idyllic island paradise."
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Maui ',
    location: 'USA',
    grade: 'CULTURAL RELAX',
    fees: '$2,700',
    description: 'Maui enchants with its stunning landscapes, including Haleakala National Park, pristine beaches like Kaanapali and Wailea, and the famous Road to Hana.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Palawan',
    location: 'Philippines',
    grade: 'CULTURAL RELAX',
    fees: '$1,800',
    description: "Voted as the world's best island multiple times, Palawan enthralls with its crystal-clear lagoons, hidden beaches, limestone cliffs, and vibrant marine life."
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Galapagos Islands',
    location: 'Ecuador',
    grade: 'CULTURAL RELAX',
    fees: '$4,000',
    description: 'Known for their unique wildlife and untouched ecosystems, the Galapagos Islands offer incredible opportunities for wildlife encounters, hiking, and snorkeling in pristine waters.'
  },

]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
    }, [])

  return (
   <section className='main container section'>
       
       <div className="secTitle">
        <h3  data-aos="fade-right" className="title">
        Top travel destinations
        </h3>
       </div>
        
        <div className="secContent grid">
           {
           Data.map(({id, imgSrc, destTitle,  location,  grade, fees, description})=>{
            return(
              <div key={id} 
              data-aos="fade-up"
              className="singleDestination">
                   
                   <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                   </div>

                   <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                          <HiOutlineLocationMarker className='icon'/>
                          <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button  className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                   </div>
              </div>
            )
           })
           }    
        </div>
   </section>
  )
}

export default Main