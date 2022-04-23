import HeaderNav from "../components/HeaderNav";

const Home = () => {
 
  return (
    
    <section className="home">
       <div className="container">

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
