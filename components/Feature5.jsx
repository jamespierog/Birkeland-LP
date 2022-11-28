import styles, {layout} from "../styles/style";
import Image from "next/image";
import {feature7} from "../assets";

const Feature5 = () => (
  <section
    className={`${layout.section} lg:mt-[-240px] xs:mt-[-120px] relative`}
  >
    <div className={layout.sectionInfo}>
      <h1 className="text-[500px]  text-white font-extrabold opacity-[0.05] ">
        5
      </h1>
      <div className="absolute top-[270px]">
        <p className={`${styles.paragraph} font-normal text-dim White text-[22px] leading-[30.8px] max-w-[600px] mt-5`}>
          <span className="text-gradient text-[35px]">Automate Your Liquidity Management </span> <br />{" "}
          Automatically open channels with
          ease, and never worry about manually balancing channels again.
          Birkeland connects you with reliable, liquid, and well-connected nodes
          to be able to optimise your Bitcoin yield.
        </p>
      </div>
    </div>

    <div className={`${layout.sectionImg} xs:mt-[-140px] lg:mt-0`}>
      <Image src={feature7} />
    </div>
  </section>
);

export default Feature5;
