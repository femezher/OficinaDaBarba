import { FunctionComponent } from "react";
import Header from "../components/Header";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Testimonials2 from "../components/Testimonials2";
import Brands from "../components/Brands";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./HomePageLogoClienteEFont1.module.css";

const HomePageLogoClienteEFont1: FunctionComponent = () => {
  return (
    <div className={styles.homePageLogoClienteEFont}>
      <header className={styles.heroBackground} />
      <Header />
      <section className={styles.services}>
        <div className={styles.img}>
          <img className={styles.imgIcon} alt="" src="/img@2x.png" />
        </div>
        <div className={styles.text}>
          <div className={styles.aboutTitle}>Nossos</div>
          <h1 className={styles.aboutSubtitle}>SERVIÇOS</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <img
              className={styles.iconScissors}
              loading="lazy"
              alt=""
              src="/icon-scissors.svg"
            />
            <div className={styles.serviceNames}>CORTE DE CABELO</div>
            <div className={styles.serviceDetails}>
              <p className={styles.cortesModernosE}>{`Cortes modernos e `}</p>
              <p className={styles.cortesModernosE}>{`personalizados para `}</p>
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
            <div className={styles.serviceNames}>TRATAMENTO CAPILAR</div>
            <div className={styles.text21}>
              <p
                className={styles.cortesModernosE}
              >{`Tratamentos que renovam `}</p>
              <p className={styles.eFortalecem}>e fortalecem seus cabelos.</p>
            </div>
          </div>
          <div className={styles.card4}>
            <img
              className={styles.iconUstache}
              loading="lazy"
              alt=""
              src="/icon--ustache.svg"
            />
            <div className={styles.serviceNames}>ESTILIZAÇÃO</div>
            <div className={styles.text22}>
              <p
                className={styles.cortesModernosE}
              >{`Finalização e penteados `}</p>
              <p className={styles.cortesModernosE}>{`que combinam com `}</p>
              <p className={styles.cortesModernosE}>o seu visual.</p>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.exploreMais}>EXPLORE MAIS</div>
        </button>
      </section>
      <section className={styles.counter}>
        <Card1
          card1Width="236px"
          iconRazor="/icon-razor-1.svg"
          iconRazorWidth="39.2px"
          counterValues="+3000"
          frameDivAlignSelf="unset"
          counterLabels="BARBAS FEITAS"
          counterValuesAlignSelf="unset"
        />
        <Card1
          card1Width="272px"
          iconRazor="/icon-scissors-1.svg"
          iconRazorWidth="46.2px"
          counterValues="+10000"
          frameDivAlignSelf="stretch"
          counterLabels="CORTES DE CABELO"
          counterValuesAlignSelf="unset"
        />
        <Card2
          iconBarbershop="/icon-barbershop.svg"
          barbershopLabelAlignSelf="stretch"
          barbershopLabelTextAlign="center"
          card3Width="unset"
          frameDivJustifyContent="flex-start"
          barbershopValueWidth="unset"
          barbershopValueDisplay="unset"
        />
      </section>
      <section className={styles.testimonials}>
        <div className={styles.testimonialTitle}>
          VEJA UM POUCO DOS NOSSOS TRABALHOS
        </div>
        <div className={styles.testimonialSubtitle}>
          <h1 className={styles.text23}>GALERIA</h1>
        </div>
      </section>
      <Testimonials2 />
      <Brands
        line="/line.svg"
        img1="/img-11@2x.png"
        img2="/img-21@2x.png"
        img3="/img-31@2x.png"
        img11="/img-1-1@2x.png"
        img21="/img-2-1@2x.png"
        img31="/img-3-1@2x.png"
        brandSubtitleHeight="unset"
        logosMinHeight="unset"
        brandsMargin="unset"
        brandsPosition="unset"
        brandsTop="unset"
        brandsLeft="unset"
        textPadding="unset"
      />
      <section className={styles.footer}>
        <div className={styles.text3}>
          <div className={styles.text4}>
            <h1 className={styles.text13}>CONTATE-NOS</h1>
          </div>
          <div className={styles.cards1}>
            <Card4
              infoTitlesTextDecoration="none"
              card1Width="unset"
              card1Padding="unset"
              infoTitlesDisplay="unset"
              infoTitlesMinWidth="unset"
              infoDetailsAlignSelf="unset"
              infoDetailsWidth="308px"
            />
            <Card5
              card2Gap="15.5px"
              iconEnvelope="/icon-envelope.svg"
              iconEnvelopeHeight="20px"
              text1="EMAIL"
              text2="oficinadabarba@email.com"
              card2Width="unset"
              card2Padding="unset"
              text1MinWidth="unset"
              text1Display="unset"
              text2AlignSelf="unset"
            />
            <Card5
              card2Gap="10.5px"
              iconEnvelope="/icon-phone.svg"
              iconEnvelopeHeight="26px"
              text1="TELEFONE"
              text2=" (+55) (16) 99332-9723"
              card2Width="unset"
              card2Padding="unset"
              text1MinWidth="unset"
              text1Display="unset"
              text2AlignSelf="unset"
            />
            <Card6
              card4Width="unset"
              card4Padding="unset"
              frameDivPadding="unset"
              text1MinWidth="unset"
              scheduleLabelAlignSelf="unset"
              scheduleLabelWidth="264px"
            />
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

export default HomePageLogoClienteEFont1;
