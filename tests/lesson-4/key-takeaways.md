# Leson4

## Javascript (Advanced concept)
### *var* và *let*
- Trong Javascript var và let đều được sử dụng để khai báo biến, nhưng chúng có sự khác biệt về scope (phạm vi), redeclaration (khả năng khai báo), và cơ chế hoisting

#### Scope (Phạm vi)
- *var*: phạm vi hàm (function scope) hoặc phạm vi toàn cục (global scope) nếu được khai báo bên ngoài hàm

```
function varScopeExample() {
    if (true) {
        var y = 9;
    }
    console.log(y);
    //9 (y = 9 vẫn tồn tại ngoài if)
}
```
- *let*: phạm vi khối (block scope), chỉ tồn tại trong trong đoạn code giới hạn bởi cặp dấu {}

```
function letScopeExample() {
    if (true) {
        let x = 5;
    }
    console.log(x);
    //lỗi: x is not defined (x chỉ tồn tại trong khối if)
}
```
#### Redeclaration (Khả năng khai báo lại)
- *var*: có thể được khai báo lại trong cùng 1 phạm vi

```
var a = 2;
var a = 3;
//Không có lỗi, biến a được khai báo lại
console.log(a);
//3
```

- *let* không thể được khai báo lại trong cùng 1 phạm vi

```
let a = 2;
let a = 5;
//Lỗi: Identifier 'a' has already been delared
```

### Điều kiện nâng cao: if...else, if...else if...else switch...case
#### if...else
- Cú pháp: 

```
if (condition) {
    //Đoạn code đươc execute nếu điều kiện đúng
} else {
    //Đoạn code được execute nếu điều kiện sai
}
```

```
const x = 2;
if (x > 5) {
    console.log('x lớn hơn 5')
} else {
    console.log('x nhỏ hơn hoặc băng 5')
}

//result: x nhỏ hơn hoặc băng 5
```

#### if...else if...else
- Cú pháp: 

```
if (condition1) {
    //Đoạn code đươc execute nếu điều kiện 1 đúng
} else if (condition2) {
    //Đoạn code được execute nếu điều kiện 2 đúng
} else {
    //Đoạn code mặc định nếu không có điều kiện nào đúng
}
```

```
const x = 10;
if (x > 15) {
    console.log('x lớn hơn 15')
} else if (x > 5) {
    console.log('x lớn 5')
} else {
    console.log('x nhỏ hơn hoặc bằng 5')
}

//result: x lớn hơn 5
```

#### switch...case
- Cú pháp:

```
switch (expression) {
    case value1:
    //Đoạn code cần chạy nếu expression bằng value1
    break;
    case value2:
    //Đoạn code cần chạy nếu expression bằng value2
    break;
    default:
    //Đoạn code mặc định không có case nào phù hợp
}
```

```
let day = "Monday";
switch (day) {
    case "Monday":
    console.log("Hôm nay là thứ Hai");
    break;
    case "Tuesday":
    console.log("Hôm nay là thứ Ba");
    break;
    default:
    console.log("Hôm nay không biết là thứ mấy");
}
//result: Hôm nay là thứ Hai
```

### Vòng lặp nâng cao for...in, foreach, for...of
#### for...in
- Cú pháp: 

```
for (<biến> of <mảng>) {
    // code
}
```

```
let product = {
    "Banana": 10,
    "Apple": 20,
    "Orange": 15
}

for (let property in product) {
    console.log(property) // Banana Apple Orange
    console.log(product["property"]) // Banana 10 Apple 20 Orange 15
}
```

#### foreach
- Cú pháp:

```
foreach((<phần tử>, index) => {
    // code
}
)
```

```
const fruit = ['Banana', 'Apple', 'Orange']

fruit.foreach(value, index) {
    console.log(`Qua ${value} o vi tri ${index + 1}`);

    // Qua Banana o tri 1
    // Qua Apple o tri 2
    // Qua Orange o tri 3
}
```
#### for...of
- Cú pháp:

```
for (let value of) {
    // code
}
```

```
let fruits = ["Banana", "Apple", "Orange"]

for (let property of product) {
    console.log(property) // Banana Apple Orange
    console.log(product["property]) // Banana 10 Apple 20 Orange 15
}
```

### Vòng lặp nâng cao: continue and break
#### continue
- Gặp continue --> chạy đến vòng lặp tiếp theo

```
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        continue; // 1 2 3 4
    }

    console.log(i) // 5
}
```

#### break
```
const arr = [11, 23, 22, 25]

for (let i = 0, i <= arr.length, i++) {
    if (arr[i] % 2 === 0) {
        break;
    }

    console.log(arr[i]); // 11 23
}
```