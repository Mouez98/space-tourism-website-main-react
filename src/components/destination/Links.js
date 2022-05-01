const Links = ({ destinations, setCurDestination, curDestinationIndex }) => {
  return (
    <ul className="list">
      {destinations
        ? destinations.map((des, index) => (
            <li key={des.name}  className={index === curDestinationIndex ? 'active': ''}onClick={() => setCurDestination(index)}>
              {des.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Links;
