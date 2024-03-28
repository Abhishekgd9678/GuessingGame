let actualNum=Math.trunc(Math.random()*20);
let score=20;
console.log(actualNum);

document.querySelector('.checkbtn').addEventListener('click',
()=>{
    let ipNum=Number(document.querySelector('.guessbox').value);
   
 
    if(!ipNum){  document.querySelector('.guess').innerHTML='No Guess! ';}
    if(ipNum===actualNum)
    {
        document.querySelector('.guess').innerHTML='Correct Guess! ';
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.mark').innerHTML=actualNum;
        document.querySelector('.hs').innerHTML=Number(document.querySelector('.hs').innerHTML)+score;
        
        

    }
    else if(ipNum>actualNum)
    {
       
        if(score===1){
            document.querySelector('.guess').innerHTML='Game Over ! Start Again ';
            score--;
            document.querySelector('.scores').innerHTML=score;  
            document.querySelector('body').style.backgroundColor='red';
          
        }else if(score>1)
        {
            score--;
            document.querySelector('.scores').innerHTML=score;
            document.querySelector('.guess').innerHTML='Too High! ';
        }
   


    }
    else if(ipNum<actualNum)
    {
        
        if(score===1){
            document.querySelector('.guess').innerHTML='Game Over ! Start Again ';
            score--;
            document.querySelector('.scores').innerHTML=score;  
            document.querySelector('body').style.backgroundColor='red';


        }else if(score>1)
        {
            score--;
            document.querySelector('.scores').innerHTML=score;
            document.querySelector('.guess').innerHTML='Too Low! ';
        }
    }
 
    
});
document.querySelector('.reset').addEventListener('click',()=>{
    document.querySelector('.guess').innerHTML='Start Guessing!  ';
    document.querySelector('.scores').innerHTML=20;   
    document.querySelector('body').style.backgroundColor='#ffff';
    document.querySelector('.mark').innerHTML='?';
    actualNum=Math.trunc(Math.random()*20);
    console.log(actualNum);

})