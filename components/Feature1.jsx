import {features} from "../constants";
import styles, {layout} from "../styles/style.js";
import Button from "./Button";
import Image from "next/image";
import {feature2} from "../assets";

const Feature1 = () => (
  <section
    id="features"
    className={`${layout.section} lg:mt-0 xs:mt-[250px] relative`}
  >
    <div className={layout.sectionInfo}>
      <h1 className="text-[500px]  text-white font-extrabold opacity-[0.1] ">
        1
      </h1>
      <div className="absolute top-[270px]">
        <p className="font-poppins font-normal text-dimWhite text-[22px] leading-[30.8px] max-w-[600px] mt-5">
          <span className="text-gradient text-[35px]">Feature 1 </span> <br />{" "}
          Tor No More Privately coordinate and securely communicate with peers
          using a lightning-tailored VPN to handle networking and
          communications. Run your lightning node over the clearnet without
          worrying about Tor issues ever again.
        </p>
      </div>
    </div>

    <div className={`${layout.sectionImg} xs:mt-[-140px]`}>
      <Image src={feature2} />
    </div>
  </section>
);

export default Feature1;
