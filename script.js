// the button which contains the "search_btn" as its classname is assinged to "btn" 
let btn = document.querySelector(".search_btn");
// btn is get the function named "process" by using the addEventListener
btn.addEventListener("click", process);
// the function "process" is created
function process() {
  // the key we got from the website by login and assinged to the "key"
  let key = "IyHKdUmPfb4aXHswfa8eoSejy1cuG9s9yIlsco9okfo";
// the value is get from searchbar and assinged to search 
  let search = document.querySelector(".search").value;
  //joing the key ,url and searchvalue
  let api = `https://api.unsplash.com/search/photos/?client_id=${key}&query=${search}`;
  let result = document.querySelector(".result");
  //to clear the before search contains
  result.innerHTML = ``;
// fetching the api
  fetch(api)
    .then((data) => {
      return data.json();
    })
    .then((data1) => {
      data1.results.forEach((element) => {
        let img = document.createElement("img");

        img.src = element.urls.regular;
        img.className = "imgbox";
        result.append(img);
      });
    });
}
