let miav = document.getElementById('miav');
let miav2 = document.getElementById('miav2');
let dzax = document.getElementById('dzax');
let aj = document.getElementById('aj');
let over = document.getElementById('over');
let win = document.getElementById('win');
miavor1 = 0;
miavor2 = 0;



for(let i = 0 ;i<+Infinity;i++){
  haxtanak = prompt('Քանիսից խաղանք?');
if(haxtanak == null){
  continue;
  
}else if( haxtanak == ''){   
  continue;
}else if( Number(haxtanak) == 'NaN'){ 
continue;
}else if(Number(haxtanak) >= 1){
break;
}

}






function game(){
 if(miavor1 == haxtanak){
  setTimeout(() => {
    win.style.display = 'block'; 
    document.getElementById('mec').style.display = 'none';
    document.getElementById('mec2').style.display = 'none';
  }, 1000);
 }else if(miavor2 == haxtanak){
  setTimeout(() => {
    over.style.display = 'block';
    document.getElementById('mec').style.display = 'none';
    document.getElementById('mec2').style.display = 'none';
  }, 1000);
 }


}




function qarf(){
dzax.innerHTML = '<img width="200" height="200" src="./img/qar.png">'
var enemy = Math.round(Math.random() * 9);

if(enemy >= 0 && enemy <= 3){
  aj.innerHTML = '<img width="200" height="200" src="./img/mkrat_aj.png">'
  miavor1++;
}else if( enemy > 3 && enemy <= 6){
  aj.innerHTML = '<img width="200" height="200" src="./img/tuxt_aj.png">'
  miavor2++
}else{
  aj.innerHTML = '<img width="200" height="200" src="./img/qar_aj.png">'
}

miav.innerHTML = `<p>${miavor1}</p>`
miav2.innerHTML = `<p>${miavor2}</p>`

game();

}




function mkratf(){
 dzax.innerHTML = '<img width="200" height="200" src="./img/mkrat.png">'
 
 var enemy = Math.round(Math.random() * 9);
 
 if(enemy >= 0 && enemy <= 3){
  aj.innerHTML = '<img width="200" height="200" src="./img/qar_aj.png">'
  miavor2++
 }else if(enemy > 3 && enemy <= 6){
  aj.innerHTML = '<img width="200" height="200" src="./img/tuxt_aj.png">'
  miavor1++;
 }else{
  aj.innerHTML = '<img width="200" height="200" src="./img/mkrat_aj.png">'
 }


 miav.innerHTML = `<p>${miavor1}</p>`
 miav2.innerHTML = `<p>${miavor2}</p>`

 game();


}



function tuxtf(){
 dzax.innerHTML = '<img width="200" height="200" src="./img/tuxt.png">'
 var enemy = Math.round(Math.random() * 9);

 if(enemy >= 0 && enemy <= 3){
  aj.innerHTML = '<img width="200" height="200" src="./img/mkrat_aj.png">'
  miavor2++
 }else if(enemy > 3 && enemy <= 6){
  aj.innerHTML = '<img width="200" height="200" src="./img/qar_aj.png">'
  miavor1++
 }else {
  aj.innerHTML = '<img width="200" height="200" src="./img/tuxt_aj.png">'

 }

 miav.innerHTML = `<p>${miavor1}</p>`
 miav2.innerHTML = `<p>${miavor2}</p>`

 game()


}




function restart(){

  for(let i = 0 ;i<+Infinity;i++){
    haxtanak = prompt('Qanisic xaxanq');
  if(haxtanak == null){
    continue;
    
  }else if( haxtanak == ''){
    continue;
  }else if( Number(haxtanak) == 'NaN'){
  continue;
  }else if(Number(haxtanak) >= 1){
  break;
  }
  
  }

  win.style.display = 'none';
  over.style.display = 'none';
  document.getElementById('mec').style.display = 'flex';
  document.getElementById('mec2').style.display = 'flex';
  miav.innerHTML = 0;
  miav2.innerHTML = 0;
  miavor1 = 0;
  miavor2 = 0;
  aj.innerHTML = '';
  dzax.innerHTML = ''


}