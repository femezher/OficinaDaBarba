import { FunctionComponent } from "react";
import styles from "./Barbers.module.css";

export type BarbersType = {
  className?: string;
};

const Barbers: FunctionComponent<BarbersType> = ({ className = "" }) => {
  return (
    <section className={[styles.barbers, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.barbersHeading}>MEET THE FAMILY</div>
        <h1 className={styles.barbersDescription}>NOSSOS BARBEIROS</h1>
      </div>
      <div className={styles.cards}>
        {/* Card 1: Marlon McDonald */}
        <div className={styles.card1}>
          <img
            className={styles.imgIcon}
            loading="lazy"
            alt="Foto de Marlon McDonald, barbeiro da Oficina da Barba"
            src="/img@2x.png"
          />
          <div className={styles.text1}>
            <div className={styles.name}>MARLON MCDONALD</div>
            <img
              className={styles.socialsIcon}
              loading="lazy"
              alt="Ícones de redes sociais de Marlon McDonald"
              src="/socials.svg"
            />
          </div>
        </div>

        {/* Card 2: Jerry Banks */}
        <div className={styles.card2}>
          <img
            className={styles.imgIcon}
            loading="lazy"
            alt="Foto de Jerry Banks, barbeiro da Oficina da Barba"
            src="/img-12@2x.png"
          />
          <div className={styles.text1}>
            <div className={styles.name1}>JERRY BANKS</div>
            <img
              className={styles.socialsIcon}
              loading="lazy"
              alt="Ícones de redes sociais de Jerry Banks"
              src="/socials.svg"
            />
          </div>
        </div>

        {/* Card 3: John Bailey */}
        <div className={styles.card2}>
          <img
            className={styles.imgIcon}
            loading="lazy"
            alt="Foto de John Bailey, barbeiro da Oficina da Barba"
            src="/img-22@2x.png"
          />
          <div className={styles.text1}>
            <div className={styles.name2}>JOHN BAILEY</div>
            <img
              className={styles.socialsIcon2}
              loading="lazy"
              alt="Ícones de redes sociais de John Bailey"
              src="/socials-2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barbers;
