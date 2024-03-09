import './GigCard.css'
import {gigs} from '../../data'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

function GigCard() {
  return (
        <div className="gigs" id='slide'> {/*Uses classes from projectCard to utilize the same css styles*/}
                {gigs.map((gig)=>(
                  <Link to='/gig/123' className='link' key={gig.id}>
                    <div className="project gigCard">
                      <div className='gigCardImage'>
                        <img src={gig.img} alt="gigCardImage" />  
                      </div>
                      <div className='textArea'>
                        <div className='ownerInfo'>
                            <span className='profilePic'>
                                <img src={gig.pp} alt="profile photo" />
                            </span>
                            <div className='text'>
                                <span className='cat'>{gig.username}</span>
                            </div>
                        </div>
                        <span className='description'>{`"${gig.desc}"`}</span>
                        <div className='pricing'>
                            <span>Price: <strong> ${gig.price} </strong></span>
                            {/* <span className='starRating'><Icon icon="emojione:star" width="18" />{gig.star}</span> */}
                            <span>{Array(gig.star).fill(<Icon icon="emojione:star" width="15" />)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
  )
}

export default GigCard