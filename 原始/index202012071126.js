function play(num) {
    for (let i = 1; i <= 3; i++) {
        if (num === i) {
            document.getElementById("money-" +i).style.display = "block";
            continue;
        }
        document.getElementById("money-" + i).style.display = "none";
    }
}

function weChatPay() {
    let money = document.getElementById("money-wechat").value;
    let ad = document.getElementById("ad-wechat").value;
    window.open('http://www.shuiquntu.cn/pay/weChatPay.html?money=' + money + "&ad=" + ad);
}