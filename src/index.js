import validator from './validator.js';
//validator.b();


//document.getElementById("numcard").addEventListener("keyup",maskify());

document.getElementById("numcard").addEventListener('keyup',(e)=>{
   let cardCreditNumber=e.target.value; 
   document.getElementById("numcard").value=validator.maskify(cardCreditNumber);
   // validator.guardarnum(e.key);
   // validator.maskify(e);    
   
});

document.getElementById("btn").addEventListener('click',()=>{
   //e.preventDefault(); //esta funcion evita recargar la pagina o ir a otro lado
   // validator.isValid();
   let cardCreditNumber=validator.aux;
    if(validator.isValid(cardCreditNumber)==true){alert("Tarjeta valida")}else {alert("tarjeta Invalida")}
    //if(validator.isValid(cardCreditNumber)==true){message("Valida",'success')}else {message("Invalida",'warning')}
   // return false;
});

/*function message(status,icono){

    Swal.fire({
        icon: icono,
        title: 'Tarjeta '+status,
        text: '',
        timer: 2000,
       // footer: '<a href>Why do I have this issue?</a>'       
      }).then((result) => {
        //window.location = $('#find').attr('href'); 
      })
    
    }

*/


//alert("aqui");
//console.log(validator);