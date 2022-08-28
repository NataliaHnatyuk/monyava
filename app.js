const cl = document.getElementById('cl')
const cb = document.querySelectorAll('.inputt')
let array = ["ob1", "obj2"]
alert(array[0])
const strikee = document.querySelectorAll('.strikee')
for (let i = 0; i < cl.childElementCount; i++) {
    cb[i].onchange = ()=> {
        if (cb[i].checked) {
            strikee[i].style.width = "100%"
        } else {
            strikee[i].style.width = "0"
        }
    }
    if (cb[i].checked) {
        strikee[i].style.width = "100%"
    } else {
        strikee[i].style.width = "0"
    }
}