import './Footer.css'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div className='footer'>
      <div className="footerWrapper">
        <div className="left">
          <h2>GetHired<sub>&reg;</sub> </h2>
          <p> &copy; GetHired Ltd. 2023 </p>
        </div>
        <div className="right">
          <ul>
            <li><Icon icon="uil:twitter" color="gray" width="24" /></li>
            <li><Icon icon="ic:round-facebook" color="gray" width="24" /></li>
            <li><Icon icon="uil:linkedin" color="gray" width="24" /></li>
            <li><Icon icon="bi:pinterest" color="gray" width="20" /></li>
            <li><Icon icon="ri:instagram-line" color="gray" width="24" /></li>
            <li className='language'><Icon icon="fontisto:world-o" color="gray" width="18" /> English</li>
            <li className='currency'><Icon icon="foundation:dollar" color="gray" width="24" />USD</li>
            <li><Icon icon="iconoir:accessibility" color="gray" width="24" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer