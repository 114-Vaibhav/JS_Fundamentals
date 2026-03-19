document.querySelectorAll('.thumb').forEach(img => {
    img.addEventListener('click', function () {
        console.log(this.getAttribute('data-value'));
        const src = this.getAttribute('data-value');
        const lightbox = document.createElement('div');
        lightbox.classList.add(
            'lightbox',
            'fixed',
            'top-0',
            'left-0',
            'w-full',
            'h-full',
            'bg-black',
            'bg-opacity-75',
            'flex',
            'items-center',
            'justify-center'
        );
        // lightbox.classList.add('lightbox fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center');
        const lightboxImg = document.createElement('img');
        lightboxImg.src = src;
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', function () {
            document.body.removeChild(lightbox);
        });
    });
});
