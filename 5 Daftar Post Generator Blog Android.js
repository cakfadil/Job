firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_generator").innerHTML = "Welcome : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
	
function Generate() {
  var gambar = document.getElementById("gambar").value;
  var deskripsi = document.getElementById("deskripsi").value;
  var h2 = document.getElementById("h2").value;
  var jd1 = document.getElementById("jd1").value;
  var gd1 = document.getElementById("gd1").value;
  var dd1a = document.getElementById("dd1a").value;
  var dd1b = document.getElementById("dd1b").value;
  var dd1c = document.getElementById("dd1c").value;
  var td1a = document.getElementById("td1a").value;
  var td2a = document.getElementById("td2a").value;
  var developer1 = document.getElementById("developer1").value;
  var osminimal1 = document.getElementById("osminimal1").value;
  var ukuran1 = document.getElementById("ukuran1").value;
  var rating1 = document.getElementById("rating1").value;
  var download1 = document.getElementById("download1").value;
  var update1 = document.getElementById("update1").value;
  var jd2 = document.getElementById("jd2").value;
  var gd2 = document.getElementById("gd2").value;
  var dd2a = document.getElementById("dd2a").value;
  var dd2b = document.getElementById("dd2b").value;
  var dd2c = document.getElementById("dd2c").value;
  var td1b = document.getElementById("td1b").value;
  var td2b = document.getElementById("td2b").value;
  var developer2 = document.getElementById("developer2").value;
  var osminimal2 = document.getElementById("osminimal2").value;
  var ukuran2 = document.getElementById("ukuran2").value;
  var rating2 = document.getElementById("rating2").value;
  var download2 = document.getElementById("download2").value;
  var update2 = document.getElementById("update2").value;
  var jd3 = document.getElementById("jd3").value;
  var gd3 = document.getElementById("gd3").value;
  var dd3a = document.getElementById("dd3a").value;
  var dd3b = document.getElementById("dd3b").value;
  var dd3c = document.getElementById("dd3c").value;
  var td1c = document.getElementById("td1c").value;
  var td2c = document.getElementById("td2c").value;
  var developer3 = document.getElementById("developer3").value;
  var osminimal3 = document.getElementById("osminimal3").value;
  var ukuran3 = document.getElementById("ukuran3").value;
  var rating3 = document.getElementById("rating3").value;
  var download3 = document.getElementById("download3").value;
  var update3 = document.getElementById("update3").value;
  var jd4 = document.getElementById("jd4").value;
  var gd4 = document.getElementById("gd4").value;
  var dd4a = document.getElementById("dd4a").value;
  var dd4b = document.getElementById("dd4b").value;
  var dd4c = document.getElementById("dd4c").value;
  var td1d = document.getElementById("td1d").value;
  var td2d = document.getElementById("td2d").value;
  var developer4 = document.getElementById("developer4").value;
  var osminimal4 = document.getElementById("osminimal4").value;
  var ukuran4 = document.getElementById("ukuran4").value;
  var rating4 = document.getElementById("rating4").value;
  var download4 = document.getElementById("download4").value;
  var update4 = document.getElementById("update4").value;
  var jd5 = document.getElementById("jd5").value;
  var gd5 = document.getElementById("gd5").value;
  var dd5a = document.getElementById("dd5a").value;
  var dd5b = document.getElementById("dd5b").value;
  var dd5c = document.getElementById("dd5c").value;
  var td1e = document.getElementById("td1e").value;
  var td2e = document.getElementById("td2e").value;
  var developer5 = document.getElementById("developer5").value;
  var osminimal5 = document.getElementById("osminimal5").value;
  var ukuran5 = document.getElementById("ukuran5").value;
  var rating5 = document.getElementById("rating5").value;
  var download5 = document.getElementById("download5").value;
  var update5 = document.getElementById("update5").value;
  document.getElementById("Result").innerHTML = "&lt;img src=&quot;"+gambar+"&quot;/&gt;"+
  "<br><br>"+deskripsi+
  "<br><br>"+"&lt;div class=&quot;toc&quot;&gt;&lt;input type=&quot;checkbox&quot; role=&quot;button&quot; id=&quot;toctoggle&quot; class=&quot;toctoggle&quot;&gt;&lt;div class=&quot;toctitle&quot;&gt;&lt;h2&gt;Daftar isi&lt;/h2&gt; &lt;span class=&quot;toctogglespan&quot;&gt;&lt;label class=&quot;toctogglelabel&quot; for=&quot;toctoggle&quot;&gt;&lt;/label&gt;&lt;/span&gt;&lt;/div&gt;"+
  "<br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;1. &lt;a href=&quot;#toc1&quot; title=&quot;"+jd1+"&quot;&gt;"+jd1+"&lt;/a&gt;&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;2. &lt;a href=&quot;#toc2&quot; title=&quot;"+jd2+"&quot;&gt;"+jd2+"&lt;/a&gt;&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;3. &lt;a href=&quot;#toc3&quot; title=&quot;"+jd3+"&quot;&gt;"+jd3+"&lt;/a&gt;&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;4. &lt;a href=&quot;#toc4&quot; title=&quot;"+jd4+"&quot;&gt;"+jd4+"&lt;/a&gt;&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;5. &lt;a href=&quot;#toc5&quot; title=&quot;"+jd5+"&quot;&gt;"+jd5+"&lt;/a&gt;&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br>"+"&lt;/div&gt;"+
  "<br><br>"+"&lt;h2&gt;"+h2+"&lt;/h2&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc1&quot;&gt;"+jd1+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd1+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd1a+
  "<br><br>"+dd1b+
  "<br><br>"+dd1c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1a+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2a+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update1+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc2&quot;&gt;"+jd2+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd2+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd2a+
  "<br><br>"+dd2b+
  "<br><br>"+dd2c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1b+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2b+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update2+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc2&quot;&gt;"+jd3+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd3+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd3a+
  "<br><br>"+dd3b+
  "<br><br>"+dd3c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1c+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2c+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update3+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc2&quot;&gt;"+jd4+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd4+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd4a+
  "<br><br>"+dd4b+
  "<br><br>"+dd4c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1d+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2d+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update4+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc1&quot;&gt;"+jd5+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd5+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd5a+
  "<br><br>"+dd5b+
  "<br><br>"+dd5c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1e+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2e+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update5+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"
}

function showhide2() {
  var x = document.getElementById("Result");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function clearALL() {
    document.getElementById('gambar').value = '';
    document.getElementById('deskripsi').value = '';
    document.getElementById('h2').value = '';
    document.getElementById('jd1').value = '';
    document.getElementById('gd1').value = '';
    document.getElementById('dd1a').value = '';
    document.getElementById('dd1b').value = '';
    document.getElementById('dd1c').value = '';
    document.getElementById('td1a').value = '';
    document.getElementById('td2a').value = '';
    document.getElementById('developer1').value = '';
    document.getElementById('osminimal1').value = '';
    document.getElementById('ukuran1').value = '';
    document.getElementById('rating1').value = '';
    document.getElementById('download1').value = '';
    document.getElementById('update1').value = '';
    document.getElementById('jd2').value = '';
    document.getElementById('gd2').value = '';
    document.getElementById('dd2a').value = '';
    document.getElementById('dd2b').value = '';
    document.getElementById('dd2c').value = '';
    document.getElementById('td1b').value = '';
    document.getElementById('td2b').value = '';
    document.getElementById('developer2').value = '';
    document.getElementById('osminimal2').value = '';
    document.getElementById('ukuran2').value = '';
    document.getElementById('rating2').value = '';
    document.getElementById('download2').value = '';
    document.getElementById('update2').value = '';
    document.getElementById('jd3').value = '';
    document.getElementById('gd3').value = '';
    document.getElementById('dd3a').value = '';
    document.getElementById('dd3b').value = '';
    document.getElementById('dd3c').value = '';
    document.getElementById('td1c').value = '';
    document.getElementById('td2c').value = '';
    document.getElementById('developer3').value = '';
    document.getElementById('osminimal3').value = '';
    document.getElementById('ukuran3').value = '';
    document.getElementById('rating3').value = '';
    document.getElementById('download3').value = '';
    document.getElementById('update3').value = '';
    document.getElementById('jd4').value = '';
    document.getElementById('gd4').value = '';
    document.getElementById('dd4a').value = '';
    document.getElementById('dd4b').value = '';
    document.getElementById('dd4c').value = '';
    document.getElementById('td1d').value = '';
    document.getElementById('td2d').value = '';
    document.getElementById('developer4').value = '';
    document.getElementById('osminimal4').value = '';
    document.getElementById('ukuran4').value = '';
    document.getElementById('rating4').value = '';
    document.getElementById('download4').value = '';
    document.getElementById('update4').value = '';
    document.getElementById('jd5').value = '';
    document.getElementById('gd5').value = '';
    document.getElementById('dd5a').value = '';
    document.getElementById('dd5b').value = '';
    document.getElementById('dd5c').value = '';
    document.getElementById('td1e').value = '';
    document.getElementById('td2e').value = '';
    document.getElementById('developer5').value = '';
    document.getElementById('osminimal5').value = '';
    document.getElementById('ukuran5').value = '';
    document.getElementById('rating5').value = '';
    document.getElementById('download5').value = '';
    document.getElementById('update5').value = '';
}
function copyFormat(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges(); 
  window.getSelection().addRange(range); 
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("format copied");
}
