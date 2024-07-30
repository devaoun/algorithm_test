function check_perfect_list(numbers) {
    let output = false
    for (let i = 0; i < numbers.length; i++) {
        //ตัวแปรตามโจทย์
        const x = numbers[i];
        const firstNextIndex = 2 * i + 1;
        const secondNextIndex = 2 * i + 2;

        // เช็คเงื่อนไขว่าผ่านไหม

        // firstNextIndex มีใน array ไหม

        if (firstNextIndex < numbers.length) {
            const firstNextIndexValue = numbers[firstNextIndex];
            //ค่าของ firstNextIndex ต้องมากกว่า x
            //ค่าของ firstNexIndex ต้องน้อยกว่า abs(3*x)
            if (!(firstNextIndexValue > x && firstNextIndexValue < Math.abs(3 * x))) {
                return false;
            }
        }

        // เช็คเงื่อนไขว่าผ่านไหม

        // secondNextIndex มีใน array ไหม

        if (secondNextIndex < numbers.length) {
            const secondNextIndexValue = numbers[secondNextIndex];
            //ค่าของ secondNextIndex ต้องมากกว่า x
            //ค่าของ secondNexIndex ต้องน้อยกว่า abs(3*x)
            if (
                !(secondNextIndexValue > x && secondNextIndexValue < Math.abs(3 * x))
            ) {
                return false;
            }
        }
    }
    return true;
}


console.log(check_perfect_list([1, 2, 2, 5]))
console.log(check_perfect_list([2, 3, 10]))
console.log(check_perfect_list([5, 6, 13, 15, 7, 10, 40]))
console.log(check_perfect_list([9, 20, 18, 40, 50]))
