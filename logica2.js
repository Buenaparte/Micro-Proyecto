const Comenzar = document.querySelector('.Comenzar');
const Reiniciar = document.querySelector('.Reiniciar');
const rojo = document.querySelector('.cols2');
const verde = document.querySelector('.cols');
const amarillo = document.querySelector('.cols4');
const azul = document.querySelector('.cols3');
const p = document.querySelector('.Fin');
const quinto = document.querySelector('.Quinto');
const menuPrincipal = document.querySelector('.Cuarto');
const gameStatus = document.querySelector('.game-status'); 
const labelScore = document.querySelector('.score');
const labelHighscoreFinal = document.querySelector('.highscore-final');
let highscore = localStorage.getItem('highscore') || 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var i = 0;
var f = 0;
var g = 0;
var h = 0;
var ronda = 0;
var prueba =0;
var puntaje = 0;
var confirmacion = true;


 function iniciar(){
   ronda++;
   let comprabacion_ronda = 0;
   while(comprabacion_ronda < ronda){
    const brillar = Math.trunc(Math.random()*(4));
    console.log(brillar);
    if(brillar == 0){
         rojo.classList.add('brillar');
       setTimeout(() => {
         rojo.classList.remove('brillar');
       }, 500);
       a++;
      } 
    if(brillar == 1){
         verde.classList.add('brillar');
         setTimeout(() => {
            verde.classList.remove('brillar');
         }, 500);
         b++;
        } 
    if(brillar == 2){
         amarillo.classList.add('brillar');
         setTimeout(() => {
            amarillo.classList.remove('brillar');
         }, 500);
         c++;
        } 
    if(brillar == 3){
       azul.classList.add('brillar');
       setTimeout(() => {
         azul.classList.remove('brillar');
           }, 500);
       d++;
        }
        comprabacion_ronda++; 
       } 
 }

 function verificar(){
   if( a == i && b == f && c == g && d == h){
       puntaje += 10;
       labelScore.textContent = puntaje;
       a = 0;
       b = 0;
       c = 0;
       d = 0;
       i = 0;
       f = 0;
       g = 0;
       h = 0;
       if (puntaje > highscore) {
         highscore = puntaje;
         localStorage.setItem('highscore', highscore);
       }
    setTimeout(() => {
      iniciar();
      }, 200);
 }else{
     confirmacion = false;
    p.classList.add('Fin-show');
 }
 }

 Reiniciar.addEventListener('click', function () {
       p.classList.remove('Fin-show');
       ronda = 0;
       a = 0;
       b = 0;
       c = 0;
       d = 0;
       i = 0;
       f = 0;
       g = 0;
       h = 0;
       iniciar();  
      });

      quinto.addEventListener('click', function () {
         p.classList.remove('Fin-show');
         ronda = 0;
         a = 0;
         b = 0;
         c = 0;
         d = 0;
         i = 0;
         f = 0;
         g = 0;
         h = 0;
         iniciar();  
        });
       

Comenzar.addEventListener('click', function () {
   if(confirmacion){
      p.classList.remove('Fin-show');
      labelScore.textContent = puntaje;
      iniciar();  
     }
      });

    rojo.addEventListener('click', (e)=>{
         i++;
         prueba = i + f + h + g;
         if(ronda ===  prueba){
            console.log(111);
            setTimeout(() => {
               verificar();
            }, 500);
         }
         if(prueba > ronda){
            confirmacion = false;
            p.classList.add('Fin-show'); 
         }
        });

        verde.addEventListener('click', (e)=>{
          if(ronda != 0){
          f++;
          prueba = i + f + h + g;
          if(ronda === prueba){
            console.log(111);
            setTimeout(() => {
               verificar();
            }, 500);
          }
          if(prueba > ronda){
            confirmacion = false;
            p.classList.add('Fin-show'); 
         }
        }
       });

       amarillo.addEventListener('click', (e)=>{
         if(ronda != 0){
         g++;
         prueba = i + f + h + g;
         if(ronda === prueba){
            console.log(111);
            setTimeout(() => {
               verificar();
            }, 500);
         }
         if(prueba > ronda){
            confirmacion = false;
            p.classList.add('Fin-show'); 
         }
        }
       });

       azul.addEventListener('click', (e)=>{
         if(ronda != 0){
         h++;
          prueba = i + f + h + g;
         if(ronda ===  prueba){
            console.log(111);
            setTimeout(() => {
               verificar();
            }, 500);
         }
         if(prueba > ronda){
            confirmacion = false;
            p.classList.add('Fin-show'); 
         }
        }
       });

       menuPrincipal.addEventListener('click', () => {
         localStorage.setItem('puntaje', puntaje);
         window.location.href = "Index.html";
     });
