const NavBarLinks = ({
  text,
  link,
  dropdown,
  optionProducts,
}: NavBarLinkProps) => {
  if (dropdown) {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href={link}
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {text}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {optionProducts.map(({ linkOption, textOption }) => (
            <li>
              <a className="dropdown-item" href={linkOption}>
                {textOption}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href={link}>
        {text}
      </a>
    </li>
  );
};

export default NavBarLinks;
