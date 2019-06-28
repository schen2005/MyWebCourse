const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];


function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby} `)
}


for (let x = 0; x < hobbiesArray.length; x++) {
    printHobbyInfo(hobbiesArray[x]);
}


let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");


let band2 = new Object();
let band2.name = ""