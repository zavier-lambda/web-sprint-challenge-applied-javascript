// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement("div")
    header.className = "header"

        let date = document.createElement("span")
        date.className = "date"
        date.textContent ="March 28, 2020"
        header.appendChild(date)

        let pageTitle = document.createElement("h1")
        pageTitle.textContent = "Lambda Times"
        header.appendChild(pageTitle)

        let temp = document.createElement("span")
        temp.className = "temp"
        temp.textContent = "98°"
        header.appendChild(temp)
        
        return header
}
document.querySelector(".header-container").appendChild(Header());