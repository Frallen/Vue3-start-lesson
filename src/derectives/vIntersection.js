export default {
    mounted(el,binding) {
        console.log(binding)
        let options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback =  (entries, observer) =>{
            //если происходит пересечение объекта и если текущая страница меньше количества страниц
            if (entries[0].isIntersecting ) {//&&  binding.value.val1< binding.value.val2
                binding.value()
            }
        };
        // слежу за пересечением невидимого блока для подгрузки новых постов
        let observer = new IntersectionObserver(callback, options);
        //$refs это прямая ссылка на объект
        observer.observe(el);
    }
}