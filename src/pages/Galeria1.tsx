import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Testimonials1 from "../components/Testimonials1";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import AccessibilityButton from '../components/AccessibilityButton'; // Importação do AccessibilityButton
import styles from "./Galeria1.module.css";

const Galeria1: FunctionComponent = () => {
  const navigate = useNavigate();

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
      {/* Implementação do componente AccessibilityButton */}
      <AccessibilityButton />

      <Hero
        onIncioTextClick={onIncioTextClick}
        onServiosTextClick={onServiosTextClick}
        onSobreNsTextClick={onSobreNsTextClick}
        onContateNosTextClick={onContateNosTextClick}
        heroCaption="GALERIA"
      />
      <Testimonials1 />
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
              altIconEnvelope="Ícone de envelope representando contato por email"
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
              altIconEnvelope="Ícone de telefone representando contato telefônico"
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
            alt="" // Imagem decorativa, mantém alt vazio
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

export default Galeria1;
