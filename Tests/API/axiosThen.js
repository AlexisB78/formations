let apiTest = 'https://swapi.dev/api/planets';

function API(apiUrl){
    let axios = require("axios");
    axios.get(apiUrl) 
    .then(response => {
        let values = Object.values(response.data)["0"];
        console.log(values);
	}) 
	.catch(error => { 
        console.error('Error:', error.response.status);
	});
    console.log("Afficher un message avant");
}

API(apiTest);