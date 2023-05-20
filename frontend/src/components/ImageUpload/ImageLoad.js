import React from "react"; 
import "./ImageLoad.css"; 
 
const ImageLoad = (props) => { 
  const { image, output } = props; 
 
  const handleReload = () => { 
    window.location.reload(); 
  }; 
 
  return ( 
 
   <> 
    <div className="image-load"> 
       
       
      <div className="image-container"> 
        <img src={image} alt={image} /> 
        <p>Original Image</p> 
      </div> 
 
      <div className="image-container"> 
        <img src={output} alt={output} /> 
        <p>Output Image</p> 
      </div> 
 
 
    </div> 
 
      <div className="reload-container"> 
        <button className="reload-button" onClick={handleReload}> 
          Reload 
        </button> 
 
      </div> 
 
      {/* <button className="reload-button" onClick={handleReload}> 
        Reload 
      </button> 
   */} 
 
 
    </> 
  ); 
}; 
 
export default ImageLoad;