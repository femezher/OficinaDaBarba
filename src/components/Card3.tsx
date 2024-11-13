import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Card3.module.css";

export type Card3Type = {
  className?: string;
  img?: string;
  servioImpecvelEAmbiente?: string;
  acolhedorSaMuitoSatisfeito?: string;
  comOResultado?: string;
  name1?: string;

  /** Style props */
  card1Width?: CSSProperties["width"];
  reviewerCommentsAlignSelf?: CSSProperties["alignSelf"];
  nameHeight?: CSSProperties["height"];
  nameDisplay?: CSSProperties["display"];
};

const Card3: FunctionComponent<Card3Type> = ({
  className = "",
  card1Width,
  img,
  reviewerCommentsAlignSelf,
  servioImpecvelEAmbiente,
  acolhedorSaMuitoSatisfeito,
  comOResultado,
  name1,
  nameHeight,
  nameDisplay,
}) => {
  const card11Style: CSSProperties = useMemo(() => {
    return {
      width: card1Width,
    };
  }, [card1Width]);

  const reviewerCommentsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: reviewerCommentsAlignSelf,
    };
  }, [reviewerCommentsAlignSelf]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      height: nameHeight,
      display: nameDisplay,
    };
  }, [nameHeight, nameDisplay]);

  return (
    <div className={[styles.card1, className].join(" ")} style={card11Style}>
      <img className={styles.imgIcon} loading="lazy" alt="" src={img} />
      <blockquote
        className={styles.reviewerComments}
        style={reviewerCommentsStyle}
      >
        <p className={styles.servioImpecvelE}>{servioImpecvelEAmbiente}</p>
        <p className={styles.servioImpecvelE}>{acolhedorSaMuitoSatisfeito}</p>
        <p className={styles.servioImpecvelE}>{comOResultado}</p>
      </blockquote>
      <b className={styles.name} style={nameStyle}>
        {name1}
      </b>
    </div>
  );
};

export default Card3;
