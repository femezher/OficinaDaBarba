import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card8.module.css";

export type Card8Type = {
  className?: string;
  iconBeard?: string;
  text1?: string;

  /** Style props */
  card3Padding?: CSSProperties["padding"];
  iconBeardHeight?: CSSProperties["height"];
  iconBeardWidth?: CSSProperties["width"];
};

const Card8: FunctionComponent<Card8Type> = ({
  className = "",
  card3Padding,
  iconBeard,
  iconBeardHeight,
  iconBeardWidth,
  text1,
}) => {
  const card31Style: CSSProperties = useMemo(() => {
    return {
      padding: card3Padding,
    };
  }, [card3Padding]);

  const iconBeardStyle: CSSProperties = useMemo(() => {
    return {
      height: iconBeardHeight,
      width: iconBeardWidth,
    };
  }, [iconBeardHeight, iconBeardWidth]);

  return (
    <div className={[styles.card3, className].join(" ")} style={card31Style}>
      <div className={styles.iconBeardWrapper}>
        <img
          className={styles.iconBeard}
          loading="lazy"
          alt=""
          src={iconBeard}
          style={iconBeardStyle}
        />
      </div>
      <div className={styles.text1}>{text1}</div>
      <div className={styles.serviceDescriptionsWrapper}>
        <div className={styles.serviceDescriptions}>
          <p
            className={styles.duisPortaLigula}
          >{`Duis porta, ligula rhoncuseuism `}</p>
          <p
            className={styles.duisPortaLigula}
          >{`od pretium, nisi tellus eleifend `}</p>
          <p className={styles.duisPortaLigula}>odio, luctus viverra sem.</p>
        </div>
      </div>
    </div>
  );
};

export default Card8;
