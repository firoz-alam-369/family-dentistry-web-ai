import React from "react";
import banner_img_one from "../assets/Images/banner_img_one.jpg";
import banner_img_two from "../assets/Images/banner_img_two.jpg";
import banner_img_r from "../assets/Images/banner_img_r.jpg";
import TextCarousel from "./TextCarousel";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex space-x-3">
        <div className="w-1/3">
          <div className="h-28 w-full">
            <img className="rounded-md" src={banner_img_one} alt="" />
          </div>
        </div>

        <div className="w-2/3">
          <div className="relative h-28 w-full">
            <img className="rounded-md" src={banner_img_r} alt="" />
            <div className="absolute top-32 ">
              <TextCarousel />
            </div>
            <h1 className="absolute top-16 left-16 text-3xl font-extrabold">
              Family Dentistry
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
