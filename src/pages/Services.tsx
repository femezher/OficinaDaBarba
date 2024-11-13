import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Services1 from "../components/Services1";
import Prices from "../components/Prices";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import styles from "./Services.module.css";

const Services: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIncioTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSobreNsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContateNosTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onGaleriaTextClick = useCallback(() => {
    navigate("/galeria");
  }, [navigate]);

  return (
    <div className={styles.services}>
      <header className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.menu}>
          <a className={styles.irPara}>Ir Para</a>
          <div className={styles.topoParent}>
            <a className={styles.topo}>Topo</a>
            <div className={styles.navigationBackgrounds} />
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
          <a className={styles.servios}>Serviços</a>
          <a className={styles.sobreNs} onClick={onSobreNsTextClick}>
            Sobre nós
          </a>
          <div className={styles.contactGallery}>
            <a className={styles.contateNos} onClick={onContateNosTextClick}>
              Contate-nos
            </a>
            <a className={styles.galeria} onClick={onGaleriaTextClick}>
              Galeria
            </a>
          </div>
        </div>
        <h1 className={styles.heroCaption}>SERVIÇOS</h1>
      </header>
      <Services1 />
      <Prices />
      <section className={styles.testimonials}>
        <div className={styles.reviews}>
          <div className={styles.text}>
            <div className={styles.testimonialTitle}>
              O QUE FALAM SOBRE NÓS?
            </div>
            <h1 className={styles.testimonialSubtitle}>REVIEWS DE CLIENTES</h1>
          </div>
          <div className={styles.cards}>
            <Card3
              card1Width="356px"
              img="/img-1@2x.png"
              reviewerCommentsAlignSelf="stretch"
              servioImpecvelEAmbiente={`"Serviço impecável e ambiente `}
              acolhedorSaMuitoSatisfeito="acolhedor. Saí muito satisfeito "
              comOResultado={`com o resultado."`}
              name1="AUGUSTO, SÃO CARLOS"
              nameHeight="unset"
              nameDisplay="unset"
            />
            <Card3
              card1Width="296px"
              img="/img-2@2x.png"
              reviewerCommentsAlignSelf="stretch"
              servioImpecvelEAmbiente={`"Profissionais excelentes! `}
              acolhedorSaMuitoSatisfeito="Atendimento rápido e "
              comOResultado={`de muita qualidade."`}
              name1="FERNANDO, SÃO PAULO"
              nameHeight="unset"
              nameDisplay="unset"
            />
            <Card3
              card1Width="unset"
              img="/img-3@2x.png"
              reviewerCommentsAlignSelf="unset"
              servioImpecvelEAmbiente={`"Experiência incrível! `}
              acolhedorSaMuitoSatisfeito="O corte ficou perfeito e "
              comOResultado={`o cuidado foi excepcional."`}
              name1="FELIPE, SÃO CARLOS"
              nameHeight="unset"
              nameDisplay="unset"
            />
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.text1}>
          <div className={styles.text2}>
            <h1 className={styles.footerBrand}>CONTATE-NOS</h1>
          </div>
          <div className={styles.cards1}>
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

export default Services;
