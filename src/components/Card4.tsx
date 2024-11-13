import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card4.module.css";

export type Card4Type = {
  className?: string;

  /** Style props */
  infoTitlesTextDecoration?: CSSProperties["textDecoration"];
  card1Width?: CSSProperties["width"];
  card1Padding?: CSSProperties["padding"];
  infoTitlesDisplay?: CSSProperties["display"];
  infoTitlesMinWidth?: CSSProperties["minWidth"];
  infoDetailsAlignSelf?: CSSProperties["alignSelf"];
  infoDetailsWidth?: CSSProperties["width"];
};

const Card4: FunctionComponent<Card4Type> = ({
  className = "",
  infoTitlesTextDecoration,
  card1Width,
  card1Padding,
  infoTitlesDisplay,
  infoTitlesMinWidth,
  infoDetailsAlignSelf,
  infoDetailsWidth,
}) => {
  const infoTitlesStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: infoTitlesTextDecoration,
      display: infoTitlesDisplay,
      minWidth: infoTitlesMinWidth,
    };
  }, [infoTitlesTextDecoration, infoTitlesDisplay, infoTitlesMinWidth]);

  const card12Style: CSSProperties = useMemo(() => {
    return {
      width: card1Width,
      padding: card1Padding,
    };
  }, [card1Width, card1Padding]);

  const infoDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: infoDetailsAlignSelf,
      width: infoDetailsWidth,
    };
  }, [infoDetailsAlignSelf, infoDetailsWidth]);

  return (
    <div className={[styles.card1, className].join(" ")} style={card12Style}>
      <img
        className={styles.iconLocation}
        loading="lazy"
        alt=""
        src="/icon-location.svg"
      />
      <a className={styles.infoTitles} style={infoTitlesStyle}>
        ENDEREÇO
      </a>
      <div className={styles.infoDetails} style={infoDetailsStyle}>
        <span>
          <p
            className={styles.ruaJacintoFavoreto}
          >{`Rua Jacinto Favoreto, 301, `}</p>
          <p className={styles.ruaJacintoFavoreto}>São Carlos - Brasil</p>
        </span>
      </div>
    </div>
  );
};

export default Card4;
