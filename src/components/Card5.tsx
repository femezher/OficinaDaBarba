import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card5.module.css";

export type Card5Type = {
  className?: string;
  iconEnvelope?: string;
  altIconEnvelope?: string; // Adicionado
  altIcon?: string;
  text1?: string;
  text2?: string;

  /** Style props */
  card2Gap?: CSSProperties["gap"];
  iconEnvelopeHeight?: CSSProperties["height"];
  card2Width?: CSSProperties["width"];
  card2Padding?: CSSProperties["padding"];
  text1MinWidth?: CSSProperties["minWidth"];
  text1Display?: CSSProperties["display"];
  text2AlignSelf?: CSSProperties["alignSelf"];
};

const Card5: FunctionComponent<Card5Type> = ({
  className = "",
  card2Gap,
  iconEnvelope,
  altIconEnvelope, // Adicionado
  altIcon, // Adicionado
  iconEnvelopeHeight,
  text1,
  text2,
  card2Width,
  card2Padding,
  text1MinWidth,
  text1Display,
  text2AlignSelf,
}) => {
  const card2Style: CSSProperties = useMemo(() => {
    return {
      gap: card2Gap,
      width: card2Width,
      padding: card2Padding,
    };
  }, [card2Gap, card2Width, card2Padding]);

  const iconEnvelopeStyle: CSSProperties = useMemo(() => {
    return {
      height: iconEnvelopeHeight,
    };
  }, [iconEnvelopeHeight]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: text1MinWidth,
      display: text1Display,
    };
  }, [text1MinWidth, text1Display]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: text2AlignSelf,
    };
  }, [text2AlignSelf]);

  return (
    <div className={[styles.card2, className].join(" ")} style={card2Style}>
      <img
        className={styles.iconEnvelope}
        loading="lazy"
        alt="Ícone representando contato por email"
        src={iconEnvelope}
        style={iconEnvelopeStyle}
      />
      <div className={styles.text1} style={text1Style}>
        {text1}
      </div>
      <div className={styles.text2} style={text2Style}>
        {text2}
      </div>
    </div>
  );
};

export default Card5;
