import styles from "../styles/style";
import {discount, heroIllustration} from "../assets";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[90.8px] leading-[75px]">
            Lightning Node Maintaince at the <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Click of a Button </span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Your Keys, Your coins, Your Node
          <br/>
          Private, Automated, Optimised for Reliability or Yield
        </p>
        <Button style="mt-10" />
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xs:p-3 xs:mr-0 lg:mr-[100px]`}
      >
        <Image
          src={heroIllustration}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default Hero;
