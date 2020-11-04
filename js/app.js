/*
submitBtn=document.querySelector("#submitbtn")
submitBtn.addEventListener("click",function(){
   userName=document.querySelector('.name')
   userSurname=document.querySelector('.surname')
   userEmail=document.querySelector('.mail')
   userBirthDate=document.querySelector('.birthDate')
   userSurname=document.querySelector('.userSurname')
   userEmail=document.querySelector('.userEmail')
   userBirthDate=document.querySelector('.userBirthDate')
   user=new UserData(userName.value,userSurname.value,userEmail.value,userBirthDate.value
*/

data=[]

class UserData{
   constructor(_name,_surname,_date,_gender,_email,_phone,_select){
       this.Name=_name;
       this.Surname=_surname;
       this.Date=_date;
       this.Gender=_gender;
       this.Email=_email;
       this.Phone=_phone;
       this.Select=_select;
       
   }

   showData(){
       console.log(this.Name + " / " +this.Surname + "/"+ this.Date + " / " +this.Gender + "/" + this.Email + " / " +this.Phone + "/" + this.Select) 
   }
}



function validate() {
      
   if( document.myForm.name.value == "" ) {
      alert( "Adinizi yazin!" );
      document.myForm.name.focus() ;
      return false;
   }
   if( document.myForm.surname.value == "" ) {
      alert( "Soyadinizi yazin" );
      document.myForm.surname.focus() ;
      return false;
   }

   if(document.myForm.birthdate.value==""){
      alert("Tevelludu yazin");
      document.myForm.birthdate.focus();
      return false
   }


   if( document.myForm.mail.value ==""){
      alert("Emailinizi yazin");
      document.myForm.mail.focus();
      return false;
   }


   


   var num=document.myForm.number.value


   if(num.length<=6){
      alert("Telefon nomreniz yazin ve ya nomre duzgun deyil");
      document.myForm.number.focus();
      return false;
   }

   if( document.myForm.numbers.value === "-1" ) {
      alert( "Secim xanasini tenzimleyin" );
      
      return false;
   }
   return( true );


   
}




function emailvalidation(){
   var emailID = document.myForm.EMail.value;
   post1 = emailID.indexOf("@");
    post2= emailID.lastIndexOf(".");
   
   if (post1 < 1 || ( post2 - post1 < 2 )) {
      alert("Mail dogru deyi")
      document.myForm.mail.focus() ;
      return false;
   }
   return true;
}


submitBtn=document.querySelector("#submitbtn");
submitBtn.addEventListener("click", function()
{
   userName=document.querySelector('.name');
   userSurname=document.querySelector('.surname');
   userBirthDate=document.querySelector('.birthdate');
   userGender=document.querySelector('.gender');
   userEmail=document.querySelector('.mail');
   userNumber=document.querySelector('.number');
   userSelect=document.querySelector('.numbers');
  
   user= new UserData(userName.value, userSurname.value, userBirthDate.value, userGender.value, userEmail.value, userNumber.value, userSelect.value);

   data.push(user);
   user.showData();
   
   console.log(userName.value + " / " +userSurname.value + "/"+ userBirthDate.value + " / " +userGender.value + "/" + userEmail.value + " / " + userNumber.value+ "/" + userSelect.value) 

})