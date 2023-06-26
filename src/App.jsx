import Button from "./Components/Button";
import { Container } from "./Components/Button/styles";


import React from 'react';
import ReactDOM from 'react-dom';



const removeDiv = (inputValue) => {  
  var elemento = document.getElementById(inputValue); // ID do elemento HTML onde deseja adicionar o texto  
  elemento.remove()
}



const criaDiv = () => {  
  let inputValue = prompt("Qual atividade?")
  if(inputValue === "") {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomWord = '';  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWord += characters[randomIndex];  
      inputValue = randomWord;
    }
  }

  
  const cssClasses = [
    "class1",
    "class2",
    "class3",
    "class4",
    "class5"
  ];

  function getRandomClass() {
    const randomIndex = Math.floor(Math.random() * cssClasses.length);
    return cssClasses[randomIndex];
  }
  
  const randomClass = getRandomClass();
  

  var dataAtual = new Date();
  var horario = dataAtual.toLocaleTimeString();
  var data = dataAtual.toLocaleDateString();
  var elemento = document.getElementById("eita"); // ID do elemento HTML onde deseja adicionar o texto
  var div = document.createElement("div");
  var texto = `${inputValue} ==> ${horario} ${data}` // Texto que deseja adicionar
  div.id = inputValue
  div.className = randomClass
 
  
  

  div.textContent = texto; // Adicionar o texto à div

  elemento.appendChild(div);
  //div.innerHTML = "<Container />";
  //div.innerHTML = `<div class="styleTxt"> ${texto} </div>`;
  ReactDOM.render(
    <div>
      
      <Button label= {texto} onClick={() => removeDiv(inputValue) } />
      
    </div>,
    div
  );
  
}


function App() {
  return (
    <div className="App">
     
      <Container>
      <Button label= "LISTA DE ATIVIDADES" onClick={() => criaDiv() } />
      </Container>
      <Container>
      <div id="eita"></div>
      </Container>
   
    </div>
  );
}

export default App; 
