// TO CALL API
// STORE URL IN VARIABLE
const URL = "https://covid19.mathdro.id/api";



// Declare app with your Module
let app = angular.module("MyApp" , []);
// WE CAN MAKE MORE THAN ONE APP IN OUR ANGULAR PROJECT

// Scope Associate with controller -> Controlller Module -> Module -> Front End -> So Directly Associate Scope Variable at Front End 

// Varioable Associate Feature of Angular is Called -> "TWO WAY DATA BINDING"

app.controller("MyController" , 
($scope , $http) => {


    $scope.title = "CoviGuide";
    $scope.description = "Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases. A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.";


    $scope.changeValue = () => {
$scope.title = "Stay Home Stay Safe";
    };

// THIS  APP CONTRLLER IS CALLED WHEN EVER PAGE IS LOADED 
console.log(`App Loaded`);

// SO HERE WE ARE GOING TO CALL API

// Calling Api\
$http.get(URL).then(
    (response) => {
    // SUCCESS CODE HERE
    console.log(response.data);
    $scope.my_data = response.data;
} ,
(error) => {
    console.log(`Error Detected : ${error}`);
}
 );


//  GET COUNTRY DATA
$scope.get_c_data = () => {
console.log($scope.c);
    let country = $scope.c;
    if(country == ""){
        $scope.c_data = undefined;
        return;
    }

$http.get(`${URL}/countries/${country}`)
.then(
    (response) => {
        // SUCCESS CODE HERE
        console.log(response.data);
        $scope.c_data = response.data;
    } ,
    (error) => {
        console.log(`Error Detected : ${error}`);
    }
);


}


});