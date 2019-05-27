cnt = 0;
while(true) {
    a = Math.floor(Math.random() * 9) + 1;
    b = Math.floor(Math.random() * 9) + 1;
    res = a * b;
    answer = prompt(String(a) + ' * ' + String(b) + ' = ?');
    if(res === Number(answer)) {
        alert("Correct!");
        cnt++;
    }
    else {
        alert("Wrong!");
        break;
    }
}
document.write("총 " + String(cnt) + "개의 구구단 문제를 해결하셨습니다.");