import React, { useContext, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { api } from "../../api/axiosUserAuth";
import axios from "axios";

const URL = api.defaults.baseURL;
//console.log("MOJ URL: " + URL);

export function SignupForm(props) {
    const { switchToSignin } = useContext(AccountContext);

     // Pridobitev vrednosti iz inputov default prazn string
     const [ime, setIme] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [passwordCheck, setPasswordCheck] = useState("");
 
     // Z vpisom v input onChange updata stare vrednosti z trenutnimi
     const handleChangeIme = (event) => {
        setIme(event.target.value);
    };

     const handleChangeEmail = (event) => {
         setEmail(event.target.value);
     };
 
     const handleChangePassword = (event) => {
         setPassword(event.target.value);
     };

     const handleChangePasswordCheck = (event) => {
        setPasswordCheck(event.target.value);
    };
 
     const handleSubmit = (e) => {
         e.preventDefault();

         addUser(ime, email, password);
         
         if(password !== passwordCheck) {
             //alert("Se ne ujemata!");
         } else {
             
            //console.log(ime, email, password, passwordCheck)
         }
     };

     const addUser = async (ime, email, password) => {
        
        const response = await axios.post(`${URL}/register`, {ime, email, password}).catch((err) => {
          console.log("Error: ", err);
        });
    }

    return (
        <BoxContainer>
            <FormContainer onSubmit={handleSubmit} >
                <Input data-testid="name" type="text" placeholder="Ime" onChange={handleChangeIme} value={ime.ime} />
                <Input data-testid="email" type="email" placeholder="Email" onChange={handleChangeEmail} value={email.email} />
                <Input data-testid="password" type="password" placeholder="Geslo" onChange={handleChangePassword} value={password.password} />
                <Input data-testid="passwordCheck" type="password" placeholder="Potrdite Geslo" onChange={handleChangePasswordCheck} value={passwordCheck.passwordCheck} />
                <SubmitButton data-testid="submit" id="submit" type="submit">Prijava</SubmitButton>
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Ali ste pozabili geslo?</MutedLink>
            <Marginer direction="vertical" margin="2.6em" />
            <MutedLink href="#">
               Po registraciji se prijavite tukaj? <BoldLink href="#" onClick={switchToSignin} >Prijava</BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}