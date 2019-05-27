var target = document.getElementById('list');
document.write('<br>' + target.constructor.name)    // HTMLILElement

target = document.getElementById('anchor');
document.write('<br>' + target.constructor.name)    // HTMLAnchorElement

target = document.getElementById('button');
document.write('<br>' + target.constructor.name)    // HTMLInputElement