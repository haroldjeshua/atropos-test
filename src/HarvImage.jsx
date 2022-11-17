import Atropos from "atropos/react";
import "atropos/atropos.css";
import "./styles.css";
import layer0 from "./assets/layer0.svg";
import layer1 from "./assets/layer1.svg";
import layer2 from "./assets/layer2.svg";
import layer3 from "./assets/layer3.svg";
import layer4 from "./assets/layer4.svg";
import layer5 from "./assets/layer5.svg";
import layerh from "./assets/layerh.svg";
import layerj from "./assets/layerj.svg";
import layerv from "./assets/layerv.svg";

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
        <img data-atropos-offset="-2.5" src={layer1} alt="" />
        <img data-atropos-offset="0" src={layer2} alt="" />
        <img data-atropos-offset="2" src={layer3} alt="" />
        <img data-atropos-offset="4" src={layer4} alt="" />
        <img data-atropos-offset="6" src={layerh} alt="" />
        <img data-atropos-offset="8" src={layerj} alt="" />
        <img data-atropos-offset="10" src={layerv} alt="" />
      </Atropos>
    </div>
  );
};

export default HarvImage;
