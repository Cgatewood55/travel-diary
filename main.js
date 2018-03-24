

const destinations = [
    {
        image:"/images/Jamaica.jpg",
        title:"Jamaica",
        description:"jamaica"
    },
    {
        image:"/images/Germany.jpg",
        title:"Germany",
        description: "germany"
    },
    {
        image:"/images/Hong Kong.jpg",
        title:"Hong-Kong",
        description: "hong-kong"
    },
    {
        image:"/images/London.jpg",
        title:"London",
        description: "london"
    },
    {
        image:"/images/Paris.jpg",
        title:"Paris",
        description: "pairs"
    },
    {
        image:"/images/Dubai.png",
        title:"Dubai",
        description: "dubai"
    },
];
const printToDom = (placeString, divId)=> {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = placeString;

};


const buildDomString = (destinationArray) => {
    let placeString = '';
    destinationArray.forEach((destinations) => {
        placeString += `<div class="cards">`;
        placeString += `<img src="${destinations.image}">`;
        placeString += `<h3>${destinations.title}</h3>`;
        placeString += `<p>${destinations.description}</p>`;
        placeString += `<button class="card-button">Detail</button>`;
        placeString +=`</div>`;
    })
    printToDom(placeString,'cards');
}
buildDomString(destinations);


