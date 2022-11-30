import { valida } from "./validaciones.js";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  // if(input.id==="birth"){
    input.addEventListener("change", (input) => {
      valida(input.target);
    });
  // }
  input.addEventListener("blur", (input) => {
 
    valida(input.target);
  });
});

