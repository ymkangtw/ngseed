angular
    .module('webapp')
    .controller('ContentCtrl', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray) {
        var self = this;

        var ref = new Firebase("https://ngseeddb.firebaseio.com/");
        // GET MESSAGES AS AN ARRAY
        self.messages = $firebaseArray(ref);
        //ADD MESSAGE METHOD
        self.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && self.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = self.name || "anonymous";

                //ADD TO FIREBASE
                self.messages.$add({
                    from: name,
                    body: self.msg
                });

                //RESET MESSAGE
                self.msg = "";
            }
        }
        console.log('ContentCtrl active');
    }]);
