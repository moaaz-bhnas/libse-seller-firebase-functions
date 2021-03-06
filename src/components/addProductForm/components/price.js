import { memo } from "react";
import { ButtonsContainer } from "../style";
import { InputWithPrepending } from "../../input";
import { PreviousButton } from "../../button";
import styled from "styled-components";
import { title3 } from "../../title/style";
import { rectButton } from "../../button/style";
import useTranslation from "../../../hooks/useTranslation";
import translations from "../../../translations/strings/addProductPage";

const Information = ({ price, setPrice, onSubmit, goToPreviousStep }) => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t(translations, "price")}</Title>

      <InputWithPrepending
        half
        prependingText={t(translations, "egp")}
        label="Price"
        placeholder={t(translations, "pricePlaceholder")}
        min="1"
        value={price}
        onChange={(event) => setPrice(Number(event.target.value))}
        required
      />

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <SubmitButton type="submit" onClick={onSubmit}>
          {t(translations, "add")}
        </SubmitButton>
      </ButtonsContainer>
    </>
  );
};

// Styles
const Title = styled.h3`
  ${title3}
`;

const SubmitButton = styled.button`
  ${rectButton}
`;

export default memo(Information);
