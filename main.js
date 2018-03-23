

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
function printToDom(cards,id ){
    document.getElementById(id).innerHTML = cards;
};

function destinationDomString(array){
    // let placeDetail = array[i];
    let placeString = "";
    for(let i=0; i<array.length; i++){
        // let placeDetail = array[i];
        placeString += "<div class ='cards'>";
        placeString += "<img src='" + array[i].image + "'/>";
        placeString += "<h3>" + array[i].title + "</h3>";
        placeString += "<p>" + array[i].description + "</p>";
        placeString += "</div>"
        
    }
    printToDom(placeString, 'cards');
};
destinationDomString(destinations);

