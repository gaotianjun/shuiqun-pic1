function Loading(){
    var str = location.search.substring(4);
    var number = Number(str);
    for (let i = 0; i < datas.length; i++) {
        if (datas[i].id == number) {
            var code = `<h2>${datas[i].title}</h2>
            <p class='time'>${datas[i].time}</p>
            <hr style=" height:6px;border:none;border-top:1px solid #185598;" />
            <img src=${datas[i].src} alt='资讯图'  class='imgs'/>
            <p>${datas[i].content}</p>`;
            $('#content').html(code);
        }
    }
}

