import React, {useState, useEffect} from 'react'
//import galleryLinks from './Data/gallery_links.json'


const Welcome = () => {
  const [galleryLinks, setGalleryLinks] = useState([]);

  const LoadGalleryLinksData = async() => {
    //Query the Api Gateway
    const resp = await fetch('https://4s6hrdsjlc.execute-api.eu-north-1.amazonaws.com/production/gallery_images');
    let jsonData = await resp.json();
    //Assign response data to our state variable
    setGalleryLinks(jsonData);
  }

  useEffect(()=> {
    //load the menu links data from the Api Gateway
    LoadGalleryLinksData();

  }, []);

    return(
        
        <div className="scene" id="welcome">
            <article className="content">
              <div className="gallery">
                {
                  galleryLinks.map((image) => 
                  <img className={image.clsss} src={image.src} alt={image.alt} />
                  )
                }
                
              </div>
              <h1>Welcome to the Landon&nbsp;Hotel</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
        </div>
    );
}

export default Welcome;