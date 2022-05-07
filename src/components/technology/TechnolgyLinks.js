const TechnologyLinks = ({technology, curTechnologyIndex, linkClickHandler}) => {
return (
    <ul className="list">
    {technology
      ? technology.map((des, index) => (
          <li
            key={des.name}
            className={index === curTechnologyIndex ? "active" : ""}
            onClick={() => linkClickHandler(index)}
          >
            {index + 1}
          </li>
        ))
      : null}
  </ul>
)
}

export default TechnologyLinks;