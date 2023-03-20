## Vital Zybailo
### Contact info
* **Github:** @vzybailo
* **Phone:** +375 33 682-88-33
* **Email:** vental@bk.ru
* **Location:** Minsk
### About me
I am a former accountant. I am interested in programming. I am an excellent team worker and very willing to learn and develop new skills.
I am reliable and dependable and often seek new responsibilities within a wide range of employment areas.
### Skills
* CSS
* HTML
* JS
* Wordpress
### Code examples
```
function sliderPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slides__item')
    slides[activeSlide].classList.add('active')
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            removeActiveClass()
            slide.classList.add('active')
        })
        const removeActiveClass = () => {
            slides.forEach(slide => {
                slide.classList.remove('active')
            });
        }
    }
}
sliderPlugin (2)
```
### Languages
* **English (B2)** in process