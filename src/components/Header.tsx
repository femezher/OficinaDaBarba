import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.menu}>
        <a className={styles.incio}>Início</a>
        <a className={styles.servios}>Serviços</a>
        <a className={styles.sobreNs}>Sobre nós</a>
        <div className={styles.contactGallery}>
          <a className={styles.contateNos}>Contate-nos</a>
          <a className={styles.galeria}>Galeria</a>
        </div>
      </div>
      <div className={styles.imageBanner}>
        <img
          className={styles.oficinaDaBarba11}
          loading="lazy"
          alt="Logo da Barbearia Oficina da Barba"
          src="/oficina-da-barba-1-1@2x.png"
        />
        <img
          className={styles.af4cf53920e245e2B2422c71d4Icon}
          alt="Imagem decorativa da barbearia"
          src="/af4cf53920e245e2b2422c71d452f34f@2x.png"
        />
      </div>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt="Banner promocional da barbearia"
        src="/image@2x.png"
      />
    </section>
  );
};

export default Header;
