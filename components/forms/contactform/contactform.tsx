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
  full?: boolean;
}

export const ContactForm = ({ className, full }: ContactFormProps) => {
  const [state, setState] = React.useState("send");
  const [display, setDisplay] = React.useState(false);

  const [data, setData] = useMergeState({
    name: "",
    email: "",
    phone: "",
    direction: "",
    property: "",
    message: "",
    url: "",
    subject: "Contacto desde la web",
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

  React.useEffect(() => {
    setData({url: window.location.href});
    setDisplay(true);
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError({
      name: data.name === "",
      email: data.email === "",
      phone: data.phone === "",
    });
    if (
      (error.name || error.email || error.phone,
      data.name === "",
      data.email === "",
      data.phone === "")
    ) {
      setStatus({
        status: "error",
        text: "Revise los campos requeridos",
      });
      return false;
    }
    setState("sending");
    sendContact(data)
      .then(() => {
        setState("sent");
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
      })
      .finally(() => {
        setTimeout(() => {
          setState("gone");
          setTimeout(() => {
            setState("send");
          }, 1000);
        }, 1500);
      });
  };

  if(!display) return null

  return (
    <ContactFormContainer className={classes(className, { full })}>
      <TitleWithIcon text="¿Cómo te podemos ayudar?" className="black" />
      <ContactFormWrapper>
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

        <Textarea
          className="textarea--form"
          placeHolder="Mensaje"
          value={data.message}
          onChange={(e) => setData({ message: e.currentTarget.value })}
        />

        {status.status && (
          <FeedbackMsg className={status.status} msg={status.text} />
        )}
      </ContactFormWrapper>

      <Button
        type="secondary shine"
        className={classes("button--send", { full })}
        sendStatus={state}
        onClick={handleSubmit}
      />
    </ContactFormContainer>
  );
};
