function pri(){
  alert("avoid page split use Fit to Page in PDF viewer or Chrome.");
document.getElementById('bt').style.display='none';
document.getElementById('eddd').style.display='none';

window.print();
}

function grapi(m) {
  if (m >= 90) return ' 10.A+';
  if (m >= 80) return ' 9.A';
  if (m >= 70) return ' 8.B+';
  if (m >= 60) return ' 7.B';
  if (m >= 50) return ' 6.C';
  if (m >= 40) return ' 5.P';
  if (m >= 0) return ' 0.F';
  return 'Invalid';
}

function dcm(){
//alert(sem4da["s062"][13]);
// alert(sem6da["s062"][2]);
 let siz=window.innerWidth;
  if(siz>100){
 
 
// alert(siz);
 let g=prompt("Enter U R Diploma Reg No:- ");
 
//let g="s062";
 if(g=="130CS21X01")
 {
 alert("Random kids flexing like code masters after copy pasting code using AI..");
 // window.reload();
 }
 if ((g>="130CS21003" && g<="130CS21063")){
 let t = g;
 let k=t.substr(-3);
 let h='s'+k;
 let dh=h;
 
 alert("Marks Card Genarated Sucessfully..");
 alert("And MakeUP Marks Also added after Data Crawling..");
 

    let me= sem1da[h][3];
    let fe= sem1da[h][4];
    let fee= sem1da[h][5];
    let ie= sem1da[h][6];
    
    let mi= sem1da[h][9];
    let fi=sem1da[h][10];
    let fei=sem1da[h][11];
    let ii=sem1da[h][12];
    
    let eia=sem1da[h][13];
    
    
    let k1ia=semkda[h][2];
    let k2ia=semkda[h][3];
    let ici=sem4da[h][13];
    
    //------------------------------------
    
    
    
    let pe= sem2da[h][3];
    let pi= sem2da[h][9];
    let se= sem2da[h][4];
    let si= sem2da[h][10];
    let cse=sem2da[h][5];
    
    let cia= sem2da[h][11];
    let cae=sem2da[h][6];
    let cai=sem2da[h][12];
    let mme=sem2da[h][7];
    let mmi=sem2da[h][13];
    
    //------------------------------------
    
    
    
    let pye= sem3da[h][3];
    let pyi= sem3da[h][8];
    let che= sem3da[h][4];
    let chi= sem3da[h][9];
    
    let cne= sem3da[h][5];
    let cni=sem3da[h][10];
    let de=sem3da[h][6];
    let di=sem3da[h][11];
    
    //------------------------------------
    
    
    let dse= sem4da[h][3];
    let dsi= sem4da[h][9];
    let oe= sem4da[h][4];
    let oi= sem4da[h][10];
    
    let je= sem4da[h][5];
    let ji=sem4da[h][11];
    let sepe=sem4da[h][6];
    let sepi=sem4da[h][12];
    
    //-----------
    
    
    let cyeT=sem5da[h][3];
    let cyeL=sem5da[h][4];
    let cyi=sem5da[h][5];
    
    let ine=sem6da[h][2];
    let ini=sem6da[h][3];
    
    //------------------------------------
    
    let s1cp=me+mi+fe+fi+fee+fei+ie+ii+eia;
    
    let s2cp=pe+pi+se+si+cse+cia+cae+cai+mme+mmi+k1ia;
    
    let s3cp=pye+pyi+che+chi+cne+cni+de+di+k2ia;
    
     let s4cp=dse+dsi+oe+oi+je+ji+sepe+sepi+ici;
     
     let s5cp=cyeT+cyeL+cyi;
     
     let s6cp=ine+ini;
    
    //---------------------------------------
    
   document.getElementById("d2").innerHTML=sem1da[h][0];
   document.getElementById("d1").innerHTML=sem1da[h][1];
    
    
    document.getElementById("mex").innerHTML= me;
    document.getElementById("mia").innerHTML= mi;
    document.getElementById("fex").innerHTML= fe;
    document.getElementById("fia").innerHTML= fi;
    
    document.getElementById("feex").innerHTML= fee;
    document.getElementById("feia").innerHTML= fei;
    document.getElementById("itex").innerHTML= ie;
    document.getElementById("itia").innerHTML= ii;
    
    document.getElementById("pex").innerHTML= pe;
    document.getElementById("pia").innerHTML= pi;
    document.getElementById("sex").innerHTML=se;
    document.getElementById("sia").innerHTML= si;
    
    document.getElementById("cex").innerHTML= cse;
    document.getElementById("cia").innerHTML= cia;
    document.getElementById("caex").innerHTML= cae;
    document.getElementById("caia").innerHTML= cai;
    
    document.getElementById("mmex").innerHTML= mme;
    document.getElementById("mmia").innerHTML= mmi;
    document.getElementById("pyex").innerHTML= pye;
    document.getElementById("pyia").innerHTML= pyi;
    
    document.getElementById("chex").innerHTML= che;
    document.getElementById("chia").innerHTML= chi;
    document.getElementById("cnex").innerHTML= cne;
    document.getElementById("cnia").innerHTML= cni;
    
    document.getElementById("dex").innerHTML=de;
    document.getElementById("dia").innerHTML= di;
    document.getElementById("dsex").innerHTML= dse;
    document.getElementById("dsia").innerHTML= dsi;
    
    document.getElementById("oex").innerHTML= oe;
    document.getElementById("oia").innerHTML= oi;
    
    document.getElementById("jex").innerHTML=je ;
    document.getElementById("jia").innerHTML=ji;
    document.getElementById("seex").innerHTML= sepe;
    document.getElementById("seia").innerHTML= sepi;
    
    document.getElementById("cyex").innerHTML= "TM: "+cyeT+"/"+"LM: "+cyeL;
    document.getElementById("cyia").innerHTML= cyi;
    
    document.getElementById("inex").innerHTML= ine;
    document.getElementById("inia").innerHTML= ini;
    
    
    document.getElementById("evsia").innerHTML= eia;
    document.getElementById("kan2ia").innerHTML= k1ia;
    document.getElementById("kan3ia").innerHTML= k2ia;
    document.getElementById("icia").innerHTML= ici;
    
    document.getElementById("sem1peP").innerHTML= ((me+mi+fe+fi+fee+fei+ie+ii+eia)/450*100).toFixed(2)+"%";
    document.getElementById("sem1peG").innerHTML= (me+fe+fee+ie)+"/180e<br><br>"+(mi+fi+fei+ii+eia)+"/270i<br><br>"+(me+mi+fe+fi+fee+fei+ie+ii+eia)+"/450";
    document.getElementById("sem2peP").innerHTML= ((pe+pi+se+si+cse+cia+cae+cai+mme+mmi+k1ia)/550*100).toFixed(2)+" %";
    document.getElementById("sem2peG").innerHTML= (pe+se+cse+cae+mme)+"/210e<br><br>"+(pi+si+cia+cai+mmi+k1ia)+"/340i<br><br>"+(pe+pi+se+si+cse+cia+cae+cai+mme+mmi+k1ia)+"/550";
    
    
    
   document.getElementById("y1").innerHTML=((s1cp+s2cp)/1000*100).toFixed(2)+"% <br><br>"+(s1cp+s2cp)+"/1000";
    
    
    document.getElementById("sem3peP").innerHTML= ((pye+pyi+che+chi+cne+cni+de+di+k2ia)/450*100).toFixed(2)+" %";
    document.getElementById("sem3peG").innerHTML= (pye+che+cne+de)+"/160e<br><br>"+(pyi+chi+cni+di+k2ia)+"/290i<br><br>"+(pye+pyi+che+chi+cne+cni+de+di+k2ia)+"/450";
    document.getElementById("sem4peP").innerHTML= ((dse+dsi+oe+oi+je+ji+sepe+sepi+ici)/450*100).toFixed(2)+" %";
    document.getElementById("sem4peG").innerHTML= (dse+oe+je+sepe)+"/160e<br><br>"+(dsi+oi+ji+sepi+ici)+"/290i<br><br>"+(dse+dsi+oe+oi+je+ji+sepe+sepi+ici)+"/450";
    
    
   document.getElementById("y2").innerHTML=((s3cp+s4cp)/900*100).toFixed(2)+"% <br><br>"+(s3cp+s4cp)+"/900";
    
    
    document.getElementById("sem5peP").innerHTML= ((cyeT+cyeL+cyi)/400*100).toFixed(2)+" % ";
    
   // document.getElementById("sem5peG").innerHTML=(cyeT+cyeL+cyi)+"/400";
    document.getElementById("sem6peP").innerHTML= ((ine+ini)/400*100).toFixed(2)+" % ";
    //document.getElementById("sem6peG").innerHTML=(ine+ini)+"/400";
    
    
   document.getElementById("y3").innerHTML= ((s5cp+s6cp)/800*100).toFixed(2)+"%<br><br>"+(s5cp+s6cp)+"/800";
    
    
    
    document.getElementById("msum").innerHTML=me+mi+"&nbsp;("+grapi(me+mi)+")";
    document.getElementById("focsum").innerHTML=fe+fi+"&nbsp;("+grapi(fe+fi)+")";
    document.getElementById("feesum").innerHTML=fee+fei+"&nbsp;("+grapi(fee+fei)+")";
    document.getElementById("itsum").innerHTML=ie+ii+"&nbsp;("+grapi(ie+ii)+")";
    document.getElementById("evssum").innerHTML= eia+"&nbsp;("+grapi(eia*2)+")";
    document.getElementById("pmssum").innerHTML= pe+pi+"&nbsp;("+grapi(pe+pi)+")";
    document.getElementById("sasum").innerHTML=se+si+"&nbsp;("+grapi(se+si)+")";
    document.getElementById("csum").innerHTML= cse+cia+"&nbsp;("+grapi(cse+cia)+")";
    document.getElementById("caegsum").innerHTML= cae+cai+"&nbsp;("+grapi(cae+cai)+")";
    document.getElementById("mmsum").innerHTML=mme+mmi+"&nbsp;("+grapi(mme+mmi)+")";
    document.getElementById("kan1sum").innerHTML= k1ia+"&nbsp;("+grapi(k1ia*2)+")";
    document.getElementById("pysum").innerHTML= pye+pyi+"&nbsp;("+grapi(pye+pyi)+")";
    document.getElementById("chmasum").innerHTML=che+chi+"&nbsp;("+grapi(che+chi)+")";
    document.getElementById("cnsum").innerHTML=cne+cni+"&nbsp;("+grapi(cne+cni)+")";
    document.getElementById("dsum").innerHTML= de+di+"&nbsp;("+grapi(de+di)+")";
    document.getElementById("kan2sum").innerHTML=k2ia+"&nbsp;("+grapi(k2ia*2)+")";
    document.getElementById("dssum").innerHTML= dse+dsi+"&nbsp;("+grapi(dse+dsi)+")";
    document.getElementById("osum").innerHTML= oe+oi+"&nbsp;("+grapi(oe+oi)+")";
    document.getElementById("jsum").innerHTML= je+ji+"&nbsp;("+grapi(je+ji)+")";
    document.getElementById("sesum").innerHTML= sepe+sepi+"&nbsp;("+grapi(sepe+sepi)+")";
    document.getElementById("icsum").innerHTML=ici+"&nbsp;("+grapi(ici+ici)+")";
    document.getElementById("cysum").innerHTML=(cyeT+cyeL+cyi)+"/400"+"&nbsp;("+grapi((cyeT+cyeL+cyi)/400*100)+")";
    document.getElementById("insum").innerHTML=(ine+ini)+"/400"+"&nbsp;("+grapi((ine+ini)/400*100)+")";
    
    
   // document.getElementById("webtit").innerHTML= ;
    
    
    var result = (
    ((me + mi + fe + fi + fee + fei + ie + ii+eia) / 450 * 100) +
    ((pe + pi + se + si + cse + cia + cae + cai + mme + mmi+k1ia) / 550 * 100) +
    ((pye + pyi + che + chi + cne + cni + de + di+k2ia) / 450 * 100) +
    ((dse + dsi + oe + oi + je + ji + sepe + sepi+ici) / 450 * 100) +
    ((cyeT + cyeL + cyi) / 400 * 100) +
    ((ine + ini) / 400 * 100)
    );
    
    
    
    let resul=result/600*100;
    resul=resul.toFixed(2);
    
    let calcul=((s1cp+s2cp+s3cp+s4cp+s5cp+s6cp)-52)/2700*100;
    calcul=calcul.toFixed(2);
    
    if(dh in dcetDATA){
       document.getElementById("dcetRank").innerHTML=(dcetDATA[dh][3]);
       document.getElementById("dcetScore").innerHTML=(dcetDATA[dh][4]);
       document.getElementById("dcetDipCon").innerHTML=(dcetDATA[dh][5]);
   document.getElementById("printon").innerText= "Printed On "+getDMY();
   }
   else{
   document.getElementById("dcetRank").innerHTML="Data Not Fed";
   document.getElementById("dcetScore").innerHTML="Data Not Fed";
   document.getElementById("dcetDipCon").innerHTML= (calcul);
   document.getElementById("printon").innerText= "Printed On "+getDMY();
   }
   
   document.getElementById("tpp").innerHTML=(s1cp+s2cp+s3cp+s4cp+s5cp+s6cp)+"/2700</red>";
   document.getElementById("printon").innerText= "Printed On "+getDMY();
   // alert((50+25)/100*100+(50+25)/100*100);
 
 
  if(dh in enggDATA){
  
  
  document.getElementById("engg").innerHTML=enggDATA[dh];
  }
  
  if(dh in sslcDATA){
  
  
  document.getElementById("sslc").innerHTML=sslcDATA[dh];
  }
    
    
    //alert(1);    
     //location.reload();
    
    //--------------------------------------------------------
    
    
    
}
else{
// confirm("Invalid");
}

}
else{
alert("This Diploma Cycle Marks Is perfetly designed for only Desktop View, So Kindly Enable Desktop View, Otherwise U Will See Differnt Layout.…..");
alert("Marks Card Struture Has Been Genarated..");
}
}
dcm();


function getDMY() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return day + '-' + month + '-' + year;
}





function upImg(id) {
  const img = document.getElementById(id);
  img.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'image/*';
    inp.style.display = 'none';
    inp.addEventListener('change', e => {
      const f = e.target.files[0];
      if (f && f.type.startsWith('image/')) {
        const r = new FileReader();
        r.onload = ev => { img.src = ev.target.result; };
        r.readAsDataURL(f);
      }
    });
    document.body.appendChild(inp);
    inp.click();
    document.body.removeChild(inp);
  });
}