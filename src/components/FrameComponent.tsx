import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onServiosTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSobreNsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContateNosTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onGaleriaTextClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/home-page-logo-cliente-e-fontes-maiores");
  }, [navigate]);

  return (
    <section className={[styles.menuParent, className].join(" ")}>
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
        <div className={styles.menuGroup}>
          <a className={styles.menu1}>Menu</a>
          <div className={styles.rectangleDiv} />
        </div>
        <img
          className={styles.burgerMenuIcon}
          loading="lazy"
          alt=""
          src="/burger-menu@2x.png"
        />
        <a className={styles.incio}>Início</a>
        <a className={styles.servios} onClick={onServiosTextClick}>
          Serviços
        </a>
        <a className={styles.sobreNs} onClick={onSobreNsTextClick}>
          Sobre nós
        </a>
        <div className={styles.contactGallery}>
          <a className={styles.contateNos} onClick={onContateNosTextClick}>
            Contate-nos
          </a>
          <a className={styles.galeria} onClick={onGaleriaTextClick}>
            Galeria
          </a>
        </div>
      </div>
      <img
        className={styles.oficinaDaBarba11}
        loading="lazy"
        alt=""
        src="/oficina-da-barba-1-1@2x.png"
      />
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image@2x.png"
        onClick={onImageClick}
      />
    </section>
  );
};

export default FrameComponent;
