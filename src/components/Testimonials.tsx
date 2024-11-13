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
        />
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img1@2x.png"
            />
          </div>
          <div className={styles.card2}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img-4@2x.png"
            />
          </div>
          <div className={styles.card2}>
            <img
              className={styles.imgIcon}
              loading="lazy"
              alt=""
              src="/img-5@2x.png"
            />
          </div>
        </div>
        <h1 className={styles.testimonialAuthor}>GALERIA</h1>
      </div>
      <div className={styles.testimonialQuote}>Nossa</div>
      <div
        className={styles.testimonialsHeading}
        onClick={onTestimonialsBackgroundClick}
      >
        Adicionar Imagem
      </div>
    </section>
  );
};

export default Testimonials;
