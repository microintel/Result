function pri(){
document.getElementById('bt').style.display='none';
window.print();
}

function dcm(){
//alert(sem4da["s062"][13]);
// alert(sem6da["s062"][2]);
 let siz=window.innerWidth;
  if(siz>500){
 
 
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
    document.getElementById("sem1peG").innerHTML=  (me+mi+fe+fi+fee+fei+ie+ii+eia)+"/450";
    document.getElementById("sem2peP").innerHTML= ((pe+pi+se+si+cse+cia+cae+cai+mme+mmi+k1ia)/550*100).toFixed(2)+" %";
    document.getElementById("sem2peG").innerHTML= (pe+pi+se+si+cse+cia+cae+cai+mme+mmi+k1ia)+"/550";
    
    
    
   document.getElementById("y1").innerHTML=((s1cp+s2cp)/1000*100).toFixed(2)+"% <br><br>"+(s1cp+s2cp)+"/1000";
    
    
    document.getElementById("sem3peP").innerHTML= ((pye+pyi+che+chi+cne+cni+de+di+k2ia)/450*100).toFixed(2)+" %";
    document.getElementById("sem3peG").innerHTML= (pye+pyi+che+chi+cne+cni+de+di+k2ia)+"/450";
    document.getElementById("sem4peP").innerHTML= ((dse+dsi+oe+oi+je+ji+sepe+sepi+ici)/450*100).toFixed(2)+" %";
    document.getElementById("sem4peG").innerHTML= (dse+dsi+oe+oi+je+ji+sepe+sepi+ici)+"/450";
    
    
   document.getElementById("y2").innerHTML=((s3cp+s4cp)/900*100).toFixed(2)+"% <br><br>"+(s3cp+s4cp)+"/900";
    
    
    document.getElementById("sem5peP").innerHTML= ((cyeT+cyeL+cyi)/400*100).toFixed(2)+" % ";
    
    document.getElementById("sem5peG").innerHTML=(cyeT+cyeL+cyi)+"/400";
    document.getElementById("sem6peP").innerHTML= ((ine+ini)/400*100).toFixed(2)+" % ";
    document.getElementById("sem6peG").innerHTML=(ine+ini)+"/400";
    
    
   document.getElementById("y3").innerHTML= ((s5cp+s6cp)/800*100).toFixed(2)+"%<br><br>"+(s5cp+s6cp)+"/800";
    
    
    
    document.getElementById("msum").innerHTML=me+mi+"/100";
    document.getElementById("focsum").innerHTML=fe+fi+"/100";
    document.getElementById("feesum").innerHTML=fee+fei+"/100";
    document.getElementById("itsum").innerHTML=ie+ii+"/100";
    document.getElementById("evssum").innerHTML= eia+"/50";
    document.getElementById("pmssum").innerHTML= pe+pi+"/100";
    document.getElementById("sasum").innerHTML=se+si+"/100";
    document.getElementById("csum").innerHTML= cse+cia+"/100";
    document.getElementById("caegsum").innerHTML= cae+cai+"/100";
    document.getElementById("mmsum").innerHTML=mme+mmi+"/100";
    document.getElementById("kan1sum").innerHTML= k1ia+"/50";
    document.getElementById("pysum").innerHTML= pye+pyi+"/100";
    document.getElementById("chmasum").innerHTML=che+chi+"/100";
    document.getElementById("cnsum").innerHTML=cne+cni+"/100";
    document.getElementById("dsum").innerHTML= de+di+"/100";
    document.getElementById("kan2sum").innerHTML=k2ia+"/50";
    document.getElementById("dssum").innerHTML= dse+dsi+"/100";
    document.getElementById("osum").innerHTML= oe+oi+"/100";
    document.getElementById("jsum").innerHTML= je+ji+"/100";
    document.getElementById("sesum").innerHTML= sepe+sepi+"/100";
    document.getElementById("icsum").innerHTML=ici+"/50";
    document.getElementById("cysum").innerHTML=cyeT+cyeL+cyi+"/400";
    document.getElementById("insum").innerHTML=ine+ini+"/400";
    
    
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
   // alert(111);
   document.getElementById("tp").innerHTML= "Total Diploma Percentage is :- <red>"+(dcetDATA[dh][5])+"%</red>";
   }
   else{
   document.getElementById("tp").innerHTML= "Total Diploma Percentage is :-  <red> "+(calcul)+"%</red>";
   }
   
   document.getElementById("tpp").innerHTML="Total Diploma Marks :-  <red>"+(s1cp+s2cp+s3cp+s4cp+s5cp+s6cp)+"/2700</red>";
   // alert((50+25)/100*100+(50+25)/100*100);
 
 
  
    
    
    //alert(1);
    let xccc=confirm("Did U Wish Get Pdf Format...");
    if(xccc==true){
     window.print();
     }
     else{
     
     //122
     }
    
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
