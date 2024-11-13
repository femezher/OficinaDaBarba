import { FunctionComponent } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <section className={[styles.header, className].join(" ")}>
      <div className={styles.menu}>
        <a className={styles.irPara}>Ir Para</a>
        <div className={styles.topoParent}>
          <a className={styles.topo}>Topo</a>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.contedoParent}>
          <a className={styles.contedo}>Conteúdo</a>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.rodapParent}>
          <a className={styles.rodap}>Rodapé</a>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.menuParent}>
          <a className={styles.incio}>Menu</a>
          <div className={styles.rectangleDiv} />
        </div>
        <img
          className={styles.burgerMenuIcon}
          loading="lazy"
          alt=""
          src="/burger-menu@2x.png"
        />
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
          alt=""
          src="/oficina-da-barba-1-1@2x.png"
        />
        <img
          className={styles.af4cf53920e245e2B2422c71d4Icon}
          alt=""
          src="/af4cf53920e245e2b2422c71d452f34f@2x.png"
        />
      </div>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
      />
    </section>
  );
};

export default Header;
