alert("🙏🙏🙏🙏🙏\nPlease Reload this page when problems occur, such as statistical issues or printing errors.");
let tx;
let a =new Audio();
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
              s037:["130CS21037","PRANAV P",1,00,04,17,16,'-',37,25,21,25,25,27,123,160,"FAIL"],
              s038:["130CS21038","RAJEEVA",1,23,25,28,36,'-',112,40,34,48,49,46,217,329,"FIRST CLASS"],
              s039:["130CS21039","RAJESHWARI S",1,"AB","AB","AB",0,'-',0,32,23,24,39,26,144,144,"FAIL"],
              s040:["130CS21040","RAKSHITHA",1,"*","","",'-',"",0,"","","",'-',"*",0,0,"withheld"],
              s041:["130CS21041","ROHAN R",1,20,12,16,20,'-',68,35,20,25,31,32,143,211,"FAIL"],
              s042:["130CS21042","ROHITH S",1,00,02,18,16,'-',36,33,20,30,25,33,141,177,"FAIL"],
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
            s037: ["130CS21037", "PRANAV P", 2, 14, 10, 32, 17, 20, 93, 20, 31, 34, 24, 35, 144, 237, "Fail"],
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
s037:["130CS21037","PRANAV P", 3, 06 ,24, 16 ,20 ,66 ,24 ,36, 40, 27 ,127, 193,"Fail"],
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
    </table><br>
</div>
<div style="color:rgba(250, 162, 0, 0.966);">
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
           }
    }
    
    



/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/



function sem2() {
let g=document.getElementById('i').value;
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
        document.getElementById('d4').innerHTML = data[h][3];
        document.getElementById('d5').innerHTML = data[h][4];
        document.getElementById('d6').innerHTML = data[h][5];
        document.getElementById('d7').innerHTML = data[h][6];
        document.getElementById('d8').innerHTML = data[h][7];
        document.getElementById('d9').innerHTML = data[h][8]+"/160";
        document.getElementById('d10').innerHTML = data[h][9];
        document.getElementById('d11').innerHTML = data[h][10];
        document.getElementById('d12').innerHTML = data[h][11];
        document.getElementById('d13').innerHTML = data[h][12];
        document.getElementById('d14').innerHTML = data[h][13];
        document.getElementById('d15').innerHTML = data[h][14]+"/240";
        document.getElementById('d16').innerHTML = data[h][15]+"/500";
        document.getElementById('d17').innerHTML = data[h][16];
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
    cht(h);
    dis();
    }
    else{
    if (g==''){alert("Enter Reg Number");}
    else{alert("Invalid Reg Number");}
}
}


/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




 function sem1() {
          let g=document.getElementById('i').value;
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
document.getElementById('d4').innerHTML = data[h][3];
document.getElementById('d5').innerHTML= data[h][4];
document.getElementById('d6').innerHTML= data[h][5];
document.getElementById('d7').innerHTML = data[h][6];
document.getElementById('d8').innerHTML = data[h][7];
document.getElementById('d9').innerHTML = data[h][8]+"/180";
document.getElementById('d10').innerHTML = data[h][9];
document.getElementById('d11').innerHTML= data[h][10];
document.getElementById('d12').innerHTML= data[h][11];
document.getElementById('d13').innerHTML = data[h][12];
document.getElementById('d14').innerHTML = data[h][13];
document.getElementById('d15').innerHTML = data[h][14]-data[h][13]+"/220";
document.getElementById('d16').innerHTML = data[h][15]-data[h][13]+"/400";
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
  cht(h);
  dis();
}
else{
if (g==''){alert("Enter Reg Number");}
else{
alert("Invalid Reg Number");}
}
}



/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




function sem3(){
let g=document.getElementById('i').value;
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
</Table>
<P>

</P>
</div>
<div style="color:rgba(250, 162, 0, 0.966);">
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
        document.getElementById('d4').innerHTML = data[h][3];
        document.getElementById('d5').innerHTML = data[h][4];
        document.getElementById('d6').innerHTML = data[h][5];
        document.getElementById('d7').innerHTML = data[h][6];
        document.getElementById('d8').innerHTML = data[h][7]+"/160";
        document.getElementById('d9').innerHTML = data[h][8];
        document.getElementById('d10').innerHTML = data[h][9];
        document.getElementById('d11').innerHTML = data[h][10];
        document.getElementById('d12').innerHTML = data[h][11];
        document.getElementById('d13').innerHTML = data[h][12]+"/290";
        document.getElementById('d14').innerHTML = data[h][13]+"/400";
        document.getElementById('d15').innerHTML = data[h][14];


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
cht(h);
dis();
}
else{
if(g==''){alert("Enter Reg Nber");
}
else{alert("Invalid Reg Number");}
}
}


/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/




    
   function sem4(){
   alert("Sem 4 Result Not Published Yet!");
   }
   
   
   
   /*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/
   
   
   
   
   function pri(){
   window.print();
   }
   
   
   /*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________/*______________________________________________*/
   
   
   
   
function cht(h) {
let sec=document.getElementById('se').value;
let secc=document.getElementById('i').value;
if (((secc>="130CS22301" && secc<="130CS22306")||(secc=="130CS21X01")) && (sec=="3")){
/*hiii*/}
else{
let six=sem1da[h][15];
let sev=sem1da[h][13];
let csv = six-sev;
let cs=csv/400*100;
//400*100;
let csd = sem2da[h][15]/500*100;
 let csx = sem3da[h][13]/400*100;
var cnvss = document.createElement('canvas');

cnvss.id = 'dr';
cnvss.width = 800;
cnvss.height = 600;
document.body.appendChild(cnvss);
let cnvs=document.getElementById('dr');
 var stat = new Chart(cnvs, {
 type: "bar",
     data: {
        labels: ["Sem1","Sem2","Sem3"],
        datasets: [{
        label:"Double tap here to Recalculate",
        barPercentage: 0.5,
        backgroundColor:["orange","red","green"],
        data: [cs,csd,csx],
                 }]
          },
  options: {
         scales: {
                   y: {
                        grid: {
                               display: true,
                                color: 'orange'
        }
        }
        }
        }
        
        
        });
 
        
        }
        
        }
        
function dis() {
  var xw = `<button onclick="pri()" style="background-color: rgba(250, 162, 0, 0.966); border: hidden; SIZE:30; border-radius: 15px;">PRINT</button>`;
  var xc = `<center><img src="mi.png" height="30%" width="40%"></center>`;

  var p1 = document.createElement("p");
  p1.id = "prix";
  p1.innerHTML = xw;
  document.body.appendChild(p1);

  var p2 = document.createElement("p");
  p2.id = "prix2";
  p2.innerHTML = xc;
  document.body.appendChild(p2);
}
