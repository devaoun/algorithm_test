// ใส่ input ตรงนี้นะครับ :)
input = {
    number_list: [13, 22, 27, 31 ,32],
    divisor: 3,
    distance: 1
  }
  
  const count_pairs = ({ number_list, divisor, distance }) => {
    let pair = 0;
    for (let i = 0; i < number_list.length; i++) {
      let modTarget = number_list[i] % divisor
      for (let j = i + 1; j < number_list.length; j++) {
        const pairDistance = Math.ceil(Math.abs(number_list[i] / 10 - number_list[j] / 10))
        if (pairDistance <= distance && number_list[j] % divisor === modTarget) {
          console.log(number_list[i] , number_list[j])
          pair++
        }
      }
    }
    return pair
  }
  
  console.log('RESULT : ', count_pairs(input))