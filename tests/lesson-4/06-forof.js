// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị
// cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] và giá trị cho trước là
// 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4

let arr = [1, 2, 3, 4, 3, 55, 23];
let targetValue = 3;

// Biến để lưu trữ các vị trí đầu tiên và cuối cùng
let firstIndex = -1;
let lastIndex = -1;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] === targetValue) {
    if (firstIndex === -1) {
      firstIndex = i;
    }
    lastIndex = i;
  }
}

// //Cách 2:
// let count1 = 0;
// for (let item in arr) {
// if (item === targetValue) {
//   if (firstIndex === -1) {
//   firstIndex === count1; 
//   }
//   lastIndex === count1;
// }
// count1++;
// }

// if (firstIndex === -1 && lastIndex === -1 ) {
//   console.log(`So khong ton tai trong mang`)
// } else {
//   console.log(`First index ${firstIndex} - Last index ${lastIndex}`);
// }


console.log(`Vi tri dau tien ${firstIndex}`);
console.log(`Vi tri cuoi cung ${lastIndex}`);

// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi
// ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”,
// “y”, “a”, “l”, “P”]

let str = "Playwright";

let revertArr = [];

for (let i = str.length; i >= 0; i--) {
  revertArr.push(str[i]);
}

console.log(`Mang duoc dao nguoc là ${revertArr}`);

// //Cách 2
// let str1 = "Playwright";
// let reserveArray = [];

// for (let char of str1) {
//   reserveArray.unshift(char);
// }

// console.log(reserveArray);

// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3,
//     1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]

const arr6 = [1, 2, 3, 1, 2, 4, 5];
const count = {};
let result = [];

for (let i = 0; i < arr6.length; i++) {
  const num = arr6[i];
  count[num] = (count[num] || 0) + 1; // Tăng số đếm cho phần tử
}

// Mảng chứa các phần tử duy nhất (xuất hiện 1 lần)
const uniqueItems = [];

// Duyệt qua mảng để lấy các phần tử xuất hiện 1 lần
for (let i = 0; i < arr6.length; i++) {
  const num = arr6[i];
  if (count[num] === 1) {
    uniqueItems.push(num); // Thêm phần tử vào mảng duy nhất
  }
}

console.log(`Cac phan tu xuat hien 1 lan la ${uniqueItems}`);

// //Cách 2
// for (let element of arr6) {
//   map[element] = (map[element] || 0 )+1;
// }

// for (let element in map) {
//   if (map[element === 1]) {
//       result.push[Number[element]];
//   }
// }

// console.log(result);