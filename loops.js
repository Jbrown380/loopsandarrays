for(let i = 1000; i > -1; i-= 2) {
    console.log(i);
}


for(let i = 0; i < 10000; i++) {
     
    if (i === 2500) {
     alert("A quarter of the way there!");
     } else if (i === 5000); {
         alert("Halfway there!");
     } elseif (i === 10000); {
         alert("The loop is done!");
     }

}












const favShows= ["Pokemon", "Tom and Jerry", "Spongebob", "Family Guy", "American Dad"];
for (let i = 0; i < favShows.length; i++) {
    console.log("My # " + [i] + " favorite tv show is " + favShows[i]);
}