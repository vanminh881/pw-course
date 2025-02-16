# Version Control System
## Type of Git Control System
- **Local**: lưu ở máy cá nhân
- **Centralize**: lưu ở một máy chủ tập trung
- **Distributed**: lưu ở nhiều máy khác nhau

# Git
## Git
- Là một phần mềm
- Cài trên máy của bạn
- Là một commandline tool
- Là công cụ quản lý phiên bản, đưa file vào Git repository
- Có các tính năng của Version Control System

## GitHub
- Là một dịch vụ web
- Host trên website
- Là công cụ có giao diện
- Là nơi để upload Git repository lên
- Có các tính năng của Version Control System và một số tính năng khác

## Git - three states
- Working Dicrectory: Các file mới hoặc file có thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- Repository: Các phiên bản Commit

## Git - các câu lệnh thường dùng
1. Khởi tạo: git init
2. Cấu hình: 
- Cho 1 repo:
* git config user.name “name”
* git config user.email “email”
- Cho toàn bộ máy tính (default):
* git config --global user.name “user”
* git config --global user.email “email”
3. Thêm file vào vùng staging:
* Thêm 1 file: git add <file_name>
* Thêm toàn bộ: git add .
4. Xem trạng thái file: git status
* File màu xanh: vùng staging
* File màu đỏ: vùng working directory
5. Commit: git commit -m"message”
* Kiểm tra lịch sử commit: git log

## Git - commit convention
*Các loại dùng trong lớp
- **chore**: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
- **feat**: thêm tính năng mới, test case mới
- **fix**: sửa lỗi 1 test trước đó
* short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu

# Javascript basic
## Biến (Variable)
- Khai báo biến:
* var ten_bien = gia tri;
* let ten_bien = gia tri;

- Phạm vi của biến
* var: phạm vi toàn cục (global)
* let: phạm vi trong cặp ngoặc {}
* Nên dùng: let, vì dễ kiểm soát phạm vi của biến

## Hằng số (Constant)
- Dùng để khai báo các giá trị không thể thay đổi
- Khai báo hằng số:
* const name = value;

Khi nào dùng var/let, khi nào dùng const?
- var/let: khi biến sẽ gán lại
- const: khi biến không gán lại
- Thường sẽ dùng let và const, **KHÔNG** dùng var

## Kiểu dữ liệu (Data type)
Có 8 loại kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

## Toán tử so sánh (Comparison operator)
- Các toán tử so sánh:
* So sánh hơn kém: >, <
* So sánh bằng: ==, ===,!=, !==, >=, <=

## Toán tử 1 ngôi (Toán tử một ngôi)
- Dùng để tăng hoặc giảm giá trị
* i++ bằng với i=i+1
* i-- bằng với i=i-1

- ++i tính luôn trên giá trị ban đầu
- i++ tạo ra bản copy của giá trị ban đầu
* let i = 3;
* let b = ++i; // b = 4, i = 4
* let a = i++; // a = 3, i = 4

## Toán tử số học (Arithmetic operator)
- Dùng tính toán giá trị biểu thức
- Các phép toán: +, -, *, /

## Điều kiện (Conditional)
- Dùng để kiểm tra có nên thực hiện một đoạn logic không
- Cú pháp: if (<điều kiện>) { // code }. Nếu
điều kiện đúng, sẽ chạy đoạn code
- Ví dụ:
if (10 > 3) {
console.log("10 lớn hơn 3")
}

## Vòng lặp (Loops)
- Dùng để thực hiện một đoạn logic một số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {
// code }
- Ví dụ:
for (let i = 1; i <= 10; i++) {
console.log("Giá trị của i là: ", i);
}

## Format code
- Mac: Option + Shift + F
- Window: Alt + Shift + F