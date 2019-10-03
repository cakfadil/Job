firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("userdiv").style.display = "block";
    document.getElementById("logindiv").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_generator").innerHTML = "Welcome : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("userdiv").style.display = "none";
    document.getElementById("logindiv").style.display = "block";

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

function Generate1() {
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
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot;/&gt;&lt;/center&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc1&quot;&gt;1. "+jd1+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc2&quot;&gt;2. "+jd2+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc3&quot;&gt;3. "+jd3+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc4&quot;&gt;4. "+jd4+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc5&quot;&gt;5. "+jd5+"&lt;/b&gt;"+
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

function Generate2() {
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
  var jd6 = document.getElementById("jd6").value;
  var gd6 = document.getElementById("gd6").value;
  var dd6a = document.getElementById("dd6a").value;
  var dd6b = document.getElementById("dd6b").value;
  var dd6c = document.getElementById("dd6c").value;
  var td1f = document.getElementById("td1f").value;
  var td2f = document.getElementById("td2f").value;
  var developer6 = document.getElementById("developer6").value;
  var osminimal6 = document.getElementById("osminimal6").value;
  var ukuran6 = document.getElementById("ukuran6").value;
  var rating6 = document.getElementById("rating6").value;
  var download6 = document.getElementById("download6").value;
  var update6 = document.getElementById("update6").value;
  var jd7 = document.getElementById("jd7").value;
  var gd7 = document.getElementById("gd7").value;
  var dd7a = document.getElementById("dd7a").value;
  var dd7b = document.getElementById("dd7b").value;
  var dd7c = document.getElementById("dd7c").value;
  var td1g = document.getElementById("td1g").value;
  var td2g = document.getElementById("td2g").value;
  var developer7 = document.getElementById("developer7").value;
  var osminimal7 = document.getElementById("osminimal7").value;
  var ukuran7 = document.getElementById("ukuran7").value;
  var rating7 = document.getElementById("rating7").value;
  var download7 = document.getElementById("download7").value;
  var update7 = document.getElementById("update7").value;
  var jd8 = document.getElementById("jd8").value;
  var gd8 = document.getElementById("gd8").value;
  var dd8a = document.getElementById("dd8a").value;
  var dd8b = document.getElementById("dd8b").value;
  var dd8c = document.getElementById("dd8c").value;
  var td1h = document.getElementById("td1h").value;
  var td2h = document.getElementById("td2h").value;
  var developer8 = document.getElementById("developer8").value;
  var osminimal8 = document.getElementById("osminimal8").value;
  var ukuran8 = document.getElementById("ukuran8").value;
  var rating8 = document.getElementById("rating8").value;
  var download8 = document.getElementById("download8").value;
  var update8 = document.getElementById("update8").value;
  var jd9 = document.getElementById("jd9").value;
  var gd9 = document.getElementById("gd9").value;
  var dd9a = document.getElementById("dd9a").value;
  var dd9b = document.getElementById("dd9b").value;
  var dd9c = document.getElementById("dd9c").value;
  var td1i = document.getElementById("td1i").value;
  var td2i = document.getElementById("td2i").value;
  var developer9 = document.getElementById("developer9").value;
  var osminimal9 = document.getElementById("osminimal9").value;
  var ukuran9 = document.getElementById("ukuran9").value;
  var rating9 = document.getElementById("rating9").value;
  var download9 = document.getElementById("download9").value;
  var update9 = document.getElementById("update9").value;
  var jd10 = document.getElementById("jd10").value;
  var gd10 = document.getElementById("gd10").value;
  var dd10a = document.getElementById("dd10a").value;
  var dd10b = document.getElementById("dd10b").value;
  var dd10c = document.getElementById("dd10c").value;
  var td1j = document.getElementById("td1j").value;
  var td2j = document.getElementById("td2j").value;
  var developer10 = document.getElementById("developer10").value;
  var osminimal10 = document.getElementById("osminimal10").value;
  var ukuran10 = document.getElementById("ukuran10").value;
  var rating10 = document.getElementById("rating10").value;
  var download10 = document.getElementById("download10").value;
  var update10 = document.getElementById("update10").value;
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+deskripsi+
  "<br><br>"+"&lt;div class=&quot;toc&quot;&gt;&lt;input type=&quot;checkbox&quot; role=&quot;button&quot; id=&quot;toctoggle&quot; class=&quot;toctoggle&quot;&gt;&lt;div class=&quot;toctitle&quot;&gt;&lt;h2&gt;Daftar isi&lt;/h2&gt; &lt;span class=&quot;toctogglespan&quot;&gt;&lt;label class=&quot;toctogglelabel&quot; for=&quot;toctoggle&quot;&gt;&lt;/label&gt;&lt;/span&gt;&lt;/div&gt;"+"<br>"+"&lt;ul&gt;"+"<br>"+"&lt;li&gt;1. &lt;a href=&quot;#toc1&quot; title=&quot;"+jd1+"&quot;&gt;"+jd1+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;2. &lt;a href=&quot;#toc2&quot; title=&quot;"+jd2+"&quot;&gt;"+jd2+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;3. &lt;a href=&quot;#toc3&quot; title=&quot;"+jd3+"&quot;&gt;"+jd3+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;4. &lt;a href=&quot;#toc4&quot; title=&quot;"+jd4+"&quot;&gt;"+jd4+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;5. &lt;a href=&quot;#toc5&quot; title=&quot;"+jd5+"&quot;&gt;"+jd5+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;6. &lt;a href=&quot;#toc6&quot; title=&quot;"+jd6+"&quot;&gt;"+jd6+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;7. &lt;a href=&quot;#toc7&quot; title=&quot;"+jd7+"&quot;&gt;"+jd7+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;8. &lt;a href=&quot;#toc8&quot; title=&quot;"+jd8+"&quot;&gt;"+jd8+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;9. &lt;a href=&quot;#toc9&quot; title=&quot;"+jd9+"&quot;&gt;"+jd9+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;10. &lt;a href=&quot;#toc10&quot; title=&quot;"+jd10+"&quot;&gt;"+jd10+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;/ul&gt;"+"<br>"+"&lt;/div&gt;"+
  "<br><br>"+"&lt;h2&gt;"+h2+"&lt;/h2&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc1&quot;&gt;1. "+jd1+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc2&quot;&gt;2. "+jd2+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc3&quot;&gt;3. "+jd3+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc4&quot;&gt;4. "+jd4+"&lt;/b&gt;"+
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
  "<br><br>"+"&lt;b id=&quot;toc5&quot;&gt;5. "+jd5+"&lt;/b&gt;"+
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
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc6&quot;&gt;6. "+jd6+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd6+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd6a+
  "<br><br>"+dd6b+
  "<br><br>"+dd6c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1f+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2f+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update6+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc7&quot;&gt;7. "+jd7+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd7+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd7a+
  "<br><br>"+dd7b+
  "<br><br>"+dd7c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1g+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2g+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update7+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc8&quot;&gt;8. "+jd8+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd8+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd8a+
  "<br><br>"+dd8b+
  "<br><br>"+dd8c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1h+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2h+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update8+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc9&quot;&gt;9. "+jd9+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd9+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd9a+
  "<br><br>"+dd9b+
  "<br><br>"+dd9c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1i+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2i+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update9+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc10&quot;&gt;10. "+jd10+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd10+"&quot;/&gt;&lt;/center&gt;"+
  "<br><br>"+dd10a+
  "<br><br>"+dd10b+
  "<br><br>"+dd10c+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+td1j+"&quot; width=&quot;200px&quot; /&gt;&lt;/center&gt;"+
  "<br>"+"&lt;center&gt;&lt;a href=&quot;"+td2j+"&quot; target=&quot;_blank&quot;&gt;&lt;button class=&quot;btn&quot;&gt;Download&lt;/button&gt;&lt;/a&gt;&lt;/center&gt;"+
  "<br>"+"&lt;table id=&quot;tbl&quot;&gt;&lt;tbody&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;th colspan=&quot;2&quot;&gt;Detail&lt;/th&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Developer&lt;/td&gt;&lt;td&gt;"+developer10+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Os Minimal&lt;/td&gt;&lt;td&gt;"+osminimal10+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Ukuran&lt;/td&gt;&lt;td&gt;"+ukuran10+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Rating&lt;/td&gt;&lt;td&gt;"+rating10+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Download&lt;/td&gt;&lt;td&gt;"+download10+"&lt;/td&gt;"+
  "<br>"+"&lt;/tr&gt;"+
  "<br>"+"&lt;tr&gt;"+
  "<br>"+"&lt;td&gt;Update&lt;/td&gt;&lt;td&gt;"+update10+"&lt;/td&gt;"+
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
    document.getElementById('jd6').value = '';
    document.getElementById('gd6').value = '';
    document.getElementById('dd6a').value = '';
    document.getElementById('dd6b').value = '';
    document.getElementById('dd6c').value = '';
    document.getElementById('td1f').value = '';
    document.getElementById('td2f').value = '';
    document.getElementById('developer6').value = '';
    document.getElementById('osminimal6').value = '';
    document.getElementById('ukuran6').value = '';
    document.getElementById('rating6').value = '';
    document.getElementById('download6').value = '';
    document.getElementById('update6').value = '';
    document.getElementById('jd7').value = '';
    document.getElementById('gd7').value = '';
    document.getElementById('dd7a').value = '';
    document.getElementById('dd7b').value = '';
    document.getElementById('dd7c').value = '';
    document.getElementById('td1g').value = '';
    document.getElementById('td2g').value = '';
    document.getElementById('developer7').value = '';
    document.getElementById('osminimal7').value = '';
    document.getElementById('ukuran7').value = '';
    document.getElementById('rating7').value = '';
    document.getElementById('download7').value = '';
    document.getElementById('update7').value = '';
    document.getElementById('jd8').value = '';
    document.getElementById('gd8').value = '';
    document.getElementById('dd8a').value = '';
    document.getElementById('dd8b').value = '';
    document.getElementById('dd8c').value = '';
    document.getElementById('td1h').value = '';
    document.getElementById('td2h').value = '';
    document.getElementById('developer8').value = '';
    document.getElementById('osminimal8').value = '';
    document.getElementById('ukuran8').value = '';
    document.getElementById('rating8').value = '';
    document.getElementById('download8').value = '';
    document.getElementById('update8').value = '';
    document.getElementById('jd9').value = '';
    document.getElementById('gd9').value = '';
    document.getElementById('dd9a').value = '';
    document.getElementById('dd9b').value = '';
    document.getElementById('dd9c').value = '';
    document.getElementById('td1i').value = '';
    document.getElementById('td2i').value = '';
    document.getElementById('developer9').value = '';
    document.getElementById('osminimal9').value = '';
    document.getElementById('ukuran9').value = '';
    document.getElementById('rating9').value = '';
    document.getElementById('download9').value = '';
    document.getElementById('update9').value = '';
    document.getElementById('jd10').value = '';
    document.getElementById('gd10').value = '';
    document.getElementById('dd10a').value = '';
    document.getElementById('dd10b').value = '';
    document.getElementById('dd10c').value = '';
    document.getElementById('td1j').value = '';
    document.getElementById('td2j').value = '';
    document.getElementById('developer10').value = '';
    document.getElementById('osminimal10').value = '';
    document.getElementById('ukuran10').value = '';
    document.getElementById('rating10').value = '';
    document.getElementById('download10').value = '';
    document.getElementById('update10').value = '';
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
