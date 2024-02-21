
let myText = document.getElementById('myText');
let nextText = document.getElementById('nextText');

function show(){
    let myNum = document.getElementById('myInput').value;
    myText.textContent = "Juft sonlar:"
    nextText.textContent = 'Toq sonlar:'
    for(let i = 1; i <= myNum ; i++){
        if(i % 2 == 0){
            ourtext = document.createTextNode(`${i};`)
            myText.append(ourtext);
        }else{
            ourTag = document.createTextNode(`${i};`)

            nextText.append(ourTag);
        }

        
    }



}



