import CrewLinks from "./CrewLinks";

const CrewDetails = ({crew, curMemberIndex, linkClickHandler, role, name, bio,
}) => {
  return (
    <div className="details">
      <CrewLinks
        crew={crew}
        curMemberIndex={curMemberIndex}
        linkClickHandler={linkClickHandler}
      />
      <div className="details-description">
        <h3 className="role">{role}</h3>
        <h3 className="crew-member">{name}</h3>
        <p className="description">{bio}</p>
      </div>
    </div>
  );
};

export default CrewDetails;
