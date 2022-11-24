import React from "react";

const Mainbanner = ({ image, title }) => {
  return (
    <div className="homeBanner">
      <img src={image} alt="" className="homeBanner__img" />
      <div className="homeBanner__overlay"></div>
      <h2 className="homeBanner__title">{title}</h2>
    </div>
  );
};

export default Mainbanner;