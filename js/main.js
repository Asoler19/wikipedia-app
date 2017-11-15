const searchTerm = document.querySelector('#searchTerm')
const searchButton = document.querySelector('#searchButton')
const randomButton = document.querySelector('#randomButton')
const output = document.querySelector('.output')

const WIKI_LINK = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'


let ajaxSearch = function(){
    // console.log("Ready for ajax search") testing 
    output.innerHTML = ""

    const API_URL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`

    $.ajax({
        type: "Get",
        url: API_URL,
        async: false,
        dataType: "json",
        success: function(data){
            //data[0]is search term
            //data[1]is titles
            //data[2]is content
            //data[3]is URL
            console.log(data)
            //Create a for loop that adds onto the output element a group of list items that is appended to the list. Each list item needs a class called listItem where in your CSS you will style your list items using this class. Add an anchor tag that its href is url link given back from the data object. The content of the anchor tag should be the title(data[1]). Then inside of the <li> item, it's content should be in a paragraph (<p>) that contains the data[2] object.
            for(let i in data[1]){
                output.innerHTML += `
                    <li class="listItem">
                    <a href="${data[3][i]}">${data[1][i]}</a>
                    <p>${data[2][i]}</p>
                    </li>
                `
            }
        },

        error: function(err){
            console.log("There was an error")

        }
    })
}

let randomSearch = () =>{
    window.open(`${WIKI_LINK}${randomEndpoint}`)
}

searchButton.addEventListener('click', ajaxSearch )
randomButton.addEventListener('click', randomSearch )