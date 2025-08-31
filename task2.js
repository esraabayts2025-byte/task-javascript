function compareAges(day1, month1, year1, day2, month2, year2) {
    // نحسب عدد الأيام منذ الولادة لكل شخص
    const daysInYear = 360; // 12 * 30
    const daysInMonth = 30;

    // حساب عدد الأيام منذ الولادة (من سنة 0)
    const totalDays1 = (year1 * daysInYear) + (month1 * daysInMonth) + day1;
    const totalDays2 = (year2 * daysInYear) + (month2 * daysInMonth) + day2;

    // المقارنة
    if (totalDays1 > totalDays2) {
        return "الشخص الأول أكبر سنًا";
    } else if (totalDays2 > totalDays1) {
        return "الشخص الثاني أكبر سنًا";
    } else {
        return "الشخصان نفس العمر";
    }
}

// اختبار
console.log(compareAges(1, 1, 2000, 1, 1, 2001)); // الشخص الأول أكبر
console.log(compareAges(1, 1, 2001, 1, 1, 2000)); // الشخص الثاني أكبر
console.log(compareAges(1, 1, 2000, 1, 1, 2000)); // نفس العمر