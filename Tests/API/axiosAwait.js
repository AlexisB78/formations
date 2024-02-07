let apiTest = 'https://swapi.dev/api/planetxs';

async function API(apiUrl){
        try{
                let axios = require("axios");
                let response = await axios.get(apiUrl);
                let values = Object.values(response.data)["0"];
                console.log(values);
	}
	catch(error) { 
        console.error('Errorrrr:', error.response.status);
	};
        console.log("Afficher un message après");
}

API(apiTest);