// 1. Tạo một object car với thuộc tính make="Toyota", model="Corolla", và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);

// 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). 
// In ra tên đường của người này
const person = {
    name: "Minh",
    address: {
        street: "Vo Chi Cong",
        city: "Ho Chi Minh",
        country: "Viet Nam"
    }
}
console.log(person.address.street);

// 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
//Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một 
// object với 2 thuộc tính kiểu number: math và english
const student = {
    name: "Min",
    grades: {
        math: 10,
        english: 9.8
    }
}
console.log(student['grades']['math']);

//4. Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá
//của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.
let product = {
    "CWF": 45,
    "Tight Hole": 45.9,
    "HPW": 50
}

for (let item in product) {
    console.log(item + " " + product[item]);
}

//5. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
// volume, brightness. Thay đổi volume và in ra object mới.

const settings = {
    volume: 45000,
    brightness: "light"
}
settings['volume'] = 500;
console.log(settings.volume);

//6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
const bike = {};
bike['color'] = "Silver";

//7. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
const employee = {
    name: "Flower",
    age: 40
}
delete employee.age;

// //8. Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
}