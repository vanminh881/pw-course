//1. Khởi động Tàu Vũ trụ K12

//Hành tinh khởi đầu
let departurePlanet = "Trái Đất";
//Nhiệm vụ
let mission = "Khám phá Vũ trụ K12";
//Phi hành đoàn:
const crew = ["Marc", "Emily", "Mahdi"];
//Khởi động Tàu
function launchShip(crew) {

    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
}
//Kết nối với Trung tâm Điều khiển
console.log(launchShip(crew));

//2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}

let distanceResult = calculateDistance(1000, 24);

console.log(`Khoảng cách đến hành tinh bí ẩn: ${distanceResult} km`);

//3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}

let timeConvertResult = convertTimeToHex(120);

console.log(`Thời gian trên hành tinh này được tính theo hệ thập lục phân (hexadecimal): ${timeConvertResult} giay`);

//4. Khám phá kho báu
function decryptCode(code) {
    let decryptedCode = ""; // Chuỗi chứa mật mã đã chuyển đổi

    for (let i = 0; i < code.length; i++) {

        let item = code[i]; // Lấy phần tử tại vị trí i

        // Nếu là chữ cái viết hoa
        if (item === item.toUpperCase()) {
            decryptedCode += item.toLowerCase(); // Chuyển thành chữ cái viết thường
        }
        // Kiểm tra nếu là chữ cái viết thường
        else if (item === item.toLowerCase()) {
            decryptedCode += item.toUpperCase(); // Chuyển thành chữ cái viết hoa
        }
        else {
            decryptedCode += item; // Nếu không phải chữ cái, giữ nguyên
        }
    }

    return decryptedCode;
}

const decryptedCode = decryptCode("K12 Challenge");

console.log(`Mật mã sau khi được giải: ${decryptedCode}`);

//5. Trở về Trái Đất
function returnToEarth() {
    console.log(`Chuẩn bị trở về Trái Đất!`);
}

returnToEarth();