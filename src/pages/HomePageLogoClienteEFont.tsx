import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import FrameComponent1 from "../components/FrameComponent1";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import AccessibilityButton from "../components/AccessibilityButton"; // Importação do AccessibilityButton
import styles from "./HomePageLogoClienteEFont.module.css";

const HomePageLogoClienteEFont: FunctionComponent = () => {
  const navigate = useNavigate();

  // Funções de navegação
  const onButtonClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className={styles.homePageLogoClienteEFont}>
      {/* Incluímos o AccessibilityButton */}
      <AccessibilityButton />

      {/* Mantemos o restante do código inalterado */}
      {/* Se o headerContainer e heroBackground forem necessários, mantemos */}
      <div className={styles.headerContainer}>
        <header className={styles.heroBackground} />
      </div>

      <FrameComponent />

      <div className={styles.frameParent}>
        <div className={styles.servicesParent}>
          <section className={styles.services}>
            <div className={styles.img}>
              {/* Alt Text Adicionado */}
              <img
                className={styles.imgIcon}
                alt="Imagem ilustrativa da barbearia Oficina da Barba"
                src="/img@2x.png"
              />
            </div>
            <div className={styles.text}>
              <div className={styles.servicesTitle}>Nossos</div>
              <h1 className={styles.servicesSubtitle}>SERVIÇOS</h1>
            </div>
            <div className={styles.cards}>
              <div className={styles.card1}>
                {/* Alt Text Adicionado */}
                <img
                  className={styles.iconScissors}
                  loading="lazy"
                  alt="Ícone de tesoura representando corte de cabelo"
                  src="/icon-scissors.svg"
                />
                <div className={styles.serviceCardTitles}>CORTE DE CABELO</div>
                <div className={styles.serviceCardDescriptionsContainer}>
                  <p className={styles.cortesModernosE}>Cortes modernos e </p>
                  <p className={styles.cortesModernosE}>personalizados para </p>
                  <p className={styles.cortesModernosE}>realçar seu estilo.</p>
                </div>
              </div>
              <div className={styles.card2}>
                {/* Alt Text Adicionado */}
                <img
                  className={styles.iconRazor}
                  loading="lazy"
                  alt="Ícone de navalha representando aparagem de barba"
                  src="/icon-razor.svg"
                />
                <div className={styles.text1}>APARAGEM DE BARBA</div>
                <div className={styles.text2}>
                  <p className={styles.cortesModernosE}>Barba alinhada e bem </p>
                  <p className={styles.cortesModernosE}>cuidada, do jeito que </p>
                  <p className={styles.cortesModernosE}>você gosta.</p>
                </div>
              </div>
              <div className={styles.card3}>
                {/* Alt Text Adicionado */}
                <img
                  className={styles.iconBeard}
                  loading="lazy"
                  alt="Ícone de barba estilizada representando tratamento capilar"
                  src="/icon-beard.svg"
                />
                <div className={styles.serviceCardTitles}>
                  TRATAMENTO CAPILAR
                </div>
                <div className={styles.text21}>
                  <p className={styles.cortesModernosE}>
                    Tratamentos que renovam{" "}
                  </p>
                  <p className={styles.eFortalecem}>
                    e fortalecem seus cabelos.
                  </p>
                </div>
              </div>
              <div className={styles.card4}>
                {/* Alt Text Adicionado */}
                <img
                  className={styles.iconUstache}
                  loading="lazy"
                  alt="Ícone de bigode estilizado representando estilização"
                  src="/icon--ustache.svg"
                />
                <div className={styles.serviceCardTitles}>ESTILIZAÇÃO</div>
                <div className={styles.text22}>
                  <p className={styles.cortesModernosE}>
                    Finalização e penteados{" "}
                  </p>
                  <p className={styles.cortesModernosE}>que combinam com </p>
                  <p className={styles.cortesModernosE}>o seu visual.</p>
                </div>
              </div>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.exploreMais}>EXPLORE MAIS</div>
            </button>
          </section>
          <section className={styles.counter}>
            <Card1
              iconRazor="/icon-razor-1.svg"
              altIcon="Ícone de navalha representando barbas feitas"
              counterValues="+3000"
              counterLabels="BARBAS FEITAS"
            />
            <Card1
              card1Width="17rem" /* 272px / 16 */
              iconRazor="/icon-scissors-1.svg"
              altIcon="Ícone de tesoura representando cortes de cabelo"
              iconRazorWidth="2.8875rem" /* 46.2px / 16 */
              counterValues="+10000"
              frameDivAlignSelf="stretch"
              counterLabels="CORTES DE CABELO"
              counterValuesAlignSelf="stretch"
            />
            <Card2
              iconBarbershop="/icon-barbershop.svg"
              altIcon="Ícone representando a barbearia moderna"
            />
          </section>
        </div>
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContainer}>
            <div className={styles.leftHalf}>
              {/* Conteúdo opcional para a metade esquerda */}
            </div>
            <div
              className={styles.rightHalf}
              onClick={onTextContainerClick}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.testimonialSubtitle}>
                VEJA UM POUCO DOS NOSSOS TRABALHOS
              </div>
              <div className={styles.testimonialDescriptionWrapper}>
                <h1 className={styles.testimonialDescription}>GALERIA</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FrameComponent1 />
      <section className={styles.footer}>
        <div className={styles.text4}>
          <div className={styles.text5}>
            <h1 className={styles.text13}>CONTATE-NOS</h1>
          </div>
          <div className={styles.cards1}>
            <Card4 />
            <Card5
              iconEnvelope="/icon-envelope.svg"
              altIcon="Ícone de envelope representando contato por email"
              text1="EMAIL"
              text2="oficinadabarba@email.com"
            />
            <Card5
              card2Gap="0.65625rem" /* 10.5px / 16 */
              iconEnvelope="/icon-phone.svg"
              altIcon="Ícone de telefone representando contato telefônico"
              iconEnvelopeHeight="1.625rem" /* 26px / 16 */
              text1="TELEFONE"
              text2="(+55) (16) 99332-9723"
              card2Width="16.9375rem" /* 271px / 16 */
              card2Padding="0rem 0rem 0rem 0rem"
              text1MinWidth="6.9375rem" /* 111px / 16 */
              text1Display="inline-block"
              text2AlignSelf="stretch"
            />
            <Card6 />
          </div>
        </div>
        <div className={styles.divider}>
          {/* Alt Text Adicionado */}
          <img
            className={styles.lineIcon}
            alt="Linha divisória decorativa"
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

export default HomePageLogoClienteEFont;
