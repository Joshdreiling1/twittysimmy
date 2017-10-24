angular.module("twittyTrivia").service("questionData", function($http) {
    this.getQuestions = function() {
        return $http.get('https://practiceapi.devmountain.com/api/trivia/questions')
    }

  this.getByDifficulty = function(difficulty) {
      return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/difficulty/' + difficulty)
      console.log("Getting questions with a difficulty of: ", difficulty)
            .then(function(response) {
                console.log(response)
                return response.data
            })
    }
})