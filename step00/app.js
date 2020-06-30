var xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log(this.responseText);
};
xhr.open('GET', 'text.txt');
xhr.send();
