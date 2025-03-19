let crad = document.querySelector(".movie-card");
let adult = document.getElementsByClassName("card-Adult");
let search = document.getElementById("search-bar")
let searchicon=document.querySelector("fa-search")
let genres = document.getElementsByClassName("card-genre")
let addbtn = document.getElementById("add-movie");
let title = document.getElementById("title")
let language = document.getElementById("language")
let date = document.getElementById("date")
let Rating = document.getElementById("Rating")
let Adult = document.getElementById("Adult")
let genre = document.getElementById("genre")
let url = document.getElementById("url")
let titles = document.querySelector("card-title")
let userRequest = new XMLHttpRequest();
function addUser() {

    btn.style.display = "block"
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
       title:title.value,
       original_language:language.value,
       release_date:date.value,
       vote_average:Rating.value,
       adult:adult.value,
       genre_ids:genre.value,
       poster_path:url

    }

    userRequest.send(JSON.stringify(obj))
    // console.log(obj)
}



function fetchData() {
    let userRequest = new XMLHttpRequest();

    userRequest.open("GET","https://mimic-server-api.vercel.app/movies");
    userRequest.responseType = "json"

    userRequest.onload = () => {
        console.log(userRequest.response);
        
        
        // if (userRequest.status == 200){
        userRequest.response.forEach(n => {
            // console.log(n);
            if(adult==true)
            {
                n.adult="18+"
            }
            else{
                n.adult="16+"
            }


            // if(genres){
            //     let generid={
            //         28: "Action",
            //         12: "Adventure",
            //         35: "Comedy",
            //         80: "Crime",
            //         18: "Drama",
            //         10751: "Family",
            //         14: "Fantasy",
            //         36: "History",
            //         10749: "Romance",
            //         53: "Thriller"
            // };

            // n.genre_ids=n.genre_ids.map(a =>{
            //     return generid[a];
                
            // })
            // }

         crad.innerHTML +=  `
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
        })
    }
    userRequest.send();
}


fetchData()


// function searchicon(){
//     console.log("hii");
    
//     // search= search.value
//     let card = document.getElementById("card")
    
//     console.log(titles)
//     // card.forEach(movie =>{
        
//     // })
//     // if(n.title==search.textContent)
//     // {
//     //     return crad;
//     // }
//     // else
//     // {
//     //     return "Not Found"
//     // }
// }
// searchicon()



function addmovie() {
    window.location.href="addmovie.html";
   
}

   
addmovie() 