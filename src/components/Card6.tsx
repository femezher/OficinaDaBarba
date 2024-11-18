import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card6.module.css";

export type Card6Type = {
  className?: string;

  /** Style props */
  card4Width?: CSSProperties["width"];
  card4Padding?: CSSProperties["padding"];
  frameDivPadding?: CSSProperties["padding"];
  text1MinWidth?: CSSProperties["minWidth"];
  scheduleLabelAlignSelf?: CSSProperties["alignSelf"];
  scheduleLabelWidth?: CSSProperties["width"];
};

const Card6: FunctionComponent<Card6Type> = ({
  className = "",
  card4Width,
  card4Padding,
  frameDivPadding,
  text1MinWidth,
  scheduleLabelAlignSelf,
  scheduleLabelWidth,
}) => {
  const card4Style: CSSProperties = useMemo(() => {
    return {
      width: card4Width,
      padding: card4Padding,
    };
  }, [card4Width, card4Padding]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  const text11Style: CSSProperties = useMemo(() => {
    return {
      minWidth: text1MinWidth,
    };
  }, [text1MinWidth]);

  const scheduleLabelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: scheduleLabelAlignSelf,
      width: scheduleLabelWidth,
    };
  }, [scheduleLabelAlignSelf, scheduleLabelWidth]);

  return (
    <div className={[styles.card4, className].join(" ")} style={card4Style}>
      <img
        className={styles.iconClock}
        loading="lazy"
        alt="Ícone de relógio representando horário de funcionamento"
        src="/icon-clock.svg"
      />
      <div className={styles.text1Wrapper} style={frameDiv2Style}>
        <div className={styles.text1} style={text11Style}>
          HORÁRIO
        </div>
      </div>
      <div className={styles.scheduleLabel} style={scheduleLabelStyle}>
        <p className={styles.segSex}>Seg - Sex: 9:00 - 19:30</p>
        <p className={styles.segSex}>Sab: 9:00 - 12:00</p>
      </div>
    </div>
  );
};

export default Card6;
