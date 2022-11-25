import styles, {layout} from "../styles/style.js";
import {feature4} from "../assets";
import Image from "next/image";

const Feature2 = () => (
  <section className="xs:flex-col-reverse lg:flex-row flex lg:mt-[-200px] xs:mt-[-120px] relative">
    <div className={`${layout.sectionImgReverse} xs:mt-[-140px] lg:mt-0`}>
      <Image src={feature4} />
    </div>
    <div className={layout.sectionInfo}>
      <h1 className="text-[500px] text-glass text-white font-extrabold opacity-[0.1] ">
        2
      </h1>
      <div className="absolute top-[270px]">
        <p className="font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] max-w-[600px] mt-5">
          <span className="text-gradient text-[35px]">Feature 2 </span> <br />{" "}
          Node First Aid Monitor your node’s uptime and reliability with our
          automated health-check services. Receive alerts when your node is not
          responsive, and address any issues as soon as they arise.
        </p>
      </div>
    </div>
  </section>
);

export default Feature2;
