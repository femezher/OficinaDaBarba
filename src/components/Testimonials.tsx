import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onTestimonialsBackgroundClick = useCallback(() => {
    navigate("/galeria1");
  }, [navigate]);

  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialsContainer}>
        <div
          className={styles.testimonialsBackground}
          onClick={onTestimonialsBackgroundClick}
          aria-label="Imagem de fundo clicável que redireciona para a galeria"
        />
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Augusto, São Carlos"
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Fernando, São Paulo"
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Felipe, São Carlos"
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Lucas, Campinas"
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card2}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Rafael, Rio de Janeiro"
              src="/img-4@2x.png"
            />
          </div>
          <div className={styles.card2}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt="Foto do cliente Bruno, Belo Horizonte"
              src="/img-5@2x.png"
            />
          </div>
        </div>
        
      </div>
      
      <div
        className={styles.testimonialsHeading}
        onClick={onTestimonialsBackgroundClick}
        role="button"
        tabIndex={0}
        aria-label="Adicionar Imagem e redirecionar para a galeria"
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onTestimonialsBackgroundClick();
          }
        }}
      >
        Adicionar Imagem
      </div>
    </section>
  );
};

export default Testimonials;
