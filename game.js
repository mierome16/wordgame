function startGame(){

$(document).ready(function () {


            var commonWords = [
                "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
                "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
                "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
                "what", "all", "were", "we", "when", "your", "can", "said", "there",
                "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
                "up", "other", "about", "out", "many", "then", "them", "these", "so",
                "some", "her", "would", "make", "like", "him", "into", "time", "has",
                "look", "two", "more", "write", "go", "see", "number", "no", "way",
                "could", "people", "my", "than", "first", "water", "been", "call",
                "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
                "come", "made", "may", "part"
            ];


            var alphabet = 'abcdefghijklmnopqrstuvwxyz'

            let filtered = commonWords.filter((word) => word.length >= 3)
            let word = filtered[Math.floor(Math.random() * filtered.length)].split('')

            let underScore = word.map(n => '_')


            console.log(word, underScore)
            $('#answer').html(underScore.join(' '))
            let lives = 5

            let buttons = alphabet.split('').map(l => `<button>${l.toUpperCase()}</button>`).join('')
            $('#buttons').html(buttons)
            $('#buttons').on('click', 'button', function (e) {
                let letter = $(this).html()
                $(this).attr('disabled', true)

                guess(letter.toLowerCase());
            })

            function guess(letter) {
                if (word.includes(letter)) {
                    word.forEach((l, i) => {
                        if (l === letter){
                            underScore[i]=letter
                        }

                        $('#answer').html(underScore.join(' '))
                    })
                    if(!underScore.includes('_')){
                        $('#container').html(`<h1 class="winner">YOU WIN!!!</h1><img class="winnerimg" src="https://media2.giphy.com/media/f99y5olcAXbQk/giphy.gif?cid=790b76115d3000f37049305259d43db2&rid=giphy.gif"></img><button id="reloadwin" onclick="location.reload()">Play Again!</button>`)
                    }
                } else {
                    if (lives > 1) {
                        lives--
                        $('#lives').html(`You have ${lives} lives left!`) }
                     else {
                        gameover();
                    }

                }
            }
            $('#lives').html(`You have ${lives} lives left!`)

            function gameover() {
                $('#container').html(`<h1 class="gameover">GAME OVER!!!</h1><img class="loserimg" src="https://media2.giphy.com/media/xUOxf4PRwLJurDgIA8/giphy.gif?cid=790b76115d2fff754a6d41584506f652&rid=giphy.gif"></img><button id="reloadlose" onclick="location.reload()">Play Again!</button>`) 
             }

})
}
startGame();

function replay(){
    var playAgain = confirm("Do you want to play again?");
    if(playAgain == true){
        startGame();
    }
}