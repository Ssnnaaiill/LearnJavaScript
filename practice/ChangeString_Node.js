function innerGet() {
    target = document.getElementById('target');
    alert(target.innerHTML);
}

function innerSet() {
    target = document.getElementById('target');
    target.innerHTML = '<ol><li>JavaScript Core</li><li>BOM</li><li>DOM</li></ol>';
}

function outerGet() {
    target = document.getElementById('target2');
    alert(target.outerHTML);
}

function outerSet() {
    target = document.getElementById('target2');
    target.outerHTML = '<ol><li>JavaScript Core</li><li>BOM</li><li>DOM</li></ol>';
}

function innerTextGet() {
    target = document.getElementById('target3');
    alert(target.innerText);
}

function innerTextSet() {
    target = document.getElementById('target3');
    target.innerText = '<ol><li>JavaScript Core</li><li>BOM</li><li>DOM</li></ol>';
}

function beforebegin() {
    target = document.getElementById('target4');
    target.insertAdjacentHTML('beforebegin', '<h3>Client Side</h3>');
}

function afterbegin() {
    target = document.getElementById('target4');
    target.insertAdjacentHTML('afterbegin', '<li>HTML</li>');
}

function beforeend() {
    target = document.getElementById('target4');
    target.insertAdjacentHTML('beforeend', '<li>JavaScript</li>');
}

function afterend() {
    target = document.getElementById('target4');
    target.insertAdjacentHTML('afterend', '<h1>Server Side</h1>')
}