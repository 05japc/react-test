import text from "./text";
import { PrimaryButton } from "../Style/Button-style";
import {
  MainContainer,
  Subtitle,
  Title,
  ImageContainer,
  ButtonTitleContainer,
  Footer,
  Notice,
  SuperContainer,
  NoticeWrapper
} from "./style";


import { InputText } from "../Form/Input";


import bags from "./bags.svg";
import warning from "./warning.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from  "react-router-dom"
import { useState } from "react";


function Landing(props) {
  const { register, formState: {errors}, handleSubmit } = useForm();
  let navigate = useNavigate();

  const OnSubmit = (data) => {
    
    const numero= data.recibo;
    props.cambiaNumero(numero);
    navigate("/billing");
  };

  const [value, setValue] = useState("");
  const onChange = e => {
    const input = e.currentTarget.value;
    console.error(errors);
    if (/^[a-zA-Z-0-9]+$/.test(input) || input === "") {
      setValue(input);
    }
  };

  

  return (
    <SuperContainer>
    <MainContainer>
      <form id="form" onSubmit={handleSubmit(OnSubmit)}>
        <div>
          <Title>{text.title}</Title>
          <Subtitle>{text.subtitle}</Subtitle>
        </div>
        <div>
          <InputText
            label={text.info}
            name="recibo"
            info="Encuentra el número de recibo en la parte inferior del correo que recibiste."
            infoTitle="Número de recibo"
            maxLength={7}
            register={register}
            validate={{ required: "Ingresa el número de tu recibo" , maxLength: {value:7, message:"Máximo 7 caracteres"}, minLength: {value: 7, message: "ingresa los 7 caracteres de tu recibo"}}}
            errors={errors}
            value={value}
            onChange={onChange}/>

         <PrimaryButton background="#F53B02" color="white">
            {text.button}
          </PrimaryButton>
        </div>
      </form>
      <ImageContainer>
        <img src={bags} alt="landing" />
      </ImageContainer>
    </MainContainer>
    <Footer>
    <PrimaryButton background="#FC4C02" color="white" type="submit" form="form" >
            {text.button}
          </PrimaryButton>
    </Footer>
      <NoticeWrapper>
        <Notice>
          <img src={warning} alt="warning"></img>
          <p>{text.notice}</p>
        </Notice>
      </NoticeWrapper>
    </SuperContainer>
  );
}

export default Landing;
