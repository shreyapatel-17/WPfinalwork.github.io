function formvalidation(){
    var name=document.myform.name;
    var m_email=document.myform.email;
    var p_phone=document.myform.phone;
    if(check_name(name)){
    if(check_email(m_email)){
    if (check_phone(p_phone)){
    }
    }
    }
    else{
    return false;
    }
   }
   function check_name(name){
    var letters=/^[A-Za-z]+$/;
    if (name.value.match(letters)){
    return true;
    } 
    else{
    alert("name should only consist of alphabets");
    fname.focus();
    return false;
    }
   }
   function check_email(email){
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email.value.match(mailformat))
   {
   return true;
   }
   else
   {
   alert("You have entered an invalid email address!");
   email.focus();
   return false;
   }
   }
   function check_phone(phone){
   var phoneno = /^\d{10}$/;
   if(phone.value.match(phoneno))
    {
    return true;
    }
    else
    {
    alert("invalid Number");
    return false;
    }
   }
   