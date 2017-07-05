//日期
let time = () => {
    let date = new Date();
    let year = date.getFullYear();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    let week = date.getDay();
    let div = document.getElementById('timer');
    //格式化星期
    let formate = (v) => {
        return ['日', '一', '二', '三', '四', '五', '六'][v];
    }
    //create DOM
    let spanYear = document.createElement('span');
    spanYear.innerHTML = '今天是' + year + '年';
    let spanMouth = document.createElement('span');
    spanMouth.innerHTML = mouth + '月';
    let spanDay = document.createElement('span');
    spanDay.innerHTML = day + '日';
    let spanWeek = document.createElement('span');
    spanWeek.innerHTML = ' 星期' + formate(week);
    div.appendChild(spanYear);
    div.appendChild(spanMouth);
    div.appendChild(spanDay);
    div.appendChild(spanWeek);
}
time();

//弹幕
let p = document.getElementById('skill').querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    p[i].onmouseover = function () {
        this.style.animationPlayState = 'paused';
    }
    p[i].onmouseout = function () {
        this.style.animationPlayState = 'running';
    }
}

//click
let clickFn = () => {
    let btn = document.getElementById('btn');
    let h3 = document.querySelector('h3');
    let val = btn.value;
    if (val === '点我') {
        val = '再点我';
        h3.style.display = 'block';
        document.getElementById('btn').value = '再点我';
    } else {
        h3.innerHTML = '我是有底线的';
        document.getElementById('btn').value = '没有啦';
        btn.disabled = 'disabled';
    }
}
document.getElementById('btn').addEventListener('click', clickFn, false);
