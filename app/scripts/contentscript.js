'use strict';

var p = document.getElementsByClassName('gb_ma gb_r gb_na gb_0c')[0];

var n = p.getElementsByTagName('span')[0];

var a = document.createElement('a');
a.href = 'https://plus.google.com/me';
a.innerHTML = '+' + n.innerHTML;
a.style.color = '#404040';

n.innerHTML = '';
n.appendChild(a);

