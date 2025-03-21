let Name = document.getElementById("names");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let submitbtn=document.getElementById("Submitbtn");
// let arr =[]

if(submit){
submit.addEventListener("click",(e)=>{
    e.preventDefault()

    let obj={
        name : Name.value,
        email:email.value,
        password:password.value
    }
    
    arr.push(obj)
    
    localStorage.setItem("register",JSON.stringify(arr));
    console.log("Hiiiiiiiiiiiiiiii");
    
})
}
let loginmail = document.getElementById("email")
console.log(loginmail.value);

let loginpassword=document.getElementById("password")
let check=false;
let arr = JSON.parse(localStorage.getItem("register"))||[];

if(submitbtn){
    submitbtn.addEventListener("click",(e)=>{
        e.preventDefault();
    console.log('jiii');
    console.log(arr)
        arr.forEach(a =>{
            if(a.email==loginmail.value && a.password==loginpassword.value){
            console.log('hi')
            }
        })

      if(check==true){window.location.href='index2.html'}
      else{alert('invalid');return}  
    })
}

