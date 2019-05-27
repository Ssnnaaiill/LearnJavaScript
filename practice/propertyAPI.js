t = document.getElementById('target');
console.log(t.getAttribute('href'));            // http://opentutorials.org
t.setAttribute('title', 'opentutorials.org');   // define title property's value
console.log(t.hasAttribute('title'));           // true, title 속성 존재여부 확인
t.removeAttribute('title');                     // remove title attribute
console.log(t.hasAttribute('title'));           // false, title 속성 존재여부 확인

