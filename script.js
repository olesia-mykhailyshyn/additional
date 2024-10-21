function getJokes(number) {
    fetch('https://official-joke-api.appspot.com/jokes/random/' + number)
        .then(response => response.json())
        .then(data => showJokes(data))
        .catch(error => console.log('Error getting jokes:', error));
}

function showJokes(jokes) {
    let jokeDiv = document.getElementById('jokes');
    jokeDiv.innerHTML = '';
    jokes.forEach(function(joke) {
        let jokeBlock = document.createElement('div');
        jokeBlock.className = 'joke';
        jokeBlock.innerHTML = '<div class="setup">' + joke.setup + '</div><div class="punchline">' + joke.punchline + '</div>';
        jokeDiv.appendChild(jokeBlock);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('fetchJokesBtn');
    let numberInput = document.getElementById('jokeCount');

    button.addEventListener('click', function() {
        let number = numberInput.value;
        getJokes(number);
    });

    getJokes(25);
});

// For creating this page, I used ChatGPT a lot because, for me, it is a completely new language. I do not know the syntax; however, I have learned a lot from it