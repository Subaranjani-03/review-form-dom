let regFunc = () =>{
    // getting element

    let content = document.getElementById('content').value.trim()
    

    // getting error value

    let textErr = document.getElementById('textErr')

    // validations

    if(content === ''){
        textErr.innerText = 'Kindly Fill This Field !'
        document.getElementById('content').style.border = '2px solid red'
    }
    else{
        textErr.innerText = ''
        document.getElementById('content').style.border = ''
    }
    
    // getting para tags

    let total = document.getElementById('total')
    let upper = document.getElementById('upper')
    let lower = document.getElementById('lower')
    let num = document.getElementById('num')
    let special = document.getElementById('special')


    // total length

    let tot = content.length
    total.innerText = `Total Words : ${tot}`
     
    // upper, lower, number
    
    let caps = 0;
    let small = 0;
    let number = 0;
    let spl = 0;

      for (let a = 0; a < tot; a++) {
        let cont = content.charCodeAt(a);

        if (cont >= 65 && cont <= 90) {
          caps++;
        } else if (cont >= 97 && cont <= 122) {
          small++;
        } else if (cont >= 48 && cont <= 57) {
          number++;
        }else if((cont>=33 && cont <= 47) || (cont>=58 && cont <= 64)|| (cont>=91 && cont <= 96) || (cont>=123 && cont <= 126)) {
          spl++
        }
      }

    upper.innerText = `Upper Case Words : ${caps}`
    lower.innerText = `Lower Case Words : ${small}`
    num.innerText = `Total Numbers : ${number}`
    special.innerText = `Special Characters : ${spl}`
   
}