let hobbiesArray = ['coding',
'testing',
'listening to music'];

function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }  
}

printHobbies(hobbiesArray);

myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());
console.log(myColor.join(','));
console.log(myColor.join('-'));


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;



