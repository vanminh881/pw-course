// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra
// 1
// 2
// 3

let arr1 = [1, 2, 3];

arr1.forEach((value, index) => {
    console.log(value);
})

// Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2,
//     3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

const arr2 = [1, 2, 3];

let sum = 0;
let max = arr2[0]; // Giả sử giá trị đầu tiên là giá trị lớn nhất ban đầu
let min = arr2[0]; // Giả sử giá trị đầu tiên là giá trị nhỏ nhất ban đầu

arr2.forEach(number => {
    sum += number;

    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
})

console.log(`Tong cua mang: ${sum}`);
console.log(`Gia tri lon nhat trong mang: ${max}`);
console.log(`Gia tri nho nhat trong mang: ${min}`);

// 3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví
// dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

const arr3 = [1, 2, 3, 4, 5];
arr4 = [];

arr3.forEach(number2 => {
    arr4.push(number2 * 2);
})

console.log(`Mang moi sau khi nhan doi: ${arr4}`);