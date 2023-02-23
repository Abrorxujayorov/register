const control = document.querySelector('.continer')
const list = document.querySelector('.list');
const btncontrol = document.querySelector('.btn-control');
const btns = document.querySelectorAll('.btn');
const arteglis = document.querySelector('arteglis')
const con = document.querySelectorAll('.list')
const activ = document.querySelector('active');
control.addEventListener('click', (e) => {
    let id = e.target.dataset.id
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active')
        con.forEach((content) => {
            content.classList.remove('active');
        })
    }   
    const element = document.getElementById(id)
    element.classList.add('active');
})


let viloyat = "Toshkent"

const api = `https://islomapi.uz/api/present/day?region=${viloyat}`;
const input = document.getElementById('search')
const item = document.getElementById('day')
const inputtt = document.getElementById('search')
const btn = document.querySelector('.color')
const loader = document.querySelector('.loader')
function day() {
    loader.classList.add('lleodingnone')
    fetch(api)
    .then((res) => res.json())
    .then((data) => {
        item.innerHTML += `
        <h2>${data.region}</h2>
                    <p class="date">${data.date}</p>
                    <p class="weekday">${data.weekday}</p>
                    <ul class="minilist">
                        <li class="miniitem">Тонг ${data.times.tong_saharlik}</li>
                        <li class="miniitem">Қуёш ${data.times.quyosh}</li>
                        <li class="miniitem">Пешин ${data.times.peshin}</li>
                        <li class="miniitem">Аср ${data.times.asr}</li>
                        <li class="miniitem">Шом ${data.times.shom_iftor}</li>
                        <li class="miniitem">Хуфтон ${data.times.hufton}</li>
        `
        loader.classList.remove('lleodingnone')
    })

}
day()

const soatt = document.querySelector('.soat')
const vaqt = document.getElementById('soat')
function clockFunc() {
    const date = new Date();
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds() 
    let soat = `${hour}:${minute}:${second}`
    
    soatt.textContent = soat
}
setInterval(clockFunc,1000)

const haftaapi = `https://islomapi.uz/api/present/week?region=${viloyat}`;
const hafta = document.getElementById('hafta')
function haftaa() {
    loader.classList.add('lleodingnone')
    fetch(haftaapi)
    .then((res) => res.json())
    .then((data) => {
        let bith = data
        for (let i = 0; i < bith.length; i++) {
            hafta.innerHTML += `
            <li class="item" id="haftabir">
                    <h2>${bith[i].region}</h2>
                    <p class="date">${bith[i].date}</p>
                    <p class="weekday">${bith[i].weekday}</p>
                    <ul class="minilist">
                        <li class="miniitem tong">Тонг ${bith[i].times.tong_saharlik}</li>
                        <li class="miniitem qiyosh">Қуёш ${bith[i].times.quyosh}</li>
                        <li class="miniitem peshin">Пешин ${bith[i].times.peshin}</li>
                        <li class="miniitem asr">Аср ${bith[i].times.asr}</li>
                        <li class="miniitem shom">Шом ${bith[i].times.shom_iftor}</li>
                        <li class="miniitem hufton">Хуфтон ${bith[i].times.hufton}   </li>
                    </ul>
                </li>
             `            
             loader.classList.remove('lleodingnone')
        }
        
    })
}
haftaa()
const oyapi = `https://islomapi.uz/api/monthly?region=${viloyat}&month=4`;
const oy = document.getElementById('oy')
function oyy() {
    loader.classList.add('lleodingnone')
    fetch(oyapi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        let bith = data
        for (let i = 0; i < bith.length; i++) {
            oy.innerHTML += `
            <li class="item" id="haftabir">
                    <h2>${bith[i].region}</h2>
                    <p class="date">${bith[i].date}</p>
                    <p class="weekday">${bith[i].weekday}</p>
                    <ul class="minilist">
                        <li class="miniitem tong">Тонг ${bith[i].times.tong_saharlik}</li>
                        <li class="miniitem qiyosh">Қуёш ${bith[i].times.quyosh}</li>
                        <li class="miniitem peshin">Пешин ${bith[i].times.peshin}</li>
                        <li class="miniitem asr">Аср ${bith[i].times.asr}</li>
                        <li class="miniitem shom">Шом ${bith[i].times.shom_iftor}</li>
                        <li class="miniitem hufton">Хуфтон ${bith[i].times.hufton}   </li>
                    </ul>
                </li>
             `            
        }
        loader.classList.remove('lleodingnone')


    })
}
oyy()

inputtt.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        alert("Bu Bulim Hozircha ishlamayabdi")
    }
})

const htavqin = document.querySelector('.htavqin')
    htavqin.addEventListener('click', () => {
        window.location.href = "https://t.me/UniversaIs_robot";
    })


