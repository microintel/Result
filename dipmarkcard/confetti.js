function semsex(){
let g=document.getElementById('i').value;
    if((g=="130CS20034" || g=="130CS20048")){
  alert("processing");
    }
  if ((g>="130CS21003" && g<="130CS21063")){
  let t = document.getElementById('i').value;
  let k=t.substr(-3);
  let h='s'+k;
  if (h in dcetDATA) {
  alert("Dear "+dcetDATA[h][1]+",\n Your DIPLOMA Marks Card Is Ready To View.");
  document.getElementById('dcr').style.display="block";document.getElementById('ddf').style.display="block";document.getElementById('dmk').style.display="block";
  }
else{
document.getElementById('dcr').style.display="none";document.getElementById('ddf').style.display="block";document.getElementById('dmk').style.display="none";
}}}



function lau(){
        let celInp=document.getElementById("i").value;
        let celA=document.getElementById("celAu");
        if(celInp=="130CS21063" || celInp=="130CS21037" || celInp=="130CS21015" || celInp=="130CS21012" || celInp=="130CS21005" || celInp=="130CS21062"){
        celA.currentTime=0;
        celA.play();
        confetti({
        particleCount: 600,
        spread: 150,
        scalar:1,
        startVelocity: 40,
        origin: { y:Math.random()*(0.9-0.1)+0.1,x:Math.random()*(0.9-0.1)+0.1 }
        });
        }
        
       }