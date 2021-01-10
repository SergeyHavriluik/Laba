/*Бургер*/
document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    let burger = document.getElementById('burger');
    let menu = document.getElementById('menu');
    burger.onclick = (event) => {
        menu.classList.toggle('disactive')
    }
    }
}