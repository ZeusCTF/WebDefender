var array = [];
var links = document.getElementsByTagName("a");
for(var i=0; i<links.length; i++) {
    array.push(links[i].href);
}

console.log(array)