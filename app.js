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
let diamond = document.querySelector('.diamond')
let money = document.querySelector('.money')

// Переменные счёта денег и гемов
let sumMoney = 0
let sumInfo = `$0.00`
let sumGems = 0

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
                sumGems = 0

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
let dataGems = JSON.parse(localStorage.getItem('sumGems'))

function loadMoney() {
    if (dataSum) {
        localStorage.setItem('sumMoney', JSON.stringify(dataSum))
        sumMoney = dataSum
    } else {
        localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
    }
}

function saveMoney() {
    localStorage.setItem('sumMoney', JSON.stringify(dataSum))
}

function loadGems() {
    if (dataGems) {
        localStorage.setItem('sumGems', JSON.stringify(dataGems))
        sumGems = dataGems
    } else {
        localStorage.setItem('sumGems', JSON.stringify(sumGems))
    }
}

function saveGems() {
    localStorage.setItem('sumGems', JSON.stringify(dataGems))
}

// Создание или перезапись сохранённых денег при входе на страницу
window.onload = function () {
    loadMoney()
    loadGems()
    checkMoney()
}

// Сохранение денег при выходе из страницы
window.onunload = function () {
    saveMoney()
    saveGems()
}

// Рисование средств
reborn.innerHTML = `Обнуление: 0`
diamond.innerHTML = `Гемы: ${sumGems}`
money.innerHTML = `${sumInfo}`

let sumBuff = 0

// Количество получаемых денег
let sumNum = 10 + sumBuff
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

    dataGems = sumGems

    reborn.innerHTML = `Обнуление: 0`
    diamond.innerHTML = `Гемы: ${sumGems}`
    money.innerHTML = `${sumInfo}`
}

// Клик по кубу
clickZone.addEventListener('click', () => {
    sumMoney += sumNum

    randomGiveMoney()
    randomGiveGems()

    checkMoney()
})

let items

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
                            
                        </div>

                        <div class="item" onclick="buy5(event)">

                        </div>

                        <div class="item" onclick="buy2(event)">
                            
                        </div>

                        <div class="item" onclick="buy3(event)">
                        
                        </div>    
                        
                        <div class="item" onclick="buy4(event)">
                            
                        </div>

                        <div class="item" onclick="buy(event)">
                            <h3>Обнуление</h3>
                            <p>${`Обнуляет весь прогресс, но увеличивает стандарнтые показатели.`}</p>
                            
                            <br>
                            
                            <p>Цена: ${''} Уровень: ${''}</p>
                        </div>
                    </div>`

    items = document.querySelectorAll('.item')
    lockItemStore()
}

let lock = {
    lock1: false,
    lock2: false,
    lock3: false,
    lock4: false,
}

function printItem() {
    items[0].innerHTML = `
                    <h3>Увеличение</h3>
                    <p>${description___1}</p>

                    <br>

                    <p>Цена: ${price___1} Уровень: ${level___1}</p>`

    if (level___1 < 10) {
        items[1].innerHTML = `
                            <h3>Критический клик</h3>
                            <p>${description___5}</p>
        
                            <br>
        
                            <p>Цена: ${price___5} Уровень: ${level___5}</p>

                            <div class="blocking">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим 10 ур. "Увеличение".</p>
                            </div>`
    } else {
        items[1].innerHTML = `
                        <h3>Критический клик</h3>
                        <p>${description___5}</p>
    
                        <br>
    
                        <p>Цена: ${price___5} Уровень: ${level___5}</p>`
    }

    if (level___1 < 20) {
        items[2].innerHTML = `
                            <h3>Автоклик</h3>
                            <p>${description___2}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___2} Уровень: ${level___2}</p>

                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим 20 ур. "Увеличение".</p>
                            </div>`
    } else {
        items[2].innerHTML = `
                            <h3>Автоклик</h3>
                            <p>${description___2}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___2} Уровень: ${level___2}</p>`
    }

    if (level___2 < 10) {
        items[3].innerHTML = `
                            <h3>Увеличение автоклика</h3>
                            <p>${description___3}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___3} Уровень: ${level___3}</p>

                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим 10 ур. "Автоклик".</p>
                            </div>`
    } else {
        items[3].innerHTML = `
                            <h3>Увеличение автоклика</h3>
                            <p>${description___3}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___3} Уровень: ${level___3}</p>`
    }

    if (level___1 < 35) {
        items[4].innerHTML = `
                            <h3>Получение гемов</h3>
                            <p>${description___4}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___4} Уровень: ${level___4}</p>

                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим 35 ур. "Увеличение".</p>
                            </div>`
    } else {
        items[4].innerHTML = `
                            <h3>Получение гемов</h3>
                            <p>${description___4}</p>
                            
                            <br>
                            
                            <p>Цена: ${price___4} Уровень: ${level___4}</p>`
    }
}

// function printItem1() {
//     if (level___1 < 10) {
//         items[1].innerHTML = `
//                             <h3>Критический клик</h3>
//                             <p>${description___5}</p>

//                             <br>

//                             <p>Цена: ${price___5} Уровень: ${level___5}</p>

//                             <div class="blocking">
//                                 <img src="lock.png" alt="lock">
//                                 <p>Для разблокировки необходим 10 ур. "Увеличение".</p>
//                             </div>`
//     } else {
//         items[1].innerHTML = `
//                         <h3>Критический клик</h3>
//                         <p>${description___5}</p>

//                         <br>

//                         <p>Цена: ${price___5} Уровень: ${level___5}</p>

//                         <div class="blocking close">
//                                 <img src="lock.png" alt="lock">
//                                 <p>Для разблокировки необходим 10 ур. "Увеличение".</p>
//                             </div>`
//     }
// }

function lockItemStore() {
    // if (level___1 < 10) {
    //     items[1].innerHTML += `
    //                         <div class="blocking open">
    //                             <img src="lock.png" alt="lock">
    //                             <p>Для разблокировки необходим 10 ур. "Увеличение".</p>
    //                         </div>`
    // }

    // if (level___1 < 20) {
    //     items[2].innerHTML += `
    //                         <div class="blocking open">
    //                             <img src="lock.png" alt="lock">
    //                             <p>Для разблокировки необходим 20 ур. "Увеличение".</p>
    //                         </div>`
    // }

    // if (level___2 < 10) {
    //     items[3].innerHTML += `
    //                         <div class="blocking open">
    //                             <img src="lock.png" alt="lock">
    //                             <p>Для разблокировки необходим 10 ур. "Автоклик".</p>
    //                         </div>`
    // }

    // if (level___1 < 35) {
    //     items[4].innerHTML += `
    //                         <div class="blocking open">
    //                             <img src="lock.png" alt="lock">
    //                             <p>Для разблокировки необходим 35 ур. "Увеличение".</p>
    //                         </div>`
    // }
}

let lockFunc = false

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

                    <div class="boost-list-store">
                        <div class="item" onclick="rent1(event)">
                            <h3>Увеличитель денег</h3>
                            <p>Временно повышает количество получаемых денег за клик.</p>

                            <br>

                            <p>Цена: ${price___rent1str}</p>
                        </div>

                        <div class="item" onclick="rent2(event)">
                            <h3>Увеличитель гемов</h3>
                            <p>Временно повышает количество получаемых гемов за клик.</p>

                            <br>

                            <p>Цена: ${price___rent2str}</p>
                        </div>
                    </div>`

    items = document.querySelectorAll('.item')
}

clock = {
    clock1: false,
    clock2: false
}

lockClock = {
    lock1: true,
    lock2: true
}

function activeItemBoost1() {
    time = 10
    repeatBoostMin = 1
    repeatBoostSec = 60
    repeatSum = 120

    items[0].innerHTML += `
                    <div class="valid">
                    </div>`

    items[0].innerHTML += `
                    <div class="blocking close">
                    </div>`

    let activePanels = document.querySelectorAll('.valid')
    let blockings = document.querySelectorAll('.blocking')

    activePanels[0].innerHTML += `
            <img src="clock.png" alt="clock">
            <p class="clock-time">Действует ещё 00.${time}.</p>`

    let workerClock = null

    workerClock = setInterval(decreaseTime, 1000)

    function decreaseTime() {
        if (time === 0) {
            console.log('exit')

            activePanels[0].innerHTML = ``

            blockings[0].innerHTML = `
                                <img src="lock.png" alt="lock">
                                <p>До повторного применения осталось ${repeatBoostMin}.${repeatBoostSec}.</p>`

            blockings[0].classList.remove('close')

            if (repeatBoostMin === 0 && repeatSum === 0) {
                blockings[0].classList.add('close')
                activePanels[0].classList.add('close')

                blockings[0].innerHTML = ``

                lockClock.lock1 = true
                lockFunc = false

                clearInterval(workerClock)
            } else {
                let repeatCurrent = --repeatBoostSec
                repeatSum--
                console.log(repeatSum)

                if (repeatCurrent < 10) {
                    repeatCurrent = `0${repeatCurrent}`
                }

                if (repeatBoostSec === 0) {
                    if (repeatBoostMin > 0) {
                        repeatBoostMin--
                    }
                    repeatBoostSec = 60
                }

                blockings[0].innerHTML = `
                                <img src="lock.png" alt="lock">
                                <p>До повторного применения осталось ${repeatBoostMin}.${repeatCurrent}.</p>`
            }
        } else {
            let current = --time

            if (current < 10) {
                current = `0${current}`
            }

            activePanels[0].innerHTML = `
                    <img src="clock.png" alt="clock">
                    <p class="clock-time">Действует ещё 00.${current}.</p>`
        }
    }
}

function activeItemBoost2() {
    time = 10
    repeatBoostMin = 1
    repeatBoostSec = 60
    repeatSum = 120

    items[1].innerHTML += `
                    <div class="valid">
                    </div>`

    items[1].innerHTML += `
                    <div class="blocking close">
                    </div>`

    let activePanels = document.querySelectorAll('.valid')
    let blockings = document.querySelectorAll('.blocking')

    activePanels[0].innerHTML += `
            <img src="clock.png" alt="clock">
            <p class="clock-time">Действует ещё 00.${time}.</p>`

    let workerClock2 = null

    workerClock2 = setInterval(decreaseTime2, 1000)

    function decreaseTime2() {
        if (time === 0) {
            console.log('exit')

            activePanels[0].innerHTML = ``

            blockings[0].innerHTML = `
                                <img src="lock.png" alt="lock">
                                <p>До повторного применения осталось ${repeatBoostMin}.${repeatBoostSec}.</p>`

            blockings[0].classList.remove('close')

            if (repeatBoostMin === 0 && repeatSum === 0) {
                blockings[0].classList.add('close')
                activePanels[0].classList.add('close')

                blockings[0].innerHTML = ``

                lockClock.lock1 = true
                lockFunc = false

                clearInterval(workerClock2)
            } else {
                let repeatCurrent = --repeatBoostSec
                repeatSum--
                console.log(repeatSum)

                if (repeatCurrent < 10) {
                    repeatCurrent = `0${repeatCurrent}`
                }

                if (repeatBoostSec === 0) {
                    if (repeatBoostMin > 0) {
                        repeatBoostMin--
                    }
                    repeatBoostSec = 60
                }

                blockings[0].innerHTML = `
                                <img src="lock.png" alt="lock">
                                <p>До повторного применения осталось ${repeatBoostMin}.${repeatCurrent}.</p>`
            }
        } else {
            let current = --time

            if (current < 10) {
                current = `0${current}`
            }

            activePanels[0].innerHTML = `
                    <img src="clock.png" alt="clock">
                    <p class="clock-time">Действует ещё 00.${current}.</p>`
        }
    }
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

            if (level___1 >= 10) {
                lock.lock1 = true
            }

            checkMoney()

            printItem()
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

            if (level___1 >= 20) {
                lock.lock2 = true
            }

            checkMoney()

            printItem()
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

            printItem()
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

            if (level___1 >= 35) {
                lock.lock4 = true
            }

            checkMoney()

            printItem()
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

            printItem()
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

            printItem()
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

            printItem()
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

            printItem()
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

            printItem()
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

            printItem()
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

            printItem()
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 'max') {
        alert('Максимальный уровень')
    }
}

// Критический клик
let price___5sum = 2780
let price___5 = `$${price___5sum / 100}`
let level___5 = 0
let description___5 = 'Даёт шанс 2% на получение большего количества денег.'
let moneyActive = false
let critMoney = 400
let perMoney = 0

// Покупака критического клика
function buy5() {
    if (lock.lock1 === true) {
        if (level___5 < 10) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 3300
                price___5 = `$${price___5sum / 100}`

                if (level___5 === 1) {
                    moneyActive = true
                } else if (level___5 > 1) {
                    critMoney += 200
                } else if (level___5 === 10) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 4% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 20) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 4000
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 4% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 30) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 6400
                price___5 = `$${price___5sum / 100}`

                if (level___5 > 20) {
                    critMoney += 200
                } else if (level___5 === 30) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 6% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 40) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 9810
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 6% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 50) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 13290
                price___5 = `$${price___5sum / 100}`

                if (level___5 > 40) {
                    critMoney += 200
                } else if (level___5 === 50) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 8% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 60) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 19580
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 8% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 70) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 23710
                price___5 = `$${price___5sum / 100}`

                if (level___5 > 60) {
                    critMoney += 200
                } else if (level___5 === 70) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 80) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 28910
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 90) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 35910
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 99) {
            if (sumMoney >= price___5sum) {
                level___5++
                sumMoney -= price___5sum
                price___5sum = price___5sum + 42650
                price___5 = `$${price___5sum / 100}`

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 < 100) {
            if (sumMoney >= price___5sum) {
                level___5 = 'max'
                sumMoney -= price___5sum
                price___5 = `Не продаётся`

                if (level___5 > 30) {
                    critMoney += 200
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 12% на получение большего количества денег.'

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___5 === 'max') {
            alert('Максимальный уровень')
        }
    }
}

// Получение гемов
function randomGiveMoney() {
    const r = Math.random();

    if (moneyActive === true) {
        // 1% выпадения гема
        if (r <= 0.02 + perMoney) {
            sumMoney += critMoney

            checkMoney()

            console.log('get')
        }
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
    if (lock.lock2 === true) {

        if (level___2 < 10) {
            if (sumMoney >= price___2sum) {
                level___2++
                sumMoney -= price___2sum
                price___2sum = price___2sum + 3500
                price___2 = `$${price___2sum / 100}`

                if (level___2 === 1) {
                    checkLevelKill()
                }

                if (level___2 === 10) {
                    lock.lock3 = true
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 20 секунд.`

                checkMoney()

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
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

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___2 === 'max') {
            alert('Максимальный уровень')
        }
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

// Увеличение автоклик
let price___3sum = 5700
let price___3 = `$${price___3sum / 100}`
let level___3 = 0
let description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

// Покупака увеличение автоклика
function buy3() {
    if (lock.lock3 === true) {
        if (level___3 < 10) {
            if (sumMoney >= price___3sum) {
                level___3++
                sumMoney -= price___3sum
                price___3sum = price___3sum + 7500
                price___3 = `$${price___3sum / 100}`
                sumLevel += 5

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
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

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___3 < 100) {
            if (sumMoney >= price___3sum) {
                level___3 = 'max'
                sumMoney -= price___3sum
                price___3 = `Не продаётся`
                sumLevel += 85

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___3 === 'max') {
            alert('Максимальный уровень')
        }
    }
}

// Увеличение автоклик
let price___4sum = 9300
let price___4 = `$${price___4sum / 100}`
let level___4 = 0
let description___4 = `Даёт 1% возможность получить гемы.`
let gemsActive = false
let perGems = 0
let moreGems = 0

function buy4() {
    if (lock.lock4 === true) {
        if (level___4 < 10) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 1) {
                    gemsActive = true
                } else if (level___4 === 10) {
                    moreGems = 1
                }

                description___4 = `Даёт 1% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 20) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 15000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 20) {
                    perGems = 0.01
                }

                description___4 = `Даёт 2% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 30) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 21000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 30) {
                    moreGems = 2
                }

                description___4 = `Даёт 2% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 40) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 100000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 40) {
                    perGems = 0.04
                }

                description___4 = `Даёт 5% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 50) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 154000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 50) {
                    moreGems = 3
                }

                description___4 = `Даёт 5% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 60) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 192000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 60) {
                    perGems = 0.07
                }

                description___4 = `Даёт 8% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 70) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 241500
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 70) {
                    moreGems = 4
                }

                description___4 = `Даёт 8% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 80) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 301000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 80) {
                    perGems = 0.09
                }

                description___4 = `Даёт 10% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 90) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 408000
                price___4 = `$${price___4sum / 100}`

                if (level___4 === 90) {
                    moreGems = 5
                }

                description___4 = `Даёт 10% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 99) {
            if (sumMoney >= price___4sum) {
                level___4++
                sumMoney -= price___4sum
                price___4sum = price___4sum + 470300
                price___4 = `$${price___4sum / 100}`

                description___4 = `Даёт 10% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 < 100) {
            if (sumMoney >= price___4sum) {
                level___4 = 'max'
                sumMoney -= price___4sum
                price___4 = `Не продаётся`

                if (level___4 === 100) {
                    perGems = 0.14
                }

                description___4 = `Даёт 15% возможность получить гемы.`

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___4 === 'max') {
            alert('Максимальный уровень')
        }
    }
}

// Получение гемов
function randomGiveGems() {
    const r = Math.random();

    if (gemsActive === true) {
        // 1% выпадения гема
        if (r <= 0.01 + perGems) {
            sumGems += 1 + moreGems

            checkMoney()
        }
    }

}

// Увеличение деньжат
let price___rent1 = 10
let price___rent1str = `${price___rent1} гемов.`

function rent1(event) {
    if (lockFunc === false) {
        if (lockClock.lock1 === true) {
            if (sumGems >= price___rent1) {
                sumGems -= price___rent1

                sumNum += 500
                clock.clock1 = true
                lockClock.lock1 = false
                lockFunc = true

                setTimeout(() => {
                    sumNum -= 500
                }, 10000);

                checkMoney()

                activeItemBoost1()
            } else {
                alert('Нехватает денег.')
            }
        }
    }
}

// Увеличение гномов
let price___rent2 = 20
let price___rent2str = `${price___rent2} гемов.`

function rent2(event) {
    if (lockFunc === false) {
        if (lockClock.lock2 === true) {
            if (sumGems >= price___rent2) {
                sumGems -= price___rent2

                moreGems += 3
                clock.clock2 = true
                lockClock.lock2 = false
                lockFunc = true

                setTimeout(() => {
                    moreGems -= 3
                }, 10000);

                checkMoney()

                activeItemBoost2()
            } else {
                alert('Нехватает денег.')
            }
        }
    }
}

// Добавление списка магазина
drawStoreList()

printItem()
