const submit = () =>{
    const email = document.getElementById('email');
    const emailValue = email.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    if(emailValue=='' && passwordValue==''){
        alert('Nothing entered here...!');
    }
    // console.log(emailValue,passwordValue);
}