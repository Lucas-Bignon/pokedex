const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=150";

/**
 * Try to parse a response as JSON data
 * ok
 */
function transformToJson (response) {
    if (response.ok) {
        return response.json();
    }

    throw Error("Content not loaded");
}

/**
 * Clear the list of all its items
 * nope
 */
function emptyList () {
    // ...
}

/**
 * Create an item, fetch its data and setup event listener
 * ok
 */
function createItem (pokemon) {
    // Create a li tag
    const item = document.createElement("li");
    const img = document.createElement("img");
    
    // ...
    fetch(pokemon.url).then(transformToJson).then((data) => {
        // ...
        item.textContent = data.name;
        img.src = data.sprites.front_default;
        list.appendChild(item);
        item.appendChild(img);
        item.addEventListener("click", (e) => {
            showDescription(data);
        });
    });
}

/**
 * fill the item list with values
 * ok
 */
function fillList (json) {
    emptyList();
    json.results.forEach(createItem);
}

/**
 * Fill and display the description
 */
function showDescription (data) {
    // ptn concentre toi w3school alsacreation 
    // classlist,queryselectorall,TextContent et c tt
    // fermer la fenetre
    description.classList.add("show");
    // image dedans avec la source css
    //truc du cour avec des test
  //  const img = description.querySelectorAll(".test img");
    const fields = description.querySelectorAll("dd");
    //const img2 = description.querySelectorAll(".content img");
    //img2.src = data.sprites.other["official-artwork"].front_default;
   
   
   
    fields.forEach((dd) => {
        // la ligne dur dd.textcontent obligé puis ...
        //description.appendChild(img2);
        if(dd.classList[0] != "types"){ 
        dd.textContent = data[dd.classList[0]];
        }else{
            dd.textContent = " ";
            data.types.forEach((type) => {
                    dd.textContent += type.type.name+" ";
        });



    }
});
}

/**
 * Hide the description
 */
function hideDescription () {
    description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);
