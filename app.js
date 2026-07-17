// นำเข้าไฟล์ Excel

function importExcel(){

    const fileInput = document.getElementById("excelFile");

    const file = fileInput.files[0];


    if(!file){

        alert("กรุณาเลือกไฟล์ Excel ก่อน");

        return;

    }


    const reader = new FileReader();


    reader.onload = function(e){


        const data = new Uint8Array(e.target.result);


        const workbook = XLSX.read(data, {
            type:"array"
        });


        const sheet = workbook.Sheets[
            workbook.SheetNames[0]
        ];


        const students = XLSX.utils.sheet_to_json(sheet);


        console.log(students);


        alert(
        "อ่านข้อมูลนักเรียนได้ " 
        + students.length 
        + " คน"
        );


    };


    reader.readAsArrayBuffer(file);

}
