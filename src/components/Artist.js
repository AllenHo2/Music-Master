import React from "react";

const Artist = ({ artist }) => {
  //destructuring syntac; pass artist state directly through App
  if (!artist) return null; //checks for Null artists, else just return null

  const { images, name, followers, genres } = artist; //get all the information from the artist state

  //return a div with all this the properties
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(", ")}</p>
      <img
        src={images[0] && images[0].url}
        alt="artist-profile"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Artist; //export this component to be used across other componnents
