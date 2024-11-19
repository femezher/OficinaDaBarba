import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card2.module.css";

export type Card2Type = {
  className?: string;
  iconBarbershop?: string;
  altIcon?: string;

  /** Style props */
  barbershopLabelAlignSelf?: CSSProperties["alignSelf"];
  barbershopLabelTextAlign?: CSSProperties["textAlign"];
  card3Width?: CSSProperties["width"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  barbershopValueWidth?: CSSProperties["width"];
  barbershopValueDisplay?: CSSProperties["display"];
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  iconBarbershop,
  altIcon,
  barbershopLabelAlignSelf,
  barbershopLabelTextAlign,
  card3Width,
  frameDivJustifyContent,
  barbershopValueWidth,
  barbershopValueDisplay,
}) => {
  const barbershopLabelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: barbershopLabelAlignSelf,
      textAlign: barbershopLabelTextAlign,
    };
  }, [barbershopLabelAlignSelf, barbershopLabelTextAlign]);

  const card3Style: CSSProperties = useMemo(() => {
    return {
      width: card3Width,
    };
  }, [card3Width]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  const barbershopValueStyle: CSSProperties = useMemo(() => {
    return {
      width: barbershopValueWidth,
      display: barbershopValueDisplay,
    };
  }, [barbershopValueWidth, barbershopValueDisplay]);

  return (
    <div className={[styles.card3, className].join(" ")} style={card3Style}>
      <div className={styles.iconBarbershopWrapper}>
        <img
          className={styles.iconBarbershop}
          loading="lazy"
          alt="Ícone representando a barbearia"
          src={iconBarbershop}
        />
      </div>
      <div className={styles.iconBarbershopWrapper} style={frameDiv1Style}>
        <div className={styles.barbershopValue} style={barbershopValueStyle}>
          +5
        </div>
      </div>
      <div className={styles.barbershopLabel} style={barbershopLabelStyle}>
        ANOS DE EXPERIÊNCIA
      </div>
    </div>
  );
};

export default Card2;
