import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Barbers from "../components/Barbers";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Brands1 from "../components/Brands1";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIncioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServiosTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onContateNosTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onGaleriaTextClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <header className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.menu}>
          <a className={styles.irPara}>Ir Para</a>
          <div className={styles.topoParent}>
            <a className={styles.topo}>Topo</a>
            <div className={styles.menuItems} />
          </div>
          <div className={styles.contedoParent}>
            <a className={styles.contedo}>Conteúdo</a>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.rodapParent}>
            <a className={styles.rodap}>Rodapé</a>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.menuParent}>
            <a className={styles.menu1}>Menu</a>
            <div className={styles.frameChild} />
          </div>
          <img
            className={styles.burgerMenuIcon}
            loading="lazy"
            alt=""
            src="/burger-menu@2x.png"
          />
          <a className={styles.incio} onClick={onIncioTextClick}>
            Início
          </a>
          <a className={styles.servios} onClick={onServiosTextClick}>
            Serviços
          </a>
          <a className={styles.sobreNs}>Sobre nós</a>
          <div className={styles.contateNosWrapper}>
            <a className={styles.contateNos} onClick={onContateNosTextClick}>
              Contate-nos
            </a>
          </div>
          <a className={styles.galeria} onClick={onGaleriaTextClick}>
            Galeria
          </a>
        </div>
        <h1 className={styles.heroDescription}>SOBRE NÓS</h1>
      </header>
      <Barbers />
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
          iconBarbershop="/icon-barbershop1.svg"
          barbershopLabelAlignSelf="unset"
          barbershopLabelTextAlign="left"
          card3Width="unset"
          frameDivJustifyContent="flex-start"
          barbershopValueWidth="unset"
          barbershopValueDisplay="unset"
        />
      </section>
      <Brands1
        line="/line.svg"
        img1="/img-11@2x.png"
        img2="/img-21@2x.png"
        img3="/img-31@2x.png"
        img11="/img-1-1@2x.png"
        img21="/img-2-1@2x.png"
        img31="/img-3-1@2x.png"
      />
      <section className={styles.footer}>
        <div className={styles.text}>
          <div className={styles.text1}>
            <h1 className={styles.footerDescription}>CONTATE-NOS</h1>
          </div>
          <div className={styles.cards}>
            <Card4
              infoTitlesTextDecoration="unset"
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
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
        </div>
        <div className={styles.copyright}>
          {" "}
          © Copyright Oficina da Barba 2024
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
