import styles from "../styles/style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mt-[-120px] mb-[120px]`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[35px] text-[30px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Ready to try out Birkeland?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
        Never worry about manually managing your lightning node again.
      </p>
    </div>
    <div className="w-[350px] mt-10 lg:mr-20 lg:mt-0">
      <Button />
    </div>
  </section>
);

export default CTA;
