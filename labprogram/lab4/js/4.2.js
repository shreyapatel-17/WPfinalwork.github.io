function formvalidation(){
    var uname=document.myform.uname;
    var psw=document.myform.psw;
    var phone=document.myform.phone;
    if(valid_uname(uname)) {
    if(valid_psw(psw)) {
    if(valid_phone(phone)) { 
    }
    }
    }
    else{
    return false;
    }
    }
    function valid_uname(uname){
    if (uname[0]=="_" || uname[0]=="@" || (uname[0] <= '9' && uname[0] >= '0')){
    alert("invalid Username");
    uname.focus();
    return false;
    }
    else{
    return true;
    }
    }
    function valid_psw(psw){
    if(psw.length() < 6 || psw.length() > 12){
    alert("invalid password");
    psw.focus();
    return false;
    }
    else{
    return true;
    }
    }
    function valid_phone(phone){
    var regx = /[6789]{1}[0-9]{9}/;
    if(regx.test(phone)){
    return true;
    }
    else{
    alert("invalid phone number");
    phone.focus();
    return false;
    }
   } 