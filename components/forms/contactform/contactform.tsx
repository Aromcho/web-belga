import React from "react";

import { Button } from "components/button";
import { Input } from "components/input";
import { Textarea } from "components/textarea";
import { FeedbackMsg } from "components/forms/feedbackmsg";
import { TitleWithIcon } from "components/titlewithicon";

import {
  ContactFormContainer,
  ContactFormWrapper,
  WrapperInputs,
} from "./contactform.styles";
import { classes } from "helpers";

export interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [send, setSend] = React.useState("send");
  return (
    <ContactFormContainer className={className}>
      <TitleWithIcon text="¿Cómo te podemos ayudar?" className="black" />
      <ContactFormWrapper>
        <WrapperInputs>
          <Input className="input--form" placeHolder="Nombre" type="text" />

          <Input className="input--form" placeHolder="Email" type="email" />

          <Input className="input--form" placeHolder="Teléfono" type="tel" />
        </WrapperInputs>

        <Textarea className="textarea--form" placeHolder="Mensaje" />

        {/* <FeedbackMsg
          className="success"
          msg="Alguno de los campos tienen información incorrecta"
        /> */}
      </ContactFormWrapper>

      {/* <button onClick={() => setSend("send")}>Enviar</button>
      <button onClick={() => setSend("sending")}>Enviando</button>
      <button onClick={() => setSend("sent")}>Enviado</button> */}
      <Button
        type="secondary shine"
        className="button--send"
        sendStatus={send}
      />
    </ContactFormContainer>
  );
};
