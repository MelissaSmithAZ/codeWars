// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input(n) how many times the hoop goes round and it will return him an encouraging message:)

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// - If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
    return n < 10 ? 'you can do better' : n >= 10 ? "Great, now move on to tricks" : null
}

hoopCount(10)

// input a number output its equivelent word

function switchItUp(number) {
    return number === 0 ? 'Zero' : number === 1 ? 'One' : number === 2 ? 'Two' : number === 3 ? 'Three' : number === 4 ? 'Four' : number === 5 ? 'Five' : number === 6 ? 'Six' : number === 7 ? 'Seven' : number === 8 ? 'Eight' : number === 9 ? 'Nine' : null
}

switchItUp(9)

switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]

switchItUp(9)