$(document).ready(function(){
    var commonWords = [
      "the","of","and","a","to","in","is","you","that","it","he",
      "was","for","on","are","as","with","his","they","I","at","be",
      "this","have","from","or","one","had","by","word","but","not",
      "what","all","were","we","when","your","can","said","there",
      "use","an","each","which","she","do","how","their","if","will",
      "up","other","about","out","many","then","them","these","so",
      "some","her","would","make","like","him","into","time","has",
      "look","two","more","write","go","see","number","no","way",
      "could","people","my","than","first","water","been","call",
      "who","oil","its","now","find","long","down","day","did","get",
      "come","made","may","part"
    ];
    
    
    var words = commonWords.filter((item)=> item.length >= 3)
    
    var word = words[Math.floor(Math.random() * words.length)]
    console.log(word)
    
    var answer = ''
    
    for(let i = 0; i < word.length; i++){
      answer += '_'
    
    }
    
    var turns = 8
    
    $('.answer').html(answer)
    $('.turns').html('Turns: ' + turns)
    
    
    var guesses = []
    $('#guess').on('change', function(){
      var char = $('#guess').val()
      char = char.toLowerCase()
    
      if (guesses.indexOf(char) === -1) {
        guesses.push(char)
    
    
        $('.guesses').html("You're guesses: " + guesses)
        
        for(let i = 0; i < answer.length; i++){
          if(word.charAt(i) === char){
            wordArr = answer.split('')
            wordArr[i] = char
            answer = wordArr.join('')
          }
        }
    
        
        turns--
    
        var result = ''
    
        if(turns >= 0 && answer == word){
          result = 'You Won!!!!'
          var interval = setInterval(function(){
            var red = Math.floor(Math.random() * 255)
            var green = Math.floor(Math.random() * 255)
            var blue = Math.floor(Math.random() * 255)
            $('#container').css('background-color', `rgb(${red}, ${green}, ${blue}`)
          }, 30)
          setTimeout(function(){
            clearInterval(interval)
            $('#container').css('background-color', 'white')
    
          }, 5000)
        }else if(turns > 0 && answer !== word){
          result = 'Guess again...'
          $('input').val('')
        }else{
          result = 'You lost. The word is: ' + word
          $('#container').css('background-image', 'url("https://media.giphy.com/media/gKsJUddjnpPG0/giphy.gif")')
        }
    
        
      }
      $('.answer').html(answer)
        $('.turns').html('Turns: ' + turns)
        $('.result').html(result)
    })
    })