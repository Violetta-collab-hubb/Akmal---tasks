
const changeLight = () => {
    const lights = document.querySelectorAll('.light');
    

    let activeIndex = null;
    for(let i = 0; i < lights.length; i++) {
        if (!lights[i].classList.contains('off')) {
            activeIndex = i;
            break;
        }
    }
    
    if(activeIndex === null || activeIndex >= lights.length - 1){
        activeIndex = 0;
    } else {
        activeIndex++;
    }
    
    // Переключаем состояние светофора
    lights.forEach((el, index) => {
        el.classList.toggle('off', index !== activeIndex);
    });
};

// Запускаем переключение каждые 2 секунды
setInterval(changeLight, 2000);
changeLight(); // сразу включаем красный свет