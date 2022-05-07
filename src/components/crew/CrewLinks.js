
const CrewLinks = ({crew, curMemberIndex, linkClickHandler}) => {
  return(
    <ul className="list">
    {crew.map((crewMember, index) => (
      <li
        key={crewMember.name}
        className={curMemberIndex === index ? "active" : ""}
        onClick={() => linkClickHandler(index)}
      ></li>
    ))}
  </ul>
  )
}

export default CrewLinks;