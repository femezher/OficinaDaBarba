import { FunctionComponent, useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import FrameComponent1 from "../components/FrameComponent1";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./HomePageLogoClienteEFont.module.css";

const HomePageLogoClienteEFont: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className={styles.homePageLogoClienteEFont}>
      <header className={styles.heroBackground} />
      <FrameComponent />
      <div className={styles.frameParent}>
        <div className={styles.servicesParent}>
          <section className={styles.services}>
            <div className={styles.img}>
              <img className={styles.imgIcon} alt="" src="/img@2x.png" />
            </div>
            <div className={styles.text}>
              <div className={styles.servicesTitle}>Nossos</div>
              <h1 className={styles.servicesSubtitle}>SERVIÇOS</h1>
            </div>
            <div className={styles.cards}>
              <div className={styles.card1}>
                <img
                  className={styles.iconScissors}
                  loading="lazy"
                  alt=""
                  src="/icon-scissors.svg"
                />
                <div className={styles.serviceCardTitles}>CORTE DE CABELO</div>
                <div className={styles.serviceCardDescriptionsContainer}>
                  <p
                    className={styles.cortesModernosE}
                  >{`Cortes modernos e `}</p>
                  <p
                    className={styles.cortesModernosE}
                  >{`personalizados para `}</p>
                  <p className={styles.cortesModernosE}>realçar seu estilo.</p>
                </div>
              </div>
              <div className={styles.card2}>
                <img
                  className={styles.iconRazor}
                  loading="lazy"
                  alt=""
                  src="/icon-razor.svg"
                />
                <div className={styles.text1}>APARAGEM DE BARBA</div>
                <div className={styles.text2}>
                  <p
                    className={styles.cortesModernosE}
                  >{`Barba alinhada e bem `}</p>
                  <p
                    className={styles.cortesModernosE}
                  >{`cuidada, do jeito que `}</p>
                  <p className={styles.cortesModernosE}>você gosta.</p>
                </div>
              </div>
              <div className={styles.card3}>
                <img
                  className={styles.iconBeard}
                  loading="lazy"
                  alt=""
                  src="/icon-beard.svg"
                />
                <div className={styles.serviceCardTitles}>
                  TRATAMENTO CAPILAR
                </div>
                <div className={styles.text21}>
                  <p
                    className={styles.cortesModernosE}
                  >{`Tratamentos que renovam `}</p>
                  <p className={styles.eFortalecem}>
                    e fortalecem seus cabelos.
                  </p>
                </div>
              </div>
              <div className={styles.card4}>
                <img
                  className={styles.iconUstache}
                  loading="lazy"
                  alt=""
                  src="/icon--ustache.svg"
                />
                <div className={styles.serviceCardTitles}>ESTILIZAÇÃO</div>
                <div className={styles.text22}>
                  <p
                    className={styles.cortesModernosE}
                  >{`Finalização e penteados `}</p>
                  <p
                    className={styles.cortesModernosE}
                  >{`que combinam com `}</p>
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
              counterValues="+3000"
              counterLabels="BARBAS FEITAS"
            />
            <Card1
              card1Width="272px"
              iconRazor="/icon-scissors-1.svg"
              iconRazorWidth="46.2px"
              counterValues="+10000"
              frameDivAlignSelf="stretch"
              counterLabels="CORTES DE CABELO"
              counterValuesAlignSelf="stretch"
            />
            <Card2 iconBarbershop="/icon-barbershop.svg" />
          </section>
        </div>
        <section className={styles.testimonials}>
          <div className={styles.testimonialsContainer}>
            <div className={styles.leftHalf}>
              {/* Conteúdo opcional para a metade esquerda */}
            </div>
            <div className={styles.rightHalf} onClick={onTextContainerClick}>
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
              text1="EMAIL"
              text2="oficinadabarba@email.com"
            />
            <Card5
              card2Gap="10.5px"
              iconEnvelope="/icon-phone.svg"
              iconEnvelopeHeight="26px"
              text1="TELEFONE"
              text2=" (+55) (16) 99332-9723"
              card2Width="271px"
              card2Padding="0px 0px 0px 0px"
              text1MinWidth="111px"
              text1Display="inline-block"
              text2AlignSelf="stretch"
            />
            <Card6 />
          </div>
        </div>
        <div className={styles.divider}>
          <img className={styles.lineIcon} alt="" src="/line-1.svg" />
        </div>
        <div className={styles.copyright}>
          {" "}
          © Copyright Oficina da Barba 2024
        </div>
      </section>
    </div>
  );
};

export default HomePageLogoClienteEFont;
