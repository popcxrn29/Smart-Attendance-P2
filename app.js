// Smart Attendance System

// ปุ่มสแกน QR
const scanButton = document.querySelector(".scan");

scanButton.addEventListener("click", function(){

    alert("📷 ระบบสแกน QR Code กำลังเปิดใช้งาน");

});


// ปุ่มค้นหา
const searchButton = document.querySelector(".search");


searchButton.addEventListener("click", function(){

    let name = document.querySelector("input").value;


    if(name === ""){

        alert("กรุณาพิมพ์ชื่อ หรือชื่อเล่น");

    }

    else{

        alert(
        "🔍 กำลังค้นหา : " + name
        );

    }

});
