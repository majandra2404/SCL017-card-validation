let aux=[];//nos guarda el numero de la tarjeta
//Funcion maskify nos enmascara los digitos ingresados por el usuario menos los ultimos 4
function maskify(cardCreditNumber){

  let card=cardCreditNumber;
  aux.push(card[card.length-1]);
  card=card.split("");
  let hideNum=[];
  for(let i=0; i<card.length;i++){
      if(i<card.length-4){
          hideNum.push("#");
      }else {
          hideNum.push(card[i]);
      }
  }
 return hideNum.join("");
 //document.getElementById("numcard").value=hideNum.join("");

  }
  //Funcion isValid  se encuentra algoritmo de Luhn
function isValid(cardCreditNumber) {
  let booleano="";
   let card=cardCreditNumber;
     //let number=card.split("");

     let numReverse=card.reverse();
      
    var num;  
      
     numReverse[0]=parseInt(numReverse[0]);
      for (var i=1; i<card.length; i++){  
          if((i+1)%2==0){                               
              num=parseInt(numReverse[i])*2; 
              if(num>=10){         
                  num=num.toString(); 
                  num=num.split("");            
                  num=parseInt(num[0])+parseInt(num[1]);
              }
              numReverse[i]=parseInt(num); 
          }    
          numReverse[i]=parseInt(numReverse[i]);
        }
   
  var acum =  numReverse.reduce(function(a,b){return a+b}) ;
 //si nuestro acumulador dividido entre 10 , y su resto es igual a 0 es true caso contrario false
  
   if ((acum)%10==0){
      booleano=true;
   }
   else{
    booleano=false;
   }
   return booleano;
}
 

 /* function  guardarnum(k)
  {
    var newcard=document.getElementById("numero").value;	
    newcard=newcard.split("");
    
    newcard.push(k);
    document.getElementById("numero").value=newcard.join("");
   // console.log(newcard);

 }*/

const validator = {
  aux,
  maskify,
  isValid
  
  
  //guardarnum
  };

export default validator;