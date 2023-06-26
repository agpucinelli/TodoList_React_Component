import { ButtonContainer } from "./styles";
import React from "react";


function Button({label, onClick}) {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
      
    );
  } 
  
  export default Button;