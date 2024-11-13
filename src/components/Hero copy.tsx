import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
  heroCaption?: string;

  /** Style props */
  heroBackgroundImage?: CSSProperties["backgroundImage"];
  menuGap?: CSSProperties["gap"];
  heroCaptionLeft?: CSSProperties["left"];
  heroCaptionRight?: CSSProperties["right"];

  /** Action props */
  onIncioTextClick?: () => void;
  onServiosTextClick?: () => void;
  onSobreNsTextClick?: () => void;
  onContateNosTextClick?: () => void;
};

const Hero: FunctionComponent<HeroType> = ({
  className = "",
  heroBackgroundImage,
  menuGap,
  onIncioTextClick,
  onServiosTextClick,
  onSobreNsTextClick,
  onContateNosTextClick,
  heroCaption,
  heroCaptionLeft,
  heroCaptionRight,
}) => {
  const heroStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: heroBackgroundImage,
    };
  }, [heroBackgroundImage]);

  const menuStyle: CSSProperties = useMemo(() => {
    return {
      gap: menuGap,
    };
  }, [menuGap]);

  const heroCaptionStyle: CSSProperties = useMemo(() => {
    return {
      left: heroCaptionLeft,
      right: heroCaptionRight,
    };
  }, [heroCaptionLeft, heroCaptionRight]);

  const navigate = useNavigate();

  const onIncioTextClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServiosTextClick1 = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSobreNsTextClick1 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContateNosTextClick1 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <header className={[styles.hero, className].join(" ")} style={heroStyle}>
      <div className={styles.heroBackground} />
      <div className={styles.menu} style={menuStyle}>
        <a className={styles.irPara}>Ir Para</a>
        <div className={styles.topoParent}>
          <a className={styles.topo}>Topo</a>
          <div className={styles.menuBackgrounds} />
        </div>
        <div className={styles.contedoParent}>
          <a className={styles.contedo}>Conteúdo</a>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.rodapParent}>
          <a className={styles.rodap}>Rodapé</a>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.menuParent}>
          <a className={styles.menu1}>Menu</a>
          <div className={styles.frameChild} />
        </div>
        <img
          className={styles.burgerMenuIcon}
          loading="lazy"
          alt=""
          src="/burger-menu@2x.png"
        />
        <a className={styles.incio} onClick={onIncioTextClick}>
          Início
        </a>
        <a className={styles.servios} onClick={onServiosTextClick}>
          Serviços
        </a>
        <a className={styles.sobreNs} onClick={onSobreNsTextClick}>
          Sobre nós
        </a>
        <a className={styles.contateNos} onClick={onContateNosTextClick}>
          Contate-nos
        </a>
        <a className={styles.galeria} onClick={onContateNosTextClick}>
          Galeria
        </a>
      </div>
      <h1 className={styles.heroCaption} style={heroCaptionStyle}>
        {heroCaption}
      </h1>
    </header>
  );
};

export default Hero;
