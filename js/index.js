
function play() {
    document.getElementById("money-1").style.display = "block";
}

function play1(num) {
    var data = '';
    for (let i = 0; i < datas.length; i++) {
        if (num == 1) {
            data += `<div class=${datas[i].class} id=${datas[i].id}>
                    <div class='information'>
                        <img src=${datas[i].src} alt='资讯图' class='imgs'>
                        <div class='news'>
                            <a href="./article.html?id=${datas[i].id}">
                                <p style='font-size: 0.9rem;'>${datas[i].title}</p>
                                <p style='font-size: 0.8rem;'>${datas[i].synopsis}</p>
                            </a>
                        </div>
                    </div>
                </div>`;
            $('.content').html(data);
        }

        if (datas[i].class == num) {
            data += `<div class=${datas[i].class} id=${datas[i].id}>
                    <div class='information'>
                        <img src=${datas[i].src} alt='资讯图' class='imgs'>
                        <div class='news'>
                            <a href="./article.html?id=${datas[i].id}">
                                <p style='font-size: 0.9rem;'>${datas[i].title}</p>
                                <p style='font-size: 0.8rem;'>${datas[i].synopsis}</p>
                            </a>
                        </div>
                    </div>
                </div>`;
            $('.content').html(data);
        }
    }
}
function weChatPay() {
    let money = document.getElementById("money-wechat").value;
    let ad = document.getElementById("ad-wechat").value;
    window.open('http://www.shuiquntu.cn/pay/weChatPay.html?money=' + money + "&ad=" + ad);
}