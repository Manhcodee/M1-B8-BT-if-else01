//B1
function submit_1() {
    let ina = parseFloat(document.querySelector('.ipa').value);
    let inb = parseFloat(document.querySelector('.ipb').value);
    if (ina % inb === 0) {
        document.querySelector('.result_1').innerHTML = 'a chia hết cho b';
    } else {
        document.querySelector('.result_1').innerHTML = 'a không chia hết cho b';
    }
}

//B2
function submit_2() {
    let in_2 = parseFloat(document.querySelector('.in_2').value);
    if (in_2 < 15) {
        document.querySelector('.result_2').innerHTML = 'học sinh không đủ tuổi vào lớp 10';
    } else {
        document.querySelector('.result_2').innerHTML = 'học sinh đủ tuổi vào lớp 10';
    }
}

//B3
function submit_3() {
    let in_3 = parseInt(document.querySelector('.in_3').value);
    if (in_3 === 0) {
        document.querySelector('.result_3').innerHTML = 'Vui lòng nhập lại';
    } else if (in_3 > 0) {
        document.querySelector('.result_3').innerHTML = 'Số nguên lớn hơn 0';
    } else {
        document.querySelector('.result_3').innerHTML = 'Số nguyên nhỏ hơn 0';
    }
}

//B4
function submit_4() {
    let in_4a = parseFloat(document.querySelector('.in_4a').value);
    let in_4b = parseFloat(document.querySelector('.in_4b').value);
    let in_4c = parseFloat(document.querySelector('.in_4c').value);
    let result = "";
    if (in_4a > in_4b && in_4a > in_4c) {
        result ="Max = " + in_4a;
    } else if (in_4b > in_4c) {
        result = "Max = " + in_4b;
    } else {
        result = "Max = " + in_4c;
    }
    document.querySelector('.result_4').innerHTML = result;
}

//B5
function submit_5() {
    let in_5a = parseFloat(document.querySelector('.in_5a').value);
    let in_5b = parseFloat(document.querySelector('.in_5b').value);
    let in_5c = parseFloat(document.querySelector('.in_5c').value);
    let result = "";
    let total = (in_5a + in_5b + in_5c) / 3;
    if (total >= 9) {
        result = "Điểm TB = " + total + "  ==> Hạng A";
    } else if (total < 9 && total >= 7) {
        result = "Điểm TB = " + total + "  ==> Hạng B";
    }else if (total < 7 && total >= 5) {
        result = "Điểm TB = " + total + "  ==> Hạng C";
    } else {
        result = "Điểm TB = " + total + "  ==> Hạng F";
    }
    document.querySelector('.result_5').innerHTML = result;
}


//B6
function submit_6() {
    let in_6 = parseFloat(document.querySelector('.in_6').value);
    let result = "";
    let total_100 = in_6 * ( 5 / 100);
    let total_300 = in_6 * ( 10 / 100);
    let total_300s = in_6 * ( 20 / 100);

    if(in_6 === 0) {
        result = "Doanh thu quá ít";
    }  else if(in_6 <= 100000000) {
            result = "Hoa hồng nhận được: " + total_100 + " VND";
    } else if (in_6 <= 300000000) {
            result = "Hoa hồng nhận được: " + total_300 + " VND";
    } else {
            result = "Hoa hồng nhận được: " + total_300s + " VND";
    }
    document.querySelector('.result_6').innerHTML = result;
}

//B7
function submit_7() {
    let in_7 = parseFloat(document.querySelector('.in_7').value);
    const def = 25;
    let result = "";
    let total_200s = (in_7 - 200) * 200 + 150 * 400 + 50 * 600;
    let total_50s = (in_7 - 50) * 400 + 50 * 600;
    let total_50 = in_7 * 600;
    if (in_7 > 200) {
        result = "Số tiền phải nộp là: " + 0.01 * total_200s * def + " VND";
    } else if (in_7 > 50) {
        result = "Số tiền phải nộp là: " + 0.01 * total_50s * def + " VND";
    }else {
        result = "Số tiền phải nộp là: " + 0.01 * total_50 * def + " VND";
    }
    document.querySelector('.result_7').innerHTML = result;
}