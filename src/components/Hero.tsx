import {
  FunctionComponent,
  useMemo,
  CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
  heroCaption?: string;

  /** Propriedades de estilo */
  heroBackgroundImage?: CSSProperties["backgroundImage"];
  menuGap?: CSSProperties["gap"];
  heroCaptionLeft?: CSSProperties["left"];
  heroCaptionRight?: CSSProperties["right"];

  /** Propriedades de navegação */
  onIncioTextClick?: () => void;
  onServiosTextClick?: () => void;
  onSobreNsTextClick?: () => void;
  onContateNosTextClick?: () => void;
  onGaleriaTextClick?: () => void;
};

const Hero: FunctionComponent<HeroType> = ({
  className = "",
  heroBackgroundImage,
  menuGap,
  heroCaption,
  heroCaptionLeft,
  heroCaptionRight,
  onIncioTextClick,
  onServiosTextClick,
  onSobreNsTextClick,
  onContateNosTextClick,
  onGaleriaTextClick,
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
    if (onIncioTextClick) onIncioTextClick();
    else navigate("/");
  }, [navigate, onIncioTextClick]);

  const onServiosTextClick1 = useCallback(() => {
    if (onServiosTextClick) onServiosTextClick();
    else navigate("/services");
  }, [navigate, onServiosTextClick]);

  const onSobreNsTextClick1 = useCallback(() => {
    if (onSobreNsTextClick) onSobreNsTextClick();
    else navigate("/about-us");
  }, [navigate, onSobreNsTextClick]);

  const onContateNosTextClick1 = useCallback(() => {
    if (onContateNosTextClick) onContateNosTextClick();
    else navigate("/contact-us");
  }, [navigate, onContateNosTextClick]);

  const onGaleriaTextClick1 = useCallback(() => {
    if (onGaleriaTextClick) onGaleriaTextClick();
    else navigate("/galeria");
  }, [navigate, onGaleriaTextClick]);

  return (
    <header className={[styles.hero, className].join(" ")} style={heroStyle}>
      <div className={styles.heroBackground} />
      <div className={styles.menu} style={menuStyle}>
        <a className={styles.menuItem} onClick={onIncioTextClick1}>
          Início
        </a>
        <a className={`${styles.menuItem} ${styles.textoTaxado}`}>
          Serviços
        </a>
        <a className={`${styles.menuItem} ${styles.textoTaxado}`}>
          Sobre nós
        </a>
        <a className={`${styles.menuItem} ${styles.textoTaxado}`}>
          Contate-nos
        </a>
        <a className={styles.menuItem} onClick={onGaleriaTextClick1}>
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
