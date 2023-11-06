export const ImageSize = () => {
    const imageAspectRatio = document.querySelectorAll('.image-aspect-ratio, figure');
    imageAspectRatio.forEach(imageAspectRatio => {
        const img = imageAspectRatio.querySelector('img'), style = getComputedStyle(imageAspectRatio);
        if (img) {
            if (img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
                imageAspectRatio.style.setProperty('--padding-aspect-ratio', Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%');
        }

    })
}
