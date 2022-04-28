import Links from "./Links";



const Details = ({name, setCurDestination, description, distance, travel, destinations }) => {
    return(
<>
<div className="details">
        <Links setCurDestination={setCurDestination} destinations={destinations}/>
        <h3 className="destination-name">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <hr />
      <div className="single-destination-details">
        <div>
          <p>avg. distance</p>
          <h3>{distance}</h3>
        </div>
        <div>
          <p>est. Travel time</p>
          <h3>{travel}</h3>
        </div>
      </div>
</>
    )
}

export default Details