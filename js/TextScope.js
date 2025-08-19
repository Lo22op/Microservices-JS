const textInput = document.getElementById('textInput');
const btn = document.getElementById('analyzeButton');
const stats = document.getElementById('stats');
const results = document.getElementById('results');
const i = document.getElementById('i');

let currentText = '';
let charStack = [];


i.addEventListener('click', function (){
    window.alert('go to console');
    console.log(
  "📌 You are using a Stack (LIFO Data Structure) to implement 'Undo character by character' functionality.\n" +
  "Each character you type is pushed to a stack, and when you click undo, the last character is popped out — mimicking real-life text editors.\n" +
  "This is a practical application of Stack in user input handling."
);
console.log(
  "📌 هذا التطبيق يستخدم هيكل البيانات Stack (المكدس) بطريقة عملية.\n" +
  "كل حرف يتم كتابته يُضاف إلى الـ Stack، وعند الضغط على زر التراجع (Undo)، يتم حذف آخر حرف تم إدخاله.\n" +
  "هذا يعكس مبدأ LIFO (Last In, First Out) ويُحاكي طريقة عمل برامج تحرير النصوص الحقيقية."
);

});


textInput.addEventListener('input', function () {
     let newText = textInput.value;

    if (newText.length > charStack.length) {
        let addedChar = newText[newText.length - 1];
        charStack.push(addedChar);
    } else if (newText.length < charStack.length) {
        charStack = newText.split('');
    }

    currentText = newText;
    currentText = textInput.value;
});

btn.addEventListener('click', function () {
    event.preventDefault(); 

    if (currentText.trim() === '') {
        alert('Please enter some text.');
        return;
    }
    results.style.display = 'block';
    let words = currentText.trim().split(/\s+/).filter(Boolean);
    let characters = currentText.replace(/\s/g, '');
    let averageWordLength = words.length > 0 ? (characters.length / words.length).toFixed(2) : 0;
    let readTime = words.length > 0 ? Math.ceil(words.length / 200) : 0;

    stats.innerHTML = `
    <div class="grid grid-cols-4 gap-4  m-4 p-4 bg-sky-200 rounded-lg">
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
        <div class="flex justify-center items-center">
            <button id="undoButton" onclick="undo()" class="bg-yellow-400 text-white font-semibold py-1 px-2 rounded">Undo</button>
        </div>
    </div>
        `;
});


// ######### stack ##########

function undo() {
    if (charStack.length === 0) {
        alert('No more characters to undo.');
        return;
    }

    charStack.pop(); 
    textInput.value = charStack.join(''); 
    currentText = textInput.value; 
    event.preventDefault(); 

}

