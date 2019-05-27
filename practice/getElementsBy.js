list = document.getElementsByClassName('marked');
console.group('document');
for(i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
}
console.groupEnd();

console.group('active');
active = document.getElementById('active');
list = active.getElementsByClassName('marked');
for(i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
}
console.groupEnd();