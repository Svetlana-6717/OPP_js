'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.ride = function () {
        let div = document.createElement('div');
        if (selector.startsWith('.')) {
            div.classList.add(selector.slice(1));
        } else
            if (selector.startsWith('#')) {
                let p = document.createElement('p');
                p.setAttribute('id', selector.slice(1));
                document.body.prepend(p);
            }

        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.background = this.bg;
        div.style.fontSize = this.fontSize + 'px';

        div.innerHTML = 'Современный JavaScript – это «безопасный» язык программирования.';
        document.body.prepend(div);
    };

}
let item = new DomElement('#head', '100', '800', 'yellow', '22');

item.ride();

