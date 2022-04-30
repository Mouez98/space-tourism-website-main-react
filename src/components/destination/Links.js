const Links = ({ destinations, setCurDestination, name }) => {
  return (
    <ul className="list">
      {destinations
        ? destinations.map((des, index) => (
            <li key={des.name}  className={name === des.name ? 'active': ''}onClick={() => setCurDestination(index,des.name)}>
              {des.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Links;
