// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {
        res = res.data.articles
        console.log(res);
        let topics = document.querySelectorAll('.tab')
        let tabs = []
        topics.forEach((ele) => {
            tabs.push(ele.textContent)
        })
        tabs[4] = "node"
        tabs.forEach((tab) => {
            console.log(res[tab])
            res[tab].forEach((e) => {
            document.querySelector(".cards-container").appendChild(cardMaker(e))
            })
        })
        
    })
    .catch((err) => {
        debugger
        console.log(err)
        
    })

function cardMaker(article) {
    
    let card = document.createElement('div')
    card.className = 'card'

        let headline = document.createElement('div')
        headline.className = 'headline'
        headline.textContent = article.headline
        headline.addEventListener("click", () =>{
            console.log(headline.textContent)
        })
        headline.style.cursor = "pointer"
        card.appendChild(headline)

        let author = document.createElement('div')
        author.className = 'author'
        card.appendChild(author)

            let imgContainer = document.createElement('div')
            imgContainer.className = 'img-container'
            author.appendChild(imgContainer)

                let authorImg = document.createElement('img')
                authorImg.src = article.authorPhoto
                imgContainer.appendChild(authorImg)

            let name = document.createElement('span')
            name.textContent = `By ${article.authorName}`
            author.appendChild(name)

    return card
} 

