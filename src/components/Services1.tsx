import { FunctionComponent } from "react";
import Card8 from "./Card8";
import styles from "./Services1.module.css";

export type Services1Type = {
  className?: string;
};

const Services1: FunctionComponent<Services1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.card1}>
        <div className={styles.cardIcons}>
          <img
            className={styles.iconScissors}
            loading="lazy"
            alt=""
            src="/icon-scissors1.svg"
          />
        </div>
        <div className={styles.cardHeader}>
          <div className={styles.serviceTitles}>CORTE DE CABELO</div>
        </div>
        <div className={styles.cardFooter}>
          <p
            className={styles.duisPortaLigula}
          >{`Duis porta, ligula rhoncuseuism `}</p>
          <p
            className={styles.duisPortaLigula}
          >{`od pretium, nisi tellus eleifend `}</p>
          <p className={styles.duisPortaLigula}>odio, luctus viverra sem.</p>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.iconRazorWrapper}>
          <img
            className={styles.iconRazor}
            loading="lazy"
            alt=""
            src="/icon-razor1.svg"
          />
        </div>
        <div className={styles.text1Wrapper}>
          <div className={styles.text1}>APARAGEM DE BARBA</div>
        </div>
        <div className={styles.text2}>
          <p
            className={styles.duisPortaLigula}
          >{`Duis porta, ligula rhoncuseuism `}</p>
          <p
            className={styles.duisPortaLigula}
          >{`od pretium, nisi tellus eleifend `}</p>
          <p className={styles.duisPortaLigula}>odio, luctus viverra sem.</p>
        </div>
      </div>
      <Card8 iconBeard="/icon-beard1.svg" text1="TRATAMENTO CAPILAR" />
      <Card8
        card3Padding="62px 67px 54px 68px"
        iconBeard="/icon-facial.svg"
        iconBeardHeight="112px"
        iconBeardWidth="76px"
        text1="TRATAMENTO FACIAL"
      />
      <div className={styles.card5}>
        <img
          className={styles.iconMustache}
          loading="lazy"
          alt=""
          src="/icon-mustache.svg"
        />
        <div className={styles.text11}>ESTILIZAÇÃO DE BARBA</div>
        <div className={styles.text21}>
          <p
            className={styles.duisPortaLigula}
          >{`Duis porta, ligula rhoncuseuism `}</p>
          <p
            className={styles.duisPortaLigula}
          >{`od pretium, nisi tellus eleifend `}</p>
          <p className={styles.duisPortaLigula}>odio, luctus viverra sem.</p>
        </div>
      </div>
      <Card8
        card3Padding="71px 44px 63px"
        iconBeard="/icon-hair.svg"
        iconBeardHeight="94px"
        iconBeardWidth="110px"
        text1="ESTILIZAÇÃO DE CABELO"
      />
    </section>
  );
};

export default Services1;
