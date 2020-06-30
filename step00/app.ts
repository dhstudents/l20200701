

const xhr : XMLHttpRequest = new XMLHttpRequest()
xhr.onload = function () : void {
    console.log(this.responseText)
}

xhr.open('GET', 'text.txt')
xhr.send();