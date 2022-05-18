
function microondas(comida,tempo){
   
   let pipoca = 1;
   if(comida == 1 ){
   if (tempo > 2 * 10 && 3 * 10){
     return "Sua pipoca queimou"
   }
   else if (tempo < 10) {
      return "Tempo insuficiente"
   }
   
   else if (tempo > 3 * 10) {
      return "Kabuuumm!!"
   }
   else {
      return "Prato pronto, bom apetite!!!"
   }
  }
  
  let macarrao = 2;
  if (comida == 2){
   if (tempo > 2 * 8 && 3 * 8 ) {
   return "Seu macarrão queimou"
   }
   else if (tempo < 8) {
   return "Tempo insuficiente"
   }
   else if (tempo > 3 *8) {
   return "Kabuuumm!!"
   }
   else {
   return "Prato pronto, bom apetite!!!"
   }
  }



  let carne = 3; 
  if (comida == 3){
   if (tempo > 2 * 15 && 3 * 15 ) {
      return "Sua carne queimou"
   }
   else if (tempo < 15) {
    return "Tempo insuficiente"
 }
 else if (tempo > 3 * 15) {
    return "Kabuuumm!!"
 }
 else {
    return "Prato pronto, bom apetite!!!"
 }
}

let feijao = 4;
if (comida == 4){
   if (tempo > 2 * 12 && 3 * 12 ) {
      return "Seu feijão queimou"
   }
   else if (tempo < 12) {
    return "Tempo insuficiente"
 }
 else if (tempo > 3 * 12) {
    return "Kabuuumm!!"
 }
 else {
    return "Prato pronto, bom apetite!!!"
 }
}

let brigadeiro = 5;
if (comida == 5){
   if (tempo > 2 * 8 && 3 * 8 ) {
      return "Seu brigadeiro queimou"
   }
   else if (tempo < 8) {
    return "Tempo insuficiente"
 }
 else if (tempo > 3 * 8) {
    return "Kabuuumm!!"
 }
 else {
    return "Prato pronto, bom apetite!!!"
 }
}
}

console.log (microondas("1",10));



//1 - Pipoca – 10 segundos (padrão);
//2 - Macarrão – 8 segundos (padrão);
//3 - Carne – 15 segundos (padrão);
//4 - Feijão – 12 segundos (padrão);
//5 - Brigadeiro – 8 segundos (padrão);




