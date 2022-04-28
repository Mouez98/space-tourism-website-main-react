const Links = ({ destinations, setCurDestination }) => {
  return (
    <ul className="destinations-list">
      {destinations
        ? destinations.map((des, index) => (
            <li key={des.name} onClick={() => setCurDestination(index)}>
              {des.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Links;
