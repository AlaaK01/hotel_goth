import React, {useState, useEffect} from 'react'
//import menuLinks from './Data/menu_links'

const Header = () => {
  const [menuLinks, setMenuLinks] = useState([]);

  const loadMenuLinksData = async() => {
    //Query the Api Gateway
    const resp = await fetch('https://4s6hrdsjlc.execute-api.eu-north-1.amazonaws.com/production/menu_links');
    let jsonData = await resp.json();

    //Assign response data to our state variable
    setMenuLinks(jsonData);
  }

  useEffect(() => {
    //load the menu links data from the Api Gateway
    loadMenuLinksData();
  }, []);

    return(
        <header id="intro">
          <article className="fullheight">
            <div className="hgroup">
              <h1>Gothenburg Hotel</h1>
              <h2>Center Gothenburg</h2>
              <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
          </article>

          <nav id="nav">
            <div className="navbar">
              <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
              <ul>
                {
                    menuLinks.map((link) => 
                    <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                    )
                }
                
              </ul>
            </div>
          </nav>
        </header>
    );
}

export default Header;