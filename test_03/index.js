const count_pairs = (numbers, divisor) => {
    let pair = 0;
    for (let i = 0; i < numbers.length; i++) {
      let modTarget = numbers[i] % divisor
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] % divisor === modTarget) {
          console.log(numbers[i] , numbers[j])
          pair++
        }
      }
    }
    return pair
  }
  
  console.log('RESULT 1 : ', count_pairs([1, 3, 8, 12, 11, 36, 43], 5))
  console.log('RESULT 2 : ', count_pairs([35, 79, 81, 125, 6, 98, 120], 11))
  console.log('RESULT 3 : ', count_pairs([7, 2, 4, 10, 100, 22, 38, 44], 3))
