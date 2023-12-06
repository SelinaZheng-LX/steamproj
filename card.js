function card(album, descript, image) {
    this.album = album;
    this.descript = descript;
    this.image = image;
}
const deck = [
    new card("Ranked 1", "", "card1"),
    new card("Ranked 2", "", "card2"),
    new card("Ranked 3", "", "card3"),
    new card("Ranked 4", "", "card4"),
    new card("Ranked 5", "", "card5"),
    new card("Ranked 6", "", "card6"),
    new card("Ranked 7", "", "card7"),
    new card("Ranked 8", "", "card8"),
    new card("Ranked 9", "", "card9"),
    new card("Ranked 10", "", "card10"),
    new card("Ranked 11", "", "card11"),
    new card("Ranked 12", "", "card12"),
    new card("Ranked 13", "", "card13"),
];
function random(num) {
    let randomNum = Math.floor(Math.random() * num);
    return randomNum;
}
document.getElementById("draw").onclick = function () {
    let index = random(13);
    const currentCard = deck[index];
    document.getElementById("display").innerHTML =
        '<img class="wide-img bigger-wide-img" src="media/' +
        currentCard.image +
        '.png"/><h3 class="title-caption">' +
        currentCard.album +
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
