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

  const onGaleriaTextClick1 = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <header className={[styles.hero, className].join(" ")} style={heroStyle}>
      <div className={styles.heroBackground} />
      <div className={styles.menu} style={menuStyle}>
        {/* Outros elementos do menu */}
        <a className={styles.incio} onClick={onIncioTextClick1}>
          Início
        </a>
        <a className={`${styles.servios} ${styles.textoTaxado}`}>
          Serviços
        </a>
        <a className={`${styles.sobreNs} ${styles.textoTaxado}`}>
          Sobre nós
        </a>
        <a className={`${styles.contateNos} ${styles.textoTaxado}`}>
          Contate-nos
        </a>
        <a className={styles.galeria} onClick={onGaleriaTextClick1}>
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
