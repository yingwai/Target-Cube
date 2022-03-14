// Меню
let menu = document.querySelector('.menu')
let menuimg = document.querySelector('.menuimg')
let store = document.querySelector('.store')
let info = document.querySelector('.info')

// Окно настройки
let gear = document.querySelector('.gear')
let modal = document.querySelector('.modal')
let modalMenu = document.querySelector('.modal-menu')
let gearBtn = document.querySelectorAll('.gear-input')

// Вызов окна настройки
gear.addEventListener('click', () => {
    modal.style.zIndex = '1000'
    modal.style.opacity = '1'
    modal.style.overflow = 'visible'

    modalMenu.style.zIndex = '1000'
    modalMenu.style.opacity = '1'
    modalMenu.style.overflow = 'visible'
})

// Кнопочки
for (let i = 0; i < gearBtn.length; i++) {
    gearBtn[i].addEventListener('click', () => {
        if (gearBtn[0].value === 'Продолжить') {
            modal.style.zIndex = '-1'
            modal.style.opacity = '0'
            modal.style.overflow = 'hidden'

            modalMenu.style.zIndex = '-1'
            modalMenu.style.opacity = '0'
            modalMenu.style.overflow = 'hidden'
        } else if (gearBtn[i].value === 'Настройки') {
            console.log('hi')
        } else if (gearBtn[i].value === 'Сбросить прогресс') {
            console.log('hi')
        }
    })
}

// Генератор меню
menu.classList.add('close')

// Открытие/закрытие меню
menuimg.addEventListener('click', () => {
    if (menu.classList.contains('close')) {
        menu.classList.add('open')
        menu.classList.remove('close')

        store.style.overflow = 'visible'
        store.style.opacity = '1'
        store.style.zIndex = '1000'
    } else if (menu.classList.contains('open')) {
        menu.classList.add('close')
        menu.classList.remove('open')

        store.style.overflow = 'hidden'
        store.style.opacity = '0'
        store.style.zIndex = '-1'
    }
})

// Переменные нижнего меню
let cube = document.querySelector('.container')
let reborn = document.querySelector('.reborn')
let money = document.querySelector('.money')

// Счётчик денег
let cent = 00
let bucks = 0
let thousand = 0
let million = 0
let billion = 0

// Строка имеющихся денег
let strMoney = `$${bucks},${cent}`

// Рисование нижнего меню
reborn.innerHTML = `Rebirth: 0`
money.innerHTML = `${strMoney}`

// Количество получаемых денег
let sumCent = 10
let sumBucks = 0

// Рисование денег в зависимости от их количества
function checkMoney() {
    if (billion != 0) {
        strMoney = `$${billion}.${million}.${thousand}.${bucks},${cent}`
    } else if (million != 0) {
        strMoney = `$${million}.${thousand}.${bucks},${cent}`
    } else if (thousand != 0) {
        strMoney = `$${thousand}.${bucks},${cent}`
    } else {
        strMoney = `$${bucks},${cent}`
    }
    money.innerHTML = `${strMoney}`
}

// Клик по кубу
cube.addEventListener('click', () => {
    bucks += sumBucks
    cent += sumCent

    // Добавления нового значения
    if (cent >= 100) {
        cent = 0
        bucks += 1
    } else if (bucks >= 1000) {
        bucks = 0
        thousand += 1
    } else if (thousand >= 1000) {
        thousand = 0
        million += 1
    } else if (million >= 1000) {
        million = 0
        billion += 1
    }

    checkMoney()
})

// Рисование магазин листа
function drawStoreList() {
    store.innerHTML = `
                    <div class="title-store">
                        <h2>Магазин</h2>
                    </div>
                    <div class="item" onclick="buy1(event)">
                        <h3>Увеличение</h3>
                        <p>Увеличивает количество получаемых денег за клик.</p>

                        <br>

                        <p>Цена: ${price___1} Уровень: ${level___1}</p>
                    </div>
                    
                    <div class="item" onclick="buy2(event)">
                        <h3>Автоклик</h3>
                        <p>Автоматически кликает на куб раз в 10 секунд.</p>
                        
                        <br>
                        
                        <p>Цена: ${price___2} Уровень: ${level___2}</p>
                    </div>`
}

// Увеличение
let skill___1 = document.querySelector('.skill___1')
let price___1 = `$15`
let level___1 = 0

// Покупака увеличения
function buy1(event) {
    if (level___1 === 0) {
        if (bucks >= 15) {
            level___1++
            bucks -= 15
            price___1 = `$30`
            sumCent = 30

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 1) {
        if (bucks >= 30) {
            level___1++
            bucks -= 30
            price___1 = `$70`
            sumCent = 60

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 2) {
        if (bucks >= 70) {
            level___1++
            bucks -= 70
            price___1 = `$120`
            sumBucks = 1
            sumCent = 0

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 3) {
        if (bucks >= 120) {
            level___1++
            bucks -= 120
            price___1 = `$180`
            sumBucks = 1
            sumCent = 30

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 4) {
        if (bucks >= 180) {
            level___1 = 'max'
            bucks -= 180
            price___1 = 'Не продаётся.'
            sumBucks = 1
            sumCent = 60

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 'max') {
        alert('Максимальное улучшение')
    }
}

// Автоклик
let skill___2 = document.querySelector('.skill___2')
let price___2 = `$30`
let level___2 = 0

function buy2(event) {
    if (level___2 === 0) {
        if (bucks >= 30) {
            level___2++
            bucks -= 30
            price___2 = `$100`

            checkMoney()

            drawStoreList()

            levelKill1()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 1) {
        if (bucks >= 100) {
            level___2++
            bucks -= 100
            price___2 = `$200`

            checkMoney()

            drawStoreList()

            levelKill2()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 2) {
        if (bucks >= 200) {
            level___2++
            bucks -= 200
            price___2 = `$350`

            checkMoney()

            drawStoreList()

            levelKill3()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 3) {
        if (bucks >= 350) {
            level___2++
            bucks -= 350
            price___2 = `$500`

            checkMoney()

            drawStoreList()

            levelKill4()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 4) {
        if (bucks >= 500) {
            level___2 = 'max'
            bucks -= 500
            price___2 = 'Не продаётся.'

            checkMoney()

            drawStoreList()

            levelKill5()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 'max') {
        alert('Максимальное улучшение')
    }
}

cubeKill = document.querySelector('.container')

function levelKill1() {
    function kill1() {
        if (level___2 === 1) {
            cubeKill.click()
            money.innerHTML = `${strMoney}`
        }
    }

    setInterval(kill1, 10000);
}

function levelKill2() {
    function kill2() {
        if (level___2 === 2) {
            cubeKill.click()
            money.innerHTML = `${strMoney}`
        }
    }

    setInterval(kill2, 7000);
}

function levelKill3() {
    function kill3() {
        if (level___2 === 3) {
            cubeKill.click()
            money.innerHTML = `${strMoney}`
        }
    }

    setInterval(kill3, 5000);
}

function levelKill4() {
    function kill4() {
        if (level___2 === 4) {
            cubeKill.click()
            money.innerHTML = `${strMoney}`
        }
    }

    setInterval(kill4, 3000);
}

function levelKill5() {
    function kill5() {
        if (level___2 === 'max') {
            cubeKill.click()
            money.innerHTML = `${strMoney}`
        }
    }

    setInterval(kill5, 1000);
}

// Добавление списка магазина
drawStoreList()