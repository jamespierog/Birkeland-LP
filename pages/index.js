import styles from "../styles/style";
import {
  Feature2,
  Feature1,
  Feature3,
  Footer,
  Navbar,
  Hero,
  Feature4,
  Feature5,
  CTA,
} from "../components";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="animate">
        <div className="absolute z-50">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className={` ${styles.flexStart} `}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
        </div>
        <div className="w-full h-[660px] fadeOut"></div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
          <Feature5 />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
