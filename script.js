const downloadButton = document.querySelector('.download-button');
const downloadCount = document.getElementById('download-count');

let count = 0;

downloadButton.addEventListener('click', () => {
    count++;
    downloadCount.textContent = count;
});
