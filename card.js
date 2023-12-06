function card(album, descript, image) {
    this.album = album;
    this.descript = descript;
    this.image = image;
}
const deck = [
    new card("Card 1", "", "card1"),
    new card("Card 2", "", "card2"),
    new card("Card 3", "", "card3"),
    new card("Card 4", "", "card4"),
    new card("Card 5", "", "card5"),
    new card("Card 6", "", "card6"),
    new card("Card 7", "", "card7"),
    new card("Card 8", "", "card8"),
    new card("Card 9", "", "card9"),
    new card("Card 10", "", "card10"),
    new card("Card 11", "", "card11"),
    new card("Card 12", "", "card12"),
    new card("Card 13", "", "card13"),
];
function random(num) {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}
document.getElementById("draw").onclick = function () {
    let index = random(13);
    const currentCard = deck[index];
    document.getElementById("display").innerHTML =
        '<img src="media/' +
        currentCard.image +
        '.png"/><h3>' +
        currentCard.name +
        "</h3><p>" +
        currentCard.descript +
        "</p>";
};

// var generateImage = function () {
//     // The available hex options
//     const cardDeck = [
//         "media/card1.png",
//         "media/card2.png",
//         "media/card3.png",
//         "media/card4.png",
//         "media/card5.png",
//         "media/card6.png",
//         "media/card7.png",
//         "media/card8.png",
//         "media/card9.png",
//         "media/card10.png",
//         "media/card11.png",
//         "media/card12.png",
//         "media/card13.png",
//     ];
//     const card = "media/card1.png";
// };

// var card, cardDeck, length;
// cardDeck =
//     '"media/card1.png","media/card2.png","media/card3.png","media/card4.png","media/card5.png","media/card6.png","media/card7.png","media/card8.png","media/card9.png","media/card10.png","media/card11.png","media/card12.png","media/card13.png"';
// card = cardDeck.split(",");
// length = card.length;

// function random_index() {
//     var num;
//     num = random.randrange(1, 13, 1);
//     return num;
// }

// let imageSrc = function () {
//     var n;
//     n = random_index();
//     console.log(card[n]);
//     let imageSource = card[n];
//     document.getElementById("imageElement").src = imageSource;
//     return imageSource;
// };
// imageSrc();
