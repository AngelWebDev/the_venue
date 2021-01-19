import React, { Component } from "react";
import CustomButton from "../utils/CustomButton";
import Zoom from "react-reveal/Zoom";

export class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ....",
      "Dolore magna aliqua. Ut enimm ad minim veniam, quis nostrud...",
      "Duis aute irure dolor in reprehenderit in voluptate velit...",
    ],
    linkto: ["https://sales/b", "https://sales/m", "https://sales/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () => {
    return this.state.prices.map((price, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${price}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <CustomButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
