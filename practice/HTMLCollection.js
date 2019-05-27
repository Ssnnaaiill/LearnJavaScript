document.write('<h4>before</h4>');
console.group('before');
let lis = document.getElementsByTagName('li');
for(let i = 0; i < lis.length; i++) {
    document.write(lis[i] + '<br>');
}
console.groupEnd();

document.write('<h4>after</h4>');
console.group('after');
lis[1].parentNode.removeChild(lis[1]);
for(let i = 0; i < lis.length; i++) {
    document.write(lis[i] + '<br>');
}
console.groupEnd();