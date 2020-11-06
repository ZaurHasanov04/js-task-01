
// function validation(){
  
//    userName=document.querySelector('.name');
//    userSurname=document.querySelector('.surname');
//    userBirthDate=document.getElementById("birthday");
//    userGender=document.querySelector('.gender');
//    userEmail=document.querySelector('.mail');
//    userNumber=document.querySelector('.number');
//    userSelect=document.querySelector('.numbers');

//    console.log(userName.value + " / " + userSurname.value + " / " + userBirthDate.value  + "-"+ userGender.value + "-" + userEmail.value + "-" + userNumber.value + "-" + userSelect.value)


// }



function validation(){
  
   userName=document.querySelector('.name');
   userSurname=document.querySelector('.surname');
   userBirthDate=document.getElementById("birthday");
   userGender=document.querySelector('.gender');
   userEmail=document.querySelector('.mail');
   userNumber=document.querySelector('.number');
   userSelect=document.querySelector('.numbers');

}

function phone(){
   if(document.myForm.number.value==""){
      alert("Nomrenizi yazin")
      document.myForm.number.focus();
   }

   if(document.myForm.number.value.length<6){
      alert("Nomre duzgun deyil")
   }

   if(document.myForm.numbers.value=="txt"){
      alert("Sec")
      return false;
   }
   return(true)
}


function myform(){
   if(document.myForm.name.value==""){
      alert("Adinizi yazmamisiz !")
      document.myForm.name.focus();
      return false;
   }

   if(document.myForm.surname.value==""){
      alert("Soyadinizi yazin")
      document.myForm.surname.focus();
      return false;
   }

   var a = document.getElementById("birthday");
   var defaultval=a.defaultValue;
   var realval=a.value

   if(defaultval == realval){
      alert("Birthday yaz")
      return false;
   }

   if(document.getElementsByName("gender")[0].checked==false && document.getElementsByName("gender")[1].checked==false){
      alert("Cins bolmesin tamamlayin")
      return ;
   }

   if(document.myForm.mail.value==""){
      alert("Mailinizi yazin")
      document.myForm.mail.focus();
      return false;
   }

   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.mail.value)){
      return true;
   }

   else{ 
      alert("mailinizi duz yazin @ ve noqte olmalidi");
      document.myForm.mail.focus();
      return false;
   } 

  

}

function check(){
   if(myform()==true && phone()==true){
      validation();
      console.log(userName.value + " / " + userSurname.value + " / " + userBirthDate.value  + "-"+ userGender.value + "-" + userEmail.value + "-" + userNumber.value + "-" + userSelect.value)
 
   }
}


      // console.log(userName.value + " / " + userSurname.value + " / " + userBirthDate.value  + "-"+ userGender.value + "-" + userEmail.value + "-" + userNumber.value + "-" + userSelect.value)
   






