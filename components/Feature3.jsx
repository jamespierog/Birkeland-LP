import styles, {layout} from "../styles/style";
import Image from "next/image";
import {feature5} from "../assets";

const Feature3 = () => (
  <section
    className={`${layout.section} lg:mt-[-200px] xs:mt-[-120px] relative`}
  >
    <div className={layout.sectionInfo}>
      <h1 className="text-[500px]  text-white font-extrabold opacity-[0.1] ">
        3
      </h1>
      <div className="absolute top-[270px]">
        <p className="font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] max-w-[600px] mt-5">
          <span className="text-gradient text-[35px]">Feature 3 </span> <br />{" "}
          Analytics on Your Node Over Time Gain insight over your node’s past
          performance and history enabling you to make better decisions in the
          future.
        </p>
      </div>
    </div>

    <div className={`${layout.sectionImg} xs:mt-[-140px] lg:mt-0`}>
      <Image src={feature5} />
    </div>
  </section>
);

export default Feature3;
