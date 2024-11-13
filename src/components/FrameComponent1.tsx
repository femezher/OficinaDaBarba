import { FunctionComponent } from "react";
import Card3 from "./Card3";
import Brands from "./Brands";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialsParent, className].join(" ")}>
      <section className={styles.testimonials}>
        <div className={styles.reviews}>
          <div className={styles.text}>
            <div className={styles.reviewTitle}>O QUE FALAM SOBRE NÓS?</div>
            <h1 className={styles.reviewSubtitle}>REVIEWS DE CLIENTES</h1>
          </div>
          <div className={styles.cards}>
            <Card3
              img="/img-1@2x.png"
              servioImpecvelEAmbiente={`"Serviço impecável e ambiente `}
              acolhedorSaMuitoSatisfeito="acolhedor. Saí muito satisfeito "
              comOResultado={`com o resultado."`}
              name1="AUGUSTO, SÃO CARLOS"
            />
            <Card3
              card1Width="296px"
              img="/img-2@2x.png"
              reviewerCommentsAlignSelf="stretch"
              servioImpecvelEAmbiente={`"Profissionais excelentes! `}
              acolhedorSaMuitoSatisfeito="Atendimento rápido e "
              comOResultado={`de muita qualidade."`}
              name1="FERNANDO, SÃO PAULO"
              nameHeight="13px"
              nameDisplay="inline-block"
            />
            <Card3
              card1Width="303px"
              img="/img-3@2x.png"
              reviewerCommentsAlignSelf="unset"
              servioImpecvelEAmbiente={`"Experiência incrível! `}
              acolhedorSaMuitoSatisfeito="O corte ficou perfeito e "
              comOResultado={`o cuidado foi excepcional."`}
              name1="FELIPE, SÃO CARLOS"
              nameHeight="13px"
              nameDisplay="inline-block"
            />
          </div>
        </div>
      </section>
      <Brands
        line="/line.svg"
        img1="/img-11@2x.png"
        img2="/img-21@2x.png"
        img3="/img-31@2x.png"
        img11="/img-1-1@2x.png"
        img21="/img-2-1@2x.png"
        img31="/img-3-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
