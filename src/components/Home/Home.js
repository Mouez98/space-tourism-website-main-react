import { useEffect, useState } from "react";

import logo from "../../assets/shared/logo.svg";
import iconBurger from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showSidebar, setSidebar] = useState(false);


  useEffect(() => {
    function handleResize() {
        setWindowWidth(window.innerWidth)      
  }
  
      window.addEventListener('resize', handleResize)
  }, []);


  const showSidebarHandler = () => setSidebar((prev)=> !prev)
  return (
    <section className="home" >
         <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            {windowWidth && windowWidth < 368 ? (
              <div className="burgerIcon" onClick={showSidebarHandler} >
                <img src={iconBurger} alt="burgerIcon" />
              </div>
            ) : (
              <ul >
                <li>01 Home</li>
                <li>02 Crew</li>
                <li>03 Technolgy</li>
                <li>04 Destination</li>
              </ul>
            )}
          </nav>
        </header>
      <div className="container">
        <aside className={showSidebar? 'aside show-aside' : 'aside'}>
          <button onClick={showSidebarHandler}>
            <img src={closeIcon} alt="X" />
          </button>
          <ul className="links">
            <li>
              <span>01</span> Home
            </li>
            <li>
              <span>02</span> Crew
            </li>
            <li>
              <span>03</span>Technolgy
            </li>
            <li>
              <span>04</span> Destination
            </li>
          </ul>
        </aside>
       
        <main className="main">
          <article className="text">
            <h5 className="question">So, you want to travel to</h5>
            <h2 className="title">Space</h2>
            <p className="description">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          <article className="button">
            <div className="circle">
              <div className="text">Explore</div>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default Home;
