export const EyeElement = () => {
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    const pupils = document.querySelectorAll(".eye .eye-element");
    window.addEventListener("mousemove", (e) => {
        pupils.forEach((pupil) => {
            const areaSize = pupil.parentElement.offsetWidth - pupil.offsetWidth / 2,
                rectCoords = getCoords(pupil);


            var x = (e.pageX - rectCoords.left) / (window.innerHeight/40);
            var y = (e.pageY - rectCoords.top) / (window.innerHeight/40);
            if(x > areaSize/4) {
                x = areaSize/4;
            }
            if(-areaSize/4 > x) {
                x = -areaSize/4;
            }

            if(y > areaSize/3) {
                y = areaSize/3;
            }

            if(y < -areaSize/4) {
                y = -areaSize/4;
            }

            x = x + 'px';
            y = y + 'px';

            pupil.setAttribute('data-x', x);
            pupil.setAttribute('data-y', y);

            pupil.style.transform = "translate3d(" + pupil.dataset.x + "," + pupil.dataset.y + ", 0px)";
        });
    });
}
