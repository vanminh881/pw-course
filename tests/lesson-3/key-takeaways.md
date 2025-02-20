#Lesson 3

## **Git** undo thing
- Xem lịch sử commit:
```
git log
```
- Thay đổi commit message:
```
git commit --amend
```
* Gõ i --> vào chế dộ insert
* Gõ esc để thoát chế độ insert
* Gõ ":wq" --> write and quit
```
git commit --amend -m"message"
```
- Đưa từ vùng staging về working directory:
```
git restore --stage <file>
```
- Đưa từ vùng repository về working area (uncommit):
```
git reset HEAD~1 (undo 1 commit)
```
- Bỏ qua các file không cần git theo dõi:
```
<file_name> Inorge file
<folder-name>/ Inorge folder
```

## Git - branch modeling
**Branch** = nhánh
* Dùng branch để tạo ra một vùng làm việc mới, 
* Không ảnh hưởng tới vùng làm việc đã ổn định
- Không có branch --> Backup file ra chỗ khác, copy lại

**Tạo branch**
```
git branch <ten_branch> //tạo branch mới
git checkout <ten_branch> //chuyển sang <ten_brach>
git checkout -b <ten_branch> // vừa tạo vừa chuyển sang <ten_branch>, nhưng chỉ dành cho nhánh mới, không áp dụng cho nhánh đã tồn tại
```
- **Tips** Luôn tạo branch mới trước khi thực hiện một lệnh copy từ Internet

## Javascript
### Convention
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class

### Console.log with ' and "
```
console.log('Toi la Minh');
console.log("Toi la Mina");
console.log('${variable_name}') //nên dùng
```
### Object
- Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
- Khai báo:
```
let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}
```
- Trong đó:
- <thuoc_tinh>: giống quy tắc đặt tênbiến
- <gia_tri>: có kiểu giống biến, hoặc là 1 object khác
```
let user = {"name": "Minh, "age": 24, "isSingle": true, "curent address": "Ho Chi Minh city"}

const product = {
"type": "Oil",
"region": "MENA",
"brineType": {
"name": "ENVIROMUL",
"uom": "kg/m3",
"concentration": 0.87
} }
```
- Sử dụng:
```
console.log("Name = " + user.name);
console.log("Brine type name = " + product.brineType.name);
console.log("Address = ", name["curent address"]);
```
- Gán lại
```
user.age = 28
product["brineType"][""concentration"] = 0.99
```
### Logical operator
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của
mệnh đề

### Array - Mảng
- Khai báo
- Sử dụng:
- +Truy xuất mảng
- +Độ dài mảng: length
- +Lấy phần tử theo index: [0], [1], [2]

### Function
- Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
- Khai báo:
```
function <nameFunction>() {
// code
}
```
- Parameter
- Return value