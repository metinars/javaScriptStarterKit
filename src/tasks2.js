//Parameter Prime Numbers

function primeNumber(...number) {


    for (let i = 0; i < number.length; i++) {
        let count = 0
        for (let j = 2; j < number[i]; j++) {
            if (number[i] % j == 0) {
                count++
            }
            if (count == 0) {
                console.log(number[i] + ": Asal değil")
            }
            else {
                console.log(number[i] + ": Asal")
            }
        }


    }
}

primeNumber(11, 12, 13)


function isFriend(number) {

    let countTotal = 0

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            countTotal = countTotal + i
        }

    }
    return countTotal
}

//Friend number

function friendNumber(friend1, friend2) {
    if (isFriend(friend1) == friend2 && isFriend(friend2) == friend1) {
        console.log(friend1 + " ve " + friend2 + " Arkadaş sayılardır.")
    }
    else
        console.log(friend1 + " ve " + friend2 + " Arkadaş sayı değillerdir.")
}

friendNumber(220, 284)

// Perfect Numbers

let countTotal2 = 0
for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            countTotal2 += j
        }

        if (countTotal2 == i) {
            console.log(i)

        }

    }
    countTotal2 = 0

}

// Prime numbers

let count = 0
for (let i = 1; i <= 1000; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count++
        }
    }
    if (count == 0) {
        console.log(i)
    }
    count = 0

}