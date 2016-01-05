function Slider(selector, options) {
    var _self = this;

    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider_img-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider_pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider_pager_next'),
        paginationNode = sliderNode.querySelector('.slider_pagination');

    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];

    this._createPage = function () {
        for (var i = 0; i < imagesCount; i++) {

            var iStr = i + '';

            var li = document.createElement('li');
            li.className = 'slider_pagination-item';

            var a = document.createElement('a');
            a.href = '#';
            a.innerHTML = i + 1;
            a.setAttribute('data-slider_item', iStr);

            li.appendChild(a);

            paginationNode.appendChild(li);

        }
        li.children[currentSlideIndex].className = 'active';
    };


    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__render = function () {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';

        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';

        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };

    nextSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.nextSlide();
        _self.__render();
    };

    paginationNode.onclick = function(e) {
        e.preventDefault();

        var link = e.target;

        if (link.tagName !== 'A') { return; }

        currentSlideIndex = +link.dataset['slider_item'];

        _self.__render();
    };

    prevSliderNode.onclick = function(e) {
        e.preventDefault();
        _self.prevSlide();
        _self.__render();
    };

    this._init = function () {
        if (options.direction === 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }

        this.__render();
    };

    this._createPage();
    this._init();
}