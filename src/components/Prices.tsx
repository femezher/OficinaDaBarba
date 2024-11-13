import { FunctionComponent } from "react";
import styles from "./Prices.module.css";

export type PricesType = {
  className?: string;
};

const Prices: FunctionComponent<PricesType> = ({ className = "" }) => {
  return (
    <section className={[styles.prices, className].join(" ")}>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.card11}>
            <div className={styles.text}>
              <div className={styles.packageTitles}>Corte de Cabelo</div>
              <img
                className={styles.lineIcon}
                loading="lazy"
                alt=""
                src="/line.svg"
              />
              <div className={styles.priceValues}>$20</div>
            </div>
            <div className={styles.priceCardFooter}>
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec.
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.text1}>
              <div className={styles.text11}>Barba</div>
              <img
                className={styles.lineIcon1}
                loading="lazy"
                alt=""
                src="/line-11.svg"
              />
              <div className={styles.priceValues}>$15</div>
            </div>
            <div className={styles.priceCardFooter}>
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec.
            </div>
          </div>
        </div>
        <div className={styles.card21}>
          <div className={styles.card3}>
            <div className={styles.text}>
              <div className={styles.text11}>Aparagem</div>
              <img
                className={styles.lineIcon}
                loading="lazy"
                alt=""
                src="/line.svg"
              />
              <div className={styles.priceValues}>$15</div>
            </div>
            <div className={styles.priceCardFooter}>
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec.
            </div>
          </div>
          <div className={styles.card4}>
            <div className={styles.card22}>
              <div className={styles.text11}>Tratamentos</div>
              <img
                className={styles.lineIcon3}
                loading="lazy"
                alt=""
                src="/line-3.svg"
              />
              <div className={styles.priceValues}>$20</div>
            </div>
            <div className={styles.priceCardFooter}>
              Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac.
              Ut sit amet erat nec.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
