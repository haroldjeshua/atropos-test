import Atropos from "atropos/react";
import "atropos/atropos.css";
import "./styles.css";
import layer0 from "./assets/layer0.svg";
import layer1 from "./assets/layer1.svg";
import layer2 from "./assets/layer2.svg";
import layer3 from "./assets/layer3.svg";
import layer4 from "./assets/layer4.svg";
import layer5 from "./assets/layer5.svg";

const HarvImage = () => {
  return (
    <div className="container">
      <Atropos
        className="atropos-banner"
        highlight={false}
        onEnter={() => console.log("enter")}
      >
        <img className="atropos-banner-spacer" src={layer0} alt="layer" />
        <img data-atropos-offset="-4.5" src={layer0} alt="layer" />
        {/* <img
          className="atropos-banner-spacer"
          src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
          alt="layer1"
        />
        <img
          data-atropos-offset="-4.5"
          src="https://raw.githubusercontent.com/nolimits4web/atropos/master/playground/react/i/atropos-bg.svg"
          alt=""
        /> */}
        <img data-atropos-offset="-2.5" src={layer1} alt="" />
        <img data-atropos-offset="0" src={layer2} alt="" />
        <img data-atropos-offset="2" src={layer3} alt="" />
        <img data-atropos-offset="4" src={layer4} alt="" />
        <img data-atropos-offset="5" src={layer5} alt="" />
      </Atropos>
    </div>
  );
};

export default HarvImage;
