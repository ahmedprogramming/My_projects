let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    let searchValue = "india";
    let result = document.querySelector(".result")
    let finalUrl = `https://countriesnow.space/api/v0.1/countries/population/cities`;
    fetch(`${finalUrl}`).then((respone) => respone.json()).then((data) => {
        console.log(data)
        result.innerHTML = `
        <div class="image">
        <h2>${searchValue}</h2>
      </div>
      <ul>
        <li>Capital: <span>${data[0]}</span></li>
        <li>Continent: <span>name</span></li>
        <li>Population: <span>number</span></li>
        <li>Currency: <span>name</span></li>
        <li>Common Languages: <span>name</span></li>
      </ul>
    </div>`
    })
})