import './Featured.css'
import { Icon } from '@iconify/react';
import profPic from '../../assets/img/man.png'
import meta from '../../assets/img/meta.png'
import google from '../../assets/img/google.png'
import netflix from '../../assets/img/netflix.png'
import pandg from '../../assets/img/pandg.png'
import paypal from '../../assets/img/paypal.png'


function Featured() {
  return (
    <div>
        <div className="featuredContainer">
            <div className="leftFeatured">
                <h3>Find the perfect <span>freelance</span> services for your business</h3>
                <div className="search">
                    <div className="searchInput">
                        <Icon icon="system-uicons:search" color="lightgray" width="22" />
                        <input type="search" placeholder='Search anything'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <p>Popular:</p>
                    <span>Web Design</span>
                    <span>WordPress</span>
                    <span>Logo Design</span>
                    <span>AI Services</span>
                </div>
            </div>
            <div className="rightFeatured">
                <img src={profPic} alt="bannerImage" className='bannerImage'/>
            </div>
        </div>
        <div className="trustedBy">
            <p>Trusted by:</p>
            <span> <img src={meta} alt="meta" /> </span>
            <span> <img src={google} alt="google" /> </span>
            <span> <img src={netflix} alt="netflix" /> </span>
            <span> <img src={pandg} alt="pandg" /> </span>
            <span> <img src={paypal} alt="paypal" /> </span>
        </div>
    </div>
  )
}

export default Featured