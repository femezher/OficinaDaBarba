import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card1.module.css";

export type Card1Type = {
  className?: string;
  iconRazor?: string;
  counterValues?: string;
  counterLabels?: string;

  /** Style props */
  card1Width?: CSSProperties["width"];
  iconRazorWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  counterValuesAlignSelf?: CSSProperties["alignSelf"];
};

const Card1: FunctionComponent<Card1Type> = ({
  className = "",
  card1Width,
  iconRazor,
  iconRazorWidth,
  counterValues,
  frameDivAlignSelf,
  counterLabels,
  counterValuesAlignSelf,
}) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      width: card1Width,
    };
  }, [card1Width]);

  const iconRazorStyle: CSSProperties = useMemo(() => {
    return {
      width: iconRazorWidth,
    };
  }, [iconRazorWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const counterValuesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: counterValuesAlignSelf,
    };
  }, [counterValuesAlignSelf]);

  return (
    <div className={[styles.card1, className].join(" ")} style={card1Style}>
      <div className={styles.iconRazorWrapper}>
        <img
          className={styles.iconRazor}
          loading="lazy"
          alt="Ícone de navalha"
          src={iconRazor}
          style={iconRazorStyle}
        />
      </div>
      <div className={styles.counterValues} style={counterValuesStyle}>
        {counterValues}
      </div>
      <div className={styles.counterLabelsWrapper} style={frameDivStyle}>
        <div className={styles.counterLabels}>{counterLabels}</div>
      </div>
    </div>
  );
};

export default Card1;
