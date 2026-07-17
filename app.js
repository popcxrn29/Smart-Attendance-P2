import { db } from "./firebase.js";


import {
collection,
addDoc
}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



window.importExcel = function(){


const file = document.getElementById("excelFile").files[0];



if(!file){

alert("กรุณาเลือกไฟล์ Excel");

return;

}



const reader = new FileReader();



reader.onload = async function(e){



const data = new Uint8Array(e.target.result);



const workbook = XLSX.read(data, {

type:"array"

});



const sheet = workbook.Sheets[

workbook.SheetNames[0]

];



const students = XLSX.utils.sheet_to_json(sheet);



console.log(students);



for(let student of students){



await addDoc(

collection(db,"students"),

{


studentId:String(student.studentId),


name:student.name,


nickname:student.nickname,


class:student.class


}

);


}



document.getElementById("total").innerHTML =

students.length + " คน";



alert(

"นำเข้านักเรียนสำเร็จ "

+ students.length

+ " คน"

);



};



reader.readAsArrayBuffer(file);



}
