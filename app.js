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

modal.classList.add('close')

// Вызов окна настройки
gear.addEventListener('click', () => {
    modal.classList.add('open')
    modal.classList.remove('close')
})

// Кнопочки 57 строка

// Генератор меню
menu.classList.add('close')


// Открытие/закрытие меню
menuimg.addEventListener('click', () => {
    if (menu.classList.contains('close')) {
        menu.classList.add('open')
        menu.classList.remove('close')
    } else if (menu.classList.contains('open')) {
        menu.classList.add('close')
        menu.classList.remove('open')
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
            modal.classList.add('hide')
            modal.classList.remove('open')

            setTimeout(() => {
                modal.classList.remove('hide')
                modal.classList.add('close')
            }, 600);
        } else if (gearBtn[i].value === 'Настройки') {
            console.log('hi')
        } else if (gearBtn[i].value === 'Сбросить прогресс') {
            let confirmRemove = confirm('Вы уверены?')
            console.log(confirmRemove)

            if (confirmRemove === true) {
                localStorage.removeItem('sumMoney')
                sumMoney = 0

                checkMoney()

                modal.classList.add('hide')
                modal.classList.remove('open')

                setTimeout(() => {
                    modal.classList.remove('hide')
                    modal.classList.add('close')
                }, 600);
            }

        }
    })
}

// Получение сохранённых денег
let dataSum = JSON.parse(localStorage.getItem('sumMoney'))

// Создание или перезапись сохранённых денег при входе на страницу
window.onload = function () {
    if (dataSum) {
        localStorage.setItem('sumMoney', JSON.stringify(dataSum))
        sumMoney = dataSum
        checkMoney()
    } else {
        localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
    }
}

// Сохранение денег при выходе из страницы
window.onunload = function () {
    localStorage.setItem('sumMoney', JSON.stringify(dataSum))
}

// Рисование нижнего меню
reborn.innerHTML = `Обнуление: 0`
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
                    
                    <div class="selection-store">
                        <input type="button" class="up active-selection" onclick="upStore(event)" value="Улучшения">
                        <input type="button" class="boost" onclick="boostStore(event)" value="Бустеры">
                    </div>

                    <div class="up-list-store">
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
                        </div>

                        <div class="item" onclick="buy3(event)">
                            <h3>Увеличение автоклика</h3>
                            <p>${description___3}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___3} Уровень: ${level___3}</p>
                        </div>      
                        
                        <div class="item" onclick="buy4(event)">
                            <h3>Обнуление</h3>
                            <p>${`Обнуляет весь прогресс, но увеличивает стандарнтые показатели.`}</p>
                            
                            <br>
                            
                            <p>Цена: ${''} Уровень: ${''}</p>
                        </div>
                    </div>`

}

// Рисование магазин листа
function drawBoostList() {
    store.innerHTML = `
                    <div class="title-store">
                        <h2>Магазин</h2>
                    </div>
                    
                    <div class="selection-store">
                        <input type="button" class="up" onclick="upStore(event)" value="Улучшения">
                        <input type="button" class="boost active-selection" onclick="boostStore(event)" value="Бустеры">
                    </div>

                    <div class="boost-list-store active">
                        <div class="item" onclick="buy(event)">
                            <h3>Увеличение количества денег за клик.</h3>
                            <p>${''}</p>

                            <br>

                            <p>Цена: ${''}</p>
                        </div>
                    </div>`
}

// Страница улучшений
function upStore(event) {
    drawStoreList()
}

// Страница бустеров
function boostStore(event) {
    drawBoostList()
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
            price___1sum = price___1sum + 4000
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
            price___1sum = price___1sum + 7500
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
            price___1sum = price___1sum + 11000
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
            price___1sum = price___1sum + 16000
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
            price___1sum = price___1sum + 20000
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
            price___1sum = price___1sum + 26000
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
            price___1sum = price___1sum + 32000
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
            price___1sum = price___1sum + 39000
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
            price___1sum = price___1sum + 45000
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
let price___2sum = 3500
let price___2 = `$${price___2sum / 100}`
let level___2 = 0
let description___2 = `Автоматически получает ${sumLevel} за каждые 20 секунд.`

let worker = [null, null, null, null, null, null, null, null, null, null]

// Покупака автоклика
function buy2() {
    if (level___2 < 10) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 3500
            price___2 = `$${price___2sum / 100}`


            if (level___2 === 1) {
                checkLevelKill()
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
            price___2sum = price___2sum + 6000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 11) {
                clearInterval(worker[0])
                checkLevelKill()
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
            price___2sum = price___2sum + 10000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 21) {
                clearInterval(worker[1])
                checkLevelKill()
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
            price___2sum = price___2sum + 15000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 31) {
                clearInterval(worker[2])
                checkLevelKill()
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
            price___2sum = price___2sum + 20000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 41) {
                clearInterval(worker[3])
                checkLevelKill()
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
            price___2sum = price___2sum + 27000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 51) {
                clearInterval(worker[4])
                checkLevelKill()
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
            price___2sum = price___2sum + 33000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 61) {
                clearInterval(worker[5])
                checkLevelKill()
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 8 секунды.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 80) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 39000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 71) {
                clearInterval(worker[6])
                checkLevelKill()
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
            price___2sum = price___2sum + 45000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 81) {
                clearInterval(worker[7])
                checkLevelKill()
            }

            description___2 = `Автоматически получает ${sumLevel} за каждые 4 секунды.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 < 99) {
        if (sumMoney >= price___2sum) {
            level___2++
            sumMoney -= price___2sum
            price___2sum = price___2sum + 60000
            price___2 = `$${price___2sum / 100}`

            if (level___2 === 91) {
                clearInterval(worker[8])
                checkLevelKill()
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

            if (level___2 === 100) {
                clearInterval(worker[9])
                checkLevelKill()
            }

            description___2 = `Автоматически получает ${sumLevel} за каждую 1 секунду.`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 'max') {
        alert('Максимальный уровень')
    }
}

// Вызов автоклика
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
    } else if (level___2 === 100) {
        function kill() {
            checkMoney()
            // console.log('1s')
        }

        worker[10] = setInterval(kill, 1000)
    }
}

// Автоклик
let price___3sum = 5700
let price___3 = `$${price___3sum / 100}`
let level___3 = 0
let description___3 = `Добавляет ${sumLevel} к сумме автоклика`

// Покупака увеличение автоклика
function buy3() {
    if (level___3 < 10) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 7500
            price___3 = `$${price___3sum / 100}`
            sumLevel += 5

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 20) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 12000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 10

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 30) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 18000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 15

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 40) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 100000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 20

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 50) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 154000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 25

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 60) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 192000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 30

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 70) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 241500
            price___3 = `$${price___3sum / 100}`
            sumLevel += 35

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 80) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 301000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 40

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 90) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 408000
            price___3 = `$${price___3sum / 100}`
            sumLevel += 50

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 99) {
        if (sumMoney >= price___3sum) {
            level___3++
            sumMoney -= price___3sum
            price___3sum = price___3sum + 447300
            price___3 = `$${price___3sum / 100}`
            sumLevel += 60

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 < 100) {
        if (sumMoney >= price___3sum) {
            level___3 = 'max'
            sumMoney -= price___3sum
            price___3 = `Не продаётся`
            sumLevel += 85

            description___3 = `Добавляет ${sumLevel} к сумме автоклика`

            checkMoney()

            drawStoreList()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___3 === 'max') {
        alert('Максимальный уровень')
    }
}

// Добавление списка магазина
drawStoreList()