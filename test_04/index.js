function count_unique_ascending_numbers(stream) {
    let ascendingNumbers = new Set()
    let currentNumber = ''
    for (let i = 0; i < stream.length; i++) {
        const char = stream[i]
        if (!isNaN(char)) {
            currentNumber += char;
        } else {
            if (currentNumber) {
                if (isAscendingNumber(currentNumber)) {
                    ascendingNumbers.add(currentNumber)
                }
                currentNumber = ''
            }
        }
    }
    if (currentNumber) {
        if (isAscendingNumber(currentNumber)) {
            ascendingNumbers.add(currentNumber)
        }
    }

    return ascendingNumbers.size
}

function isAscendingNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false
        }
    }
    return true
}

console.log('RESULT 1 :', count_unique_ascending_numbers("123ab45z"));
console.log('RESULT 2 :', count_unique_ascending_numbers("321ab45z"));
console.log('RESULT 3 :', count_unique_ascending_numbers("894x67hello12yy67"));
console.log('RESULT 4 :', count_unique_ascending_numbers("4689"));