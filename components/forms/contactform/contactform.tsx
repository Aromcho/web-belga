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
import { useMergeState } from "helpers/hooks";
import { sendContact } from "services";

export interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  
  const [data, setData] = useMergeState({
    name: '',
    email: '',
    phone: '',
    direction: '',
    property: '',
    message: '',
    url: '',
    subject: "Cotacto desde la home"
  })

  const [error, setErrror] = useMergeState({
    name: false,
    email: false,
    phone: false,
  })

  const [status, setStatus] = useMergeState({
    status: '',
    text: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if(error.name || error.email || error.phone){ 
      setStatus({
        status: "error",
        text: "Alguno de los campos tienen información incorrecta"
      })
      return false;
    }
    sendContact(data)
    .then(() => {
      setStatus({
        status: "success",
        text: "Tu contacto ha sido enviado"
      })
      setData({
        name: '',
        email: '',
        phone: '',
        direction: '',
        property: '',
        message: '',
      })
    })
    .catch(() => {
      setStatus({
        status: "error",
        text: "Ha ocurrido un error, reintente en unos minutos"
      })
    })
  }
  
  return (
    <ContactFormContainer className={className}>
      <TitleWithIcon text="¿Cómo te podemos ayudar?" className="black" />
      <ContactFormWrapper>
        <WrapperInputs>
          <Input className="input--form" placeHolder="Nombre *" type="text" name="name" value={data.name} onChange={(e) => setData({name: e.currentTarget.value})} error={error.name} onBlur={(e) => setErrror({name: e.currentTarget.value === ""})}/>

          <Input className="input--form" placeHolder="Email *" type="email" value={data.email} onChange={(e) => setData({email: e.currentTarget.value})} error={error.email}  onBlur={(e) => setErrror({email: e.currentTarget.value === ""})} />

          <Input className="input--form" placeHolder="Teléfono *" type="tel" value={data.phone} onChange={(e) => setData({phone: e.currentTarget.value})} error={error.phone}  onBlur={(e) => setErrror({phone: e.currentTarget.value === ""})} />
        </WrapperInputs>

        <Textarea className="textarea--form" placeHolder="Mensaje" value={data.message} onChange={e => setData({ message: e.currentTarget.value })}   />

        {status.status && <FeedbackMsg
          className={status.status}
          msg={status.text}
        />}
      </ContactFormWrapper>

      <button onClick={() => setSend("send")}>Enviar</button>
      <button onClick={() => setSend("sending")}>Enviando</button>
      <button onClick={() => setSend("sent")}>Enviado</button>
    </ContactFormContainer>
  );
};
