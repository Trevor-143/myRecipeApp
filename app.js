const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

fetch('https://low-carb-recipes.p.rapidapi.com/search?name=meat', options)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        let list ='';
        data.forEach(meal => {
            list += `<li>
                        <img src="${meal.image}" alt="">
                        <div>
                            <h3>${meal.name}</h3>
                            <button>Read More</button>
                        </div>
                    </li>`
            document.querySelector('.display').innerHTML = list;            
        }); 
    })