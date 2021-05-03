import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <div className="search">
        <input type="search" name="" id="" placeholder="Pick Form" />
        <br />
        <input type="search" name="" id="" placeholder="Pick To" />
        <br />
        <input type="date" name="" id="" />
        <input className="submit" type="submit" name="" id="" value="Search"/>
      </div>
      <div className="map-container">
        <div className="map">
          <div className="map-frame">
            <iframe width="850" height="400" id="gmap_canvas" src={`https://maps.google.com/maps?q=dhaka&t=&z=11&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
