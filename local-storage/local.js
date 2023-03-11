const submit = () =>{
    const email = document.getElementById('email');
    const emailValue = email.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    if(emailValue=='' && passwordValue==''){
        alert('Nothing entered here...!');
    }
    else{
        const userDetails = {
            email:emailValue,
            password:passwordValue
        }
       
        const userDetailsString = JSON.stringify(userDetails)
        // console.log(userDetailsString)

        // const userDetailsObj = JSON.parse(userDetailsString);
        // console.log(userDetailsObj);
        localStorage.setItem('UserDetails',userDetailsString);

        // getting the item as obj
    }
    // console.log(emailValue,passwordValue);
}