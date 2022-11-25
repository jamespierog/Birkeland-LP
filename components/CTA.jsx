import styles from "../styles/style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-[-100px] mb-[100px]`}>
    <div className="flex-1 flex flex-col">
      <h2 className='font-poppins font-semibold xs:text-[35px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Ready to try out Birkeland?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, maxime vel doloribus 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
