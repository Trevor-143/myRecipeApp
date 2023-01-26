const search_text = document.getElementById('search_text');
const search_btn = document.getElementById('search_btn');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
};

function getRandom () {
    fetch('https://low-carb-recipes.p.rapidapi.com/random', options)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const randomImage = document.querySelector('.randomImage').src = data.image;
        const randomTitle = document.querySelector('.randomTitle').innerHTML = data.name;
        const randomDesc = document.querySelector('.randomDesc').innerHTML = data.description;
    })
}

function getDisplay() {
    fetch('https://low-carb-recipes.p.rapidapi.com/search?name=chicken', options)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
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
}

function getSearched() {
    fetch(`https://low-carb-recipes.p.rapidapi.com/search?name=${search_text.value}`, options)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        let list ='';
        data.forEach(meal => {
            list += `<li>
                        <img src="${meal.image}" alt="">
                        <div>
                            <h3>${meal.name}</h3>
                            <button>Read More</button>
                        </div>
                    </li>`
            document.querySelector('.searched').innerHTML = list;
            
        });
    })
}

search_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (search_text.value !== '' && search_text.value !== null) {
        getSearched()
        document.querySelector('.display').innerHTML = '';
    } else {
        document.querySelector('.searched').innerHTML = '';
        getDisplay()
    }
})


getRandom();
getDisplay();
