import { test } from '@playwright/test'

test('Register form', async ({ page }) => {
    //Open material Playwright
    await test.step('Navigate to material Playwright', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    // Click on Bài học 4: Personal notes
    await test.step('Click on Bài học 4: Personal notes', async () => {
        await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
    })

    //Add 10 notes
    await test.step('Add 10 notes', async () => {

        let titleXpath = await page.locator('//input[@id="note-title"]');
        let contentXpath = await page.locator('//textarea[@id="note-content"]');
        let addNoteBtn = await page.locator('//button[@id="add-note"]');

        await titleXpath.fill(`Vụ nổ tàu Starship tạo cơn mưa mảnh vỡ trên quần đảo Bahamas`);
        await contentXpath.fill(`SpaceX phóng chuyến bay thử nghiệm thứ 8 của Starship từ căn cứ Starbase của công ty ở Nam Texas vào ngày 6/3. Tên lửa đẩy khổng lồ ở tầng đầu tiên của Starship là Super Heavy quay trở lại Starbase và được tóm gọn bằng tháp phóng khoảng 7 phút sau khi cất cánh như kế hoạch`);
        await addNoteBtn.click();

        await titleXpath.fill(`NASA tắt thiết bị của tàu vũ trụ bay xa nhất lịch sử`);
        await contentXpath.fill(`Cùng phóng vào năm 1977 và mang theo bộ 10 thiết bị khoa học như nhau, Voyager 1 và Voyager 2 lần lượt đến vùng không gian liên sao vào năm 2012 và 2018. Chúng đã bay tổng cộng 46,7 tỷ km, trở thành những vật thể nhân tạo cách Trái Đất xa nhất.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Bệnh nhân bị liệt điều khiển cánh tay robot bằng suy nghĩ`);
        await contentXpath.fill(`Thiết bị mới, được gọi là giao diện não - máy tính (BCI), hoạt động trong thời gian kỷ lục 7 tháng mà không cần điều chỉnh nhiều. Trước đây, các thiết bị tương tự chỉ có thể hoạt động trong một hoặc hai ngày.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Tàu vũ trụ Starship phát nổ gây gián đoạn giao thông hàng không`);
        await contentXpath.fill(`Sau khoảng 2,5 phút khai hỏa, tên lửa đẩy Super Heavy đã tách khỏi tầng trên của Starship theo đúng kế hoạch. 7 phút sau khi rời bệ phóng, tên lửa đẩy khổng lồ ở tầng đầu tiên của Starship là Super Heavy quay trở lại Starbase và được tóm gọn bởi cặp đũa gắp ở tháp phóng.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Đề xuất nhiều chính sách gỡ khó cho hàng hóa nhập khẩu`);
        await contentXpath.fill(`Mặt hàng mức độ rủi ro cao sẽ quy định biện pháp quản lý trước khi thông quan (tiền kiểm) và mức độ rủi ro trung bình, thấp sẽ quy định biện pháp quản lý sau thông quan, trước khi lưu thông trên thị trường hoặc cho phép tự công bố hợp quy (hậu kiểm).`);
        await addNoteBtn.click();

        await titleXpath.fill(`Khánh Hòa thí điểm 440 ha vùng nuôi biển công nghệ cao`);
        await contentXpath.fill(`Thông tin được UBND tỉnh Khánh Hòa và Quỹ Thiện Tâm (Tập đoàn Vingroup) công bố chiều 7/3. Đề án được Thủ tướng phê duyệt vào tháng 1, thời gian thí điểm nuôi công nghệ cao đến hết năm 2029.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Thông tin được UBND tỉnh Khánh Hòa và Quỹ Thiện Tâm (Tập đoàn Vingroup) công bố chiều 7/3. Đề án được Thủ tướng phê duyệt vào tháng 1, thời gian thí điểm nuôi công nghệ cao đến hết năm 2029.`);
        await contentXpath.fill(`Nhóm nhà địa chất tại Đại học Curtin và Cơ quan Khảo sát Địa chất Tây Australia phát hiện hố va chạm thiên thạch cổ xưa nhất thế giới ở vùng Pilbara, tây bắc Australia, New Atlas hôm 6/3 đưa tin. Nghiên cứu được công bố trên tạp chí Nature Communications.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Robot hình người tiên tiến nhất thế giới`);
        await contentXpath.fill(`Phát triển bởi công ty Engineered Arts của Anh, Ameca thường được mô tả là robot hình người tiên tiến nhất thế giới. Tương tác giống người thật của nó khiến khách tham quan vừa thích thú vừa đề phòng, nêu bật sự tiến hóa nhanh chóng của trí tuệ nhân tạo (AI) và công nghệ robot.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Tàu vũ trụ Mỹ có thể bị đổ sau khi hạ cánh trên Mặt Trăng`);
        await contentXpath.fill(`Intuitive Machines từng trở thành công ty tư nhân đầu tiên hạ cánh trên Mặt Trăng năm ngoái với tàu vũ trụ Odysseus. Odysseus lao xuống hơi quá nhanh khi hạ cánh vào tháng 2/2024, bị gãy một chân và đổ về một bên, cản trở khả năng liên lạc với Trái Đất của tàu.`);
        await addNoteBtn.click();

        await titleXpath.fill(`Robot hình người làm việc trong phòng thí nghiệm thuốc`);
        await contentXpath.fill(`Công ty công nghệ sinh học Mỹ Insilico Medicine triển khai robot hình người đầu tiên trong phòng thí nghiệm nghiên cứu thuốc tự động và ứng dụng trí tuệ nhân tạo (AI), Interesting Engineering hôm 6/3 đưa tin.`);
        await addNoteBtn.click();
    })

    //Search 1 report
    await test.step('', async () => {
        await page.locator('//input[@id="search"]').fill('Tàu vũ trụ Starship');
    })
})