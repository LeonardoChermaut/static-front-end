window.onload = function() {
    getUsers();
}

function getUsers() {
    fetch("https://randomuser.me/api/?results=5").then(resultado => {
        return resultado.json();
    }).then(response => {
        let cards = document.getElementsByClassName('card')
        response.results.forEach((user, index) => {
            let card = cards[index]
            let photo = card.getElementsByClassName('card-img-top')[0];
            photo.src = user.picture.large;

            let names = card.getElementsByClassName('card-title')[0];
            names.innerHTML = `${user.name.first} ${user.name.last}`

            let description = card.getElementsByClassName('card-text')[0];
            description.innerHTML = ` ${user.location.city}<br>${user.location.country}<br>${user.location.timezone.description}`
        });
    })
}