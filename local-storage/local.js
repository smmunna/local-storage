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
        const userDetailsget = localStorage.getItem('UserDetails');
        const userDetailsgetString = JSON.parse(userDetailsget);

        console.log(userDetailsgetString.email)
        // const {email,password} = userDetailsString;

        const sectionContainer = document.getElementById('section-container');

        const div = document.createElement('div');
        
        div.innerHTML =`
        <div class="text-center">
        <div class="card-body">
            <h5 class="card-title">${userDetailsgetString.email}</h5>
            <p class="card-text">${userDetailsgetString.password}</p>
        </div>
        </div>
        `
        sectionContainer.appendChild(div);
        
    }
    // console.log(emailValue,passwordValue);
}

const reset = () =>{
    localStorage.clear();
}