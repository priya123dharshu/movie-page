let Name = document.getElementById("names");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let submitbtn=document.getElementById("Submitbtn");
// let arr =[]

if(submit){
submit.addEventListener("click",(e)=>{
    e.preventDefault()

    window.location.href="index2.html"

    let obj={
        name : Name.value,
        email:email.value,
        password:password.value
    }
    
    arr.push(obj)
    
    localStorage.setItem("register",JSON.stringify(arr));
    
})
}
let loginmail = document.getElementById("email")
console.log(loginmail.value);

let loginpassword=document.getElementById("password")
let arr = JSON.parse(localStorage.getItem("register"))||[];

if(submitbtn){
    submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log('jiii');
    console.log(arr)
        arr.find(a =>{
            console.log(a)
            if(a.email.includes(loginmail.value) && a.password.includes(loginpassword.value)){
            console.log(loginmail.value,loginpassword.value)
            window.location.href='index2.html';
            }

        })
        
    })
}



