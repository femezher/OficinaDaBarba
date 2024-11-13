import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Brands1 from "../components/Brands1";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./ContactUs.module.css";

const ContactUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIncioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onServiosTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onSobreNsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <header className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.menu}>
          <a className={styles.irPara}>Ir Para</a>
          <div className={styles.topoParent}>
            <a className={styles.topo}>Topo</a>
            <div className={styles.navigationPlaceholders} />
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
          <a className={styles.sobreNs} onClick={onSobreNsTextClick}>
            Sobre nós
          </a>
          <a className={styles.contateNos}>Contate-nos</a>
          <a className={styles.galeria}>Galeria</a>
        </div>
        <h1 className={styles.text}>CONTATE-NOS</h1>
      </header>
      <Form />
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
        <div className={styles.text1}>
          <div className={styles.text2}>
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

export default ContactUs;
