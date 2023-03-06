// Num counter
function numCounter(selector, number, time, step) {
  const counter = document.querySelector(selector)

  let res = 0

  const allTime = Math.round(time / (number / step))

  let interval = setInterval(() => {
    res = res + step

    if (res == number) {
      clearInterval(interval)
    }
    counter.innerHTML = res
  }, allTime)
}

// Данная функция может быть вызвана неограниченное количество раз

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id)
// Второй аргумент - Конечное значение которое будет показано на странице
// Третий аргумент - ВРЕМЯ АНИМАЦИИ МИЛИСЕКУНДЫ
// Четвертый аргумент - шаг анимации (например добавляем по 1 или по 10 или по 100)
numCounter('#num1', 600, 2000, 1)