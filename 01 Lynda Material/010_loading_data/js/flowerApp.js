var redRoses = new app.singleFlowerModel({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/redRoses.jpg"
});

//console.log(redRoses);

var rainbowRoses = new app.singleFlowerModel({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new app.singleFlowerModel({
    name: "Heirloom roses",
    price: 19.95,
    img: "images/heirloomPinkRoses.jpg",
    link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
    redRoses, rainbowRoses, heirloomRoses
]);

var flowerGroupView = new app.allFlowersView({
    collection: flowerGroup
});

// console.log(JSON.stringify(flowerGroupView))

$("#allFlowers").html(flowerGroupView.render().el);
