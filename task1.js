// function checkSuccess(grades) {
//     // التحقق من عدد العلامات
//     if (grades.length !== 4) {
//         return "خطأ: يجب إدخال 4 علامات فقط";
//     }

//     let passedCount = 0;
//     let needHelpCount = 0;
//     let failedHard = 0;

//     // فحص كل علامة باستخدام if فقط
//     const m1 = grades[0];
//     if (m1 >= 60) { passedCount++; }
//     if (m1 === 58 || m1 === 59) { needHelpCount++; }
//     if (m1 < 58) { failedHard++; }

//     const m2 = grades[1];
//     if (m2 >= 60) { passedCount++; }
//     if (m2 === 58 || m2 === 59) { needHelpCount++; }
//     if (m2 < 58) { failedHard++; }

//     const m3 = grades[2];
//     if (m3 >= 60) { passedCount++; }
//     if (m3 === 58 || m3 === 59) { needHelpCount++; }
//     if (m3 < 58) { failedHard++; }

//     const m4 = grades[3];
//     if (m4 >= 60) { passedCount++; }
//     if (m4 === 58 || m4 === 59) { needHelpCount++; }
//     if (m4 < 58) { failedHard++; }

//     // التحقق من النجاح
//     let result = "";

//     // الشرط: لا فشل قاسي، والمساعدة المطلوبة لا تزيد عن علامتين، وعدد الناجحين + من يمكن مساعدتهم = 4
//     if (failedHard === 0) {
//         if (needHelpCount <= 2) {
//             if (passedCount + needHelpCount === 4) {
//                 result = "الطالب ناجح (مع استخدام المساعدة إذا لزم)";
//             }
//         }
//     }

//     // إذا لم يتحقق الشرط السابق، نتحقق من وجود فشل
//     else (result === "") 
//         result = "الطالب راسب";
    

//     return result;
// }
