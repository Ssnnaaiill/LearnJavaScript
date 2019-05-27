function callAppendChild() {
    target = document.getElementById('target');
    li = document.createElement('li');
    text = document.createTextNode('JavaScript');
    li.appendChild(text);
    target.appendChild(li);
}

function callInsertBefore() {
    target = document.getElementById('target');
    li = document.createElement('li');
    text = document.createTextNode('jQuery');
    li.appendChild(text);
    target.insertBefore(li, target.firstChild);
}

function callRemoveChild() {
    target = document.getElementById('targetLi');
    target.parentNode.removeChild(target);
}

function callReplaceChild() {
    a = document.createElement('a');
    a.setAttribute('href', 'http://opentutorials.org/module/904/6701');
    a.appendChild(document.createTextNode('Web Browser JavaScript'));
    target = document.getElementById('target');
    target.replaceChild(a, target.firstChild);
}