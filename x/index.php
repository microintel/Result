<!DOCTYPE html>
<?php
    session_start();
    if(!$_COOKIE["uSER"]){
          header("Location: http://microintel.000.pe/vpn/login.php");
    }
    ?>
<!--                                         
Ｄｅａｒ ｈａｃｋｉｎｇ ｍｉｎｄ，
ｐｌｅａｓｅ ｂｅ ａｗａｒｅ ｔｈａｔ
ａｃｃｅｓｓｉｎｇ ｔｈｅ ❤️ ｏｆ ｔｈｉｓ ｓｉｔｅ＇ｓ ｃｏｄｅ
ｉｓ ｎｏｔ ｐｏｓｓｉｂｌe
ｂｅｃａｕｓｅ ｉｔ ｈａｓ ｂｅｅｎ ｄｅｖｅｌｏｐｅｄ ｂｙ Ｍｉｃｒｏｉｎｔｅｌ™.

-->
<html>
<head>
<title>Result</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="result.css">
</head>
<body>
<img src="https://4.bp.blogspot.com/-sJv3pQOUHks/TiWruyLxAnI/AAAAAAAAAGs/wQ5hw_mPY7w/s1600/karnataka_govt_logo.png"  height="100PX" width="100PX">
<h1><strong>BOARD OF TECHNICAL EDUCATION</strong></h1>
<h2><strong>DEPARTMENT OF TECHNICAL EDUCATION, KARNATAKA</strong></h2>
<p style="background-color: rgb(243, 229, 167); color: aliceblue;">_</p>
<div>
    <label for="a"><strong>Regno:</strong></label>
    <input id="i" type="text" placeholder="ENTER REG NUM IN CAPS" style="border: hidden;">
    <label for="b"><strong>Semester:</strong></label>
    <select id="se" style="border-radius:12px;">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <P>  </P>
    <button onclick="sem()" style="background-color: rgba(250, 162, 0, 0.966); border: hidden; border-radius: 15px;">Get Result</button>
</div>
<p id="Table"></p>
<p id="get"></p>
<p id="jhg"></p>
<p id="ghj"></p>
<p id="prix"></p>
<p id="dev"></p>
<script src="script.js">
</script>
</body>
</html>
