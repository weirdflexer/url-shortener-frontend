import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./_Section.module.scss";

interface ISection {
  title: string;
  description?: string;
  url: string;
  validateMessage?: string;
  validateFn?: (input: string) => boolean;
  stateFn: Dispatch<SetStateAction<string>>;
  buttonInfo: string;
  fn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Section = ({
  title,
  stateFn,
  url,
  description,
  fn,
  buttonInfo,
  validateMessage,
  validateFn = () => true,
}: ISection) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(validateFn(url));
  }, [url, validateFn]);

  useEffect(() => {
    if (isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isValid]);

  return (
    <section className={styles.section + " container"}>
      <div className={styles.section__inner}>
        <h2 className={styles.section__title}>{title}</h2>
        <form className={styles.section__form}>
          <input
            className={styles.form__input}
            type="text"
            name="url"
            id="url"
            placeholder="Enter the link here"
            value={url || ""}
            onChange={(e) => stateFn(e.target.value)}
          />
          <button
            className={styles.form__button}
            disabled={isDisabled}
            type="submit"
            onClick={fn}
          >
            {buttonInfo}
          </button>
        </form>
        {!url || isValid ? (
          <></>
        ) : (
          <div className={styles.form__warning}>{validateMessage}</div>
        )}
        {description ? (
          <div
            className={styles.section__description}
            style={{ whiteSpace: "pre-line" }}
          >
            {description}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Section;
