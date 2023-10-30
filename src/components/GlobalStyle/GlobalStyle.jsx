import React from 'react';
import {GlobalStyled} from "./AllStyles/GlobalStyle.styled";
import {FontStyled} from "./AllStyles/Font.styled";
import {Form} from "./AllStyles/Form.styled";
import {Libs} from "./AllStyles/Libs.styled";
import {Mixin} from "./AllStyles/Mixin.styled";
import {PopUp} from "./AllStyles/PopUp.styled";
import {Vars} from "./AllStyles/Vars.styled";

export const Globalstyle = () => {
  return (
   <>
       <GlobalStyled/>
       <FontStyled/>
       <Form/>
       <Libs/>
       <Mixin/>
       <PopUp/>
       <Vars/>
   </>
  );
}
