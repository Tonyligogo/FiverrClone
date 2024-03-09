import { Link } from 'react-router-dom'
import './CatCard.css'
import {cards} from '../../data'
import { Icon } from '@iconify/react';

function CatCard() {
  const slideLeft = ()=>{
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = ()=>{
    var slider = document.getElementById('slide')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
        <div className="categoryContainer">
          <h2>Popular services</h2>
          <div className="category">
                <Icon icon="mingcute:left-line" width="48" color="orangered" onClick={slideLeft}/>
              <div className="cards" id='slide'>
                {cards.map((card)=>(
                  <Link to={`/gigs?category=${card.title}`} className='link' key={card.id}>
                    <div className="card">
                      <img src={card.img} alt="cardImage" className='cardImage'/>
                      <span className='title'>{card.title}</span>
                      <span className='desc'>{card.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
                <Icon icon="mingcute:right-line" width="48" color="orangered" onClick={slideRight}/>
          </div>
        </div>
  )
}

export default CatCard