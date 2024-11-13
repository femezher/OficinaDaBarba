import { FunctionComponent } from "react";
import styles from "./Brands1.module.css";

export type Brands1Type = {
  className?: string;
  line?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img11?: string;
  img21?: string;
  img31?: string;
};

const Brands1: FunctionComponent<Brands1Type> = ({
  className = "",
  line,
  img1,
  img2,
  img3,
  img11,
  img21,
  img31,
}) => {
  return (
    <section className={[styles.brands, className].join(" ")}>
      <div className={styles.text}>
        <h2 className={styles.brandsHeading}>MARCAS PARCEIRAS</h2>
        <div className={styles.brandsDescription}>
          <p
            className={styles.vestibulumCommodoSapien}
          >{`Vestibulum commodo sapien non elit `}</p>
          <p
            className={styles.vestibulumCommodoSapien}
          >{`porttitor, vitae volutpat nibh mollis. Nulla `}</p>
          <p
            className={styles.vestibulumCommodoSapien}
          >{`porta risus id neque. `}</p>
        </div>
      </div>
      <div className={styles.divider}>
        <img className={styles.lineIcon} loading="lazy" alt="" src={line} />
      </div>
      <div className={styles.logos}>
        <img className={styles.img1Icon} loading="lazy" alt="" src={img1} />
        <img className={styles.img2Icon} loading="lazy" alt="" src={img2} />
        <img className={styles.img1Icon} loading="lazy" alt="" src={img3} />
        <img className={styles.img1Icon} loading="lazy" alt="" src={img11} />
        <img className={styles.img1Icon} loading="lazy" alt="" src={img21} />
        <img className={styles.img1Icon} loading="lazy" alt="" src={img31} />
      </div>
    </section>
  );
};

export default Brands1;
