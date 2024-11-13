import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./Galeria.module.css";

const Galeria: FunctionComponent = () => {
  const navigate = useNavigate();

  // Estado para controlar o tamanho da fonte
  const [fontSize, setFontSize] = useState(16); // Tamanho de fonte padrão em pixels

  // Efeito para ajustar o tamanho da fonte no elemento raiz
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Função para aumentar o tamanho da fonte
  const onIncreaseFontSize = useCallback(() => {
    setFontSize((prevSize) => {
      const newSize = Math.min(prevSize + 2, 24);
      console.log(`Aumentando tamanho da fonte: ${newSize}px`);
      return newSize;
    });
  }, []);

  // Função para diminuir o tamanho da fonte
  const onDecreaseFontSize = useCallback(() => {
    setFontSize((prevSize) => {
      const newSize = Math.max(prevSize - 2, 12);
      console.log(`Diminuindo tamanho da fonte: ${newSize}px`);
      return newSize;
    });
  }, []);

  // Funções de navegação
  const onIncioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServiosTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSobreNsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContateNosTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.galeria}>
      {/* Botões "A+" e "A-" */}
      <div className={styles.fontSizeControls}>
        <button onClick={onIncreaseFontSize} className={styles.fontSizeButton}>
          A+
        </button>
        <button onClick={onDecreaseFontSize} className={styles.fontSizeButton}>
          A-
        </button>
      </div>

      <Hero
        onIncioTextClick={onIncioTextClick}
        onServiosTextClick={onServiosTextClick}
        onSobreNsTextClick={onSobreNsTextClick}
        onContateNosTextClick={onContateNosTextClick}
        heroCaption="GALERIA"
      />
      <Testimonials />
      <section className={styles.footer}>
        <div className={styles.text}>
          <div className={styles.text1}>
            <h1 className={styles.text11}>CONTATE-NOS</h1>
          </div>
          <div className={styles.cards}>
            <Card4
              infoTitlesTextDecoration="unset"
              card1Width="unset"
              card1Padding="unset"
              infoTitlesDisplay="unset"
              infoTitlesMinWidth="unset"
              infoDetailsAlignSelf="unset"
              infoDetailsWidth="19.25rem" /* 308px / 16 */
            />
            <Card5
              card2Gap="0.96875rem" /* 15.5px / 16 */
              iconEnvelope="/icon-envelope.svg"
              iconEnvelopeHeight="1.25rem" /* 20px / 16 */
              text1="EMAIL"
              text2="oficinadabarba@email.com"
              card2Width="unset"
              card2Padding="unset"
              text1MinWidth="unset"
              text1Display="unset"
              text2AlignSelf="unset"
            />
            <Card5
              card2Gap="0.65625rem" /* 10.5px / 16 */
              iconEnvelope="/icon-phone.svg"
              iconEnvelopeHeight="1.625rem" /* 26px / 16 */
              text1="TELEFONE"
              text2="(+55) (16) 99332-9723"
              card2Width="16.9375rem" /* 271px / 16 */
              card2Padding="0rem 0rem 0rem 0rem"
              text1MinWidth="6.9375rem" /* 111px / 16 */
              text1Display="inline-block"
              text2AlignSelf="stretch"
            />
            <Card6
              card4Width="unset"
              card4Padding="unset"
              frameDivPadding="unset"
              text1MinWidth="unset"
              scheduleLabelAlignSelf="unset"
              scheduleLabelWidth="16.5rem" /* 264px / 16 */
            />
          </div>
        </div>
        <div className={styles.divider}>
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <div className={styles.copyright}>
          © Copyright Oficina da Barba 2024
        </div>
      </section>
    </div>
  );
};

export default Galeria;
