const textInput = document.getElementById('textInput');
const btn = document.getElementById('analyzeButton');
const stats = document.getElementById('stats');
const results = document.getElementById('results');

let currentText = '';

textInput.addEventListener('input', function () {
    currentText = textInput.value;
});

btn.addEventListener('click', function () {
    results.style.display = 'block';
    let words = currentText.trim().split(/\s+/).filter(Boolean);
    let characters = currentText.replace(/\s/g, '');
    let averageWordLength = words.length > 0 ? (characters.length / words.length).toFixed(2) : 0;
    let readTime = words.length > 0 ? Math.ceil(words.length / 200) : 0;

    stats.innerHTML = `
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Words:</p> ${words.length}
        </div> 
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Characters:</p> ${currentText.length}
        </div> 
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Lines:</p> ${currentText.split('\n').length}
        </div>
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Numbers:</p> ${(currentText.match(/[0-9]/g) || []).length}
        </div>
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Avg Word Length:</p> ${averageWordLength}
        </div>
        <div class="flex justify-center items-center">
            <p class="text-yellow-400 font-semibold text-[20px]">Avg Time to Read:</p> ${readTime} minute(s)
        </div>
    `;
});
