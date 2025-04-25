function toggleNav() {
    const nav = document.getElementById("nav");
    const header2 = document.querySelector(".header2");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        header2.style.marginTop = "100vh"; // اجعل `header2` ينزل أسفل القائمة
    } else {
        header2.style.marginTop = "0px"; // أعد `header2` لمكانه الطبيعي عند إغلاق القائمة
    }
}
