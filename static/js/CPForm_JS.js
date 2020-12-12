function validate() {
  var username = document.getElementById('inputUsername');
  var password = document.getElementById('inputPass');
  var passwordcheck = document.getElementById('inputPass2');
  var gender = document.getElementById('inputGender');
  var email = document.getElementById('inputEmail');
  var error_count=0;
  if(username.value.length < 3) {
      document.getElementById('showerror1').innerHTML = 'Please enter username of length >=3';
      error_count++;
  }
  if(password.value.length<6){
    document.getElementById('showerror2').innerHTML = 'Please enter a password of length >=6';
    error_count++;
  }
  if(password.value!=passwordcheck.value){
    document.getElementById('showerror3').innerHTML = 'Please ensure both passwords match';
    error_count++;
  }
  var caps=0,small=0,num=0;
  for(var i=0;i<password.value.length;i++){
    if(password.value.charCodeAt(i)>=65 && password.value.charCodeAt(i)<91){
      caps=1;
    }
    if(password.value.charCodeAt(i)>=97 && password.value.charCodeAt(i)<123){
      small=1;
    }
    if(password.value.charCodeAt(i)>=48 && password.value.charCodeAt(i)<58){
      num=1;
    }
  }
  if(caps!=1 || small!=1 || num!=1){
    document.getElementById('showerror4').innerHTML = 'Please enter a password containing atleast one lowercase alphabet, one uppercase alphabet and one number';
    error_count++;
  }
  var at=0;
  for(var i=0;i<email.value.length;i++){
    if(email.value.charAt(i)=='@'){
      at=1;
    }
  }
  if(at!=1){
    document.getElementById('showerror5').innerHTML = 'Please enter a valid email ID';
    error_count++;
  }
  if(gender.value.length==0){
    document.getElementById('showerror6').innerHTML = 'Please enter a gender';
    error_count++;
  }
  if(error_count!=0){
    return false;
  }
  return true;
}
