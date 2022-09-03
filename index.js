let firstPin = document.getElementById('first-pin');
let generatePin = document.getElementById('generate-btn');
generatePin.addEventListener('click',function(){
    
    let number = Math.floor(1000 + Math.random() *9000 );
    firstPin.value = number ;
})

let ansPin = document.getElementById('answer-pin');

let buttons = document.getElementsByClassName('button');
for(item of buttons){
    item.addEventListener('click',function(text){
        buttonText = text.target.innerText;
        ansPin.value += buttonText;

        if(buttonText == 'C'){
            ansPin.value = '' ;
        }  
        // if(buttonText == '<'){
        //     let del = ansPin.value.slice(0,ansPin.value -1);
        //     ansPin.value = del ;
        // }   
    })
}

let submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click',function(){
        if(firstPin.value == ansPin.value){
            document.getElementById('give-access').style.display='block';
            document.getElementById('deny-access').style.display='none';
        }
        else{
            document.getElementById('deny-access').style.display='block';
            document.getElementById('give-access').style.display='none';
        }
    })


