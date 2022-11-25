import styles, {layout} from "../styles/style.js";

import Image from "next/image";
import {feature6} from "../assets";

function Feature4() {
  return (
    <section
      className={`${layout.sectionReverse} xs:flex-col-reverse lg:flex-row flex lg:mt-[-200px] xs:mt-[-120px] relative`}
    >
      <div className={`${layout.sectionImgReverse} xs:mt-[-80px] lg:mt-0`}>
        <Image src={feature6} />
      </div>
      <div className={layout.sectionInfo}>
        <h1 className="text-[500px] text-glass text-white font-extrabold opacity-[0.1] ">
          4
        </h1>
        <div className="absolute top-[270px]">
          <p className="font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] max-w-[600px] mt-5">
            <span className="text-gradient text-[35px]">Feature 4 </span> <br />{" "}
            Connect with the Best Find the most well-connected nodes based on
            eigenvector centrality metrics. Birkeland collects and analyzes
            lightning node quality through reliability, liquidity, and
            connectedness data from nodes throughout the network. Find the best
            nodes based on that historical data to ensure maximal reliability
            and connectedness at the click of a button.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Feature4;
