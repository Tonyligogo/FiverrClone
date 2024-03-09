import './Gig.css';
import onwerProfile from '../../assets/img/man.png';
import { Icon } from '@iconify/react';
import {gigImages} from '../../data'
import { useState } from 'react';

function Gig() {
  
  const [currentIndex, setCurrentIndex] = useState(0)
   
  function goToPrev(){
    const isFirstImg = currentIndex === 0;
    const newIndex = isFirstImg ? gigImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  function goToNext(){
    const isLastImg = currentIndex ===  gigImages.length -1;
    const newIndex = isLastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div className='singleGig'>
      <span className='breadCrumbs'>Home / Graphics & Design / AI Artists / Image Generation</span>
      <h3 className=''>I will do african american illustration any style with midjourney ai art</h3>
      <div className='ownerInfo'>
          <span className='profilePic'>
              <img src={onwerProfile} alt="profile photo" />
          </span>
          <div className='text'>
              <span className='cat'> <strong>AI Designer</strong> @mike_porter</span>
              <span className='starRating'><Icon icon="emojione:star" width="18" /><strong>4.8</strong></span>
          </div>
      </div>
      <div>
        <div className="photoGallery">
          <span className='prevBtn' onClick={goToPrev}>&laquo; </span>
          <img src={gigImages[currentIndex].img} alt=""/>
          <span className='nextBtn' onClick={goToNext}>&raquo;</span>
        </div>
      </div>
      <h2>About this gig</h2>
      <p>Are you tired of generic African American illustrations? Let me help you create something unique with ai. <br /> <br /> Hello and welcome to my gig! <br /> <br /> I am an artist with years of experience who knows what it takes to create stunning black illustrations. From the hair to the attitude, I got you covered. <br /> <br /> I use cutting-edge ai tools like Midjourney. With my skills and expertise, I can bring your ideas to life with exceptional quality and unparalleled detail. Whether you need a custom illustration for a book, video, logo, business or personal project, I am here for you. I take pride in my work and always strive to deliver the best results for my clients. <br /> <br /> Using Midjourney, I can create illustrations in various styles, from realistic to abstract, and everything in between.
      </p>
      <h2>About the Seller</h2>
      <div className='ownerInfo'>
          <span className='profilePic profilePic2'>
              <img src={onwerProfile} alt="profile photo" />
          </span>
          <div className='text'>
              <span className='cat'> <strong>AI Designer</strong> @mike_porter</span>
              <span className='starRating'><Icon icon="emojione:star" width="18" /> <strong>4.8</strong> </span>
          </div>
      </div>
      <button className='contactMe'>Contact me</button>
      <div className="aboutTheSeller">
        <div className='userStats'>
          <div>
            <div><span>From</span><span><strong>Alabama</strong></span></div>
            <div><span>Avg. response time</span><span> <strong>1 hour</strong></span></div>
            <div><span>Languages</span><span> <strong>English</strong></span></div>
          </div>
          <div>
            <div><span>Member since</span><span> <strong>Nov 2018</strong></span></div>
            <div><span>Last delivery</span><span> <strong>about 17 hours</strong></span></div>
          </div>
        </div>
        <p>
        Hello, welcome to my profile! <br /><br />
        I am a professional AI artist specializing in photography, graphic design, illustration, and print graphics. I am passionate about making aesthetically pleasing designs that will capture your audience&apos;s attention. <br />
        I have been practically using ai art tools like Midjourney, Dalle, and Leonardo Ai since the day of release. My goal is to help small everyone including business owners and startups meet their design needs with artificial intelligence tools. 
        </p>
      </div>
        <div className='reviews'>
          <h2>Reviews</h2>
          <div className="review">
            <div className='ownerInfo'>
              <span className='profilePic reviewerProfilePic'>
                  <img src={onwerProfile} alt="profile photo" />
              </span>
            </div>
            <div>
              <div className='text'>
                  <span className='cat'>John Doe</span>
                  <span>California</span>
              </div>
              <span className='starRating'><Icon icon="emojione:star" width="18" /> <strong>4.8</strong> </span>
              <p>Prompt response to revision requests. Overall, I liked the project results very much. As this is my first-time using AI imaging, my expectations may have been unrealistic. But Seller was patient. She listened and responded to my revision requests.</p>
            </div>
          </div>
          <div className="review">
            <div className='ownerInfo'>
              <span className='profilePic reviewerProfilePic'>
                  <img src={onwerProfile} alt="profile photo" />
              </span>
            </div>
            <div>
              <div className='text'>
                  <span className='cat'>Brian Knight</span>
                  <span>Amsterdam</span>
              </div>
              <span className='starRating'><Icon icon="emojione:star" width="18" /> <strong>4.8</strong> </span>
              <p>Prompt response to revision requests. Overall, I liked the project results very much. As this is my first-time using AI imaging, my expectations may have been unrealistic. But Seller was patient. She listened and responded to my revision requests.</p>
            </div>
          </div>
          <div className="review">
            <div className='ownerInfo'>
              <span className='profilePic reviewerProfilePic'>
                  <img src={onwerProfile} alt="profile photo" />
              </span>
            </div>
            <div>
              <div className='text'>
                  <span className='cat'>Larry Jenkins</span>
                  <span>Los Angeles</span>
              </div>
              <span className='starRating'><Icon icon="emojione:star" width="18" /> <strong>3.8</strong> </span>
              <p>Prompt response to revision requests. Overall, I liked the project results very much. As this is my first-time using AI imaging, my expectations may have been unrealistic. But Seller was patient. She listened and responded to my revision requests.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Gig