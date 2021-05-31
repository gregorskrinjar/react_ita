import React, { useContext, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { api } from "../../api/axiosUserAuth";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt from 'jwt-decode'

const URL = api.defaults.baseURL;

export function LoginForm(props, { submit }) {
    let history = useHistory();

    // Hook s katerim pridobimo kontekst
    const { switchToSignup } = useContext(AccountContext);

    // Pridobitev vrednosti iz inputov default prazn string
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Z vpisom v input onChange updata stare vrednosti z trenutnimi
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            addLoginUser(email, password);
        } catch (e) {
            //alert(e.message);
        }
    };

    const saveToLocalStorage = () => {
        // console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') !== null) {
            history.push('/Home')
        } else { 
            //alert('no');
        }
    }

    const addLoginUser = async (email, password) => {

        await axios.post(`${URL}/login`, { email, password })
            .then(res => {
                const token = res.data.token;
                console.log(JSON.stringify(res.data.email) + " to je ime")
                const user = jwt(token);
                localStorage.setItem('token', token);
                saveToLocalStorage();
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }

    return (
        <BoxContainer>
            <FormContainer onSubmit={handleSubmit} >
                <Input data-testid="email" type="email" onChange={handleChangeEmail} value={email.email} placeholder="Email" autocomplete="off" />
                <Input data-testid="password" type="password" onChange={handleChangePassword} value={password.password} placeholder="Geslo" autocomplete="off" />
                <SubmitButton data-testid="submit" id="submit" type="submit">Prijava</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={5} />
            <MutedLink href="#">Ali ste pozabili geslo?</MutedLink>
            <Marginer direction="vertical" margin="2.6em" />
            <MutedLink href="#">
                Ali še nimate računa? <BoldLink href="#" onClick={switchToSignup}>Registracija</BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}