
// Get the references to the active parts of your html:
// - reference to buttons
const links = document.querySelectorAll('header nav ul li a');
// - reference to dynamic-content
const dc = document.querySelector('.dynamic-content');
// - set up the path to the initial content to be loaded
let url = './partials/content-home.html';

const loadContent = (urlPlaceholder) => {

    fetch(urlPlaceholder)
    .then(response => {
        if (response.statusText === 'OK') {
            return response.text();
        }
    
        throw new Error(response.statusText);
    })
    .then(data => dc.innerHTML = data)
    .catch(err => dc.innerText = err.message);

} 

// call the function that handles ajax
loadContent(url);




// create event-handler that will run when click happens
const selectContent = e => {
      // prevent the default behaviour of link tag
        e.preventDefault();

        url = e.target.href;

        loadContent(url);

}


// register both buttons (actually links) for click event
// register all 3 buttons for click event
for (let btn of links) {
    btn.addEventListener('click', selectContent);
}
