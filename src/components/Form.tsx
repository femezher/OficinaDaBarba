import { FunctionComponent } from "react";
import styles from "./Form.module.css";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <section className={[styles.form, className].join(" ")}>
      <div className={styles.cards}>
        <h1 className={styles.contactInputs}>Visite-nos</h1>
        <div className={styles.subjectInput}>
          <div className={styles.subjectContent}>
            <div className={styles.subjectLabel}>
              <div className={styles.subjectPlaceholder}>Barbearia</div>
            </div>
            <div className={styles.subjectDescription}>
              <p className={styles.ruaJacintoFavoreto}>{`Rua Jacinto Favoreto, 301, `}</p>
              <p className={styles.ruaJacintoFavoreto}>São Carlos - Brasil</p>
            </div>
          </div>
        </div>
        <div className={styles.subjectInput}>
          <div className={styles.messageContent}>
            <div className={styles.messageLabel}>
              <div className={styles.subjectPlaceholder}>Contato</div>
            </div>
            <div className={styles.messageDescription}>
              <p className={styles.ruaJacintoFavoreto}>
                oficinadabarba@email.com
              </p>
              <p className={styles.ruaJacintoFavoreto}>
                {" "}
                (+55) (16) 99332-9723
              </p>
            </div>
          </div>
        </div>
        <div className={styles.submitButton}>
          <div className={styles.subjectContent}>
            <div className={styles.buttonLabel}>
              <div className={styles.subjectPlaceholder}>Horários</div>
            </div>
            <div className={styles.subjectDescription}>
              <p className={styles.ruaJacintoFavoreto}>
                Seg - Sex: 9:00 - 19:30
              </p>
              <p className={styles.ruaJacintoFavoreto}>Sab: 9:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.inputs}>
          <div className={styles.name}>
            <div className={styles.nameLabel}>Seu nome</div>
            <input
              className={styles.field}
              placeholder="Nome (ex. Augusto)"
              type="text"
            />
          </div>
          <div className={styles.name}>
            <div className={styles.emailLabel}>Seu Email</div>
            <input
              className={styles.field1}
              placeholder="seuemail@email.com"
              type="text"
            />
          </div>
        </div>
        <div className={styles.subject}>
          <div className={styles.text}>Sujeito</div>
          <input
            className={styles.field2}
            placeholder="Sujeito..."
            type="text"
          />
        </div>
        <div className={styles.subject}>
          <div className={styles.text1}>Sua Mensagem</div>
          <textarea
            className={styles.field3}
            placeholder="Sua mensagem..."
            rows={7}
            cols={28}
          />
        </div>
        <button className={styles.button}>
          <div className={styles.terxt}>ENVIAR</div>
        </button>
      </div>
    </section>
  );
};

export default Form;
