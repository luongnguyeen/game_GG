const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const nextPageButton = document.getElementById('next-page-button');
const starContainer = document.getElementById('star-container');

noButton.addEventListener('click', () => {
    // Tạo vị trí ngẫu nhiên mới cho nút "Không đồng ý"
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute'; // Cần thiết để di chuyển nút
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

yesButton.addEventListener('click', () => {
    alert('Tuyệt vời! Bạn đã đồng ý!'); // Hoặc chuyển hướng đến trang khác nếu muốn
});

nextPageButton.addEventListener('click', () => {
    // Chuyển hướng đến trang tiếp theo (ví dụ: next.html)
    window.location.href = 'next.html';
});

// Hàm tạo sao băng
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    starContainer.appendChild(star);

    // Vị trí bắt đầu ngẫu nhiên bên phải màn hình
    const startX = window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2; // Bắt đầu từ nửa trên màn hình

    star.style.left = startX + 'px';
    star.style.top = startY + 'px';

    // Kích thước ngẫu nhiên
    const size = Math.random() * 2 + 1; // Kích thước từ 1px đến 3px
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Thời gian animation ngẫu nhiên (để các sao rơi không đều nhau)
    const duration = Math.random() * 3 + 2; // Thời gian từ 2s đến 5s
    star.style.animationDuration = duration + 's';

    // Xóa ngôi sao sau khi animation kết thúc
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Tạo sao băng liên tục sau mỗi khoảng thời gian
setInterval(createStar, 150); // Tạo sao băng mới mỗi 150ms (tùy chỉnh tốc độ)
