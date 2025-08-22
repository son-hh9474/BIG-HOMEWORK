document.addEventListener("DOMContentLoaded", function () {
    // Xử lý Dark Mode
    const darkToggle = document.getElementById("darkToggle");
    darkToggle.addEventListener("click", function (e) {
        e.preventDefault(); // Ngăn load lại trang
        document.body.classList.toggle("dark");
    });
    //Xử lý menu
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");

    // Bấm nút thì thêm/bớt class .active
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
    // Nếu muốn bấm ra ngoài thì đóng sidebar
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove("active");
    }
    });
});


