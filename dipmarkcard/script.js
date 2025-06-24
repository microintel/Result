let tx;
let xXxX;
let a =new Audio();



let semkda={
    s003:["130CS21003","AISHWARYA M",44,45],
    s005:["130CS21005","AMITH G S",38,31],
    s006:["130CS21006","AMRUTHA L",49,49],
    s007:["130CS21007","AMRUTHA M",36,39],
    s008:["130CS21008","AMULYA",40,40],
    s009:["130CS21009","ANUSHA S",41,47],
    s010:["130CS21010","ARCHANA R",27,41],
    s011:["130CS21011","CHAITHANYAKUMARI N",44,43],
    s012:["130CS21012","CHANDRASHEKHAR S",47,45],
    s014:["130CS21014","DARSHAN K P",33,36],
    s015:["130CS21015","DHANUSH M",40,34],
    s017:["130CS21017","DISHA N K",36,38],
    s018:["130CS21018","GOWTHAM S",43,41],
    s020:["130CS21020","JNANASHREE R",31,34],
    s021:["130CS21021","LAKSHMI S",43,45],
    s022:["130CS21022","MAHADEVAPRASAD",43,42],
    s023:["130CS21023","MAHADEVASWAMY N",42,37],
    s024:["130CS21024","MAHATHEJASWI H N",30,28],
    s025:["130CS21025","MAHENDRA U",25,26],
    s029:["130CS21029","NAGARJUN P",35,37],
    s030:["130CS21030","NANDAKUMARA M",43,39],
    s032:["130CS21032","NIKHIL D",40,33],
    s034:["130CS21034","NISARGA C",44,45],
    s035:["130CS21035","NISARGA K",41,41 ],
    s037:["130CS21037","PRANAV P",27,31 ],
    s038:["130CS21038","RAJEEVA", 45,37],
    s039:["130CS21039","RAJESHWARI S",,],
    s042:["130CS21042","ROHITH S",27,34 ],
    s043:["130CS21043","S RAGHAVENDRA", 41,39],
    s045:["130CS21045","SAMUEL P",32,32 ],
    s046:["130CS21046","SANDESHA N",35,36],
    s047:["130CS21047","SHIVANANDA SWAMY",36,39 ],
    s049:["130CS21049","SHIVU K S", 41,42],
    s050:["130CS21050","SOWJANYA M",46,46],
    s051:["130CS21051","SPANDANA S", 44,48],
    s052:["130CS21052","SUCHITHRA K",37,39],
    s053:["130CS21053","SUPRIYA S JOSHI",44,42 ],
    s054:["130CS21054","SUSHMITHA K", 44,43],
    s055:["130CS21055","SYED UMAR FAROOQ",'ne','ne'],
    s056:["130CS21056","SYEDA MALEEHA", 40,39],
    s057:["130CS21057","T R KEERTHANA",45,49],
    s058:["130CS21058","THARUN S",29,33],
    s059:["130CS21059","UDAY T",36,29],
    s060:["130CS21060","VARSHINI Y M",40,46],
    s061:["130CS21061","VARUN M",34,38],
    s062:["130CS21062","VIGNESH D", 42,33],
    s063:["130CS21063","VINAY G",44,40],
    sX01:["130CS21X01","SRIHARI C",0,33 ],
    s301: ["130CS22301", "ABHICHAKRAVARTHI N S",0,38],
    s302:[ "130CS22302", "DARSHANRAJE URS", 0,37 ],
    s303:[ "130CS22303", "PRADEEP S", 0,34 ],
    s304:[ "130CS22304", "SAGAR G P",0,43 ],
    s305:[" 130CS22305", "SATHYARAJU S",0,42 ],
    s306:[ "130CS22306", "SHIVAKUMAR",0,37]
    
    };
     
    

let sem6da={
    s003:["130CS21003","AISHWARYA M",125,220],
    s005:["130CS21005","AMITH G S",154,233],
    s006:["130CS21006","AMRUTHA L",156,223],
    s007:["130CS21007","AMRUTHA M",150,220],
    s008:["130CS21008","AMULYA",145,220],
    s009:["130CS21009","ANUSHA S",155,235],
    
    s010:["130CS21010","ARCHANA R",148,205],
    s011:["130CS21011","CHAITHANYAKUMARI N",156,233],
    s012:["130CS21012","CHANDRASHEKHAR S",148,235],
    s014:["130CS21014","DARSHAN K P",150,190],
    
    s015:["130CS21015","DHANUSH M",154,235],
    s017:["130CS21017","DISHA N K",122,206],
    s018:["130CS21018","GOWTHAM S",126,205],
    s020:["130CS21020","JNANASHREE R",144,223],
    s021:["130CS21021","LAKSHMI S",150,221],
    
    s022:["130CS21022","MAHADEVAPRASAD",145,220],
    s023:["130CS21023","MAHADEVASWAMY N",142,220],
    s024:["130CS21024","MAHATHEJASWI H N",156,226],
    s025:["130CS21025","MAHENDRA U",144,200 ],
    s029:["130CS21029","NAGARJUN P",130,150],
    s030:["130CS21030","NANDAKUMARA M",145,210],
    s032:["130CS21032","NIKHIL D",159,235],
    
    s034:["130CS21034","NISARGA C",148,220],
    s035:["130CS21035","NISARGA K",138,229 ],
    s037:["130CS21037","PRANAV P",140,220 ],
    s038:["130CS21038","RAJEEVA", 154,214],
    s039:["130CS21039","RAJESHWARI S",,],
    s042:["130CS21042","ROHITH S",120,169 ],
    s043:["130CS21043","S RAGHAVENDRA", 156,222],
    s045:["130CS21045","SAMUEL P",'ne','ne' ],
    s046:["130CS21046","SANDESHA N",115,156],
    s047:["130CS21047","SHIVANANDA SWAMY",115,159 ],
    s049:["130CS21049","SHIVU K S", 149,212],
    s050:["130CS21050","SOWJANYA M",157,207],
    s051:["130CS21051","SPANDANA S", 152,208],
    s052:["130CS21052","SUCHITHRA K",130,196],
    s053:["130CS21053","SUPRIYA S JOSHI",158,225 ],
    s054:["130CS21054","SUSHMITHA K", 140,210],
    s055:["130CS21055","SYED UMAR FAROOQ",'ne','ne'],
    s056:["130CS21056","SYEDA MALEEHA", 157,214],
    s057:["130CS21057","T R KEERTHANA",154,212],
    s058:["130CS21058","THARUN S",154,212],
    s059:["130CS21059","UDAY T",135,157],
    s060:["130CS21060","VARSHINI Y M",156,212],
    s061:["130CS21061","VARUN M",140,172],
    s062:["130CS21062","VIGNESH D", 156,221],
    s063:["130CS21063","VINAY G",154,219],
    sX01:["130CS21X01","SRIHARI C",155,208 ],
    s301: ["130CS22301", "ABHICHAKRAVARTHI N S",110,152 ],
    s302:[ "130CS22302", "DARSHANRAJE URS", 102,141],
    s303:[ "130CS22303", "PRADEEP S", 143,203],
    s304:[ "130CS22304", "SAGAR G P",152,201 ],
    s305:[" 130CS22305", "SATHYARAJU S",118,188 ],
    s306:[ "130CS22306", "SHIVAKUMAR",150,187 ]
    
     };


function sem6(){
  
  let g=document.getElementById('i').value;
    
      if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
  //window.reload();
      }
    if((g=="130CS20034" || g=="130CS20048")){
  alert("processing");
    }
    
  if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
  let t = document.getElementById('i').value;
  let k=t.substr(-3);
  let h='s'+k;
  if (h) {
  let data = sem6da;
  
  var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
  <I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
  <label for="d3"><strong> Sem:</strong></label> <n id="d3"></n><br>
  <label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
  <label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
  <p>
  
  </p>
  <p>
  
  
  </p>
  </div>
  <div>
  <Table border="1">
  <th>Sl.No</th><th>Subject Name</th><th> Marks</th><th>Subject Code</th>
  </tr>
  <tr>
  <td>2</td><td>INTERNSHIP [Ex]</td><td id="d5"></td></td><td>20CS51T</td>
  </tr>
  <tr>
  <td>3</td><td>IA</td><td id="d6">   </td>
  </tr>
  </Table>
  <P>
  </P>
  </div>
  <div style="color:rgba(250, 162, 0, 0.966);">
  <I><label for="d13"><strong>IA TOTAL:</strong></label><n> </n><n id="d13"></n><BR>
  <label for="d14"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d14"></n><BR>
  <label for="d8"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d8"></n><BR>
  <P> </P>
  
  </div>`;
  if (h in data){
  document.getElementById("Table").innerHTML=z1;
  }
  else{
  window.alert("INVALID REGNO")
  }
  document.getElementById('d1').innerHTML = data[h][0];
  document.getElementById('d2').innerHTML = data[h][1];
  document.getElementById('d3').innerHTML = 6;
  //document.getElementById('d4').innerHTML = data[h][3];
  document.getElementById('d5').innerHTML = data[h][2];
  document.getElementById('d6').innerHTML = data[h][3];
 document.getElementById('d13').innerHTML = data[h][3]+"/240";
 document.getElementById('d14').innerHTML = data[h][2]+"/160";
 document.getElementById('d8').innerHTML = data[h][2]+data[h][3]+"/400"+" ("+(data[h][2]+data[h][3])/400*100+" %)";
 // document.getElementById('d15').innerHTML = data[h][8];
  
  
  if (data[h][14]=="FAIL" || data[h][14]=="Fail" || data[h][14]=="withheld" || data[h][14]=="WITHHELD"){
  let micro="intel";
  }
  if (data[h][14]=="FIRST CLASS" || data[h][14]=="First Class" || data[h][14]=="DISTINTION" || data[h][14]=="Distinction" || data[h][14]=="Pass"){
  let micro="intell";
  }
  
  }
  
  else {
  alert("Invalid Input");
  }
  
  }
  else{
  if(g==''){alert("Enter Reg Nber");
  }
  else{alert("Invalid Reg Number");}
  }
  lau();
  }




let sem1da={
              s003:["130CS21003","AISHWARYA M",1,20,20,27,28,"-",95,40,25,37,46,42,190,285,"FIRST CLASS"],
              s004: ["130CS21004","AKASH S",1,00,06,21,20,"-",47,32,20,29,34,31,146,193,"FAIL"],
              s005: ["130CS21005","AMITH GS",1,23,29,23,34,"-",109,37,30,49,53,43,212,321,"FIRST CLASS"],
              s006: ["130CS21006","AMRUTHA L",1,10,20,26,20,"-",76,36,27,41,44,42,190,266,"FAIL"],
              s007:["130CS21007","AMRUTHA M",1,02,07,21,20,"-",50,29,23,31,51,31,165,215,"FAIL"],
              s008: ["130CS21008","AMULYA",1,10,12,28,20,"-",70,36,21,35,50,40,182,252,"FAIL"],
              s009: ["130CS21009","ANUSHA A",1,34,20,31,20,"-",105,38,23,37,54,43,195,300,"FIRST CLASS"],
              s010: ["130CS21010","ARCHANA R",1,08,08,29,20,"-",65,27,21,31,43,31,153,218,"FAIL"],
              s011:["130CS21011","CHAITHANYAKUMARI N",1,27,20,33,22,"-",102,41,26,47,43,45,202,304,"FIRST CLASS"],
              s012: ["130CS21012","CHANDRASHEKHAR S",1,29,26,30,26,"-",111,34,35,44,49,43,205,316,"FIRST CLASS"],
              s014: ["130CS21014","DARSHAN KP",1,08,06,26,00,"-",40,27,23,39,35,32,156,196,"FAIL"],
              s015: ["130CS21015","DHANUSH M",1,47,34,30,24,"-",135,43,33,52,52,43,223,358,"DISTINTION"],
              s016:["130CS21016","DILEEP RAO R",1,01,05,"-",11,"-",17,32,22,"-",31,38,123,140,"FAIL"],
              s017: ["130CS21017","DISHA NK",1,03,13,24,20,"-",60,33,23,31,36,38,161,221,"FAIL"],
              s018: ["130CS21018","GOWTHAM S",1,28,20,24,26,"-",98,34,27,46,46,42,195,293,"FIRST CLASS"],
              s019: ["130CS21019","JEEVITHA M",1,04,04,26,20,"-",54,26,20,29,37,30,142,196,"FAIL"],
              s020: ["130CS21020","JNANASHREE R",1,03,20,28,30,"-",81,38,27,46,50,37,198,279,"FAIL"],
              s021:["130CS21021","LAKSHMI S",1,02,08,21,20,"-",51,38,25,30,51,36,180,231,"FAIL"],
              s022:["130CS21022","MAHADEVA PRASAD",1,20,12,21,20,'-',73,40,26,43,52,42,203,276,"FAIL"],
              s023:["130CS21023","MAHADEVASWAMY N",1,20,21,32,21,'-',94,42,33,41,49,44,209,303,"FIRST CLASS"],
              s024:["130CS21024","MAHATHEJASWI HN",1,13,23,32,32,'-',100,39,38,45,56,41,219,319,"FAIL"],
              s025:["130CS21025","MAHENDRA U",1,00,09,28,25,'-',62,34,20,40,40,41,175,237,"FAIL"],
              s026:["130CS21026","MALLESH M",1,00,00,00,00,'-',0,25,00,00,00,28,53,53,"FAIL"],
              s027:["130CS21027","MOHAMMAD KAIF",1,"AB",00,00,00,'-',00,31,00,00,00,35,66,66,"FAIL"],
              s028:["130CS21028","MOHAMMAD OWAIS",1,00,00,26,20,'-',46,32,00,34,26,42,134,180,"FAIL"],
              s029:["130CS21029","NAGARJUN P",1,01,07,16,16,'-',40,32,20,39,40,37,168,208,"FAIL"],
              s030:["130CS21030","NANDAKUMARA M",1,20,23,32,26,'-',101,37,30,38,47,41,193,294,"FIRST CLASS"],
              s031:["130CS21031","NAVEENA R",1,'','','','','',0,'','','','','',0,0,"withheld"],
              s032:["130CS21032","NIKHIL D",1,41,24,32,34,'-',131,45,33,45,51,39,213,344,"DISTINTION"],
              s033:["130CS21033","NINGARAJU V",1,"AB",'-',"AB",'-','-',0,30,'-',24,'-',31,85,85,"FAIL"],
              s034:["130CS21034","NISARGA C",1,20,12,32,32,'-',96,40,32,34,42,35,183,279,"FAIL"],
              s035:["130CS21035","NISARGA K",1,00,03,27,16,'-',46,38,25,36,43,36,178,224,"FAIL"],
              s036:["130CS21036","NITHIN KUMAR R",1,06,20,22,20,'-',68,29,22,40,38,28,157,225,"FAIL"],
              //s037:["130CS21037","PRANAV P",1,46,26,36,34,'-',142,44,39,52,58,46,239,381,"PASS [ NKN CHAKLI ]"],
              s037:["130CS21037","PRANAV P",1,00,04,17,16,'-',37,25,21,25,25,27,123,160,"Pass [marks don't matter]"],
              s038:["130CS21038","RAJEEVA",1,23,25,28,36,'-',112,40,34,48,49,46,217,329,"FIRST CLASS"],
              s039:["130CS21039","RAJESHWARI S",1,"AB","AB","AB",0,'-',0,32,23,24,39,26,144,144,"FAIL"],
              s040:["130CS21040","RAKSHITHA",1,"*","","",'-',"",0,"","","",'-',"*",0,0,"withheld"],
              s041:["130CS21041","ROHAN R",1,20,12,16,20,'-',68,35,20,25,31,32,143,211,"FAIL"],
              s042:["130CS21042","ROHITH S",1,00,02,18,16,'-',36,33,20,30,25,33,141,177,"Pass [marks don't matter]"],
              s043:["130CS21043","S RAGHAVENDRA",1,28,20,30,30,'-',108,39,31,43,47,44,204,312,"FIRST CLASS"],
              s044:["130CS21044","SAHANA R",1,11,04,21,20,'-',56,36,23,35,37,33,164,220,"FAIL"],
              s045:["130CS21045","SAMUEL P",1,01,20,21,28,'-',70,33,32,47,48,44,204,274,"FAIL"],
              s046:["130CS21046","SANDESHA N",1,08,10,30,26,'-',74,29,27,34,30,29,149,223,"FAIL"],
              s047:["130CS21047","SHIVANANDA SWAMY",1,00,04,21,20,'-',45,27,21,31,28,35,142,187,"FAIL"],
              s048:["130CS21048","SHIVASHANKRA",1,00,13,28,20,'-',61,32,25,43,34,37,171,232,"FAIL"],
              s049:["130CS21049","SHIVU KS",1,13,10,27,22,'-',72,33,27,40,30,39,169,241,"FAIL"],
              s050:["130CS21050","SOWJANYA M",1,32,20,34,28,'-',114,42,25,50,50,43,210,324,"FIRST CLASS"],
              s051:["130CS21051","SPANDANA S",1,39,23,30,20,'-',112,42,26,39,43,28,178,290,"FIRST CLASS"],
              s052:["130CS21052","SUCHITHRA K",1,12,11,32,20,'-',75,31,26,29,34,31,151,226,"FAIL"],
              s053:["130CS21053","SUPRIYA JOSHI",1,46,26,36,34,'-',142,44,39,52,58,46,239,381,"DISTINTION"],
              s054:["130CS21054","SUSHMITHA K",1,06,08,22,20,'-',56,29,23,26,35,31,144,200,"FAIL"],
              s055:["130CS21055","SYED UMAR FAROOQ",1,00,'-',18,16,'-',34,32,'-',30,28,32,122,156,"FAIL"],
              s056:["130CS21056","SYED MALLEEHA",1,20,23,24,34,'-',101,39,27,50,48,42,206,307,"FIRST CLASS"],
              s057:["130CS21057","TR KEERTHANA",1,13,21,24,30,'-',88,32,26,33,25,27,143,231,"FAIL"],
              s058:["130CS21058","THARUN S",1,00,04,22,20,'-',46,32,24,39,28,38,161,207,"FAIL"],
              s059:["130CS21059","UDAY T",1,20,20,29,30,'-',99,42,33,44,45,44,208,307,"FIRST CLASS"],
              s060:["130CS21060","VARSHINI YM",1,12,23,36,32,'-',103,38,32,48,51,41,210,313,"FAIL"],
              s061:["130CS21061","VARUN M",1,02,12,21,20,'-',55,32,28,31,25,37,153,208,"FAIL"],
              s062:["130CS21062","VIGNESH D",1,34,26,36,34,'-',130,41,39,51,52,46,229,359,"DISTINTION"],
              s063:["130CS21063","VINAY G",1,35,22,29,36,'-',122,41,40,46,52,47,226,348,"DISTINTION"]
              };
let sem2da={
            s003: ["130CS21003", "AISHWARYA M", 2, 11, 32, 35, 20, 27, 125, 29, 50, 50, 24, 48, 201, 326, "Fail"],
            s005: ["130CS21005", "AMITH G S", 2, 35, 36, 37, 29, 34, 171, 43, 58, 48, 45, 54, 248, 419, "Distinction"],
            s006: ["130CS21006", "AMRUTHA L", 2, 23, 31, 34, 16, 28, 132, 39, 56, 51, 38, 48, 232, 364, "First Class"],
            s007: ["130CS21007", "AMRUTHA M", 2, 14, 30, 33, 8, 20, 105, 28, 43, 47, 24, 43, 185, 290, "Fail"],
            s008: ["130CS21008", "AMULYA", 2, 13, 27, 25, 17, 26, 108, 33, 52, 44, 39, 44, 212, 320, "Fail"],
            s009: ["130CS21009", "ANUSHA S", 2, 34, 39, 37, 29, 37, 176, 43, 56, 50, 42, 53, 244, 420, "Distinction"],
            s010: ["130CS21010", "ARCHANA R", 2, 8, 32, 28, 16, 20, 104, 21, 44, 46, 24, 35, 170, 274, "Fail"],
            s011: ["130CS21011", "CHAITHANYAKUMARI N", 2, 20, 38, 36, 24, 34, 152, 34, 52, 54, 56, 48, 244, 396, "Distinction"],
            s012: ["130CS21012", "CHANDRASHEKHAR S", 2, 24, 38, 34, 30, 34, 160, 45, 55, 49, 46, 55, 250, 410, "Distinction"],
            s014: ["130CS21014", "DARSHAN K P", 2, 7, 28, 30, 8, 20, 93, 22, 45, 35, 39, 38, 179, 272, "Fail"],
            s015: ["130CS21015", "DHANUSH M", 2, 25, 37, 37, 32, 35, 166, 41, 59, 47, 45, 55, 247, 413, "Distinction"],
            s017: ["130CS21017", "DISHA N K", 2, 9, 33, 32, 10, 20, 104, 26, 46, 39, 28, 41, 180, 284, "Fail"],
            s018: ["130CS21018", "GOWTHAM S", 2, 21, 34, 34, 34, 31, 154, 29, 52, 37, 46, 43, 207, 361, "First Class"],
            s019: ["130CS21019", "JEEVITHA M", 2, 5, 19, 32, 10, 20, 86, 20, 27, 43, 24, 33, 147, 233, "Fail"],
            s020: ["130CS21020", "JNANASHREE R", 2, 14, 29, 38, 32, 34, 147, 27, 42, 60, 53, 47, 229, 376, "Fail"],
            s021: ["130CS21021", "LAKSHMI S", 2, 14, 27, 34, 26, 30, 131, 38, 49, 44, 47, 44, 222, 353, "Fail"],
            s022: ["130CS21022", "MAHADEVAPRASAD", 2, 25, 35, 32, 28, 31, 151, 29, 49, 50, 45, 45, 218, 369, "First Class"],
            s023: ["130CS21023", "MAHADEVASWAMY N", 2, 12, 26, 27, 31, 24, 120, 33, 45, 43, 49, 47, 217, 337, "Fail"],
            s024: ["130CS21024", "MAHATHEJASWI H N", 2, 41, 36, 36, 30, 33, 176, 38, 52, 50, 52, 45, 237, 413, "Distinction"],
            s025: ["130CS21025", "MAHENDRA U", 2, 24, 25, 25, 31, 27, 132, 30, 32, 50, 33, 46, 191, 323, "First Class"],
            s026: ["130CS21026", "MALLESH M", 2, 5, 23, 27, 20, 20, 95, 21, 46, 45, 29, 37, 178, 273, "Fail"],
            s029: ["130CS21029", "NAGARJUN P", 2, 5, 26, 26, 20, 20, 97, 27, 41, 46, 30, 44, 188, 285, "Fail"],
            s030: ["130CS21030", "NANDAKUMARA M", 2, 23, 32, 30, 30, 33, 148, 34, 47, 47, 47, 51, 226, 374, "DISTINCTION "],
            s031: ["130CS21031", "NAVEENA R", 2, 1, 18, 22, 2, 20, 63, 20, 31, 39, 24, 37, 151, 214, "Fail"],
            s032: ["130CS21032", "NIKHIL D", 2, 38, 37, 34, 37, 37, 183, 45, 57, 47, 46, 55, 250, 433, "Distinction"],
            s034: ["130CS21034", "NISARGA C", 2, 32, 36, 27, 30, 30, 155, 35, 51, 49, 53, 45, 233, 388, "Distinction"],
            s035: ["130CS21035", "NISARGA K", 2, 20, 24, 24, 17, 30, 115, 31, 49, 49, 44, 43, 216, 331, "First Class"],
            s036: ["130CS21036", "NITHIN KUMAR R", 2, 34, 27, 36, 23, 20, 140, 28, 52, 41, 24, 43, 188, 328, "First Class"],
            s037: ["130CS21037", "PRANAV P", 2, 14, 10, 32, 17, 20, 93, 20, 31, 34, 24, 35, 144, 237, "Pass [marks don't matter]"],
            s038: ["130CS21038", "RAJEEVA", 2, 38, 37, 34, 32, 34, 175, 44, 59, 55, 47, 51, 256, 431, "Distinction"],
            s039: ["130CS21039", "RAJESHWARI S", 2, 1, 24, 23, 17, 20, 85, 33, 32, 52, 24, 36, 177, 262, "Fail"],
            s042: ["130CS21042", "ROHITH S", 2, 1, 10, 21, 8, 20, 60, 20, 31, 41, 28, 29, 149, 209, "Fail"],
            s043: ["130CS21043", "S RAGHAVENDRA", 2, 32, 32, 33, 30, 37, 164, 37, 57, 56, 44, 54, 248, 412, "Distinction"],
            s044: ["130CS21044", "SAHANA R", 2, 7, 26, 28, 24, 20, 105, 25, 43, 48, 34, 33, 183, 288, "Fail"],
            s045: ["130CS21045", "SAMUEL P", 2, 44, 34, 36, 33, 37, 184, 40, 51, 51, 56, 51, 249, 433, "Distinction"],
            s046: ["130CS21046", "SANDESHA N", 2, 12, 18, 21, 17, 29, 97, 21, 29, 40, 26, 41, 157, 254, "Fail"],
            s047: ["130CS21047", "SHIVANANDA SWAMY", 2, 20, 22, 19, 18, 20, 99, 21, 39, 40, 31, 33, 164, 263, "Pass"],
            s049: ["130CS21049", "SHIVU K S", 2, 20, 26, 35, 22, 30, 133, 33, 48, 39, 38, 47, 205, 338, "First Class"],
            s050: ["130CS21050", "SOWJANYA M", 2, 20, 24, 30, 26, 24, 124, 40, 58, 53, 43, 50, 244, 368, "First Class"],
            s051: ["130CS21051", "SPANDANA S", 2, 33, 35, 32, 32, 30, 162, 28, 54, 57, 53, 46, 238, 400, "Distinction"],
            s052: ["130CS21052", "SUCHITHRA K", 2, 20, 28, 30, 33, 22, 133, 29, 42, 44, 46, 44, 205, 338, "First Class"],
            s053: ["130CS21053", "SUPRIYA S JOSHI", 2, 46, 40, 38, 31, 37, 192, 44, 59, 59, 44, 52, 258, 450, "Distinction"],
            s054: ["130CS21054", "SUSHMITHA K", 2, 25, 33, 35, 20, 38, 151, 31, 40, 52, 26, 39, 188, 339, "First Class"],
            s055: ["130CS21055", "SYED UMAR FAROOQ", 2, 5, 18, 31, 6, 20, 80, 20, 28, 41, 36, 37, 162, 242, "Fail"],
            s056: ["130CS21056", "SYEDA MALEEHA", 2, 29, 30, 34, 17, 35, 145, 35, 57, 51, 43, 53, 239, 384, "Distinction"],
            s057: ["130CS21057", "T R KEERTHANA", 2, 23, 22, 33, 26, 32, 136, 34, 50, 54, 42, 49, 229, 365, "First Class"],
            s058: ["130CS21058", "THARUN S", 2, 10, 16, 36, 24, 22, 108, 20, 37, 39, 24, 38, 158, 266, "Fail"],
            s059: ["130CS21059", "UDAY T", 2, 20, 28, 31, 30, 37, 146, 28, 53, 44, 48, 51, 224, 370, "Distinction"],
            s060: ["130CS21060", "VARSHINI Y M", 2, 26, 26, 35, 30, 35, 152, 33, 59, 59, 50, 48, 249, 401, "Distinction"],
            s061: ["130CS21061", "VARUN M", 2, 34, 20, 31, 27, 24, 136, 29, 39, 52, 25, 37, 182, 318, "First Class"],
            s062: ["130CS21062", "VIGNESH D", 2, 31, 40, 37, 35, 37, 180, 38, 60, 52, 50, 56, 256, 436, "Distinction"],
            s063: ["130CS21063", "VINAY G", 2, 29, 34, 36, 34, 37, 170, 41, 58, 50, 47, 53, 249, 419, "Distinction"]
        };
let sem3da={
s003:["130CS21003","AISHWARYA M",3, 04 ,20 ,16 ,10 ,50, 35 ,28, 44, 38 ,145, 195 ,"Fail"],
s005:["130CS21005","AMITH G S", 3, 24, 34, 25 ,36, 119, 41, 48, 56 ,51 ,196, 315, "Distinction"],
s006:["130CS21006","AMRUTHA L", 3, 24, 20 ,26 ,30 ,100, 48 ,44 ,58, 50 ,200, 300 ,"Distinction"],
s007:["130CS21007","AMRUTHA M", 3, 27, 20 ,23 ,16 ,86, 24 ,31, 44 ,34,133 ,219 ,"Pass"],
s008:["130CS21008","AMULYA", 3 ,24 ,18 ,21 ,20 ,83 ,38 ,33 ,47 ,37 ,155 ,238 ,"First Class"],
s009:["130CS21009","ANUSHA S", 3, 27, 30 ,29, 28 ,114, 57, 57, 60 ,56 ,230, 344 ,"Distinction"],
s010:["130CS21010","ARCHANA R", 3, 21, 26, 19, 24, 90, 43, 37 ,48, 36, 164 ,254,"First Class"],
s011:["130CS21011","CHAITHANYAKUMARI N", 3, 28 ,30 ,32 ,28 ,118, 48 ,47 ,50 ,44, 189,307 ,"Distinction"],
s012:["130CS21012","CHANDRASHEKHAR S", 3 ,30 ,36 ,33 ,36, 135 ,51, 57, 57 ,50 ,215, 350,"Distinction"],
s014:["130CS21014","DARSHAN K P", 3 ,16, 18, 16, 16, 66 ,24 ,24 ,34 ,35 ,117 ,183 ,"Pass"],
s015:["130CS21015","DHANUSH M", 3, 29 ,36 ,32 ,36, 133, 51, 46, 59, 54 ,210 ,343, "Distinction"],
s017:["130CS21017","DISHA N K",3 ,20, 18 ,22, 16, 76 ,26, 25, 39 ,35 ,125, 201, "Pass"],
s018:["130CS21018","GOWTHAM S",3 ,30 ,34 ,29 ,32 ,125 ,40 ,46 ,49 ,49 ,184 ,309,"Distinction"],
s020:["130CS21020","JNANASHREE R", 3 ,30 ,34, 31, 24 ,119 ,39 ,41 ,46 ,44 ,170 ,289 ,"First Class"],
s021:["130CS21021","LAKSHMI S",3, 24 ,20 ,26 ,28 ,98 ,35 ,36 ,50 ,31 ,152 ,250,"First Class"],
s022:["130CS21022","MAHADEVAPRASAD", 3 ,24 ,36 ,22, 28 ,110, 41, 39 ,46 ,44, 170 ,280 ,"First Class"],
s023:["130CS21023","MAHADEVASWAMY N",3 ,26 ,36 ,28 ,28, 118 ,43 ,39, 49, 45, 176, 294,"First Class"],
s024:["130CS21024","MAHATHEJASWI H N", 3, 26, 34 ,30 ,32, 122 ,43, 52, 53, 52 ,200, 322,"Distinction"],
s025:["130CS21025","MAHENDRA U", 3 ,23 ,26 ,20 ,24 ,93 ,29 ,36 ,47 ,43 ,155 ,248 ,"First Class"],
s029:["130CS21029","NAGARJUN P", 3, 04 ,30 ,16 ,28 ,78, 27, 34, 33, 29, 123, 201,"Fail"],
s030:["130CS21030","NANDAKUMARA M", 3 ,30, 28 ,26, 24, 108, 45, 44, 51,48, 188, 296,"Distinction"],
s032:["130CS21032","NIKHIL D", 3, 33,34 ,34, 28, 129, 55 ,58,60 ,57 ,230 ,359,"Distinction"],
s034:["130CS21034","NISARGA C",3 ,29 ,20 ,30 ,24 ,103 ,46 ,42, 53 ,42 ,183, 286,"First Class"],
s035:["130CS21035","NISARGA K", 3 ,23 ,20 ,24 ,24 ,91 ,24 ,26, 49 ,31 ,130, 221,"Pass"],
s037:["130CS21037","PRANAV P", 3, 06 ,24, 16 ,20 ,66 ,24 ,36, 40, 27 ,127, 193,"Pass [marks don't matter]"],
s038:["130CS21038","RAJEEVA", 3 ,30 ,30, 30 ,24, 114, 41 ,54, 55 ,48 ,198 ,312,"Distinction"],
s039:["130CS21039","RAJESHWARI S",3 ,07, 16," NE", 20 ,43 ,24 ,24, 03 ,33 ,84 ,127, "Fail"],
s042:["130CS21042","ROHITH S", 3, 07 ,20 ,16 ,24 ,67 ,26 ,38, 37 ,33, 134, 201, "Fail"],
s043:["130CS21043","S RAGHAVENDRA", 3 ,30 ,32 ,32 ,24 ,118 ,53, 49 ,54 ,54 ,210 ,328,"Distinction"],
s045:["130CS21045","SAMUEL P", 3 ,30, 30 ,32 ,28 ,120, 41 ,43, 53, 41 ,178, 298 ,"Distinction"],
s046:["130CS21046","SANDESHA N",3 ,20 ,26 ,27 ,26 ,99, 26 ,28, 36, 39, 129, 228, "Pass"],
s047:["130CS21047","SHIVANANDA SWAMY", 3, 04 ,24, 16 ,26 ,70, 26 ,26, 37 ,31 ,120, 190, "Fail"],
s049:["130CS21049","SHIVU K S",3 ,24 ,30 ,28 ,24 ,106 ,32, 35, 51, 48 ,166 ,272,"First Class"],
s050:["130CS21050","SOWJANYA M", 3 ,26 ,24 ,26 ,26 ,102, 50 ,48 ,55, 48, 201 ,303,"Distinction"],
s051:["130CS21051","SPANDANA S", 3, 25 ,24 ,32 ,24 ,105, 47, 43, 55 ,49 ,194 ,299 ,"Distinction"],
s052:["130CS21052","SUCHITHRA K",3, 19 ,16 ,16, 26, 77, 30 ,25 ,40 ,31, 126, 203, "Pass"],
s053:["130CS21053","SUPRIYA S JOSHI", 3 ,34 ,36 ,35 ,38 ,143 ,56 ,55 ,60 ,51 ,222 ,365, "Distinction"],
s054:["130CS21054","SUSHMITHA K", 3 ,20 ,28, 26, 24 ,98, 43, 36, 43, 46, 168, 266,"First Class"],
s055:["130CS21055","SYED UMAR FAROOQ",3 ,06 ,16 ,16 ,18 ,56 ,24 ,24 ,33, 27 ,108 ,164, "Fail"],
s056:["130CS21056","SYEDA MALEEHA", 3 ,30, 20, 28 ,28, 106, 42 ,42 ,52 ,43 ,179 ,285 ,"First Class"],
s057:["130CS21057","T R KEERTHANA",3 ,27 ,26 ,27 ,28 ,108, 38 ,38 ,52, 41, 169, 277 ,"First Class"],
s058:["130CS21058","THARUN S",3 ,06 ,20 ,16, 16, 58 ,25, 31 ,37, 33, 126,184 ,"Fail"],
s059:["130CS21059","UDAY T", 3 ,28 ,20, 28 ,24, 100 ,45 ,35, 42, 42, 164 ,264,"First Class"],
s060:["130CS21060","VARSHINI Y M", 3, 27, 36 ,28 ,32 ,123 ,41 ,39 ,55, 44, 179, 302 ,"Distinction"],
s061:["130CS21061","VARUN M",3 ,16 ,16, 16, 16 ,64 ,24, 30 ,40 ,32, 126, 190,"Pass"],
s062:["130CS21062","VIGNESH D", 3 ,31 ,26 ,28 ,24 ,109,49 ,46 ,46 ,53, 194, 303 ,"Distinction"],
s063:["130CS21063","VINAY G",3, 30 ,28,29 ,28 ,115, 40, 41 ,46 ,50, 177 ,292, "First Class"],
sX01:["130CS21X01","SRIHARI C", 3, 30, 34 ,33, 36 ,133 ,47, 51 ,52 ,52 ,202, 335 ,"Distinction"],
s301: ["130CS22301", "ABHICHAKRAVARTHI N S", 3, 16, 16, 20, 16, 68, 26, 31, 36, 36, 129, 197, "Pass"],
s302:[ "130CS22302", "DARSHANRAJE URS", 3, 06, 16, 16, 16, 54, 24, 28, 31, 33, 116, 170, "Fail"],
s303:[ "130CS22303", "PRADEEP S", 3, 16, 30, 22, 20, 88 ,28 ,39 ,36 ,38 ,141 ,229, "Pass"],
s304:[ "130CS22304", "SAGAR G P", 3, 16, 28, 31, 24, 99, 45, 45, 45, 45, 180, 279, "First Class"],
s305:[" 130CS22305", "SATHYARAJU S", 3, 30, 24 ,16, 32, 102, 29, 36, 43, 39, 147, 249, "First Class"],
s306:[ "130CS22306", "SHIVAKUMAR", 3, 24, 20, 18 ,16 ,78, 35, 35, 37 ,34, 141, 219, "Pass"]

 };
 
 
 
let sem5da={
    s003:["130CS21003","AISHWARYA M",5,32,57,209,89,298,"PASS"],
    s005:["130CS21005","AMITH G S", 3,42,92,228,134,362, "PASS"],
    s006:["130CS21006","AMRUTHA L", 3,48,61,216,109,325,"PASS"],
    s007:["130CS21007","AMRUTHA M", 3,27,65,206,92,298,"Pass"],
    s008:["130CS21008","AMULYA", 3 ,17,40,194,57,251,"PASS"],
    s009:["130CS21009","ANUSHA S", 3, 54,80,233,134,367,"PASS"],
    s010:["130CS21010","ARCHANA R", 3,34,64,191,98,289,"PASS"],
    s011:["130CS21011","CHAITHANYAKUMARI N",3, 38,71,230,109,339 ,"PASS"],
    s012:["130CS21012","CHANDRASHEKHAR S", 3 ,39,96,219,135,354,"PASS"],
    s014:["130CS21014","DARSHAN K P", 3 ,9 ,40,158,49,207,"FAIL"],
    s015:["130CS21015","DHANUSH M", 3, 47,90,229,137,366, "PASS"],
    s017:["130CS21017","DISHA N K",3 ,12,40,198,52,250, "FAIL"],
    s018:["130CS21018","GOWTHAM S",3 ,32,80,197,112,309,"PASS"],
    s020:["130CS21020","JNANASHREE R", 3 ,25,65,193,90,283 ,"PASS"],
    s021:["130CS21021","LAKSHMI S",3, 13,60,199,73,272,"FAIL"],
    s022:["130CS21022","MAHADEVAPRASAD", 3,42,79,204,121,325 ,"PASS"],
    s023:["130CS21023","MAHADEVASWAMY N",3 ,38,65,203,103,306,"PASS"],
    s024:["130CS21024","MAHATHEJASWI H N", 3,27,88,211,115,326 ,"PASS"],
    s025:["130CS21025","MAHENDRA U", 3 ,24,71,184,95,279 ,"PASS"],
    s029:["130CS21029","NAGARJUN P", 3,24,65,176,89,265,"PASS"],
    s030:["130CS21030","NANDAKUMARA M", 3 ,47,89,205,136,341,"PASS"],
    s032:["130CS21032","NIKHIL D", 3,43,97,220,140,360 ,"PASS"],
    s034:["130CS21034","NISARGA C",3 ,24,57,195,81,276,"PASS"],
    s035:["130CS21035","NISARGA K", 3 ,28,48,200,76,276,"Pass"],
    s037:["130CS21037","PRANAV P", 3, 26,70,186,96,282,"Pass [marks don't matter]"],
    s038:["130CS21038","RAJEEVA", 3 ,53,87,208,140,348, "PASS"],
    s039:["130CS21039","RAJESHWARI S",3 ,0,0,0,0,0, "NA"],
    s042:["130CS21042","ROHITH S", 3,0,40,154,40, 194, "Fail"],
    s043:["130CS21043","S RAGHAVENDRA", 3 ,43,87,208,130,338,"PASS"],
    s045:["130CS21045","SAMUEL P", 3 ,29,75,174,104,278,"PASS"],
    s046:["130CS21046","SANDESHA N",3 ,9,40,166,49,215, "FAIL"],
    s047:["130CS21047","SHIVANANDA SWAMY", 3,17,40,163,57,220 , "Fail"],
    s049:["130CS21049","SHIVU K S",3 ,36,83,202,119,321,"PASS"],
    s050:["130CS21050","SOWJANYA M", 3 ,48,76,218,124,342,"PASS"],
    s051:["130CS21051","SPANDANA S", 3, 39,84,212,123,335 ,"PASS"],
    s052:["130CS21052","SUCHITHRA K",3,35,55,199,90,289 , "Pass"],
    s053:["130CS21053","SUPRIYA S JOSHI", 3 ,55,97,231,152,383, "PASS"],
    s054:["130CS21054","SUSHMITHA K", 3 ,29,76,198,105,303,"PASS"],
    s055:["130CS21055","SYED UMAR FAROOQ",3 ,0,0,0,0,0, "NA"],
    s056:["130CS21056","SYEDA MALEEHA", 3 , 47,90,227,137,364,"PASS"],
    s057:["130CS21057","T R KEERTHANA",3 ,47,82,205,129,334,"PASS"],
    s058:["130CS21058","THARUN S",3 ,27,40,164,67,231 ,"PASS"],
    s059:["130CS21059","UDAY T", 3 ,17,89,201,106,307,"FAIL (Don't Worry my friend, A Single sheet of paper doesn't decide u r life , and my precious hope will always with u)"],
    s060:["130CS21060","VARSHINI Y M", 3, 55,87,219,142,361,"PASS"],
    s061:["130CS21061","VARUN M",3 ,31,42,164,73,237,"Pass"],
    s062:["130CS21062","VIGNESH D", 3 ,50,95,221,145,366 ,"PASS"],
    s063:["130CS21063","VINAY G",3, 53,94,225,147,372, "PASS"],
    sX01:["130CS21X01","SRIHARI C", 3, 44,94,218,138,356 ,"PASS"],
    s301: ["130CS22301", "ABHICHAKRAVARTHI N S", 3,06,48,162,54,216 , "FAIL"],
    s302:[ "130CS22302", "DARSHANRAJE URS", 3,04,42,170,46,216, "Fail"],
    s303:[ "130CS22303", "PRADEEP S", 3,24,61,187,85,272 , "Pass"],
    s304:[ "130CS22304", "SAGAR G P", 3,24,89,203,113,316 , "PASS"],
    s305:[" 130CS22305", "SATHYARAJU S", 3,24,66,198,90,288, "PASS"],
    s306:[ "130CS22306", "SHIVAKUMAR", 3,28,75,191,103,294, "Pass"]
    
     };
     
     
 
 
/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




var z1 = `<div style="color: rgba(250, 162, 0, 0.966); font-family:'Times New Roman', Times, serif">
    <I><label for="d1"><strong>Regno:</strong></label> <n id="d1"></n><br>
    <label for="d3"><strong>Sem:</strong></label> <n id="d3"></n><br>
    <label for="d2"><strong>Student Name:</strong></label> <n id="d2"></n><br>
    <label for="e"><strong>Institute:</strong></label> <n id="e"><strong>130-GOVERNMENT POLYTECHNIC CHAMARAJANAGAR</strong></n><br></I>
    </div>
    <p></p>
    <P></P>
    <div>
    <table border="1">
    <tr>
        <th>Sl.No</th><th>Subject Name</th><th>Exam Marks</th><th>IA Marks</th><th>Subject Code</th>
    <tr>
        <td>1</td><td>PMS</td><td id="d4"></td><td id="d10"></td><td>20PM01T</td>
    </tr>
    <tr>
        <td>2</td><td>S & A</td><td id="d5"></td><td id="d11"></td><td>20SC02P</td>
    </tr>
    <tr>
        <td>3</td><td>CS</td><td id="d6"></td><td id="d12"></td><td>20EG01P</td>
    </tr>
    <tr>
        <td>4</td><td>CAEG</td><td id="d7"></td><td id="d13"></td><td>20ME02P</td>
    </tr>
    <tr>
        <td>5</td><td>MM</td><td id="d8"></td><td id="d14"></td><td>20CS21P</td>
    </tr>
    
    <tr>
    <td>6</td><td>SS-1</td><td></td><td id="dss"></td><td>Kannada</td>
    </tr>
    
    
    </table><br>
</div>
<div style="color:rgba(250, 162, 0, 0.966);">
    <b><p><u>IA Not Included</u></p></b>
    <I><label for="d15"><strong>IA TOTAL:</strong></label><n> </n><n id="d15"></n><br>
    <label for="d9"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d9"></n><br>
    <label for="d16"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d16"></n><br>
    <label for="d17"><strong>RESULT:</strong></label><n></n> <n id="d17"></n><br></I>
    <P></P>
</div>`;


/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/


function sem() {
    let s = document.getElementById('se').value;
    switch (s){
            case "1":
               sem1();
               break;
            case "2":
               sem2();
               break;
            case "3":
               sem3();
               break;
            case "4":
               sem4();
               break;
            case "5":
               sem5();
               break;
            case "6":
                sem6();
                break;
            case "7":
                dcet();
                break;
            case "9":
                dcetresu();
                break;
            case "8":
                dmcc();
                break;
            
           }
           
           
           
    }
    
    

function dmcc(){
    location.href="https://microintel.github.io/Result/dipmarkcard/dipcardgen.html";
}



/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/

function seld(){

let g=document.getElementById('i').value;
if(g==""){
alert("please enter the reg number!");
location.reload();
}
    
      if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
  //window.reload();
      }
    if((g=="130CS20034" || g=="130CS20048")){
  alert("processing");
    }
    
  if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
  let t = document.getElementById('i').value;
  let k=t.substr(-3);
  let h='s'+k;
  if (h in dcetDATA) {
  //alert("Dear "+dcetDATA[h][1]+",\n Your DIPLOMA Marks Card Is Ready To View.");
  document.getElementById('dcr').style.display="block";
  document.getElementById('ddf').style.display="block";
  document.getElementById('dmk').style.display="block";
  
}
else{
document.getElementById('dcr').style.display="none";document.getElementById('ddf').style.display="none";document.getElementById('dmk').style.display="none";
}
}
}


function dcet() {
        let g=document.getElementById('i').value;
        
        if(g=="130CS21X01"){
        alert("Random kids flexing like code masters after copy pasting code using AI..");
        //window.reload();
        }
        if((g=="130CS20034" || g=="130CS20048")){
        alert("processing");
        }
        
        if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
                
        
            let formS = `
               <center>
               <div id="dcetf">
               <form onsubmit="dcetmr(event)">
               <fieldset>
               <legend><b><font> MicroResult </font></b> Feed Form</legend>
               <br>
               <input id="duname" type="text" placeholder="Name" required>
               <br><br>
               <input id="dreg" type="text" placeholder="Diploma Reg no" required>
               <br><br>
               <input id="dcetreg" type="text" placeholder="Dcet Reg no" required>
               <br><br>
               <input id="dipocm" max="100" min="0" type="number" style="padding:6px;width:180px;" placeholder="Diploma Final marks" required>
               <br><br>
               <input id="drank" style="width:180px;padding:6px;" max="50000" min="0" type="number" placeholder="enter u r dcet rank" required>
               <br><br>
               <input id="dmark" max="100" min="0" type="number" style="padding:6px;width:180px;" placeholder="DCET SCORE marks" required>
               <br><br><br>
               <button id="dsub" type="submit">Send Gmail</button>
               </fieldset>
               </form>
               </div>
               </center>
            `;
            
           // alert(document.getElementById('i').value);
           
            document.getElementById("Table").innerHTML = formS;
            document.getElementById('dreg').value=document.getElementById('i').value;
            
            let t = document.getElementById('i').value;
            let k = t.substr(-3);
            let h = 's' + k;
            let data = sem5da;
            let una=data[h][1];
            
            document.getElementById('duname').value=una;
            
            }
            
            else{
            
            alert("invalid Reg Number..");
            }
        }

       function dcetmr(event) {
            event.preventDefault();

            let toM = "Microintel";
            let uN = document.getElementById("duname").value;
            let uDRN = document.getElementById("dreg").value;
            let uDCETN = document.getElementById("dcetreg").value;
            let uDR = document.getElementById("drank").value;
            let uM = parseInt(document.getElementById("dmark").value);
            let dipcon=parseInt(document.getElementById("dipocm").value);
            let totDD=dipcon/2+uM/2;
            
            
            let subject = "DCET Result Data Feed";
            let body = "Hi " + toM + ",\n\n" +
                "I am " + uN + ",\n\n" +
                "I hope this email finds you well.\n\n" +
                "I would like to submit my results for inclusion in the micro-results: [ Access At Any Time ]\n\n" +
                "Name : " + uN + "\n" +
                "Diploma Reg No : " + uDRN + "\n" +
                "DCET Reg No : " + uDCETN + "\n" +
                "Diploma Final Marks : " + dipcon+ "/100,\n\n" +
                "Rank : " + uDR + ",\n" +
                "DCET Score : " + uM + "/100,\n\n" +
                
                "------------------------------\n\n"+
                "This Is My JSON"+
                "["+uDRN+"','"+uN+"','"+uDCETN+"','"+uDR+"','"+uM+"','"+dipcon+"']"+
                "\n\n"+
                "----------------------------------"+
                
                
                "Thank you...";

            let s = encodeURIComponent(subject);
            let b = encodeURIComponent(body);

            let mailData = "mailto:" + "microfly2410@gmail.com"+ "?subject=" + s + "&body=" + b;
            alert("Mail Gateway has been Opened..");
            
            location.href = mailData;
        }
        
        
        

function sem2() {
let g=document.getElementById('i').value;
      if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
 // window.reload();
      }
if (g>="130CS21003" && g<="130CS21063"){
    let t = document.getElementById('i').value;
    let k = t.substr(-3);
    let h = 's' + k;
    if (h) {
        let data = sem2da;
        if (h in data){
document.getElementById("Table").innerHTML=z1;
}
else{
window.alert("INVALID REGNO")
}
        document.getElementById('d1').innerHTML = data[h][0];
        document.getElementById('d2').innerHTML = data[h][1];
        document.getElementById('d3').innerHTML = data[h][2];
        document.getElementById('d4').innerHTML = data[h][3]+"/50";
        document.getElementById('d5').innerHTML = data[h][4]+"/40";
        document.getElementById('d6').innerHTML = data[h][5]+"/40";
        document.getElementById('d7').innerHTML = data[h][6]+"/40";
        document.getElementById('d8').innerHTML = data[h][7]+"/40";
        document.getElementById('d9').innerHTML = data[h][8]+"/210";
        document.getElementById('d10').innerHTML = data[h][9]+"/50";
        document.getElementById('d11').innerHTML = data[h][10]+"/60";
        document.getElementById('d12').innerHTML = data[h][11]+"/60";
        document.getElementById('d13').innerHTML = data[h][12]+"/60";
        document.getElementById('d14').innerHTML = data[h][13]+"/60";
        document.getElementById('d15').innerHTML = data[h][14]+semkda[h][2]+"/340";
        document.getElementById('d16').innerHTML = data[h][15]+semkda[h][2]+"/550";
        document.getElementById('d17').innerHTML = data[h][16];
        
                document.getElementById('dss').innerHTML = semkda[h][2]+"/50";
        
        if (data[h][16]=="FAIL" || data[h][16]=="Fail" || data[h][16]=="withheld" || data[h][16]=="WITHHELD"){
        a.src="air.mp3";
        a.currentTime=0;
        a.play();
        }
        if (data[h][16]=="FIRST CLASS" || data[h][16]=="First Class" || data[h][16]=="DISTINTION" || data[h][16]=="Distinction"){
        a.src="wis.mp3";
        a.currentTime=0;
        a.play();
        }
    } else {
        alert("Invalid Input");
    }
    
    }
    else{
    if (g==''){alert("Enter Reg Number");}
    else{alert("Invalid Reg Number");}
}
lau();
}


/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




 function sem1() {
          let g=document.getElementById('i').value;
       if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
 // window.reload();
       }
          if (g>="130CS21003" && g<="130CS21063"){
          let t = document.getElementById('i').value;
          let k=t.substr(-3);
          let h='s'+k;
          
          if (h) {
            let data = sem1da;
                 
                 
                 
                 
                 /*

███╗░░░███╗██╗░█████╗░██████╗░░█████╗░██╗███╗░░██╗████████╗███████╗██╗░░░░░
████╗░████║██║██╔══██╗██╔══██╗██╔══██╗██║████╗░██║╚══██╔══╝██╔════╝██║░░░░░
██╔████╔██║██║██║░░╚═╝██████╔╝██║░░██║██║██╔██╗██║░░░██║░░░█████╗░░██║░░░░░
██║╚██╔╝██║██║██║░░██╗██╔══██╗██║░░██║██║██║╚████║░░░██║░░░██╔══╝░░██║░░░░░
██║░╚═╝░██║██║╚█████╔╝██║░░██║╚█████╔╝██║██║░╚███║░░░██║░░░███████╗███████╗
╚═╝░░░░░╚═╝╚═╝░╚════╝░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚══════╝
*/





var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
<I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
<label for="d3"><strong> Sem:</strong></label> <n id="d3"></n><br>
<label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
<label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
<p>

</p>
<p>


</p>
</div>
<div>
<Table border="1">
    <th>Sl.No</th><th>Subject Name</th><th> Exam Marks</th><th>IA Marks</th><th>Subject Code</th>
<tr>
    <td>1</td><td>MATHS</td><td id="d4">  </td><td id="d10"> </td><td>20SC01T</td>
</tr>
<tr>
    <td>2</td><td>FUNDAMENTALS OF COMPUTER</td><td id="d5"> </td><td id="d11">  </td><td>20CS11T</td>
</tr>
<tr>
    <td>3</td><td>FEEE </td><td id="d6"> </td><td id="d12">  </td><td>20EC01P</td>
</tr>
<tr>
    <td>4</td><td>IT SKILLS</td><td id="d7"> <td id="d13"></td> </td><td>20CS01P</td>
</tr>
<tr>
    <td>5</td><td>EVS</td><td id="d8"> </td><td id="d14"> </td> <td>20AU01T</td>
</tr>
</Table>
<P>

</P>
</div>
<div style="color:rgba(250, 162, 0, 0.966);">
<b><p><u>IA  Included</u></p></b>
<I><label for="d15"><strong>IA TOTAL:</strong></label><n> </><n id="d15"></n><BR>
<label for="d9"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d9"></n><BR>
<label for="d16"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d16"></n><BR>
    <label for="d17"><strong>RESULT:</strong></label><n> </n><n id="d17"></n><BR><I>
        <P> </P>
</div>`
if (h in data){
document.getElementById("Table").innerHTML=z1;
}
else{
window.alert("INVALID REGNO")
}

document.getElementById('d1').innerHTML = data[h][0];
document.getElementById('d2').innerHTML = data[h][1];
document.getElementById('d3').innerHTML = data[h][2];
document.getElementById('d4').innerHTML = data[h][3]+"/50";
document.getElementById('d5').innerHTML= data[h][4]+"/50";
document.getElementById('d6').innerHTML= data[h][5]+"/40";
document.getElementById('d7').innerHTML = data[h][6]+"/40";
document.getElementById('d8').innerHTML = data[h][7];
document.getElementById('d9').innerHTML = data[h][8]+"/180";
document.getElementById('d10').innerHTML = data[h][9]+"/50";
document.getElementById('d11').innerHTML= data[h][10]+"/50";
document.getElementById('d12').innerHTML= data[h][11]+"/60";
document.getElementById('d13').innerHTML = data[h][12]+"/60";
document.getElementById('d14').innerHTML = data[h][13]+"/50";
document.getElementById('d15').innerHTML = data[h][14]+"/270";
document.getElementById('d16').innerHTML = data[h][15]+"/450";
document.getElementById('d17').innerHTML= data[h][16];
if (data[h][16]=="FAIL" || data[h][16]=="Fail" || data[h][16]=="withheld" || data[h][16]=="WITHHELD"){
        a.src="air.mp3";
        a.currentTime=0;
        a.play();
     }
if (data[h][16]=="FIRST CLASS" || data[h][16]=="First Class" || data[h][16]=="DISTINTION" || data[h][16]=="Distinction"){
a.src="wis.mp3";
a.currentTime=0;
a.play();
}
     
        


  } else {
alert("Invalid input");
  }
tx=h;
}
else{
if (g==''){alert("Enter Reg Number");}
else{
alert("Invalid Reg Number");}
}
lau();
}



/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




function sem3(){
let g=document.getElementById('i').value;
      if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
 // window.reload();
      }
          if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
    let t = document.getElementById('i').value;
          let k=t.substr(-3);
          let h='s'+k;
          if (h) {
let data = sem3da;

var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
<I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
<label for="d3"><strong> Sem:</strong></label> <n id="d3"></n><br>
<label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
<label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
<p>

</p>
<p>


</p>
</div>
<div>
<Table border="1">
    <th>Sl.No</th><th>Subject Name</th><th> Exam Marks</th><th>IA Marks</th><th>Subject Code</th>
<tr>
    <td>1</td><td>PYTHON</td><td id="d4">  </td><td id="d9"> </td><td>20SC01T</td>
</tr>
<tr>
    <td>2</td><td>CHMA </td><td id="d5"> </td><td id="d10">  </td><td>20CS11T</td>
</tr>
<tr>
    <td>3</td><td>COMPUTER NETWORK </td><td id="d6"> </td><td id="d11">  </td><td>20EC01P</td>
</tr>
<tr>
    <td>4</td><td>DBMS</td><td id="d7"> <td id="d12"></td> </td><td>20CS01P</td>
</tr>

<tr>
    <td>5</td><td>SS-2</td><td> --<td id="dss2"></td> </td><td>KANNADA</td>
</tr>
</Table>
<P>

</P>
</div>
<div style="color:rgba(250, 162, 0, 0.966);">
<b><p><u>IA Not Included</u></p></b>
<I><label for="d13"><strong>IA TOTAL:</strong></label><n> </><n id="d13"></n><BR>
<label for="d8"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d8"></n><BR>
<label for="d14"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d14"></n><BR>
    <label for="d15"><strong>RESULT:</strong></label><n> </n><n id="d15"></n><BR><I>
        <P> </P>
     
</div>`;
if (h in data){
document.getElementById("Table").innerHTML=z1;
}
else{
window.alert("INVALID REGNO")
}
        document.getElementById('d1').innerHTML = data[h][0];
        document.getElementById('d2').innerHTML = data[h][1];
        document.getElementById('d3').innerHTML = data[h][2];
        document.getElementById('d4').innerHTML = data[h][3]+"/40";
        document.getElementById('d5').innerHTML = data[h][4]+"/40";
        document.getElementById('d6').innerHTML = data[h][5]+"/40";
        document.getElementById('d7').innerHTML = data[h][6]+"/40";
        document.getElementById('d8').innerHTML = data[h][7]+"/160";
        document.getElementById('d9').innerHTML = data[h][8]+"/60";
        document.getElementById('d10').innerHTML = data[h][9]+"/60";
        document.getElementById('d11').innerHTML = data[h][10]+"/60";
        document.getElementById('d12').innerHTML = data[h][11]+"/60";
        document.getElementById('d13').innerHTML = data[h][12]+semkda[h][3]+"/290";
        document.getElementById('d14').innerHTML = data[h][13]+semkda[h][3]+"/450";
        document.getElementById('d15').innerHTML = data[h][14];
        
        document.getElementById('dss2').innerHTML=semkda[h][3];


        if (data[h][14]=="FAIL" || data[h][14]=="Fail" || data[h][14]=="withheld" || data[h][14]=="WITHHELD"){
        a.src="air.mp3";
        a.currentTime=0;
        a.play();
     }
if (data[h][14]=="FIRST CLASS" || data[h][14]=="First Class" || data[h][14]=="DISTINTION" || data[h][14]=="Distinction" || data[h][14]=="Pass"){
a.src="wis.mp3";a.currentTime=0;a.play();
}
    
 }
 
 else {
        alert("Invalid Input");
}

}
else{
if(g==''){alert("Enter Reg Nber");
}
else{alert("Invalid Reg Number");}
}
lau();
}


/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/



   
  
   
   
   
   /*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/
   
   
   
   
   function pri(){
   window.print();
   }
   
   
   /*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/
  
  
  function sem5(){
  let g=document.getElementById('i').value;
        if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
//  window.reload();
        }
    if((g=="130CS20034" || g=="130CS20048")){
  alert("processing");
    }
    
  if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
  let t = document.getElementById('i').value;
  let k=t.substr(-3);
  let h='s'+k;
  if (h) {
  let data = sem5da;
  
  var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
  <I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
  <label for="d3"><strong> Sem:</strong></label> <n id="d3"></n><br>
  <label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
  <label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
  <p>
  
  </p>
  <p>
  
  
  </p>
  </div>
  <div>
  <Table border="1">
  <th>Sl.No</th><th>Subject Name</th><th> Exam Marks</th><th>Subject Code</th>
  <tr>
  <td>1</td><td>CYBER SECURITY</td><td id="d4"></td><td>20CS51T</td>
  </tr>
  <tr>
  <td>2</td><td>CYBER SECURITY LAB </td><td id="d5"></td></td><td>20CS51T</td>
  </tr>
  <tr>
  <td>3</td><td>IA MARKS </td><td id="d6">   </td>
  </tr>
  </Table>
  <P>
  </P>
  </div>
  <div style="color:rgba(250, 162, 0, 0.966);">
  <I><label for="d13"><strong>IA TOTAL:</strong></label><n> </n><n id="d13"></n><BR>
  <label for="d14"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d14"></n><BR>
  <label for="d8"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d8"></n><BR>
  <label for="d15"><strong>RESULT:</strong></label><n> </n><n id="d15"></n><BR><I>
  <P> </P>
  
  </div>`;
  if (h in data){
  document.getElementById("Table").innerHTML=z1;
  }
  else{
  window.alert("INVALID REGNO")
  }
  document.getElementById('d1').innerHTML = data[h][0];
  document.getElementById('d2').innerHTML = data[h][1];
  document.getElementById('d3').innerHTML = 5;
  document.getElementById('d4').innerHTML = data[h][3];
  document.getElementById('d5').innerHTML = data[h][4];
  document.getElementById('d6').innerHTML = data[h][5];
  document.getElementById('d13').innerHTML = data[h][5]+"/240";
  document.getElementById('d14').innerHTML = data[h][6]+"/160";
  document.getElementById('d8').innerHTML = data[h][7]+"/400"+" ("+data[h][7]/400*100+" %)";
  document.getElementById('d15').innerHTML = data[h][8];
  
  
  if (data[h][14]=="FAIL" || data[h][14]=="Fail" || data[h][14]=="withheld" || data[h][14]=="WITHHELD"){
  let micro="intel";
  }
  if (data[h][14]=="FIRST CLASS" || data[h][14]=="First Class" || data[h][14]=="DISTINTION" || data[h][14]=="Distinction" || data[h][14]=="Pass"){
  let micro="intell";
  }
  
  }
  
  else {
  alert("Invalid Input");
  }
  
  }
  else{
  if(g==''){alert("Enter Reg Nber");
  }
  else{alert("Invalid Reg Number");}
  }
  lau();
  }




  /*----------------------------------------------------------------------------------------------------*/










  let sem4da={
    s003:["130CS21003","AISHWARYA M"       ,	4, 24 ,18 ,	24 , 22 , "--" , 88	, 43 ,	39 ,	56, 34, 42, 214, 302	,"pass"],

    s005: ["130CS21005","AMITH GS"         ,    4,	36 ,	29 ,	36 ,	34 ,	"--" ,	135	,40 ,	53 ,	56 ,	46, 	32 ,	227,	362,	"pass"],

    s006: ["130CS21006","AMRUTHA L"        ,    4,	28, 	32 ,	30 ,	23, 	"--", 	113,	44 ,	53 ,	59 ,	45 ,	44, 	245,	358	,"pass"],
    s007:["130CS21007","AMRUTHA M"         ,    4,	30, 	21, 	20, 	24 ,	"--" ,	95,	34 ,	39, 	42 ,	35 ,	32 ,	182	,277,	"pass"],
    s008: ["130CS21008","AMULYA"           ,    4,30 ,	18, 	24,	23, 	"--" ,	95,	33 ,	40 ,	49 ,	35, 	33 ,	190,	285	,"pass"],
    s009: ["130CS21009","ANUSHA S"         ,    4	,36 ,	32 	,36 ,	30 ,	"--" ,	134	,56 ,	57, 	60 ,	59 ,	48 ,	280	,414	,"pass"],
    s010: ["130CS21010","ARCHANA R"        ,    4	,22 ,	16, 	20 ,	25 ,	"--" ,	83,	24 ,	46 ,	49 ,	39 ,	32 ,	190	,273,	"pass"],
    s011:["130CS21011","CHAITHANYAKUMARI N",    4,	36 ,	30,	32 ,	31, 	"--" ,	129,	40 ,	47 ,	52 ,	50 ,	33 ,	222	,351,	"pass"],
    s012: ["130CS21012","CHANDRASHEKHAR S" ,    4,	38 ,	34, 	39, 	32 ,	"--" ,	143	,53, 	49 ,	60, 	54 ,	43 ,	259,	402,	"pass"],
    s014: ["130CS21014","DARSHAN KP",4	,16 ,	10 ,	20, 	23 ,	"--" ,	69,	28, 	31, 	30 ,	24 ,20 ,	133,	202,	"Fail"],
    s015: ["130CS21015","DHANUSH M",4	,38 ,	34 ,	38 ,	34 ,	"--" ,	144,	54, 	51, 	56 ,	57 ,	35 	,253,	397	,"pass"],

    s017: ["130CS21017","DISHA NK",4,	30 ,	09 ,	18, 	20 	,"--" ,	77,	28 ,	40 	,31 	,24 ,	29 ,	152	,229,	"Fail"],
    s018: ["130CS21018","GOWTHAM S",4,	34 ,	30 ,	34 	,30 ,	"--" ,	128	,41 ,	42 	,54 ,	40 ,	31 ,	208,	336	,"pass"],

    s020: ["130CS21020","JNANASHREE R",4,	32, 	29, 	34 ,	28 ,	"--" ,	123,	41, 	37 ,	41 ,	42, 	30 ,	191,	314	,"pass"],
    s021:["130CS21021","LAKSHMI S",4,	22 ,	30 ,	16, 	26 ,	"--" ,	94	,40 ,	49 ,	53 ,	44, 	43, 	229,	323	,"pass"],
    s022:["130CS21022","MAHADEVA PRASAD",4	,28 ,	30, 	32 ,	27 ,	"--" 	,117	,33 ,	40 	,50 ,	42 ,	34 ,	199,	316	,"pass"],
    s023:["130CS21023","MAHADEVASWAMY N",4	,34 ,	22 	,32 ,	25 ,	"--" 	,113,	43 ,	47, 	55 ,	48 ,	42, 	235	,348,	"pass"],
    s024:["130CS21024","MAHATHEJASWI HN",4,	26 ,	31, 	28, 	30, 	"--", 	115,	45, 	52 ,	54 ,	45 ,	30, 	226	,341,	"pass"],
    s025:["130CS21025","MAHENDRA U",4,	28 ,	22 ,	16 ,	26 ,	"--" ,	92	,28 ,	39 ,	51, 	28 ,	31, 	177,269	,"pass"],

   
    s029:["130CS21029","NAGARJUN P",4	,08 ,	16, 	16 ,	22 ,	"--" ,	62,	25, 	35, 	35 ,	24 ,	31 ,	150,	212,	"Fail"],
    s030:["130CS21030","NANDAKUMARA M",4,	38 ,	32, 	36 ,	28 	,"--" ,	134	,48 ,	42 	,56 ,	45, 	34 ,	225	,359	,"pass"],
    s032:["130CS21032","NIKHIL D",4	,39, 	38 ,	39, 	37 ,	"--" ,	153,	58, 	52, 	60 ,	53 ,	32 ,	255	,408,	"pass"],

    s034:["130CS21034","NISARGA C",4,	20 ,	31 ,	16, 	26 ,"--" ,	93	,35 ,	44 ,	47 ,	42 ,	37 ,	205,	298	,"pass"],
    s035:["130CS21035","NISARGA K",4,	20 ,	16 	,18 ,	24 ,	"--" ,	78,	34 ,	47, 	52, 	34 ,	45 ,	212	,290,	"pass"],

    s037:["130CS21037","PRANAV P",4	,"NE",	16 ,	08 ,	23 ,	"--" 	,47	,20 ,	39 ,	37, 	25 ,	28,	149,	196	,"Pass [marks don't matter]"],
    s038:["130CS21038","RAJEEVA",4	,36 ,	24 , 20 ,	24 	,"--" ,	104	,40 ,	50 	,58 ,	56 	,45 ,	249,	353	,"pass"],
    s039:["130CS21039","RAJESHWARI S",4,"NE", "NE"	,06 ,	"NE", 	"--" ,	6	,14 ,	21 ,	31 ,	17 ,	20 ,	103,	109,	"Fail"],

    

    s042:["130CS21042","ROHITH S",4	,16 ,	16 ,	18 	,22 ,	"--" ,	72,	24 	,25 ,	38 ,	24 ,	21 	,132,	204,	"pass"],
    s043:["130CS21043","S RAGHAVENDRA",4	,38 ,	35 ,	32 	,33 	,"--" 	,138,	47, 	55, 	55 ,	48 ,	34 ,	239	,377,	"pass"],
    

    s045:["130CS21045","SAMUEL P",4	,30 ,	22 ,	20 ,	25 ,	"--" ,	97,	27 ,	44 ,	48 ,	41 ,	32 ,	192,	289,	"pass"],
    s046:["130CS21046","SANDESHA N",4,	16 ,	16 ,	18 ,	22 ,	"--" ,	72	,26 ,	36 ,	32 ,	26 ,	28 ,148,	220	,"pass"],
    s047:["130CS21047","SHIVANANDA SWAMY",4,	16, 	16 ,	08, 	22 	,"--" ,	62,	24 ,	32, 	36 ,	31 ,	32, 	155	,217,	"Fail"],
    

    s049:["130CS21049","SHIVU KS",4,18 ,	23 ,	20 ,	24 ,	"--" ,	85	,36 ,	48 ,	53 	,45 ,	33 ,	215	,300,	"pass"],
    s050:["130CS21050","SOWJANYA M",4	,28 ,	30, 	32 ,	27, 	"--" ,	117,	49, 	53, 	55 ,	53 ,	46 ,	256,	373	,"pass"],
    s051:["130CS21051","SPANDANA S",4,	36 	,26 ,	30, 	27 ,	"--" ,	119	,51 ,	52 ,	57 ,	51 ,	33 ,	244	,363	,"pass"],
    s052:["130CS21052","SUCHITHRA K",	4,	24 ,	17 ,	16 ,	28 ,	"--" ,	85	,31 ,	35 ,	26 ,	36 ,	21 ,	149	,234,	"pass"],
    s053:["130CS21053","SUPRIYA JOSHI",4,	38 ,	35, 	38 	,35, 	"--" 	,146,	56 ,	54 ,	60, 	59 ,	44 ,	273,	419,	"pass"],
    s054:["130CS21054","SUSHMITHA K",4,	"NE",	18 ,	18, 	20 ,	"--" ,	56,	21 ,	41 ,	39 ,	37, 	24, 	162	,218	,"Fail"],
    s055:["130CS21055","SYED UMAR FAROOQ", 4,	"NE" ,"NE" ,"NE",	"NE",	"--" ,	0	,10 ,	08 ,	18 ,	05 ,	16 ,	57,	57,	"Fail"],
    s056:["130CS21056","SYED MALLEEHA",4	,28 	,33 ,	34 ,	30 ,	"--" ,	125	,46 ,	43 ,	56 ,	51 ,	46 	,242,	367,"pass"],
    s057:["130CS21057","TR KEERTHANA",4	,24 ,	27 ,	22, 	24 ,	"--" ,	97	,40 ,	45 ,	55 ,	47 ,	42, 	229,	326,	"pass"],
    s058:["130CS21058","THARUN S",4	,16 ,	16 ,	20 ,	24 ,	"--" ,	76,31,	37 ,	43 ,	27 ,	31 ,	169	,245,	"pass"],
    s059:["130CS21059","UDAY T",4	,34 	,24, 	32 ,	26 ,	"--" ,	116,	33 ,	36 ,	41 ,	34 ,	21 ,	165,	281,	"pass"],
    s060:["130CS21060","VARSHINI YM",4	,36 ,	30 ,	32, 	28 ,	"--" ,	126	,46 ,	53, 	56 ,	51 ,	43 ,	249	,375,	"pass"],
    s061:["130CS21061","VARUN M",4,	16 ,	16 ,	18 ,	20 ,	"--" ,	70	,28 ,	41 ,	41, 	30, 	34, 	174	,244	,"pass"],
    s062:["130CS21062","VIGNESH D",4,	38 ,	35 ,	38, 	30 ,	"--" ,	141,	51 ,	50 ,	54 ,	42 ,	32 ,	229	,370,	"pass"],
    s063:["130CS21063","VINAY G",4,	32 ,	32,	34 ,	30 	,"--" ,	128,	47 ,	50,	57 ,	53, 	36 ,	243,	371,	"pass"],


    sX01:["130CS21X01","SRIHARI C", 4  , 34 ,   36, 36 ,36 ,0 ,        142 ,  39, 49, 52 ,49 ,33 ,     222  , 364,   "Pass"],
    s301: ["130CS22301", "ABHICHAKRAVARTHI N S",4	,20 ,	21 ,	16 ,	24 ,	"--" ,	81,	27 ,	33,	43 ,	39 ,	35, 	177,	258,	"pass"],
    s302:[ "130CS22302", "DARSHANRAJE URS",4,	08 ,	16 ,	18 ,	16, 	"--" ,	58	,24 ,	31 ,	28 ,	25 ,	36 ,	144	,202,	"Fail"],
    s303:[ "130CS22303", "PRADEEP S",4,	20 	,22 ,	18 ,	22 ,	"--" ,	82	,25 ,	38 ,	31, 	38 ,	34, 	166	,248,	"pass"],
    s304:[ "130CS22304", "SAGAR G P",4,	20 	,18 ,	24 	,22 ,	"--" ,	84,	37, 	44 ,	48 ,	42 ,	39 	,210,	294	,"pass"],
    s305:[" 130CS22305", "SATHYARAJU S",4	,08 ,	18 ,	16 ,	21, 	"--" ,	63	,32 ,	42, 	39 ,	38 ,	39 ,	190	,253,	"Fail"],
    s306:[ "130CS22306", "SHIVAKUMAR", 4,	18, 	18 ,	30 ,	22 	,"--", 	88	,24, 	30 	,39, 	36 	,26 	,155,	243	,"pass"]
    };











    function sem4() {
        let g=document.getElementById('i').value;
          if(g=="130CS21X01"){
  alert("Random kids flexing like code masters after copy pasting code using AI..");
 // window.reload();
          }
        if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
        let t = document.getElementById('i').value;
        let k=t.substr(-3);
        let h='s'+k;
        
        if (h) {
          let data = sem4da;
    
    var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
    <I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
    <label for="d3"><strong> Sem:</strong></label> <n id="d3"></n><br>
    <label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
    <label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
    <p>
    
    </p>
    <p>
    
    
    </p>
    </div>
    <div>
    <Table border="1">
    <th>Sl.No</th><th>Subject Name</th><th> Exam Marks</th><th>IA Marks</th><th>Subject Code</th>
    <tr>
    <td>1</td><td>DS PYTHON</td><td id="d4">  </td><td id="d10"> </td><td>20CS41P</td>
    </tr>
    <tr>
    <td>2</td><td>OS</td><td id="d5"> </td><td id="d11">  </td><td>20CS42P</td>
    </tr>
    <tr>
    <td>3</td><td>JAVA</td><td id="d6"> </td><td id="d12">  </td><td>20CS43P</td>
    </tr>
    <tr>
    <td>4</td><td>SEPP</td><td id="d7"> <td id="d13"></td> </td><td>20CS44P</td>
    </tr>
    <tr>
    <td>5</td><td>IC</td><td id="d8"> </td><td id="d14"> </td> <td>20CS45T</td>
    </tr>
    </Table>
    <P>
    
    </P>
    </div>
    <div style="color:rgba(250, 162, 0, 0.966);">
    <b><p><u>IA Included</u></p></b>
    <I><label for="d15"><strong>IA TOTAL:</strong></label><n> </><n id="d15"></n><BR>
    <label for="d9"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d9"></n><BR>
    <label for="d16"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d16"></n><BR>
    <label for="d17"><strong>RESULT:</strong></label><n> </n><n id="d17"></n><BR><I>
      <P> </P>
    </div>`;
    if (h in data){
    document.getElementById("Table").innerHTML=z1;
    }
    else{
    window.alert("INVALID REGNO")
    }
    
    document.getElementById('d1').innerHTML = data[h][0];
    document.getElementById('d2').innerHTML = data[h][1];
    document.getElementById('d3').innerHTML = data[h][2];
    document.getElementById('d4').innerHTML = data[h][3]+"/40";
    document.getElementById('d5').innerHTML= data[h][4]+"/40";
    document.getElementById('d6').innerHTML= data[h][5]+"/40";
    document.getElementById('d7').innerHTML = data[h][6]+"/40";
    document.getElementById('d8').innerHTML = data[h][7];
    document.getElementById('d9').innerHTML = data[h][8]+"/160";
    document.getElementById('d10').innerHTML = data[h][9]+"/60";
    document.getElementById('d11').innerHTML= data[h][10]+"/60";
    document.getElementById('d12').innerHTML= data[h][11]+"/60";
    document.getElementById('d13').innerHTML = data[h][12]+"/60";
    document.getElementById('d14').innerHTML = data[h][13]+"/50";
    document.getElementById('d15').innerHTML = data[h][14]+"/290";
    document.getElementById('d16').innerHTML = data[h][15]+"/450";
    document.getElementById('d17').innerHTML= data[h][16];
    if (data[h][16]=="FAIL" || data[h][16]=="Fail" || data[h][16]=="withheld" || data[h][16]=="WITHHELD"){
      let thu=1;
    }
    if (data[h][16]=="FIRST CLASS" || data[h][16]=="First Class" || data[h][16]=="DISTINTION" || data[h][16]=="Distinction"){
    let thu=2;
    }
    
      
    
    
    } else {
    alert("Invalid input");
    }
    tx=h;
    
    }
    else{
    if (g==''){alert("Enter Reg Number");}
    else{
    alert("Invalid Reg Number");}
    }
    lau();
    }
    
    
    
    
    
    
    
    
    
    
    
    
    function dmc(){
    
    let g=document.getElementById('i').value;
    if(g=="130CS21X01"){
    alert("Random kids flexing like code masters after copy pasting code using AI..");
    // window.reload();
    }
    if ((g>="130CS21003" && g<="130CS21063")){
    let t = document.getElementById('i').value;
    let k=t.substr(-3);
    let h='s'+k;
    
    if (h) {
    
    var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
    <I><label for="d1"><strong> Regno:</strong></label> <n id="d1"></n><br>
    <label for="d3"><strong> Sem: 1 - 6</strong></label> <n id="d3"></n><br>
    <label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br>
    <label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
    <p>
    
    </p>
    <p>
    
    
    </p>
    </div>
    <div>
    <Table border="1">
    
    <th>Sl.No</th><th>Subject Name</th><th> Exam Marks</th><th>IA Marks</th>
    <tr>
    <td> 1. </td><td> Maths  </td><td id="mex">  </td><td id="mia"> </td>
    </tr>
    
    <tr>
    <td> 2.</td><td> Foc </td><td id="fex">  </td><td id="fia"> </td>
    </tr>
    
    <tr>
    <td> 3. </td><td>  Feee </td><td id="feex">  </td><td id="feia"> </td>
    </tr>
    
    <tr>
    <td> 4. </td><td> It Sk </td><td id="itex">  </td><td id="itia"> </td>
    </tr>
    
    <tr>
    <td> 5. </td><td> Pms </td><td id="pex">  </td><td id="pia"> </td>
    </tr>
    
    <tr>
    <td> 6. </td><td> S & A </td><td id="sex">  </td><td id="sia"> </td>
    </tr>
    
    <tr>
    <td> 7. </td><td> Communication </td><td id="cex">  </td><td id="cia"> </td>
    </tr>
    
    <tr>
    <td>  8.</td><td> CAEG </td><td id="caex">  </td><td id="caia"> </td>
    </tr>
    
    <tr>
    <td>9.  </td><td>  multi media</td><td id="mmex">  </td><td id="mmia"> </td>
    </tr>
    
    <tr>
    <td> 10. </td><td> python </td><td id="pyex">  </td><td id="pyia"> </td>
    </tr>
    
    <tr>
    <td>  11.</td><td> CHMA </td><td id="chex">  </td><td id="chia"> </td>
    </tr>
    
    <tr>
    <td>  12.</td><td> C Network </td><td id="cnex">  </td><td id="cnia"> </td>
    </tr>
    
    <tr>
    <td> 13. </td><td>  DBMS </td><td id="dex">  </td><td id="dia"> </td>
    </tr>
    
    <tr>
    <td> 14. </td><td>  DS Python</td><td id="dsex">  </td><td id="dsia"> </td>
    </tr>
    
    <tr>
    <td> 15. </td><td> OS & A </td><td id="oex">  </td><td id="oia"> </td>
    </tr>
    
    <tr>
    <td> 16. </td><td> Java </td><td id="jex">  </td><td id="jia"> </td>
    </tr>
    
    <tr>
    <td> 17. </td><td> Sepp </td><td id="seex">  </td><td id="seia"> </td>
    </tr>
    
    
    
    
    
    </Table>
    <P>
    
    </P>
    </div>
    <div style="color:rgba(250, 162, 0, 0.966);">
    <b><p><u>IA Not Included</u></p></b>
    <I><label for="d13"><strong>IA TOTAL:</strong></label><n> </><n id="d13"></n><BR>
    <label for="d8"><strong>EXAM TOTAL:</strong></label><n> </n><n id="d8"></n><BR>
    <label for="d14"><strong>GRAND TOTAL:</strong></label><n> </n><n id="d14"></n><BR>
    <label for="d15"><strong>RESULT:</strong></label><n> </n><n id="d15"></n><BR><I>
    <P> </P>
    
    </div>`;
    
    if (h){
    document.getElementById("Table").innerHTML=z1;
    }
    else{
    window.alert("INVALID REGNO")
    }
    
    
    
    let me= sem1da[h][3];
    let fe= sem1da[h][4];
    let fee= sem1da[h][5];
    let ie= sem1da[h][6];
    
    let mi= sem1da[h][9];
    let fi=sem1da[h][10];
    let fei=sem1da[h][11];
    let ii=sem1da[h][12];
    
    //------------------------------------
    
    let pe= sem2da[h][3];
    let pi= sem2da[h][4];
    let se= sem2da[h][5];
    let si= sem2da[h][6];
    let cse=sem2da[h][7];
    
    let cia= sem2da[h][9];
    let cae=sem2da[h][10];
    let cai=sem2da[h][11];
    let mme=sem2da[h][12];
    let mmi=sem2da[h][13];
    
    //------------------------------------
    
    let pye= sem3da[h][3];
    let pyi= sem3da[h][4];
    let che= sem3da[h][5];
    let chi= sem3da[h][6];
    
    let cne= sem3da[h][8];
    let cni=sem3da[h][9];
    let de=sem3da[h][10];
    let di=sem3da[h][11];
    
    //------------------------------------
    
    
    let dse= sem4da[h][3];
    let dsi= sem4da[h][4];
    let oe= sem4da[h][5];
    let oi= sem4da[h][6];
    
    let je= sem4da[h][9];
    let ji=sem4da[h][10];
    let sepe=sem4da[h][11];
    let sepi=sem4da[h][12];
    
    //------------------------------------
    
    
    document.getElementById("d1").innerHTML=sem1da[h][0];
    document.getElementById("d2").innerHTML=sem1da[h][1];
    
    
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if (data[h][16]=="FAIL" || data[h][16]=="Fail" || data[h][16]=="withheld" || data[h][16]=="WITHHELD"){
    let thu=1;
    }
    if (data[h][16]=="FIRST CLASS" || data[h][16]=="First Class" || data[h][16]=="DISTINTION" || data[h][16]=="Distinction"){
    let thu=2;
    }
    
    
    
    
    } else {
    alert("Invalid input");
    }
    tx=h;
    
    }
    else{
    if (g==''){alert("Enter Reg Number");}
    else{
    alert("Invalid Reg Number");}
    }
    }
    
    
    
    
    
    //-------+----------------------------
    
    
    function dcetresu() {
  
    let g=document.getElementById('i').value;
    if(g=="130CS21X01"){
    alert("Random kids flexing like code masters after copy pasting code using AI..");
    // window.reload();
    }
    if ((g>="130CS21003" && g<="130CS21063") || (g >="130CS22301" && g <="130CS22306")|| (g=="130CS21X01")){
    let t = document.getElementById('i').value;
    let k=t.substr(-3);
    let h='s'+k;
    
    if (h) {
    let data = dcetDATA;
    
    var z1= `<div style="color: rgba(250, 162, 0, 0.966); font-size: medium;font-family:'Times New Roman', Times, serif">
    <I><label for="d1"><strong> DCET Regno:</strong></label> <n id="d1"></n><br>
    <label for="d2"><strong> Student Name:</strong></label> <n id="d2"></n><br><br>
    <label for="e"><strong> Institute:</strong></label> <n id="e"><strong>130-GOVERNAMENT PLOYTECNIC CHAMARAJANAGAR</strong></n></I>
    <p>
    
    </p>
    <p>
    
    
    </p>
    </div>
    <div>
    <Table border="1">
    <tr>
    <td style="padding:8px;">RANK</td><td style="padding:8px;" id="d4">  </td>
    </tr>
    <tr>
    <td style="padding:8px;">DCET SCORE</td><td style="padding:8px;" id="d5"> </td>
    </tr>
    <tr>
    <td style="padding:8px;">Diploma Final Conversion</td><td style="padding:8px;" id="d6"> </td>
    </tr>
    </Table>
    `;
    if (h in data){
    document.getElementById("Table").innerHTML=z1;
    lau()
    }
    else{
    window.alert("Data Still Crawling")
    }
    
    document.getElementById('d1').innerHTML = data[h][2];
    document.getElementById('d2').innerHTML = data[h][1];
   // document.getElementById('d3').innerHTML = data[h][2];
    document.getElementById('d4').innerHTML = data[h][3];
    document.getElementById('d5').innerHTML= data[h][4]+"/100";
    document.getElementById('d6').innerHTML= data[h][5]+"/100";
  /*  document.getElementById('d7').innerHTML = data[h][6]+"/40";
    document.getElementById('d8').innerHTML = data[h][7];
    document.getElementById('d9').innerHTML = data[h][8]+"/160";
    document.getElementById('d10').innerHTML = data[h][9]+"/60";
    document.getElementById('d11').innerHTML= data[h][10]+"/60";
    document.getElementById('d12').innerHTML= data[h][11]+"/60";
    document.getElementById('d13').innerHTML = data[h][12]+"/60";
    document.getElementById('d14').innerHTML = data[h][13]+"/50";
    document.getElementById('d15').innerHTML = data[h][14]+"/290";
    document.getElementById('d16').innerHTML = data[h][15]+"/450";
    document.getElementById('d17').innerHTML= data[h][16];
    */
    if (data[h][16]=="FAIL" || data[h][16]=="Fail" || data[h][16]=="withheld" || data[h][16]=="WITHHELD"){
    let thu=1;
    }
    if (data[h][16]=="FIRST CLASS" || data[h][16]=="First Class" || data[h][16]=="DISTINTION" || data[h][16]=="Distinction"){
    let thu=2;
    }
    
    
    
    
    } else {
    alert("Invalid input");
    }
    tx=h;
    
    }
    else{
    if (g==''){alert("Enter Reg Number");}
    else{
    alert("Invalid Reg Number");}
    }
    }
    