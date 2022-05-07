import { useState } from "react";
import CrewDetails from "./CrewDetails";

const CrewMember = ({ crew }) => {
  const [curMemberIndex, setCurMemberIndex] = useState(0);
  const { name, role, bio, images } = crew[curMemberIndex];

  function linkClickHandler(index, name) {
    setCurMemberIndex(index);
  }

  return (
    <article>
      <div className="image-container">
        <img src={images.png} alt={name} />
        <hr />
      </div>
      <CrewDetails
        crew={crew}
        name={name}
        role={role}
        bio={bio}
        linkClickHandler={linkClickHandler}
        curMemberIndex={curMemberIndex}
      />
    </article>
  );
};

export default CrewMember;
