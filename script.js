const form= document.getElementById("form");
const username=document.getElementById("username")
const password= document.getElementById("password");
const email= document.getElementById("email");
const password2= document.getElementById("password2");

function showError(input,message) //jsjhfhfjfj
//ejnjwfhwu
{
  const formControl=input.parentElement;
  formControl.className='form-control error';
  const small= formControl.querySelector('small');
  small.innerText=message;
}
// sjnchsdjsdnvsklvnjdfvnfbn

form.addEventListener('submit',(e)=>
{
  e.preventDefault();
   if(username.value==="")
  { 
    showError(username,"Username is required")
  }
}) ; 


// function checkInput(){

//   const usernameValue=username.value.trim();
//   const emailValue=email.valuetrim();
//   const passwordValue=password.value.trim();
//   const password2Value=password2.value.trim();

//   if(usernameValue==="")
//   {
//     setErrorFor(username,'username can not be blank')
//     // console.log("hello")
//   }
//   else {
//     setSuccessFor(username);
//   }
// }

// function setErrorFor(input,message)
// {const formControl=input.parentElement;
//   const small=formControl.querySelector('small')
// small.innerText=message;
// formControl.className= 'form-control error'


// }