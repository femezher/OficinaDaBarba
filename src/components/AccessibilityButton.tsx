import { FunctionComponent, useState, useEffect, useRef } from 'react';
import styles from './AccessibilityButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversalAccess,
  faAdjust,
  faTextHeight,
  faTextWidth,
  faHighlighter,
  faLowVision,
  faFont,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const AccessibilityButton: FunctionComponent = () => {
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

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

  const handleIconClick = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  // Função para detectar cliques fora do painel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(`.${styles.accessibilityIcon}`)
      ) {
        setIsPanelVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    // Limpa o listener ao desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.iconAndPanel}>
      <div className={styles.accessibilityIcon} onClick={handleIconClick}>
        <FontAwesomeIcon icon={faUniversalAccess} />
      </div>
      {isPanelVisible && (
        <div className={styles.sidePanel} ref={panelRef}>
          {/* Cabeçalho do Painel */}
          <div className={styles.panelHeader}>
            <FontAwesomeIcon icon={faUniversalAccess} className={styles.panelHeaderIcon} />
            <div className={styles.panelTitle}>Acessibilidade</div>
          </div>
          {/* Opções de acessibilidade */}
          <div className={styles.accessibilityOptions}>
            {/* Aumentar Fonte */}
            <div className={styles.accessibilityOption}>
              <FontAwesomeIcon icon={faTextHeight} className={styles.optionIcon} />
              <span className={styles.optionText}>Tamanho da Fonte</span>
              <div className={styles.fontSizeButtons}>
                <button onClick={onDecreaseFontSize} className={styles.fontSizeButton}>
                  A-
                </button>
                <button onClick={onIncreaseFontSize} className={styles.fontSizeButton}>
                  A+
                </button>
              </div>
            </div>
            {/* Alto Contraste */}
            <div className={styles.accessibilityOption} onClick={toggleHighContrast}>
              <FontAwesomeIcon icon={faAdjust} className={styles.optionIcon} />
              <span className={styles.optionText}>Alto Contraste</span>
              <input
                type="checkbox"
                checked={highContrast}
                readOnly
                className={styles.optionToggle}
              />
            </div>
            {/* Aumentar Espaçamento de Texto */}
            <div className={styles.accessibilityOption}>
              <FontAwesomeIcon icon={faTextWidth} className={styles.optionIcon} />
              <span className={styles.optionText}>Aumentar Espaçamento de Texto</span>
              <input type="checkbox" disabled className={styles.optionToggle} />
            </div>
            {/* Destacar Links */}
            <div className={styles.accessibilityOption}>
              <FontAwesomeIcon icon={faHighlighter} className={styles.optionIcon} />
              <span className={styles.optionText}>Destacar Links</span>
              <input type="checkbox" disabled className={styles.optionToggle} />
            </div>
            {/* Modo Escala de Cinza */}
            <div className={styles.accessibilityOption}>
              <FontAwesomeIcon icon={faLowVision} className={styles.optionIcon} />
              <span className={styles.optionText}>Modo Escala de Cinza</span>
              <input type="checkbox" disabled className={styles.optionToggle} />
            </div>
            {/* Fonte Amigável para Dislexia */}
            <div className={styles.accessibilityOption}>
              <FontAwesomeIcon icon={faFont} className={styles.optionIcon} />
              <span className={styles.optionText}>Fonte para Dislexia</span>
              <input type="checkbox" disabled className={styles.optionToggle} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
