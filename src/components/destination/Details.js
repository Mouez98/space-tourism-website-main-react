import Links from "./Links";



const Details = ({name, setCurDestination, description, distance, travel, destinations, index }) => {
    return(
<div className="details">
<div>
        <Links setCurDestination={setCurDestination} curDestinationIndex={index} destinations={destinations} name={name}/>
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
</div>
    )
}

export default Details