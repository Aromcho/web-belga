import React from "react";

import { Button } from "components/button";
import { Input } from "components/input";
import { Textarea } from "components/textarea";
import { FeedbackMsg } from "components/forms/feedbackmsg";
import { TitleWithIcon } from "components/titlewithicon";

import { ContactFormContainer, ContactFormWrapper } from "./contactform.styles";

export interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  return (
    <ContactFormContainer className={className}>
      <TitleWithIcon text="¿Cómo te podemos ayudar?" className="black" />
      <ContactFormWrapper>
        <Input className="input--form" placeHolder="Nombre" type="text" />

        <Input className="input--form" placeHolder="Email" type="email" />

        <Input className="input--form" placeHolder="Teléfono" type="tel" />

        <Textarea className="textarea--form" placeHolder="Mensaje" />

        {/* <FeedbackMsg
          className="success"
          msg="Alguno de los campos tienen información incorrecta"
        /> */}
      </ContactFormWrapper>
      <Button text="Enviar" type="secondary shine" className="button--send" />
    </ContactFormContainer>
  );
};
