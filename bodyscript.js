if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}
function showMessage() {
    // 6. Lời nhắn hiện ra khi bấm vào tên hoặc avatar
    swal({
        title: "Lời nhắn", // Tiêu đề của popup
        text: "Chúc Thảo Khuyên tuổi mới học giỏi, ngày càng xinh đẹp, luôn luôn vui tươi, tràn đầy sức khỏe và năng lượng để theo đuổi đam mê của mình. Và đặc biệt là ra trường đúng hạn, tốt nghiệp loại xuất sắc!", // Nội dung lời nhắn
        button: {
            text: "CLOSE",
        },
    });
}