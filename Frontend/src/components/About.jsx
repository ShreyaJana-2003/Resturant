import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At Suruchi Resturant , the only thing we're serious about is food.
            We are passionate about crafting delicious, high-quality dishes that bring people together. 
            From fresh ingredients to carefully curated recipes, every bite is made with love and dedication. 
            Whether you're here for a casual meal, a special occasion, or just to satisfy your cravings, 
            we promise an unforgettable dining experience. 
            Great flavors, warm hospitality, and a love for food—that’s what defines us.








            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;