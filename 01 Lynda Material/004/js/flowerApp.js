var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg",
    link: "redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var newModel = new app.singleFlower({
    //added new properties
    age: 20,
    city: 'Chennai'
});

var heirloomRoses = new app.singleFlower({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
});


var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses
]);

//Added new model in flowerGroup collections
flowerGroup.add(newModel);
flowerGroup.add(heirloomRoses);
//This model removed from flowerGroup collections
flowerGroup.remove(redRoses);
console.log(flowerGroup.toJSON());
// console.table(flowerGroup);
