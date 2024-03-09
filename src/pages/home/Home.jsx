import { useState } from 'react';
import Featured from '../../components/featured/Featured'
import './Home.css'
import { Icon } from '@iconify/react';
import CatCard from '../../components/categoryCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

function Home() {
  const [showVideo, setShowVideo] = useState(false)
  function displayVideo(e){
    e.preventDefault();
    setShowVideo(true)
  }
  function alertMe(e){
    e.preventDefault()
    console.log('i got clicked')
    console.log(e.target.className)
    if(e.target.className === '' || e.target.className === 'leftSide' || e.target.className === 'featuresContainer' )
    setShowVideo(false)
  }
  return (
    <div>
      <Featured/>
      <CatCard/>
      <div className="features">
        <div className="featuresContainer" onClick={alertMe}>
          <div className="leftSide">
            <h1>The best part? Everything.</h1>
            <div className="feature">
              <h3> <Icon icon="mdi:success-circle-outline" color="lightgray" width="22" /> Stick to your budget</h3>
              <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            </div>
            <div className="feature">
              <h3> <Icon icon="mdi:success-circle-outline" color="lightgray" width="22" /> Get quality work done quickly</h3>
              <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            </div>
            <div className="feature">
              <h3> <Icon icon="mdi:success-circle-outline" color="lightgray" width="22" /> Pay when you&apos;re happy</h3>
              <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            </div>
            <div className="feature">
              <h3> <Icon icon="mdi:success-circle-outline" color="lightgray" width="22" /> Count on 24/7 support</h3>
              <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
            </div>
          </div>
          <div className="rightSide">
            {!showVideo &&<Icon icon="ph:play-fill" color="white" width="30" className='playButton' onClick={displayVideo}/>}
            {!showVideo && <img  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="imagePlaceholder" />}
            <video className={`inActive ${showVideo && 'active'}`} src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
          </div>
        </div>
      </div>
      <ProjectCard/>
      <div className="fiverrBusiness">
        <div className="fiverrBsContainer">
          <div className="leftSide">
            <h1>GetHired business. <small>NEW</small> </h1>
            <div className="leftSideBody">
              <h2>A solution built for <i>business</i> </h2>
              <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
              <ul>
                <li><h3> <Icon icon="mdi:success-circle-outline" color='gray' width="22" /> Talent matching</h3></li>
                <li><h3> <Icon icon="mdi:success-circle-outline" color="gray" width="22" /> Dedicated account management</h3></li>
                <li><h3> <Icon icon="mdi:success-circle-outline" color="gray" width="22" /> Team collaboration tools</h3></li>
                <li><h3> <Icon icon="mdi:success-circle-outline" color="gray" width="22" /> Business payment solutions</h3></li>
              </ul>
            </div>
            <button className='exploreBs'>Explore GetHired Business</button>
          </div>
          <div className="rightSide">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="imagePlaceholder" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home