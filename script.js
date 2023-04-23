let array = [];
let set = new Set();
let emoji = generateRandomEmoji(); // функція для генерації випадкового емодзі

document.getElementById('emoji').textContent = emoji;

function addValue() {
    let value = document.getElementById('input').value.trim();
    if (!value) {
        return;
    }
    value = value.replace(/\s+/g, ''); // remove all spaces in the value
    array.push(value);
    document.getElementById('arrayList').innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let li = document.createElement('li');
        li.textContent = array[i];
        document.getElementById('arrayList').appendChild(li);
    }
    if (!set.has(value)) {
        set.add(value);
        let li = document.createElement('li');
        li.textContent = value;
        document.getElementById('setList').appendChild(li);
    }
    document.getElementById('input').value = '';
}




function generateRandomEmoji() {
    const emojis = ['😀', '😎', '🤖', '🐱', '🦄', '🐶', '🐨'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById('input').value = randomEmoji;
    return randomEmoji;
}
