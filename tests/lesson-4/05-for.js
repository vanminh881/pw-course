// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student
// = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10

let objectStudent = {
    name: "Alex",
    age: 10
};

for (property in objectStudent) {
    console.log(property + ': ' + objectStudent[property]);
}

// 2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object
// student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// 30 (=10+20)

let objectStudent2 = {
    name: "Alex",
    age: 10,
    salary: 20
};

let sum2 = 0;

for (property in objectStudent2) {

    if (typeof objectStudent2[property] === 'number') {
        sum2 += objectStudent2[property];
    }
}

console.log(`Tong cac gia tri so cua cac thuoc tinh trong mot doi tuong: ${sum2}`);

// 3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. Ví dụ object
// student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng
// [“name”, “age”]

let objectStudent3 = {
    name: "Alex",
    age: 10
};

let arr5 = [];

for (property in objectStudent3) {
    arr5.push(property);
}

console.log(`Mang moi: ${arr5}`);