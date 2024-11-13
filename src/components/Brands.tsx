import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Brands.module.css";

export type BrandsType = {
  className?: string;
  line?: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img11?: string;
  img21?: string;
  img31?: string;

  /** Style props */
  brandSubtitleHeight?: CSSProperties["height"];
  logosMinHeight?: CSSProperties["minHeight"];
  brandsMargin?: CSSProperties["margin"];
  brandsPosition?: CSSProperties["position"];
  brandsTop?: CSSProperties["top"];
  brandsLeft?: CSSProperties["left"];
  textPadding?: CSSProperties["padding"];
};

const Brands: FunctionComponent<BrandsType> = ({
  className = "",
  line,
  img1,
  img2,
  img3,
  img11,
  img21,
  img31,
  brandSubtitleHeight,
  logosMinHeight,
  brandsMargin,
  brandsPosition,
  brandsTop,
  brandsLeft,
  textPadding,
}) => {
  const brandSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      height: brandSubtitleHeight,
    };
  }, [brandSubtitleHeight]);

  const logosStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: logosMinHeight,
    };
  }, [logosMinHeight]);

  const brandsStyle: CSSProperties = useMemo(() => {
    return {
      margin: brandsMargin,
      position: brandsPosition,
      top: brandsTop,
      left: brandsLeft,
    };
  }, [brandsMargin, brandsPosition, brandsTop, brandsLeft]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      padding: textPadding,
    };
  }, [textPadding]);

  return (
    <section
      className={[styles.brands, className].join(" ")}
      style={brandsStyle}
    >
      <div className={styles.text} style={textStyle}>
        <h2 className={styles.brandTitle}>MARCAS PARCEIRAS</h2>
        <div className={styles.brandSubtitle} style={brandSubtitleStyle}>
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
        <img className={styles.lineIcon} alt="" src={line} />
      </div>
      <div className={styles.logos} style={logosStyle}>
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

export default Brands;
