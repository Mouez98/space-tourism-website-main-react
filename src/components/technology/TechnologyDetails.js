import TechnologyLinks from "./TechnolgyLinks";

const TechnologyDetails = ({technology, curTechnologyIndex, linkClickHandler, name, description,
}) => {
  return (
    <div className="details">
      <TechnologyLinks
        technology={technology}
        curTechnologyIndex={curTechnologyIndex}
        linkClickHandler={linkClickHandler}
      />
      <div className="details-description">
        <h3 className="header">The terminolgy...</h3>
        <h3 className="sub-header">{name}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TechnologyDetails;
