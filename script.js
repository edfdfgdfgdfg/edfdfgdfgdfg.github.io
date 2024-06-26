const randomImagesDiv = document.getElementById('button');
const imageContainer = document.getElementById('centerblok');

const images = [
    'signal/1.png',
    'signal/2.png',
    'signal/3.png',
    // Добавьте здесь ссылки на другие изображения
];

randomImagesDiv.addEventListener('click', function() {
    // Показываем gif
    const loadingGif = document.createElement('img');
    loadingGif.src = 'signal/XVo6.gif';
    loadingGif.style.maxWidth = '50%';
    imageContainer.innerHTML = '';
    imageContainer.appendChild(loadingGif);

    setTimeout(() => {
        // Показываем случайное изображение после 3 секунд
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];

        const imgElement = document.createElement('img');
        imgElement.src = randomImage;
        imgElement.style.maxWidth = '100%';

        imageContainer.innerHTML = '';
        imageContainer.appendChild(imgElement);
    }, 3000);
});