// 1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân
// nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○ Cân nặng tính theo kg
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường
// ○ BMI < 30: Thừa cân
// ○ BMI >= 30: Béo phì

function bodyMassIndex(height, weight) {

    const BMI = weight / (height * height);

    if (BMI < 18.5) {
        return "Thiếu cân";
    }
    if (BMI < 25) {
        return "Bình thường";
    }
    if (BMI < 30) {
        return "Thừa cân";
    }
    if (BMI >= 30) {
        return "Thừa cân";
    }
}

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ
// nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã
// chuyển đổi.
// Biết công thức chuyển đổi:

// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9;

function convertTemperature(temperature, unit) {
    if (unit === 'C') {
        return temperature * 9 / 5 + 32; //Chuyển từ độ C sang độ F
    }
    if (unit === 'F') {
        return (temperature - 32) * 5 / 9; //Chuyển từ độ F sang độ C
    }
}

//3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số

const numbers = [5, 20, 60, 40, 100];

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

//4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
//  Số 0, số 1 không phải số nguyên tố.
//  Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

//5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên
// người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// Khai báo mảng global các object có 2 thuộc tính: name, email
// Khai báo hàm có 2 tham số: name, newEmail
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên
// trùng với tham số name, cập nhật giá trị email về newEmail

const users = [
    { name: "An", email: "an@hcmut.com" },
    { name: "Binh", email: "binh@hcmut.com" },
    { name: "Chau", email: "chau@hcmut.com" }
];

function updateEmail(name, newEmail) {

    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email = newEmail;
            console.log(`Cập nhật email thành công cho ${name}: ${newEmail}`);
            return;
        }
    }
}

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một
// mảng các object.
// Biết object có cấu trúc như sau: {"name": "Alex", score: 85}

const students = [
    { name: "Alex", score: 85 },
];

function calculateAverageScore(students) {
    let totalScore = 0;

    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }

    let averageScore = totalScore / students.length;
    return averageScore;
}

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {"name":
// "product 1", price: 100 }

let cart = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 90 },
];

function areAllProductsPricedGreaterThanZero(cart) {

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].price <= 0) {
            return "Sản phẩm có giá nhỏ hơn bằng 0";
        }
    }
    return "Sản phẩm có giá lớn 0";
}

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng
// mở cửa từ 9 giờ sáng đến 9 giờ tối

function isStoreOpen(hour) {
    if (hour >= 9 && hour < 21) {
        return "Mở cửa";
    } else {
        return "Đóng cửa";
    }
}

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5
// tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k

function getTicketPrice(age) {
    if (age < 5) {
        return "Miễn phí";
    } else if (age >= 18) {
        console.log("Mức giá vé: 100k");
    } else if (age >= 6 && age <= 17) {
        console.log("Mức giá vé: 50k");
    }
}

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh
// switch...case để xử lý

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            console.log("Tháng 1: January");
            break;
        case 2:
            console.log("Tháng 2: February");
            break;
        case 3:
            console.log("Tháng 3: March");
            break;
        case 4:
            console.log("Tháng 4: April");
            break;
        case 5:
            console.log("Tháng 5: May");
            break;
        case 6:
            console.log("Tháng 6: June");
            break;
        case 7:
            console.log("Tháng 7: July");
            break;
        case 8:
            console.log("Tháng 8: August");
            break;
        case 9:
            console.log("Tháng 9: September");
            break;
        case 10:
            console.log("Tháng 10: October");
            break;
        case 11:
            console.log("Tháng 11: November");
            break;
        case 12:
            console.log("Tháng 12: December");
            break;
        default:
            console.log("Số tháng không hợp lệ. Vui lòng nhập một số từ 1 đến 12.");
            break;
    }
}

//11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>=
//     6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5)

function classifyGrade(diem) {
    if (diem >= 8) {
        console.log("Giỏi");
    } else if (diem >= 6.5) {
        console.log("Khá");
    } else if (diem >= 5) {
        console.log("Trung bình");
    } else {
        console.log("Yếu");
    }
}

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng
// (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C)

function weatherStatus(temperature) {
    if (temperature >= 30) {
        console.log("Nhiệt độ: ${temperature} °C - Nóng");
    } else if (temperature >= 20) {
        console.log("Nhiệt độ: ${temperature} °C - Mát");
    } else {
        console.log("Nhiệt độ: ${temperature} °C- Lạnh");
    }
}