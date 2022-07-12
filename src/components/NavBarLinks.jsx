const NavBarLinks = ({text, link, dropdown, textOption}) => { 
    if(dropdown){
        return(
        <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {text}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">{textOption}</a></li>
                    </ul>
        </li>)
    }else{
      return(
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={link}>{text}</a>
        </li>)
    }
}
 
export default NavBarLinks;

