import React from 'react';
import {Input} from "./style";

import './Input.css';

import { styled } from '@mui/material/styles';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';



function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 'none',
        fontFamily: "AvertaStandard-Regular",
        padding: '24px 16px',
        right: '2px',
        boxShadow: '0px 5px 15px 0px #dbdbdb',
        border: 'none',
        borderRadius: '8px',
    },
}));

export const InputText = (props) => {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };


    const innerChange = ( e ) => {

        if( props.info ){
            handleTooltipClose();
        }

        if( props.onChange ){
            props.onChange( e )
        }

    }

    let val = props.value
    let fillStile = "input_custom_group";
    if (val) {
        fillStile = "input_custom_group fill";
    }



    let name = uuidv4();

    let reg = () => {};
    if( props.register ){
        reg = props.register;
    }

    let validateM = {};
    if( props.validate ){
        validateM = props.validate;
    }

    if( props.name ){
        name = props.name
    }

    let errors = {};
    if( props.errors ){
        errors = props.errors
    }

    let vis = true;
    if( props.validateIgnore ){
        vis = false

        delete errors[name];
    }

    let errI = false;
    if(errors[name]){
        fillStile = fillStile + " error";
        errI = true;
    }

    if(props.disabled){
        fillStile = fillStile + " disabled";
    }




    return (
        <div className="input_custom_group_wrapper">
        <div className={fillStile}>
            { vis && <Input
                {...reg(name, validateM)}
                {...props}
                onChange={innerChange}

            /> }
            { !vis && <Input
                {...props}

            /> }

            <label>{props.label}</label>
            <div className="line"></div>
            {(props.info && !errI) &&
                <HtmlTooltip
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    sx={{ m: 1 }}
                    placement="bottom-end"
                    title={
                <React.Fragment>
                    <div className="root-custom-tooltip">
                        <div className="ttptitle">
                            <img src="infoi.svg"/> <span>{props.infoTitle}</span>
                            <img
                                onClick={handleTooltipClose}
                                style={{
                                position: 'absolute',
                                right: '23px',
                                    cursor:'pointer',
                                top: '31px',
                            }} src="close.svg"/>
                        </div>
                        <div className="ttpbody">
                            {props.info}
                        </div>
                    </div>


                </React.Fragment>
            }>
                    <img src="infoi.svg" onClick={handleTooltipOpen} className="icon"/>
                </HtmlTooltip>}

            {errI &&
                <img style={{
                    position: 'absolute',
                    top: 'calc(50% - 15px)',
                    right: '18px',
                }} src="Error.svg"/>
            }





        </div>
            {errors[name] && <span className="errorMesage">{errors[name].message}</span>}
        </div>



    );
};


export const InputCheckbox = (props) => {

    let val = props.value
    let fillStile = "checkbox_custom_group";
    if (val) {
        fillStile = "checkbox_custom_group fill";
    }



    let name = uuidv4();

    if( props.name ){
        name = props.name
    }


    return (
        <div className={fillStile}>
            <label className="container">{props.label}
                <Input {...props} type="checkbox"/>
                    <span className="checkmark"></span>
            </label>
        </div>



    );
};
