import React from "react";

import { Button } from "components/button";
import { Input } from "components/input";
import { Textarea } from "components/textarea";
import { FeedbackMsg } from "components/forms/feedbackmsg";

import {
  FormContainer,
  FormWrapper,
  TitleForm,
  WrapperInputs,
} from "./venderform.styles";
import { useMergeState } from "helpers/hooks";
import { sendContact } from "services";

export interface ContactFormProps {
  className?: string;
}

export const VenderForm = ({ className }: ContactFormProps) => {
  const [data, setData] = useMergeState({
    name: "",
    email: "",
    phone: "",
    direction: "",
    property: "",
    message: "",
    url: "",
    subject: "Quiero vender",
  });

  const [error, setError] = useMergeState({
    name: false,
    email: false,
    phone: false,
  });

  const [status, setStatus] = useMergeState({
    status: "",
    text: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError({
      name: data.name === "",
      email: data.name === "",
      phone: data.name === "",
    });
    if (
      (error.name || error.email || error.phone,
      data.name === "",
      data.name === "",
      data.name === "")
    ) {
      setStatus({
        status: "error",
        text: "Revise los campos requeridos",
      });
      return false;
    }
    sendContact(data)
      .then(() => {
        setStatus({
          status: "success",
          text: "Tu contacto ha sido enviado",
        });
        setData({
          name: "",
          email: "",
          phone: "",
          direction: "",
          property: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus({
          status: "error",
          text: "Ha ocurrido un error, reintente en unos minutos",
        });
      });
  };

  return (
    <FormContainer className={className}>
      <TitleForm>ESTÁS A UN PASO DE SABER EL VALOR DE TU PROPIEDAD.</TitleForm>
      <FormWrapper>
        <WrapperInputs>
          <Input
            className="input--form"
            placeHolder="Nombre *"
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => setData({ name: e.currentTarget.value })}
            error={error.name}
            onBlur={(e) => setError({ name: e.currentTarget.value === "" })}
          />

          <Input
            className="input--form"
            placeHolder="Email *"
            type="email"
            value={data.email}
            onChange={(e) => setData({ email: e.currentTarget.value })}
            error={error.email}
            onBlur={(e) => setError({ email: e.currentTarget.value === "" })}
          />

          <Input
            className="input--form"
            placeHolder="Teléfono *"
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ phone: e.currentTarget.value })}
            error={error.phone}
            onBlur={(e) => setError({ phone: e.currentTarget.value === "" })}
          />
        </WrapperInputs>

        <WrapperInputs>
          <Input
            className="input--form half"
            placeHolder="Dirección"
            type="text"
            value={data.direction}
            onChange={(e) => setData({ direction: e.currentTarget.value })}
          />

          <Input
            className="input--form half"
            placeHolder="Tipo de Propiedad"
            type="text"
            name="property"
            value={data.property}
            onChange={(e) => setData({ property: e.currentTarget.value })}
          />
        </WrapperInputs>

        <Textarea
          className="textarea--form"
          placeHolder="Mensaje"
          value={data.message}
          onChange={(e) => setData({ message: e.currentTarget.value })}
        />

        {status.status && (
          <FeedbackMsg className={status.status} msg={status.text} />
        )}
      </FormWrapper>
      <Button
        text="Enviar"
        type="secondary shine"
        className="button--send"
        onClick={handleSubmit}
      />
    </FormContainer>
  );
};
