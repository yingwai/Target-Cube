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

// Кнопочки 57 строка

// Генератор меню
menu.classList.add('close')

// Открытие/закрытие меню
menuimg.addEventListener('click', () => {
    if (menu.classList.contains('close')) {
        menu.classList.add('open')
        menu.classList.remove('close')

        store.style.overflow = 'visible'
        store.style.opacity = '1'
        store.style.zIndex = '999'
    } else if (menu.classList.contains('open')) {
        menu.classList.add('close')
        menu.classList.remove('open')

        store.style.overflow = 'hidden'
        store.style.opacity = '0'
        store.style.zIndex = '-1'
    }
})

// Переменные нижнего меню
let clickZone = document.querySelector('.clickzone')
let reborn = document.querySelector('.reborn')
let money = document.querySelector('.money')

let sumMoney = 0
let sumInfo = `$0.00`

// Кнопочки
for (let i = 0; i < gearBtn.length; i++) {
    gearBtn[i].addEventListener('click', () => {
        if (gearBtn[i].value === 'Продолжить') {
            modal.style.zIndex = '-1'
            modal.style.opacity = '0'
            modal.style.overflow = 'hidden'

            modalMenu.style.zIndex = '-1'
            modalMenu.style.opacity = '0'
            modalMenu.style.overflow = 'hidden'
        } else if (gearBtn[i].value === 'Настройки') {
            console.log('hi')
        } else if (gearBtn[i].value === 'Сбросить прогресс') {
            let confirmRemove = confirm('Вы уверены?')
            console.log(confirmRemove)

            if (confirmRemove === true) {
                localStorage.removeItem('sumMoney')
                sumMoney = 0
                checkMoney()

                modal.style.zIndex = '-1'
                modal.style.opacity = '0'
                modal.style.overflow = 'hidden'

                modalMenu.style.zIndex = '-1'
                modalMenu.style.opacity = '0'
                modalMenu.style.overflow = 'hidden'
            }

        }
    })
}

// Получение сохранённых денег
let dataSum = JSON.parse(localStorage.getItem('sumMoney'))

// Создание или перезапись сохранённых денег при входе на страницу
window.onload = function() {
    if (dataSum) {
        localStorage.setItem('sumMoney', JSON.stringify(dataSum))
        sumMoney = dataSum
        checkMoney()
    } else {
        localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
    }
}

// Сохранение денег при выходе из страницы
window.onunload = function() {
    localStorage.setItem('sumMoney', JSON.stringify(dataSum))
}

// Рисование нижнего меню
reborn.innerHTML = `Rebirth: 0`
money.innerHTML = `${sumInfo}`

// Количество получаемых денег
let sumNum = 10
let sumLevel = 50

// Рисование денег в зависимости от их количества
function checkMoney() {
    if /* $1000000000 */ (sumMoney >= 100000000000) {
        sumInfo = `$${(sumMoney / 100000000000).toFixed(2)}b`
    } else if /* $1000000 */ (sumMoney >= 100000000) {
        sumInfo = `$${(sumMoney / 100000000).toFixed(2)}m`
    } else if /* $1000 */ (sumMoney >= 100000) {
        sumInfo = `$${(sumMoney / 100000).toFixed(2)}k`
    } else if /* $1 */ (sumMoney >= 100) {
        sumInfo = `$${(sumMoney / 100).toFixed(2)}`
    } else if /* $0.10 */ (sumMoney >= 10) {
        sumInfo = `$0.${(sumMoney).toFixed(0)}`
    } else /* $0 */ {
        sumInfo = `$0.0${sumMoney}`
    }

    if (level___2 >= 1) {
        sumMoney += sumLevel
    }

    dataSum = sumMoney

    money.innerHTML = `${sumInfo}`
}



// Клик по кубу
clickZone.addEventListener('click', () => {
    sumMoney += sumNum

    

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
                        <p>${description___1}</p>

                        <br>

                        <p>Цена: ${price___1} Уровень: ${level___1}</p>
                    </div>
                    
                    <div class="item" onclick="buy2(event)">
                        <h3>Автоклик</h3>
                        <p>${description___2}</p>
                        
                        <br>
                        
                        <p>Цена: ${price___2} Уровень: ${level___2}</p>
                    </div>`
}

// Увеличение
let price___1sum = 1500
let price___1 = `$${price___1sum / 100}`
let level___1 = 0
let description___1 = 'Увеличивает количество получаемых денег за клик на 10.'

// Покупака увеличения
function buy1() {
    if (level___1 < 10) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 1500
            price___1 = `$${price___1sum / 100}`
            
            sumNum += 10

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 20) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 3000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 25.'
            sumNum += 25

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 30) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 4500
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 40.'
            sumNum += 40

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 40) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 6000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 55.'
            sumNum += 55

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 50) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 7500
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 70.'
            sumNum += 70

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 60) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 9000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 150.'
            sumNum += 150

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 70) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 13000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 200.'
            sumNum += 200

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 80) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 18000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 400.'
            sumNum += 400

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 90) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 21000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 650.'
            sumNum += 650

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 99) {
        if (sumMoney >= price___1sum) {
            level___1++
            sumMoney -= price___1sum
            price___1sum = price___1sum + 30000
            price___1 = `$${price___1sum / 100}`
            description___1 = 'Увеличивает количество получаемых денег за клик на 1500.'
            sumNum += 1500

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 < 100) {
        if (sumMoney >= price___1sum) {
            level___1 = 'max'
            sumMoney -= price___1sum
            price___1 = `Не продаётся`
            description___1 = 'Увеличивает количество получаемых денег за клик на 1700.'
            sumNum += 1700

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 'max') {
        alert('Максимальный уровень')
    }
}

// Автоклик
let price___2sum = 3000
let price___2 = `$${price___2sum / 100}`
let level___2 = 0
let description___2 = `Автоматически получает ${sumLevel} за каждые 20 секунд.`

let worker = [null, null, null, null, null, null, null, null, null]

// Покупака автоклика
function buy2() {
    if (level___2 < 10) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 3000
            price___2 = `$${price___2sum / 100}`
            
            
            if (level___2 === 1) {
                checkLevelKill()
            } else if (level___2 > 1) {
                sumLevel += 5
            }
            
            description___2 = `Автоматически получает ${sumLevel} за каждые 20 секунд.`
            
            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 20) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 5000
            price___2 = `$${price___2sum / 100}`
            
            if (level___2 === 11) {
                clearInterval(worker[0])
                checkLevelKill()
            } else if (level___2 > 11) {
                sumLevel += 10
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 18 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 30) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 8000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 21) {
                clearInterval(worker[1])
                checkLevelKill()
            } else if (level___2 > 21) {
                sumLevel += 15
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 16 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 40) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 10000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 31) {
                clearInterval(worker[2])
                checkLevelKill()
            } else if (level___2 > 31) {
                sumLevel += 20
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 14 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 50) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 12000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 41) {
                clearInterval(worker[3])
                checkLevelKill()
            } else if (level___2 > 41) {
                sumLevel += 25
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 12 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 60) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 15000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 51) {
                clearInterval(worker[4])
                checkLevelKill()
            } else if (level___2 > 51) {
                sumLevel += 30
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 10 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 70) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 17000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 61) {
                clearInterval(worker[5])
                checkLevelKill()
            } else if (level___2 > 61) {
                sumLevel += 35
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 8 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 80) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 20000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 71) {
                clearInterval(worker[6])
                checkLevelKill()
            } else if (level___2 > 71) {
                sumLevel += 40
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 6 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 90) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 25000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 81) {
                clearInterval(worker[7])
                checkLevelKill()
            } else if (level___2 > 81) {
                sumLevel += 50
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 4 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 99) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 20000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 91) {
                clearInterval(worker[8])
                checkLevelKill()
            } else if (level___2 > 91) {
                sumLevel += 60
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 2 секунд.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 100) {
        if (sumMoney >= price___2sum) {
            level___2 = 'max'
            sumMoney -= price___2sum
            price___2 = `Не продаётся`

            if (level___2 > 99) {
                sumLevel += 70
            }

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 'max') {
        alert('Максимальный уровень')
    }
}

// Вызов автоклика или добавление к сумме автоклика
function checkLevelKill() {
    if (level___2 === 1) {
        function kill() {
            checkMoney()
            // console.log('20s')
        }

        worker[0] = setInterval(kill, 20000)
    } else if (level___2 === 11) {
        function kill() {
            checkMoney()
            // console.log('18s')
        }

        worker[1] = setInterval(kill, 18000)
    } else if (level___2 === 21) {
        function kill() {
            checkMoney()
            // console.log('16s')
        }

        worker[2] = setInterval(kill, 16000)
    } else if (level___2 === 31) {
        function kill() {
            checkMoney()
            // console.log('14s')
        }

        worker[3] = setInterval(kill, 14000)
    } else if (level___2 === 41) {
        function kill() {
            checkMoney()
            // console.log('12s')
        }

        worker[4] = setInterval(kill, 12000)
    } else if (level___2 === 51) {
        function kill() {
            checkMoney()
            // console.log('10s')
        }

        worker[5] = setInterval(kill, 10000)
    } else if (level___2 === 61) {
        function kill() {
            checkMoney()
            // console.log('8s')
        }

        worker[6] = setInterval(kill, 8000)
    } else if (level___2 === 71) {
        function kill() {
            checkMoney()
            // console.log('6s')
        }

        worker[7] = setInterval(kill, 6000)
    } else if (level___2 === 81) {
        function kill() {
            checkMoney()
            // console.log('4s')
        }

        worker[8] = setInterval(kill, 4000)
    } else if (level___2 === 91) {
        function kill() {
            checkMoney()
            // console.log('2s')
        }

        worker[9] = setInterval(kill, 2000)
    }
}

// Добавление списка магазина
drawStoreList()