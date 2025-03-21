let addmoviebtn=document.getElementById('add-movie')
let card = document.querySelector(".movie-card");
let adult = document.getElementsByClassName("card-Adult");
let search = document.getElementById("search-bar")
let searchicon=document.querySelector("fa-search")
let genres = document.getElementsByClassName("card-genre")
let addbtn = document.getElementById("add-movie");
let date = document.getElementById("date")
let addmovie = document.getElementById("form-container")
let titles = document.getElementById("title")
let title = document.querySelector(".card-title")
let submitbtn=document.getElementById('formsubmitbtn')
let userRequest = new XMLHttpRequest();



submitbtn.addEventListener('click',()=>{

    addmovie.style.display = "none"
    userRequest.open("post","https://mimic-server-api.vercel.app/movies")
    userRequest.setRequestHeader("Content-type", "application/json");

    userRequest.onload = () => {
        if (userRequest.status >= 200 && userRequest.status < 300) {
            fetchData()
        }
        else {
            console.log("not found");
        }
    }

    let obj = {
       title:titles.value,
       original_language:language.value,
       release_date:date.value,
       vote_average:Rating.value,
       adult:adult.value?adult.checked:false,
       genre_ids:genres.value,
       poster_path:url.value

    }

    console.log(titles.value);

    userRequest.send(JSON.stringify(obj))
})



function fetchData() {
    let userRequest = new XMLHttpRequest();

    userRequest.open("GET","https://mimic-server-api.vercel.app/movies");
    userRequest.responseType = "json"

    userRequest.onload = () => {
    console.log(userRequest.response)
        userRequest.response.forEach(n => {
            display(n)
    })}
    userRequest.send();
}


fetchData()



function display(n){

    if(adult==true)
    {
        n.adult="18+";
    }
    else{
        n.adult="16+"
    }
        let genreid={
            28: "Action",
            12: "Adventure",
            35: "Comedy",
            80: "Crime",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            10749: "Romance",
            53: "Thriller"
        };
    
       n.genre_ids=n.genre_ids.map(idvalue => genreid[Number(idvalue)] || "unknown");

    card.innerHTML +=  `
    <div id="card"> 
    <img src=${n.poster_path}alt="Movie Poster">
     <div id="card-body">
       <p class="card-title"><span>Title: </span> ${n.title}</p>
       <p class="card-text"><span>Language: </span>${n.original_language}</p>
       <p class="card-text"><span>Date:</span> ${n.release_date}</p>
       <p class="card-text" style="color: yellow;"><span>Rating: </span>${n.vote_average}/10 <i class="fa-solid fa-star" style="color: #FFD43B;"></i></p>
       <p class="card-Adult"><span>Adult: </span> ${n.adult}</p>
       <p class="card-genre"><span>Genre: </span> ${n.genre_ids}</p>
   </div>
   </div>`          
   }


addmoviebtn.addEventListener('click',()=>{
    document.getElementById('form-container').style.display="block"
})
