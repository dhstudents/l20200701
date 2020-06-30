import { Calc } from './calc'


const btn : HTMLElement | null  = document.querySelector("#newData");
if (btn) {
    btn.addEventListener('click' , setNewData )
}

let a : number , b : number;
let o : Calc;

function showResults() : void {
  //  let o = new Calc();
    const div : HTMLElement | null  = document.querySelector("#result");
    if (div) {
        div.innerHTML = "<pre>"
        div.innerHTML += o.Add().toString() + "<br>";
        div.innerHTML += o.Sub().toString() + "<br>";
        div.innerHTML += o.Mul().toString() + "<br>";
        div.innerHTML += o.Div().toString() + "<br>";
        div.innerHTML += "Finish!!!!!<br>";
        div.innerHTML += "</pre>"
    }
}

function setNewData() : void {
    o = new Calc();
    a = parseInt((<HTMLInputElement>document.querySelector("#n1")).value);
    b = parseInt((<HTMLInputElement>document.querySelector("#n2")).value);
    o.SetData(a, b);
    showResults();
}

