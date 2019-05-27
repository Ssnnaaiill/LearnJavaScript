function HTMLElement1() {
    var li = document.getElementById('active');
    document.write(li.constructor.name);        // HTMLElement
    var lis = document.getElementsByTagName('li');
    document.write(lis.constructor.name);       // HTMLCollection
}