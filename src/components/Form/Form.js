import text from "./text";
import {PrimaryButton} from "../Style/Button-style";
import {
    InputsContainer,
    MainContainer,
    RadioContainer,
    Title,
    InfoContainer,
    ButtonContainer,
    PolicyContainer,
    CheckboxContainer
} from "./style";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {InputText, InputCheckbox} from "../Form/Input";

import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function Form(props) {

    const {register, formState: {errors}, handleSubmit} = useForm();

    let navigate = useNavigate();

    const onSubmit = (data) => {
        props.cambiaCorreo(data.email);
        navigate("/success");
    };

    let stateChe = {
        todo: {
            eat: true,
            sleep: false,
            react: true
        }
    };

    const [valueNombre, setValueNombre] = useState("");
    const [valueRFC, setValueRFC] = useState("");
    const [valueMail, setValueMail] = useState("");
    const [valueExtranjero, setValueExtranjero] = useState("");
    const onChangeNombre = e => {
        const input = e.currentTarget.value;
        if (/^[a-zA-Z\s]*$/.test(input) || input === "") {
            setValueNombre(input);
        }
    };
    const onChangeRFC = e => {
        const input = e.currentTarget.value;
        if (/^[a-zA-Z-0-9]+$/.test(input) || input === "") {
            setValueRFC(input);
        }
    };

    const dChangeRFC = e => {
        register("RFC", {
            shouldUnregister: true,
        })
        if( '' == valueRFC ){
            setValueRFC('NA');
        }

    };
    const onChangeMail = e => {
        const input = e.currentTarget.value;
        if (/^\S*$/.test(input) || input === "") {
            setValueMail(input);
        }
    };

    const onChangeNex = e => {
        const input = e.currentTarget.value;

        //dChangeRFC();

        if( input === '' ){
            setValueExtranjero("1");
        }else{
            setValueExtranjero("");
        }

    };

    return (
        <MainContainer>
            <form id="fiscales" onSubmit={handleSubmit(onSubmit)}>
                <Title>{text.title}</Title>
                <InputsContainer>
                    <div className="Errors">


                            <InputText type="text" name="RFC" label={text.RFCinput} disabled={valueExtranjero == '1'} className="rfc"
                                       register={register}
                                       maxLength={13}
                                       validate={{
                                           required: "Ingresa tu RFC",
                                           maxLength: {value: 13, message: "Ingresa los 12 / 13 caracteres de tu RFC"},
                                           minLength: {value: 12, message: "ingresa los 12 / 13 caracteres de tu RFC"}
                                       }}
                                       validateIgnore={valueExtranjero == '1'}
                                       errors={errors}
                                       value={valueRFC}
                                       onChange={onChangeRFC}
                            />

                        <CheckboxContainer className="input_custom_group_wrapper">
                            <InputCheckbox value={valueExtranjero} label={text.nationality} onChange={onChangeNex} checked={valueExtranjero}/>
                        </CheckboxContainer>
                        {valueExtranjero == '1' &&
                            <div className="input_custom_group_wrapper">
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth className={errors.pais ? 'input-custom-select input-custom-select-error' : 'input-custom-select'}>

                                        <InputLabel id="lcoun">{text.country}</InputLabel>
                                        <Select
                                            labelId="lcoun"
                                            id="lcoun-select"
                                            {...register('pais', {required: "Selecciona el país"})}
                                        >
                                            <MenuItem value={1}>Pais 1</MenuItem>
                                            <MenuItem value={2}>Pais 2</MenuItem>
                                            <MenuItem value={3}>Pais 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                {errors.pais && <span className="errorMesageG">{errors.pais.message}</span>}
                            </div>
                        }


                            <InputText type="text" name="name" label={text.nameinput}

                                       register={register}
                                       validate={{required: "Ingresa nombre o razón social"}}
                                       errors={errors}
                                       maxLength={30}
                                       value={valueNombre}
                                       onChange={onChangeNombre}
                            />


                        {valueExtranjero == '' &&

                                <InputText type="text" name="name" label={text.cpinput}

                                           register={register}
                                           validate={{required: "Ingresa el código postal"}}
                                           errors={errors}
                                           maxLength={6}
                                           value={valueNombre}
                                           onChange={onChangeNombre}
                                />

                        }
                        <div className="input_custom_group_wrapper">
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth className={errors.CFDI ? 'input-custom-select input-custom-select-error' : 'input-custom-select'}>
                                    <InputLabel id="demo-simple-select-label">{text.CFDIinput}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        {...register('CFDI', {required: "Selecciona el CFDI"})}
                                    >

                                        <MenuItem value={1}>G01 - Adquisición de mercancías</MenuItem>
                                        <MenuItem value={2}>G02 - Devoluciones, descuentos o bonificaciones</MenuItem>
                                        <MenuItem value={3}>G03 - Gastos en general</MenuItem>
                                        <MenuItem value={4}>I01 - Construcciones</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            {errors.CFDI && <span className="errorMesageG">{errors.CFDI.message}</span>}
                        </div>
                        <div>
                            <InputText type="email" name="email" label={text.emailinput}
                                       register={register}
                                       validate={{required: "Ingresa tu correo electrónico"}}
                                       errors={errors}
                                       maxLength={50}
                                       value={valueMail}
                                       onChange={onChangeMail}
                            />
                        </div>
                    </div>
                    <div className="input_custom_group_wrapper w90im">
                        <p>{text.invoiceMailing}</p>
                    </div>
                </InputsContainer>
                <InfoContainer className="input_custom_group_wrapper w90im color_dgf">
                    <InputCheckbox label={text.saveInfo}/>
                </InfoContainer>
                <PolicyContainer className="input_custom_group_wrapper w80im">Consulta la <a href="/privacypol"> {text.privacyPolicy}</a></PolicyContainer>
                <ButtonContainer>
                    <Link to="/preview">
                        <PrimaryButton color="#FC4C02" background="#FCF1ED" hover="#f5e5df" type="button">
                            {text.preview}
                        </PrimaryButton>
                    </Link>
                    <PrimaryButton color="White" background="#FC4C02" hover="#ef4b06" >
                        {text.generateInvoice}
                    </PrimaryButton>
                </ButtonContainer>
            </form>
        </MainContainer>
    );
}

export default Form;
