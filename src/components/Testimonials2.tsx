import { FunctionComponent } from "react";
import Card3 from "./Card3";
import styles from "./Testimonials2.module.css";

export type Testimonials2Type = {
  className?: string;
};

const Testimonials2: FunctionComponent<Testimonials2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.reviews}>
        <div className={styles.text}>
          <div className={styles.text1}>O QUE FALAM SOBRE NÓS?</div>
          <h1 className={styles.reviewDetails}>REVIEWS DE CLIENTES</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img-1@2x.png"
            />
            <div className={styles.customerReviews}>
              <p
                className={styles.servioImpecvelE}
              >{`"Serviço impecável e ambiente `}</p>
              <p
                className={styles.servioImpecvelE}
              >{`acolhedor. Saí muito satisfeito `}</p>
              <p className={styles.servioImpecvelE}>com o resultado."</p>
            </div>
            <b className={styles.name}>AUGUSTO, SÃO CARLOS</b>
          </div>
          <Card3
            card1Width="296px"
            img="/img-2@2x.png"
            reviewerCommentsAlignSelf="stretch"
            servioImpecvelEAmbiente={`"Profissionais excelentes! `}
            acolhedorSaMuitoSatisfeito="Atendimento rápido e "
            comOResultado={`de muita qualidade."`}
            name1="FERNANDO, SÃO PAULO"
            nameHeight="unset"
            nameDisplay="unset"
          />
          <Card3
            card1Width="unset"
            img="/img-3@2x.png"
            reviewerCommentsAlignSelf="unset"
            servioImpecvelEAmbiente={`"Experiência incrível! `}
            acolhedorSaMuitoSatisfeito="O corte ficou perfeito e "
            comOResultado={`o cuidado foi excepcional."`}
            name1="FELIPE, SÃO CARLOS"
            nameHeight="unset"
            nameDisplay="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
