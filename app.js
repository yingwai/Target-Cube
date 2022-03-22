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
let rebirth = 0
let perSumRebirth = 1

let speed = document.querySelector('.cube')
let position = document.querySelector('.container')
let face = document.querySelector('.face')
let up = document.querySelector('.top')
let bottom = document.querySelector('.bottom')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let front = document.querySelector('.front')
let back = document.querySelector('.back')

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
                localStorage.removeItem('sumGems')
                localStorage.removeItem('saveSkills')
                sumMoney = 0
                sumGems = 0
                level___6 = 0
                saveObjSkills = {
                    increase: 0,
                    criticalСlick: 0,
                    autoclick: 0,
                    increaseAutoclick: 0,
                    gettingGems: 0,
                    rebirth: 0,
                }

                up.style.background = '#E9ECEF'
                bottom.style.background = '#E9ECEF'
                right.style.background = 'linear-gradient(#E9ECEF 100%, #0096C7)'
                left.style.background = 'linear-gradient(#E9ECEF 100%, #0096C7)'
                back.style.background = 'linear-gradient(#E9ECEF 100%, #0096C7)'
                front.style.background = 'linear-gradient(#E9ECEF 100%, #0096C7)'

                clearInterval(worker[0])
                clearInterval(worker[1])
                clearInterval(worker[2])
                clearInterval(worker[3])
                clearInterval(worker[4])
                clearInterval(worker[5])
                clearInterval(worker[6])
                clearInterval(worker[7])
                clearInterval(worker[8])
                clearInterval(worker[9])

                checkMoney()

                modal.classList.add('hide')
                modal.classList.remove('open')

                location.reload()
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
let dataSkills = JSON.parse(localStorage.getItem('saveSkills'))

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

let saveSkills = []
// increase: 0,
// criticalСlick: 0,
// autoclick: 0,
// increaseAutoclick: 0,
// gettingGems: 0,
// rebirth: 0,

let saveObjSkills = {
    increase: 0,
    criticalСlick: 0,
    autoclick: 0,
    increaseAutoclick: 0,
    gettingGems: 0,
    rebirth: 0,
}

function loadDataSkills() {
    if (dataSkills) {
        localStorage.setItem('saveSkills', JSON.stringify(dataSkills))
        saveObjSkills = dataSkills[0]
        rebirth = saveObjSkills.rebirth
        checkLevelObj()
    } else {
        localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
    }
}

function saveDataSkills() {
    saveSkills.push(saveObjSkills)
    dataSkills = saveSkills
    localStorage.setItem('saveSkills', JSON.stringify(dataSkills))
}

// Создание или перезапись сохранённых денег при входе на страницу
window.onload = function () {
    loadMoney()
    loadGems()
    checkMoney()
    loadDataSkills()
}

// Сохранение денег при выходе из страницы
window.onunload = function () {
    saveMoney()
    saveGems()
    saveDataSkills()
}

// Рисование средств
reborn.innerHTML = `Обнуление: ${rebirth}`
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

    reborn.innerHTML = `Обнуление: ${level___6}`
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
                        <div class="item" onclick="buy1()">
                            
                        </div>

                        <div class="item" onclick="buy5()">

                        </div>

                        <div class="item" onclick="buy2()">
                            
                        </div>

                        <div class="item" onclick="buy3()">
                        
                        </div>    
                        
                        <div class="item" onclick="buy4()">
                            
                        </div>

                        <div class="item" onclick="buy6()">
                            
                        </div>
                    </div>`

    items = document.querySelectorAll('.item')
}

let lock = {
    lock1: false,
    lock2: false,
    lock3: false,
    lock4: false
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
    }
    else {
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

    if (level___1 < 80) {
        if (level___5 < 80) {
            if (level___2 < 80) {
                if (level___3 < 80) {
                    if (level___4 < 80) {
                        items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>
                            
                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим все навыки выше 80 ур.</p>
                            </div>`
                    }
                }
            }
        }
    } else if (level___5 < 80) {
        if (level___2 < 80) {
            if (level___3 < 80) {
                if (level___4 < 80) {
                    items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>
                            
                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим все навыки выше 80 ур.</p>
                            </div>`
                }
            }
        }
    } else if (level___2 < 80) {
        if (level___3 < 80) {
            if (level___4 < 80) {
                items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>
                            
                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим все навыки выше 80 ур.</p>
                            </div>`
            }
        }
    } else if (level___3 < 80) {
        if (level___4 < 80) {
            items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>
                            
                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим все навыки выше 80 ур.</p>
                            </div>`
        }
    } else if (level___4 < 80) {
        if (level___4 < 80) {
            items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>
                            
                            <div class="blocking open">
                                <img src="lock.png" alt="lock">
                                <p>Для разблокировки необходим все навыки выше 80 ур.</p>
                            </div>`
        }
    } else {
        items[5].innerHTML = `
                            <h3>Обнуление</h3>
                            <p>Обнуляет весь прогресс, но увеличивает стандарнтые показатели.</p>

                            <br>

                            <p>Цена: ${price___6}</p>`
    }
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
function upStore() {
    drawStoreList()
    printItem()
}

// Страница бустеров
function boostStore() {
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase++
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
            saveObjSkills.increase = 'max'
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick++
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
                saveObjSkills.criticalСlick = 'max'
                sumMoney -= price___5sum
                price___5 = `Не продаётся`

                if (level___5 > 99) {
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
        // 2% выпадения денег
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick++
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
                saveObjSkills.autoclick = 'max'
                sumMoney -= price___2sum
                price___2 = `Не продаётся`

                if (level___2 === 'max') {
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
    } else if (level___2 === 'max') {
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick++
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
                saveObjSkills.increaseAutoclick = 'max'
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems++
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
                saveObjSkills.gettingGems = 'max'
                sumMoney -= price___4sum
                price___4 = `Не продаётся`

                if (level___4 = 'max') {
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

// Обнуление
let price___6sum = 100000000
let price___6 = `$${price___6sum / 100}`
let level___6 = 0

function buy6() {
    if (level___1 >= 80 & level___5 >= 80 & level___2 >= 80 & level___3 >= 80 & level___4 >= 80) {
        if (level___6 < 10) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (menu.classList.contains('open')) {
                    menu.classList.add('close')
                    menu.classList.remove('open')
                }

                if (level___6 === 1) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 2) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 3) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 4) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 5) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 6) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 7) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 8) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 9) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E9ECEF'
                        bottom.style.background = '#0096C7'
                        right.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                        left.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                        back.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                        front.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                } else if (level___6 === 10) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#0096C7'
                        right.style.background = '#0096C7'
                        left.style.background = '#0096C7'
                        back.style.background = '#0096C7'
                        front.style.background = '#0096C7'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                        location.reload()
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 20) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (menu.classList.contains('open')) {
                    menu.classList.add('close')
                    menu.classList.remove('open')
                }

                if (level___6 === 11) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 12) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 13) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 14) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 15) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 16) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 17) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 18) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 19) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#0096C7'
                        bottom.style.background = '#5A189A'
                        right.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                        left.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                        back.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                        front.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 20) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#5A189A'
                        right.style.background = '#5A189A'
                        left.style.background = '#5A189A'
                        back.style.background = '#5A189A'
                        front.style.background = '#5A189A'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 30) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 21) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 22) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 23) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 24) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 25) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 26) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 27) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 28) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 29) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#5A189A'
                        bottom.style.background = '#AB2836'
                        right.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                        left.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                        back.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                        front.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 30) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#AB2836'
                        right.style.background = '#AB2836'
                        left.style.background = '#AB2836'
                        back.style.background = '#AB2836'
                        front.style.background = '#AB2836'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 40) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 31) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 32) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 33) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 34) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 35) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 36) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 37) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 38) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 39) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#AB2836'
                        bottom.style.background = '#FF9500'
                        right.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                        left.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                        back.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                        front.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 40) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#FF9500'
                        right.style.background = '#FF9500'
                        left.style.background = '#FF9500'
                        back.style.background = '#FF9500'
                        front.style.background = '#FF9500'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 50) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 41) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 42) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 43) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 44) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 45) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 46) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 47) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 48) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 49) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FF9500'
                        bottom.style.background = '#EEEF20'
                        right.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                        left.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                        back.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                        front.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 50) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#EEEF20'
                        right.style.background = '#EEEF20'
                        left.style.background = '#EEEF20'
                        back.style.background = '#EEEF20'
                        front.style.background = '#EEEF20'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 60) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 51) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 52) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 53) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 54) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 55) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 56) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 57) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 58) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 59) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#EEEF20'
                        bottom.style.background = '#55A630'
                        right.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                        left.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                        back.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                        front.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 60) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#55A630'
                        right.style.background = '#55A630'
                        left.style.background = '#55A630'
                        back.style.background = '#55A630'
                        front.style.background = '#55A630'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 70) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 61) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 62) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 63) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 64) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 65) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 66) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 67) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 68) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 69) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#55A630'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                        left.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                        back.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                        front.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 70) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#E6B8A2'
                        right.style.background = '#E6B8A2'
                        left.style.background = '#E6B8A2'
                        back.style.background = '#E6B8A2'
                        front.style.background = '#E6B8A2'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 80) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 71) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 72) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 73) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 74) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 75) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 76) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 77) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 78) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 79) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#E6B8A2'
                        bottom.style.background = '#9D6B53'
                        right.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                        left.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                        back.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                        front.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 80) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#9D6B53'
                        right.style.background = '#9D6B53'
                        left.style.background = '#9D6B53'
                        back.style.background = '#9D6B53'
                        front.style.background = '#9D6B53'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 90) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 81) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 82) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 83) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 84) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 85) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 86) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 87) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 88) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 89) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#9D6B53'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                        left.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                        back.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                        front.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 90) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#FEC5BB'
                        right.style.background = '#FEC5BB'
                        left.style.background = '#FEC5BB'
                        back.style.background = '#FEC5BB'
                        front.style.background = '#FEC5BB'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 99) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth++
                sumMoney -= price___6sum
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 91) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 92) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 93) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 94) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 95) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 96) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 97) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 98) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                } else if (level___6 === 99) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#FEC5BB'
                        bottom.style.background = '#B185DB'
                        right.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                        left.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                        back.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                        front.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 < 100) {
            if (sumMoney >= price___6sum) {
                level___6++
                saveObjSkills.rebirth = 100
                sumMoney -= price___6sum
                price___6 = `Не продаётся.`

                sumMoney = 0
                localStorage.setItem('sumMoney', JSON.stringify(sumMoney))
                saveObjSkills.increase = 0
                saveObjSkills.criticalСlick = 0
                saveObjSkills.autoclick = 0
                saveObjSkills.increaseAutoclick = 0
                saveObjSkills.gettingGems = 0
                localStorage.setItem('saveSkills', JSON.stringify(saveSkills))
                sumNum = 10

                if (level___6 === 100) {
                    speed.style.animation = 'spin 1s infinite linear'
                    position.style.transform = 'translateX(800px)'

                    setTimeout(() => {
                        position.style.opacity = '0'
                        position.style.transform = 'translateX(-800px)'
                    }, 2000);

                    setTimeout(() => {
                        position.style.opacity = '1'
                        up.style.background = '#B185DB'
                        bottom.style.background = '#B185DB'
                        right.style.background = '#B185DB'
                        left.style.background = '#B185DB'
                        back.style.background = '#B185DB'
                        front.style.background = '#B185DB'
                        position.style.transform = 'translateX(0px)'
                    }, 4000);

                    setTimeout(() => {
                        speed.style.animation = 'spin 50s infinite linear'
                    }, 6500);
                }

                checkMoney()

                printItem()
            } else {
                alert('Нехватает денег.')
            }
        } else if (level___6 === 100) {
            alert('Максимальный уровень')
        }
    }
}

// Увеличение деньжат
let price___rent1 = 20
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
                alert('Нехватает гемов.')
            }
        }
    }
}

// Увеличение гномов
let price___rent2 = 50
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
                alert('Нехватает гемов.')
            }
        }
    }
}

function checkLevelObj() {
    if (saveObjSkills.increase === 'max') {
        level___1 = 'max'
        price___1 = `Не продаётся`
        description___1 = 'Увеличивает количество получаемых денег за клик на 1700.'
        sumNum += 1700

        lock.lock1 = true
        lock.lock2 = true
        lock.lock4 = true

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.increase; i++) {
            if (level___1 < 10) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 1500
                    price___1 = `$${price___1sum / 100}`
                }

                sumNum += 10

                if (level___1 >= 10) {
                    lock.lock1 = true
                }

                printItem()
            } else if (level___1 < 20) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 4000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 25.'
                sumNum += 25

                if (level___1 >= 20) {
                    lock.lock2 = true
                }

                printItem()
            } else if (level___1 < 30) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 7500
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 40.'
                sumNum += 40

                printItem()
            } else if (level___1 < 40) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 11000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 55.'
                sumNum += 55

                if (level___1 >= 35) {
                    lock.lock4 = true
                }

                printItem()
            } else if (level___1 < 50) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 16000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 70.'
                sumNum += 70

                printItem()
            } else if (level___1 < 60) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 20000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 150.'
                sumNum += 150

                printItem()
            } else if (level___1 < 70) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 26000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 200.'
                sumNum += 200

                printItem()
            } else if (level___1 < 80) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 32000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 400.'
                sumNum += 400

                printItem()
            } else if (level___1 < 90) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 39000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 650.'
                sumNum += 650

                printItem()
            } else if (level___1 < 99) {
                level___1++

                if (level___6 === 0) {
                    price___1sum = price___1sum + 45000
                    price___1 = `$${price___1sum / 100}`
                }

                description___1 = 'Увеличивает количество получаемых денег за клик на 1500.'
                sumNum += 1500

                printItem()
            }
        }
    }


    if (saveObjSkills.criticalСlick === 'max') {
        level___5 = 'max'
        price___5 = `Не продаётся`

        if (level___5 > 99) {
            critMoney += 200
            perMoney += 0.02
        }

        description___5 = 'Даёт шанс 12% на получение большего количества денег.'

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.criticalСlick; i++) {
            if (level___5 < 10) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 3300
                    price___5 = `$${price___5sum / 100}`
                }

                if (level___5 === 1) {
                    moneyActive = true
                } else if (level___5 > 1) {
                    critMoney += 200
                } else if (level___5 === 10) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 4% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 20) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 4000
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 4% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 30) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 6400
                    price___5 = `$${price___5sum / 100}`
                }

                if (level___5 > 20) {
                    critMoney += 200
                } else if (level___5 === 30) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 6% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 40) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 9810
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 6% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 50) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 13290
                    price___5 = `$${price___5sum / 100}`
                }

                if (level___5 > 40) {
                    critMoney += 200
                } else if (level___5 === 50) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 8% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 60) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 19580
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 8% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 70) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 23710
                    price___5 = `$${price___5sum / 100}`
                }

                if (level___5 > 60) {
                    critMoney += 200
                } else if (level___5 === 70) {
                    perMoney += 0.02
                }

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 80) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 28910
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 90) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 35910
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                printItem()
            } else if (level___5 < 99) {
                level___5++

                if (level___6 === 0) {
                    price___5sum = price___5sum + 42650
                    price___5 = `$${price___5sum / 100}`
                }

                description___5 = 'Даёт шанс 10% на получение большего количества денег.'

                printItem()
            }
        }
    }


    if (saveObjSkills.autoclick === 'max') {
        level___2 = 'max'
        price___2 = `Не продаётся`

        if (level___2 === 'max') {
            clearInterval(worker[9])
            checkLevelKill()
        }

        lock.lock3 = true

        description___2 = `Автоматически получает ${sumLevel} за каждую 1 секунду.`

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.autoclick; i++) {
            if (level___2 < 10) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 3500
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 1) {
                    checkLevelKill()
                }

                if (level___2 === 10) {
                    lock.lock3 = true
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 20 секунд.`

                printItem()
            } else if (level___2 < 20) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 6000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 11) {
                    clearInterval(worker[0])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 18 секунд.`

                printItem()
            } else if (level___2 < 30) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 10000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 21) {
                    clearInterval(worker[1])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 16 секунд.`

                printItem()
            } else if (level___2 < 40) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 15000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 31) {
                    clearInterval(worker[2])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 14 секунд.`

                printItem()
            } else if (level___2 < 50) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 20000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 41) {
                    clearInterval(worker[3])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 12 секунд.`

                printItem()
            } else if (level___2 < 60) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 27000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 51) {
                    clearInterval(worker[4])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 10 секунд.`

                printItem()
            } else if (level___2 < 70) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 33000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 61) {
                    clearInterval(worker[5])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 8 секунды.`

                printItem()
            } else if (level___2 < 80) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 39000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 71) {
                    clearInterval(worker[6])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 6 секунд.`

                printItem()
            } else if (level___2 < 90) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 45000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 81) {
                    clearInterval(worker[7])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 4 секунды.`

                printItem()
            } else if (level___2 < 99) {
                level___2++

                if (level___6 === 0) {
                    price___2sum = price___2sum + 60000
                    price___2 = `$${price___2sum / 100}`
                }

                if (level___2 === 91) {
                    clearInterval(worker[8])
                    checkLevelKill()
                }

                description___2 = `Автоматически получает ${sumLevel} за каждые 2 секунд.`

                printItem()
            }
        }
    }


    if (saveObjSkills.increaseAutoclick === 'max') {
        level___3 = 'max'
        price___3 = `Не продаётся`
        sumLevel += 85

        description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.increaseAutoclick; i++) {
            if (level___3 < 10) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 7500
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 5

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 20) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 12000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 10

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 30) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 18000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 15

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 40) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 100000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 20

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 50) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 154000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 25

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 60) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 192000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 30

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 70) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 241500
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 35

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 80) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 301000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 40

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 90) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 408000
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 50

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            } else if (level___3 < 99) {
                level___3++

                if (level___6 === 0) {
                    price___3sum = price___3sum + 447300
                    price___3 = `$${price___3sum / 100}`
                }
                sumLevel += 60

                description___3 = `Добавляет ${sumLevel} к сумме автоклика.`

                printItem()
            }
        }
    }


    if (saveObjSkills.gettingGems === 'max') {
        level___4 = 'max'
        price___4 = `Не продаётся`

        if (level___4 === 'max') {
            perGems = 0.14
        }

        description___4 = `Даёт 15% возможность получить гемы.`

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.gettingGems; i++) {
            if (level___4 < 10) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 10500
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 1) {
                    gemsActive = true
                } else if (level___4 === 10) {
                    moreGems = 1
                }

                description___4 = `Даёт 1% возможность получить гемы.`

                printItem()
            } else if (level___4 < 20) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 15000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 20) {
                    perGems = 0.01
                }

                description___4 = `Даёт 2% возможность получить гемы.`

                printItem()
            } else if (level___4 < 30) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 21000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 30) {
                    moreGems = 2
                }

                description___4 = `Даёт 2% возможность получить гемы.`

                printItem()
            } else if (level___4 < 40) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 100000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 40) {
                    perGems = 0.04
                }

                description___4 = `Даёт 5% возможность получить гемы.`

                printItem()
            } else if (level___4 < 50) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 154000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 50) {
                    moreGems = 3
                }

                description___4 = `Даёт 5% возможность получить гемы.`

                printItem()
            } else if (level___4 < 60) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 192000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 60) {
                    perGems = 0.07
                }

                description___4 = `Даёт 8% возможность получить гемы.`

                printItem()
            } else if (level___4 < 70) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 241500
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 70) {
                    moreGems = 4
                }

                description___4 = `Даёт 8% возможность получить гемы.`

                printItem()
            } else if (level___4 < 80) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 301000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 80) {
                    perGems = 0.09
                }

                description___4 = `Даёт 10% возможность получить гемы.`

                printItem()
            } else if (level___4 < 90) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 408000
                    price___4 = `$${price___4sum / 100}`
                }

                if (level___4 === 90) {
                    moreGems = 5
                }

                description___4 = `Даёт 10% возможность получить гемы.`

                printItem()
            } else if (level___4 < 99) {
                level___4++

                if (level___6 === 0) {
                    price___4sum = price___4sum + 470300
                    price___4 = `$${price___4sum / 100}`
                }

                description___4 = `Даёт 10% возможность получить гемы.`

                printItem()
            }
        }
    }


    if (saveObjSkills.rebirth === 100) {
        level___6 = 100
        price___6 = `Не продаётся.`

        perSumRebirth += 70
        sumNum += 70

        price___1sum = price___1sum * perSumRebirth + 1500
        price___1 = `$${price___1sum / 100}`

        price___5sum = price___5sum * perSumRebirth + 3300
        price___5 = `$${price___5sum / 100}`

        price___2sum = price___2sum * perSumRebirth + 3500
        price___2 = `$${price___2sum / 100}`

        price___3sum = price___3sum * perSumRebirth + 7500
        price___3 = `$${price___3sum / 100}`

        price___4sum = price___4sum * perSumRebirth + 10500
        price___4 = `$${price___4sum / 100}`

        up.style.background = '#B185DB'
        bottom.style.background = '#B185DB'
        right.style.background = '#B185DB'
        left.style.background = '#B185DB'
        back.style.background = '#B185DB'
        front.style.background = '#B185DB'

        checkMoney()

        printItem()
    } else {
        for (let i = 0; i < saveObjSkills.rebirth; i++) {
            if (level___6 < 10) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 5
                sumNum += 5

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 1) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 80%, #0096C7)'
                } else if (level___6 === 2) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 70%, #0096C7)'
                } else if (level___6 === 3) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 60%, #0096C7)'
                } else if (level___6 === 4) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 50%, #0096C7)'
                } else if (level___6 === 5) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 40%, #0096C7)'
                } else if (level___6 === 6) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 30%, #0096C7)'
                } else if (level___6 === 7) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 20%, #0096C7)'
                } else if (level___6 === 8) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 10%, #0096C7)'
                } else if (level___6 === 9) {
                    up.style.background = '#E9ECEF'
                    bottom.style.background = '#0096C7'
                    right.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                    left.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                    back.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                    front.style.background = 'linear-gradient(#E9ECEF 0%, #0096C7)'
                } else if (level___6 === 10) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#0096C7'
                    right.style.background = '#0096C7'
                    left.style.background = '#0096C7'
                    back.style.background = '#0096C7'
                    front.style.background = '#0096C7'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 20) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 10
                sumNum += 10

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 11) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 80%, #5A189A)'
                } else if (level___6 === 12) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 70%, #5A189A)'
                } else if (level___6 === 13) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 60%, #5A189A)'
                } else if (level___6 === 14) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 50%, #5A189A)'
                } else if (level___6 === 15) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 40%, #5A189A)'
                } else if (level___6 === 16) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 30%, #5A189A)'
                } else if (level___6 === 17) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 20%, #5A189A)'
                } else if (level___6 === 18) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 10%, #5A189A)'
                } else if (level___6 === 19) {
                    up.style.background = '#0096C7'
                    bottom.style.background = '#5A189A'
                    right.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                    left.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                    back.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                    front.style.background = 'linear-gradient(#0096C7 0%, #5A189A)'
                } else if (level___6 === 20) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#5A189A'
                    right.style.background = '#5A189A'
                    left.style.background = '#5A189A'
                    back.style.background = '#5A189A'
                    front.style.background = '#5A189A'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 30) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 15
                sumNum += 15

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 21) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 80%, #AB2836)'
                } else if (level___6 === 22) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 70%, #AB2836)'
                } else if (level___6 === 23) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 60%, #AB2836)'
                } else if (level___6 === 24) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 50%, #AB2836)'
                } else if (level___6 === 25) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 40%, #AB2836)'
                } else if (level___6 === 26) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 30%, #AB2836)'
                } else if (level___6 === 27) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 20%, #AB2836)'
                } else if (level___6 === 28) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 10%, #AB2836)'
                } else if (level___6 === 29) {
                    up.style.background = '#5A189A'
                    bottom.style.background = '#AB2836'
                    right.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                    left.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                    back.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                    front.style.background = 'linear-gradient(#5A189A 0%, #AB2836)'
                } else if (level___6 === 30) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#AB2836'
                    right.style.background = '#AB2836'
                    left.style.background = '#AB2836'
                    back.style.background = '#AB2836'
                    front.style.background = '#AB2836'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 40) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 20
                sumNum += 20

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 31) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 80%, #FF9500)'
                } else if (level___6 === 32) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 70%, #FF9500)'
                } else if (level___6 === 33) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 60%, #FF9500)'
                } else if (level___6 === 34) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 50%, #FF9500)'
                } else if (level___6 === 35) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 40%, #FF9500)'
                } else if (level___6 === 36) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 30%, #FF9500)'
                } else if (level___6 === 37) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 20%, #FF9500)'
                } else if (level___6 === 38) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 10%, #FF9500)'
                } else if (level___6 === 39) {
                    up.style.background = '#AB2836'
                    bottom.style.background = '#FF9500'
                    right.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                    left.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                    back.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                    front.style.background = 'linear-gradient(#AB2836 0%, #FF9500)'
                } else if (level___6 === 40) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#FF9500'
                    right.style.background = '#FF9500'
                    left.style.background = '#FF9500'
                    back.style.background = '#FF9500'
                    front.style.background = '#FF9500'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 50) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 25
                sumNum += 25

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 41) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 80%, #EEEF20)'
                } else if (level___6 === 42) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 70%, #EEEF20)'
                } else if (level___6 === 43) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 60%, #EEEF20)'
                } else if (level___6 === 44) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 50%, #EEEF20)'
                } else if (level___6 === 45) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 40%, #EEEF20)'
                } else if (level___6 === 46) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 30%, #EEEF20)'
                } else if (level___6 === 47) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 20%, #EEEF20)'
                } else if (level___6 === 48) {
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 10%, #EEEF20)'
                } else if (level___6 === 49) {
                    position.style.opacity = '1'
                    up.style.background = '#FF9500'
                    bottom.style.background = '#EEEF20'
                    right.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                    left.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                    back.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                    front.style.background = 'linear-gradient(#FF9500 0%, #EEEF20)'
                } else if (level___6 === 50) {
                    position.style.opacity = '1'
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#EEEF20'
                    right.style.background = '#EEEF20'
                    left.style.background = '#EEEF20'
                    back.style.background = '#EEEF20'
                    front.style.background = '#EEEF20'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 60) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 30
                sumNum += 30

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 51) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 80%, #55A630)'
                } else if (level___6 === 52) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 70%, #55A630)'
                } else if (level___6 === 53) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 60%, #55A630)'
                } else if (level___6 === 54) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 50%, #55A630)'
                } else if (level___6 === 55) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 40%, #55A630)'
                } else if (level___6 === 56) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 30%, #55A630)'
                } else if (level___6 === 57) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 20%, #55A630)'
                } else if (level___6 === 58) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 10%, #55A630)'
                } else if (level___6 === 59) {
                    up.style.background = '#EEEF20'
                    bottom.style.background = '#55A630'
                    right.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                    left.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                    back.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                    front.style.background = 'linear-gradient(#EEEF20 0%, #55A630)'
                } else if (level___6 === 60) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#55A630'
                    right.style.background = '#55A630'
                    left.style.background = '#55A630'
                    back.style.background = '#55A630'
                    front.style.background = '#55A630'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 70) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 35
                sumNum += 35

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 61) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 80%, #E6B8A2)'
                } else if (level___6 === 62) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 70%, #E6B8A2)'
                } else if (level___6 === 63) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 60%, #E6B8A2)'
                } else if (level___6 === 64) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 50%, #E6B8A2)'
                } else if (level___6 === 65) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 40%, #E6B8A2)'
                } else if (level___6 === 66) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 30%, #E6B8A2)'
                } else if (level___6 === 67) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 20%, #E6B8A2)'
                } else if (level___6 === 68) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 10%, #E6B8A2)'
                } else if (level___6 === 69) {
                    up.style.background = '#55A630'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                    left.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                    back.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                    front.style.background = 'linear-gradient(#55A630 0%, #E6B8A2)'
                } else if (level___6 === 70) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#E6B8A2'
                    right.style.background = '#E6B8A2'
                    left.style.background = '#E6B8A2'
                    back.style.background = '#E6B8A2'
                    front.style.background = '#E6B8A2'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 80) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 40
                sumNum += 40

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 71) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 80%, #9D6B53)'
                } else if (level___6 === 72) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 70%, #9D6B53)'
                } else if (level___6 === 73) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 60%, #9D6B53)'
                } else if (level___6 === 74) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 50%, #9D6B53)'
                } else if (level___6 === 75) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 40%, #9D6B53)'
                } else if (level___6 === 76) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 30%, #9D6B53)'
                } else if (level___6 === 77) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 20%, #9D6B53)'
                } else if (level___6 === 78) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 10%, #9D6B53)'
                } else if (level___6 === 79) {
                    up.style.background = '#E6B8A2'
                    bottom.style.background = '#9D6B53'
                    right.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                    left.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                    back.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                    front.style.background = 'linear-gradient(#E6B8A2 0%, #9D6B53)'
                } else if (level___6 === 80) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#9D6B53'
                    right.style.background = '#9D6B53'
                    left.style.background = '#9D6B53'
                    back.style.background = '#9D6B53'
                    front.style.background = '#9D6B53'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 90) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 50
                sumNum += 50

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 81) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 80%, #FEC5BB)'
                } else if (level___6 === 82) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 70%, #FEC5BB)'
                } else if (level___6 === 83) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 60%, #FEC5BB)'
                } else if (level___6 === 84) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 50%, #FEC5BB)'
                } else if (level___6 === 85) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 40%, #FEC5BB)'
                } else if (level___6 === 86) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 30%, #FEC5BB)'
                } else if (level___6 === 87) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 20%, #FEC5BB)'
                } else if (level___6 === 88) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 10%, #FEC5BB)'
                } else if (level___6 === 89) {
                    up.style.background = '#9D6B53'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                    left.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                    back.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                    front.style.background = 'linear-gradient(#9D6B53 0%, #FEC5BB)'
                } else if (level___6 === 90) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#FEC5BB'
                    right.style.background = '#FEC5BB'
                    left.style.background = '#FEC5BB'
                    back.style.background = '#FEC5BB'
                    front.style.background = '#FEC5BB'
                }

                checkMoney()

                printItem()
            } else if (level___6 < 99) {
                level___6++
                price___6sum = price___6sum + 100000000
                price___6 = `$${price___6sum / 100}`

                perSumRebirth += 55
                sumNum += 55

                price___1sum = price___1sum * perSumRebirth + 1500
                price___1 = `$${price___1sum / 100}`

                price___5sum = price___5sum * perSumRebirth + 3300
                price___5 = `$${price___5sum / 100}`

                price___2sum = price___2sum * perSumRebirth + 3500
                price___2 = `$${price___2sum / 100}`

                price___3sum = price___3sum * perSumRebirth + 7500
                price___3 = `$${price___3sum / 100}`

                price___4sum = price___4sum * perSumRebirth + 10500
                price___4 = `$${price___4sum / 100}`

                if (level___6 === 91) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 80%, #B185DB)'
                } else if (level___6 === 92) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 70%, #B185DB)'
                } else if (level___6 === 93) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 60%, #B185DB)'
                } else if (level___6 === 94) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 50%, #B185DB)'
                } else if (level___6 === 95) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 40%, #B185DB)'
                } else if (level___6 === 96) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 30%, #B185DB)'
                } else if (level___6 === 97) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 20%, #B185DB)'
                } else if (level___6 === 98) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 10%, #B185DB)'
                } else if (level___6 === 99) {
                    up.style.background = '#FEC5BB'
                    bottom.style.background = '#B185DB'
                    right.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                    left.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                    back.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                    front.style.background = 'linear-gradient(#FEC5BB 0%, #B185DB)'
                }

                checkMoney()

                printItem()
            }
        }
    }
}

// Добавление списка магазина
drawStoreList()

printItem() 
