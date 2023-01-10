
// fetch default
fetch('https://www.omdbapi.com/?i=tt3896198&apikey=91d7750a&s=avengers')
    .then(response => response.json())
    .then(response => {
        let card = '';
        const movie = response.Search;
        movie.forEach(m => card += showCard(m))
        const movieContainer = document.querySelector('.data-video')
        movieContainer.innerHTML = card;
        
        const buttonModal = document.querySelectorAll('.button-modal');
        buttonModal.forEach(btn => {
            btn.addEventListener('click', function() {
                let id = this.dataset.imdbid;
                fetch('https://www.omdbapi.com/?i=tt3896198&apikey=91d7750a&is=' + id)
                    .then(response => response.json())
                    .then(data => {
                        const modalBody = document.querySelector('.modal-body');
                        modalBody.innerHTML = showDetail(data);
                    });
            });
        });
    });
// fetch opsional
const buttonClick = document.querySelector('.button-click');
buttonClick.addEventListener('click', function() {
    const inputButton = document.querySelector('.input-button').value;
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=91d7750a&s=' + inputButton) 
        .then(response => response.json())
        .then(response => {
            let card = '';
            const movie = response.Search;
            movie.forEach(m => card += showCard(m))
            const movieContainer = document.querySelector('.data-video')
            movieContainer.innerHTML = card;

            const buttonModal = document.querySelectorAll('.button-modal');
            buttonModal.forEach(btn => {
                btn.addEventListener('click', function() {
                    let id = this.dataset.imdbid;
                    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=91d7750a&is=' + id)
                        .then(response => response.json())
                        .then(data => {
                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = showDetail(data);
                        });
                });
            });
        });
    }
    
);


function showCard(m) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6>${m.Year}</h6>
                    <button type="button" class="btn btn-primary button-modal" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid ="${m.imdbID}">
                        Search
                    </button>
                    </div>
                </div>
            </div>`
}

function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Artist : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}