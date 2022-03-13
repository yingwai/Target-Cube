// Меню
let menu = document.querySelector('.menu')
let menuimg = document.querySelector('.menuimg')
let store = document.querySelector('.store')
let info = document.querySelector('.info')

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
    
        info.style.overflow = 'visible'
        info.style.opacity = '1'
        info.style.zIndex = '1000'
    } else if (menu.classList.contains('open')) {
        menu.classList.add('close')
        menu.classList.remove('open')

        store.style.overflow = 'hidden'
        store.style.opacity = '0'
        store.style.zIndex = '-1'

        info.style.overflow = 'hidden'
        info.style.opacity = '0'
        info.style.zIndex = '-1'
    }
})

// Переменные нижнего меню
let cube = document.querySelector('.container')
let reborn = document.querySelector('.reborn')
let money = document.querySelector('.money')

// Счётчик денег
let cent = 00
let bucks = 10
let thousand = 0
let million = 0
let billion = 0

// Строка имеющихся денег
let strMoney = `$${bucks},${cent}`

// Рисование нижнего меню
reborn.innerHTML = `Reborning: 0`
money.innerHTML = `${strMoney}`

// Количество получаемых денег
let sumCent = 10
let sumBucks = 0

// Клик по кубу
cube.addEventListener('click', () => {
    bucks += sumBucks
    cent += sumCent

    // Рисование нижнего меню в зависимости от количества денег
    for (let i = 0; i < 1; i++) {
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


    // Добавления нового значения
    if (cent >= 100) {
        cent = 00
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
})

// Увеличение
let skill___1 = document.querySelector('.skill___1')
let price___1 = `$5`
let level___1 = 0

// Покупака увеличения
function buy1(event) {
    if (level___1 === 0) {
        if (bucks >= 5) {
            level___1++
            bucks -= 5
            price___1 = `$10`
            sumCent = 30

            for (let i = 0; i < 1; i++) {
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
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 1) {
        if (bucks >= 10) {
            level___1++
            bucks -= 10
            price___1 = `$15`
            sumCent = 60

            for (let i = 0; i < 1; i++) {
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
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 2) {
        if (bucks >= 15) {
            level___1++
            bucks -= 15
            price___1 = `$20`
            sumBucks = 1
            sumCent = 0

            for (let i = 0; i < 1; i++) {
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
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 3) {
        if (bucks >= 20) {
            level___1++
            bucks -= 20
            price___1 = `$25`
            sumBucks = 1
            sumCent = 30

            for (let i = 0; i < 1; i++) {
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
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 4) {
        if (bucks >= 25) {
            level___1 = 'max'
            bucks -= 25
            price___1 = 'Не продайтся.'
            sumBucks = 1
            sumCent = 60

            for (let i = 0; i < 1; i++) {
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
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___1 === 'max') {
        alert('Максимальное улучшение')
    }
}

// Автоклик
let skill___2 = document.querySelector('.skill___2')
let price___2 = `$10`
let level___2 = 0

function buy2(event) {
    if (level___2 === 0) {
        if (bucks >= 10) {
            level___2++
            bucks -= 10
            price___2 = `$15`

            for (let i = 0; i < 1; i++) {
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

                levelKill1()
            }
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 1) {
        if (bucks >= 15) {
            level___2++
            bucks -= 15
            price___2 = `$20`

            for (let i = 0; i < 1; i++) {
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

                levelKill2()
            }
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 2) {
        if (bucks >= 20) {
            level___2++
            bucks -= 20
            price___2 = `$25`

            for (let i = 0; i < 1; i++) {
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

                levelKill3()
            }
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 3) {
        if (bucks >= 25) {
            level___2++
            bucks -= 25
            price___2 = `$30`

            for (let i = 0; i < 1; i++) {
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

                levelKill4()
            }
        } else {
            alert('Нехватает денег.')
        }
    } else if (level___2 === 4) {
        if (bucks >= 30) {
            level___2 = 'max'
            bucks -= 30
            price___2 = 'Не продайтся.'

            for (let i = 0; i < 1; i++) {
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

                levelKill5()
            }
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
