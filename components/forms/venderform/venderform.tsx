import React from "react";

import { Button } from "components/button";
import { Input } from "components/input";
import { Textarea } from "components/textarea";
import { FeedbackMsg } from "components/forms/feedbackmsg";
import { propertiesSelectOptions } from "helpers/tokko";
import { Select } from "components/select";

import { FormContainer, FormWrapper, TitleForm } from "./venderform.styles";

export interface ContactFormProps {
  className?: string;
}

export const VenderForm = ({ className }: ContactFormProps) => {
  return (
    <FormContainer className={className}>
      <TitleForm>A UN PASO DE TU TASACIÓN.</TitleForm>
      <FormWrapper>
        <Input className="input--form" placeHolder="Nombre*" type="text" />

        <Input className="input--form" placeHolder="Email*" type="email" />

        <Input className="input--form" placeHolder="Teléfono*" type="tel" />

        <Input className="input--form half" placeHolder="Dirección" type="text" />

        <Select
          className="input--form input--select half "
          options={propertiesSelectOptions}
          isSearchable={false}
          placeholder="Tipo de propiedad"
        />

        <Textarea className="textarea--form" placeHolder="Mensaje" />

        {/* <FeedbackMsg
          className="success"
          msg="Alguno de los campos tienen información incorrecta"
        /> */}
      </FormWrapper>
      <Button text="Enviar" type="secondary" className="button--send" />
    </FormContainer>
  );
};
