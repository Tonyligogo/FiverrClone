import { useEffect, useState } from "react";
import "./Navbar.css";
import ProfilePic from "../../assets/img/man.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const {pathname} = useLocation();
    const[active, setActive] = useState(false)
    const[options, setOptions] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])
    
    
    const currentUser ={
        id:'1',
        isSeller:false,
        name:'Ligogo',
        img:<img src={ProfilePic} alt="profPic" className="profPic"/>

    }

    function openOptions(){
        setOptions( prev => !prev)
    }

  return (
        <div className={active || pathname !== '/' ? "navContainer active" : "navContainer"}>
            <nav>
                <Link to="/" className="link">
                    <h3>GetHired</h3>
                </Link>
                <div className="links">
                    <ul>
                        <li>GetHired Business</li>
                        <li>Explore</li>
                        {!currentUser.isSeller && <li>Become an Employer</li>}
                        {currentUser && <span className="userLink" onClick={openOptions}>
                            {currentUser.img} {currentUser.name}
                           {options && 
                             <div className="optionsActive">
                               {currentUser.isSeller && <Link to='/gigs' className="link">Gigs</Link>}
                                {currentUser.isSeller && <Link to='/addgig' className="link">Add New Gig</Link>}
                                <Link to='/orders' className="link">Orders</Link>
                                <Link to='/messages' className="link">Messages</Link>
                                <Link to='/' className="link">Logout</Link>
                         </div>
                           }
                        </span> }
                        {!currentUser && <li>Sign in</li>}
                    </ul>
                    {!currentUser && <button>Join</button>}
                </div>
            </nav>
           {active || pathname !== '/' &&(
            <>
             <hr />
             <div className="menu">
                    <Link className="link" to='/'>Graphics & Design</Link>
                    <Link className="link" to='/'>Video & Animation</Link>
                    <Link className="link" to='/'>Writing & Translation</Link>
                    <Link className="link" to='/'>AI Services</Link>
                    <Link className="link" to='/'>Digital Marketing</Link>
                    <Link className="link" to='/'>Music & Audio</Link>
                    <Link className="link" to='/'>Programming & Tech</Link>
                    <Link className="link" to='/'>Business</Link>
                    <Link className="link" to='/'>Lifestyle</Link>
             </div>
            </>)
           }
        </div>
  )
}

export default Navbar