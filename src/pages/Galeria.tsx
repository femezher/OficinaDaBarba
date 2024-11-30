// Galeria.tsx
import { FunctionComponent } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./Galeria.module.css";
import AccessibilityButton from '../components/AccessibilityButton';

const Galeria: FunctionComponent = () => {
  return (
    <div className={styles.galeria}>
      {/* Inclua o AccessibilityButton */}
      <AccessibilityButton />

      {/* Componente Hero sem o menu */}
      <Hero
        heroCaption="GALERIA"
        // Remova ou ajuste outras props conforme necessário
      />

      {/* Outros componentes da página */}
      <Testimonials />

      {/* Rodapé */}
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
              card2Padding="unset"
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
            alt="" /* Imagem decorativa, mantém alt vazio */
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
