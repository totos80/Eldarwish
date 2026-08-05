// عطارة الدرويش

console.log("مرحبا بكم في عطارة الدرويش");


// تأثير بسيط عند تحميل الصفحة
window.onload = function () {

    const title = document.querySelector(".hero h1");

    if (title) {
        title.style.opacity = "0";
        
        setTimeout(() => {
            title.style.transition = "1.5s";
            title.style.opacity = "1";
        }, 300);
    }

};
