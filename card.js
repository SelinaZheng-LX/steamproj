function card(album, descript, image) {
    this.album = album;
    this.descript = descript;
    this.image = image;
}
const deck = [
    new card("Ranked 1", "Reasonable Doubt - 1st album", "card1"),
    new card("Ranked 2", "The Blueprint - 6th album", "card2"),
    new card("Ranked 3", "The Blueprint 3 - 11th album", "card3"),
    new card("Ranked 4", "Vol. 2… Hard Knock Life - 3rd album", "card4"),
    new card("Ranked 5", "American Gangster - 10th album", "card5"),
    new card("Ranked 6", "Magna Carta... Holy Grail - 12th album", "card6"),
    new card("Ranked 7", "In My Lifetime Vol. 1 - 2nd album", "card7"),
    new card("Ranked 8", "The Black Album - 8th album", "card8"),
    new card(
        "Ranked 9",
        "The Blueprint 2: The Gift & The Curse - 7th album",
        "card9"
    ),
    new card(
        "Ranked 10",
        "Vol. 3... Life and Times of S. Carter - 4th album",
        "card10"
    ),
    new card("Ranked 11", "The Dynasty: Roc La Familia - 5th album", "card11"),
    new card("Ranked 12", "Kingdom Come - 9th album", "card12"),
    new card("Ranked 13", "4:44 - 13th album", "card13"),
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
//         "media/card1.png", Reasonable Doubt - 1st album
//         "media/card2.png", The Blueprint - 6th album
//         "media/card3.png", The Blueprint 3 - 11th album
//         "media/card4.png",  Vol. 2… Hard Knock Life - 3rd album
//         "media/card5.png", American Gangster - 10th album
//         "media/card6.png", Magna Carta... Holy Grail - 12th album
//         "media/card7.png", In My Lifetime Vol. 1 - 2nd album
//         "media/card8.png", The Black Album - 8th album
//         "media/card9.png", The Blueprint 2: The Gift & The Curse - 7th album
//         "media/card10.png", Vol. 3... Life and Times of S. Carter - 4th album
//         "media/card11.png", The Dynasty: Roc La Familia - 5th album
//         "media/card12.png", Kingdom Come - 9th album
//         "media/card13.png", 4:44 - 13th album
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
