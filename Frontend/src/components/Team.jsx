import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          Our dedicated food management team ensures that every dish meets the highest standards of quality, taste, and safety. Comprising experienced chefs, nutritionists, and food safety experts, our team oversees every step of the process—from sourcing fresh ingredients to creating innovative recipes and maintaining hygiene protocols. With a deep passion for culinary excellence, we strive to deliver consistently delicious meals while upholding the best industry practices. Our goal is to provide an exceptional dining experience that combines great flavors, nutrition, and impeccable service.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;