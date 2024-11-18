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
              alt="Foto do cliente Augusto, São Carlos"
              src="/img-1@2x.png"
            />
            <div className={styles.customerReviews}>
              <p className={styles.servioImpecvelE}>{`"Serviço impecável e ambiente `}</p>
              <p className={styles.servioImpecvelE}>{`acolhedor. Saí muito satisfeito `}</p>
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
          <div className={styles.card5}>
            <img
              className={styles.iconMustache}
              loading="lazy"
              alt="Ícone de bigode representando estilização de barba"
              src="/icon-mustache.svg"
            />
            <div className={styles.text11}>ESTILIZAÇÃO DE BARBA</div>
            <div className={styles.text21}>
              <p className={styles.duisPortaLigula}>{`Duis porta, ligula rhoncuseuism `}</p>
              <p className={styles.duisPortaLigula}>{`od pretium, nisi tellus eleifend `}</p>
              <p className={styles.duisPortaLigula}>odio, luctus viverra sem.</p>
            </div>
          </div>
          <Card3
            card1Width="71px 44px 63px"
            img="/icon-hair.svg"
            reviewerCommentsAlignSelf="unset"
            servioImpecvelEAmbiente={`"Tratamento capilar de alta qualidade! `}
            acolhedorSaMuitoSatisfeito="Ambiente agradável e equipe profissional." 
            comOResultado={`Recomendo a todos que buscam excelência."`}
            name1="MARIA, CAMPINAS"
            nameHeight="unset"
            nameDisplay="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
