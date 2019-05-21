import './index.css';

console.log(`Today is beautiful day!`);

const arr = [1, 2, 3];
const printNum = arr => {
    arr.forEach(num => {
        console.log(num);
    });
};

printNum(arr);

const rootDiv = document.getElementById('root');

const imgDiv = document.createElement('img');
imgDiv.src = '/favicon.png';
rootDiv.appendChild(imgDiv);

const textDiv = document.createElement('div');
textDiv.setAttribute('class', 'text');
textDiv.appendChild(document.createTextNode('React Starter'));
rootDiv.appendChild(textDiv);