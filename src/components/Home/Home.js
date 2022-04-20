import logo from '../../assets/shared/logo.svg'
import iconBurger from '../../assets/shared/icon-hamburger.svg'
const Home = () => {
  return(<section className="home">
      <div className="container">

       
            <header>
          <div className="logo">
              <img src={logo} alt="logo" />
          </div>
          <nav>
              <div className="burgerIcon">

              <img src={iconBurger} alt="burgerIcon" />
              </div>
              {/* <ul>
                  <li>01 Home</li>
                  <li>02 Crew</li>
                  <li>03 Technolgy</li>
                  <li>04 Destination</li>
              </ul> */}
          </nav>
      </header>
      <main className="main">
          <article className="text">
              <p className="question">So, you want to travel to</p>
              <h2 className="title">Space</h2>
              <p className="description">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </article>
          <article className="button">
              <div className="circle">
                  <div className="text">
                      Explore
                  </div>
              </div>
          </article>
      </main>
      </div>
  </section>)
}

export default Home