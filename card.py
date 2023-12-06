import random
cardDeck = '"media/card1.png","media/card2.png","media/card3.png","media/card4.png","media/card5.png","media/card6.png","media/card7.png","media/card8.png","media/card9.png","media/card10.png","media/card11.png","media/card12.png","media/card13.png"'
card = cardDeck.split(",")
length = len(card)
def random_index():
    n = random.randrange(1,13,1)
    return(n)
def index():
    n = random_index()
    # jayz = open("jayzbio.html").read().format(card=card[n])
    context = {
        "card": card[n],
    }
    with open("jayzbio.html", "r") as file:
        html = file.read().format(**context)
    return(card[n])
if __name__ == "__main__":
    index()
