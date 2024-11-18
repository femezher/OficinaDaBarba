import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./FrameComponent.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null); // Ref para o painel

  // Estados e funções para tamanho de fonte e alto contraste
  const [fontSize, setFontSize] = useState(16); // Tamanho de fonte padrão em pixels
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('highContrast');
    } else {
      document.documentElement.classList.remove('highContrast');
    }
  }, [highContrast]);

  const onIncreaseFontSize = () => {
    setFontSize((prevSize) => {
      const newSize = Math.min(prevSize + 2, 24);
      console.log(`Aumentando tamanho da fonte: ${newSize}px`);
      return newSize;
    });
  };

  const onDecreaseFontSize = () => {
    setFontSize((prevSize) => {
      const newSize = Math.max(prevSize - 2, 12);
      console.log(`Diminuindo tamanho da fonte: ${newSize}px`);
      return newSize;
    });
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const onServiosTextClick = () => {
    navigate("/services");
  };

  const onSobreNsTextClick = () => {
    navigate("/about-us");
  };

  const onContateNosTextClick = () => {
    navigate("/contact-us");
  };

  const onGaleriaTextClick = () => {
    navigate("/galeria");
  };

  const handleIconClick = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  // Função para detectar cliques fora do painel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsPanelVisible(false);
      }
    }

    if (isPanelVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Limpa o listener ao desmontar
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPanelVisible]);

  return (
    <section className={[styles.menuParent, className].join(" ")}>
      <div className={styles.menu}>
        <a className={styles.incio}>Início</a>
        <a
          className={styles.servios}
          onClick={onServiosTextClick}
          style={{ textDecoration: 'line-through', cursor: 'default' }}
        >
          Serviços
        </a>
        <a
          className={styles.sobreNs}
          onClick={onSobreNsTextClick}
          style={{ textDecoration: 'line-through', cursor: 'default' }}
        >
          Sobre nós
        </a>
        <div className={styles.contactGallery}>
          <a
            className={styles.contateNos}
            onClick={onContateNosTextClick}
            style={{ textDecoration: 'line-through', cursor: 'default' }}
          >
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
        alt="Logo da Barbearia Oficina da Barba"
        src="/oficina-da-barba-1-1@2x.png"
      />
    </section>
  );
};

export default FrameComponent;
