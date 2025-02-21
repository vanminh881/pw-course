//1. Tính tổng từ 1 đến 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng từ 1-100: ${sum}`);

//2. In bảng cửu chương từ 2 đến 9

for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương của ${i}:`); //Tạo bảng cửu chương từ 2-9

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`); // Tạo các phép nhân từ 1 đến 10 cho mỗi số i
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99

const soLe = [];
for (let i = 1; i <= 99; i += 2) {
    soLe.push(i);
}

console.log(`Mảng các số lẻ từ 1 đến 99: ${soLe} `);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user-1@example.com, user2@example.com, ..., user10@example.com)

for (let i = 1; i <= 10; i++) {
    console.log(`user-${i}@example.com`)
}

//5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
//in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
//{'month': 2, 'total': 100}

const revenue = [
    { 'month': 1, 'total': 150 },
    { 'month': 2, 'total': 100 },
    { 'month': 3, 'total': 200 },
    { 'month': 4, 'total': 350 },
    { 'month': 5, 'total': 760 },
    { 'month': 6, 'total': 1880 },
    { 'month': 7, 'total': 5000 },
    { 'month': 8, 'total': 2300 },
    { 'month': 9, 'total': 5600 },
    { 'month': 10, 'total': 500 },
    { 'month': 11, 'total': 7700 },
    { 'month': 12, 'total': 3000 },
];

let totalRevenue = 0;

for (let i = 0; i < revenue.length; i++) {
    totalRevenue += revenue[i].total;
}

console.log(`Tổng doanh thu của 12 tháng là: ${totalRevenue}`);