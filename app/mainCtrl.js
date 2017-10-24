angular.module('twittyTrivia').controller('mainCtrl', function($scope, questionData) {
    $scope.questions = []
       function difficultySetting(questions){
           questions.map(function(question){
               switch (question.setting) {
                   case 1:
                   question.settingLabel = "Easy"
                   break;
                   case 2:
                   question.settingLabel = "Medium"
                   break;
                   case 3:
                   question.settingLabel = "Hard"
                   break;
               }
           })
       }
      
      
      
      
      
      
       $scope.getQuestions = function() {
           questionData.getQuestions().then(function(response){
               console.log('fdhsfk')
               $scope.questions = response.data
            })
        } 
        $scope.getByDifficulty = function(difficulty) {
            console.log('checking by difficulty:', difficulty)
            questionData.getByDifficulty(difficulty).then(function(response){
                $scope.questions = response.data
             })
         } 
    })