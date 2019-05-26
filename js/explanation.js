//Explanations Variables
var favColor = 'green'; //this is a string
var myFavColors = ['blue', 'red', 'green']; //This is a array variable - contains a list

var numOfFavColors = 3; //this is a value
var hasFavColors = false; //yes or no
var richObject = {
    firstName: 'Rich',
    lastName: 'Armstrong',
    favColors: ['blue', 'red', 'green'],

    age: 103,
    isMale: true
};

//Explanation Functions
/* Can be expressed as
function whatIsMyFavColor () {
};
*/
var whatIsMyFavColor = function () {
    return 'blue'; //anything after return does not run
    console.log('this will not show')
};
//More stuff

if ('this is true' == 'than run the next line') {
    console.log('true')
} else if ('this is false' =='false this is') {
    console.log('false')
} else {
    console.log('this is true')
}

