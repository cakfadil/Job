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

function Generate5() {
  var gambar = document.getElementById("gambar").value;
  var deskripsi = document.getElementById("deskripsi").value;
  var h2 = document.getElementById("h2").value;
  var jd1 = document.getElementById("jd1").value;
  var gd1 = document.getElementById("gd1").value;
  var dd1a = document.getElementById("dd1a").value;
  var dd1b = document.getElementById("dd1b").value;
  var dd1c = document.getElementById("dd1c").value;
  var ll1a = document.getElementById("ll1a").value;
  var ll1b = document.getElementById("ll1b").value;
  var ll1c = document.getElementById("ll1c").value;
  var ll1d = document.getElementById("ll1d").value;
  var ll1e = document.getElementById("ll1e").value;
  var ff1a = document.getElementById("ff1a").value;
  var ff1b = document.getElementById("ff1b").value;
  var ff1c = document.getElementById("ff1c").value;
  var ff1d = document.getElementById("ff1d").value;
  var ff1e = document.getElementById("ff1e").value;
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
  var ll2a = document.getElementById("ll2a").value;
  var ll2b = document.getElementById("ll2b").value;
  var ll2c = document.getElementById("ll2c").value;
  var ll2d = document.getElementById("ll2d").value;
  var ll2e = document.getElementById("ll2e").value;
  var ff2a = document.getElementById("ff2a").value;
  var ff2b = document.getElementById("ff2b").value;
  var ff2c = document.getElementById("ff2c").value;
  var ff2d = document.getElementById("ff2d").value;
  var ff2e = document.getElementById("ff2e").value;
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
  var ll3a = document.getElementById("ll3a").value;
  var ll3b = document.getElementById("ll3b").value;
  var ll3c = document.getElementById("ll3c").value;
  var ll3d = document.getElementById("ll3d").value;
  var ll3e = document.getElementById("ll3e").value;
  var ff3a = document.getElementById("ff3a").value;
  var ff3b = document.getElementById("ff3b").value;
  var ff3c = document.getElementById("ff3c").value;
  var ff3d = document.getElementById("ff3d").value;
  var ff3e = document.getElementById("ff3e").value;
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
  var ll4a = document.getElementById("ll4a").value;
  var ll4b = document.getElementById("ll4b").value;
  var ll4c = document.getElementById("ll4c").value;
  var ll4d = document.getElementById("ll4d").value;
  var ll4e = document.getElementById("ll4e").value;
  var ff4a = document.getElementById("ff4a").value;
  var ff4b = document.getElementById("ff4b").value;
  var ff4c = document.getElementById("ff4c").value;
  var ff4d = document.getElementById("ff4d").value;
  var ff4e = document.getElementById("ff4e").value;
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
  var ll5a = document.getElementById("ll5a").value;
  var ll5b = document.getElementById("ll5b").value;
  var ll5c = document.getElementById("ll5c").value;
  var ll5d = document.getElementById("ll5d").value;
  var ll5e = document.getElementById("ll5e").value;
  var ff5a = document.getElementById("ff5a").value;
  var ff5b = document.getElementById("ff5b").value;
  var ff5c = document.getElementById("ff5c").value;
  var ff5d = document.getElementById("ff5d").value;
  var ff5e = document.getElementById("ff5e").value;
  var td1e = document.getElementById("td1e").value;
  var td2e = document.getElementById("td2e").value;
  var developer5 = document.getElementById("developer5").value;
  var osminimal5 = document.getElementById("osminimal5").value;
  var ukuran5 = document.getElementById("ukuran5").value;
  var rating5 = document.getElementById("rating5").value;
  var download5 = document.getElementById("download5").value;
  var update5 = document.getElementById("update5").value;
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot; alt=&quot;"+h2+"&quot; title=&quot;"+h2+"&quot; /&gt;&lt;/center&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd1+"&quot; alt=&quot;"+jd1+" "+h2+"&quot; title=&quot;"+jd1+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd1a+
  "<br><br>"+dd1b+
  "<br><br>"+dd1c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd2+"&quot; alt=&quot;"+jd2+" "+h2+"&quot; title=&quot;"+jd2+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd2a+
  "<br><br>"+dd2b+
  "<br><br>"+dd2c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd3+"&quot; alt=&quot;"+jd3+" "+h2+"&quot; title=&quot;"+jd3+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd3a+
  "<br><br>"+dd3b+
  "<br><br>"+dd3c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd4+"&quot; alt=&quot;"+jd4+" "+h2+"&quot; title=&quot;"+jd4+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd4a+
  "<br><br>"+dd4b+
  "<br><br>"+dd4c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd5+"&quot; alt=&quot;"+jd5+" "+h2+"&quot; title=&quot;"+jd5+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd5a+
  "<br><br>"+dd5b+
  "<br><br>"+dd5c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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

function Generate5a() {
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
  var halaman2 = document.getElementById("halaman2").value;
  var halamanfull = document.getElementById("halamanfull").value;
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot; alt=&quot;"+h2+"&quot; title=&quot;"+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+deskripsi+
  "<br><br>"+"&lt;h2&gt;"+h2+"&lt;/h2&gt;"+
  "<br><br>"+"&lt;b&gt;1. "+jd1+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd1+"&quot; alt=&quot;"+jd1+" "+h2+"&quot; title=&quot;"+jd1+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
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
  "<br><br>"+"&lt;b&gt;2. "+jd2+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd2+"&quot; alt=&quot;"+jd2+" "+h2+"&quot; title=&quot;"+jd2+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
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
  "<br>"+"&lt;div class=&quot;bhal&quot;&gt;"+
  "<br>"+"&lt;b&gt;Halaman&lt;/b&gt; &lt;button class=&quot;btnhal bred&quot;&gt;1&lt;/button&gt; &lt;a href=&quot;"+halaman2+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;2&lt;/button&gt&lt;/a&gt; &lt;a href=&quot;"+halamanfull+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;Selengkapnya&lt;/button&gt;&lt;/a&gt;&lt;/div&gt;"
}

function Generate5b() {
  var h2 = document.getElementById("h2").value;
  var jd3 = document.getElementById("jd3").value;
  var gd3 = document.getElementById("gd3").value;
  var dd3a = document.getElementById("dd3a").value;
  var dd3b = document.getElementById("dd3b").value;
  var dd3c = document.getElementById("dd3c").value;
  var ll3a = document.getElementById("ll3a").value;
  var ll3b = document.getElementById("ll3b").value;
  var ll3c = document.getElementById("ll3c").value;
  var ll3d = document.getElementById("ll3d").value;
  var ll3e = document.getElementById("ll3e").value;
  var ff3a = document.getElementById("ff3a").value;
  var ff3b = document.getElementById("ff3b").value;
  var ff3c = document.getElementById("ff3c").value;
  var ff3d = document.getElementById("ff3d").value;
  var ff3e = document.getElementById("ff3e").value;
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
  var ll4a = document.getElementById("ll4a").value;
  var ll4b = document.getElementById("ll4b").value;
  var ll4c = document.getElementById("ll4c").value;
  var ll4d = document.getElementById("ll4d").value;
  var ll4e = document.getElementById("ll4e").value;
  var ff4a = document.getElementById("ff4a").value;
  var ff4b = document.getElementById("ff4b").value;
  var ff4c = document.getElementById("ff4c").value;
  var ff4d = document.getElementById("ff4d").value;
  var ff4e = document.getElementById("ff4e").value;
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
  var ll5a = document.getElementById("ll5a").value;
  var ll5b = document.getElementById("ll5b").value;
  var ll5c = document.getElementById("ll5c").value;
  var ll5d = document.getElementById("ll5d").value;
  var ll5e = document.getElementById("ll5e").value;
  var ff5a = document.getElementById("ff5a").value;
  var ff5b = document.getElementById("ff5b").value;
  var ff5c = document.getElementById("ff5c").value;
  var ff5d = document.getElementById("ff5d").value;
  var ff5e = document.getElementById("ff5e").value;
  var td1e = document.getElementById("td1e").value;
  var td2e = document.getElementById("td2e").value;
  var developer5 = document.getElementById("developer5").value;
  var osminimal5 = document.getElementById("osminimal5").value;
  var ukuran5 = document.getElementById("ukuran5").value;
  var rating5 = document.getElementById("rating5").value;
  var download5 = document.getElementById("download5").value;
  var update5 = document.getElementById("update5").value;
  var halaman1 = document.getElementById("halaman1").value;
  var halamanfull = document.getElementById("halamanfull").value;
  document.getElementById("Result").innerHTML = "&lt;b&gt;3. "+jd3+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd3+"&quot; alt=&quot;"+jd3+" "+h2+"&quot; title=&quot;"+jd3+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd3a+
  "<br><br>"+dd3b+
  "<br><br>"+dd3c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;4. "+jd4+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd4+"&quot; alt=&quot;"+jd4+" "+h2+"&quot; title=&quot;"+jd4+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd4a+
  "<br><br>"+dd4b+
  "<br><br>"+dd4c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;5. "+jd5+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd5+"&quot; alt=&quot;"+jd5+" "+h2+"&quot; title=&quot;"+jd5+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd5a+
  "<br><br>"+dd5b+
  "<br><br>"+dd5c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br>"+"&lt;div class=&quot;bhal&quot;&gt;"+
  "<br>"+"&lt;b&gt;Halaman&lt;/b&gt; &lt;a href=&quot;"+halaman1+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;1&lt;/button&gt;&lt;/a&gt; &lt;button class=&quot;btnhal bred&quot;&gt;2&lt;/button&gt; &lt;a href=&quot;"+halamanfull+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;Selengkapnya&lt;/button&gt;&lt;/a&gt;&lt;/div&gt;"
}

function Generate10() {
  var gambar = document.getElementById("gambar").value;
  var deskripsi = document.getElementById("deskripsi").value;
  var h2 = document.getElementById("h2").value;
  var jd1 = document.getElementById("jd1").value;
  var gd1 = document.getElementById("gd1").value;
  var dd1a = document.getElementById("dd1a").value;
  var dd1b = document.getElementById("dd1b").value;
  var dd1c = document.getElementById("dd1c").value;
  var ll1a = document.getElementById("ll1a").value;
  var ll1b = document.getElementById("ll1b").value;
  var ll1c = document.getElementById("ll1c").value;
  var ll1d = document.getElementById("ll1d").value;
  var ll1e = document.getElementById("ll1e").value;
  var ff1a = document.getElementById("ff1a").value;
  var ff1b = document.getElementById("ff1b").value;
  var ff1c = document.getElementById("ff1c").value;
  var ff1d = document.getElementById("ff1d").value;
  var ff1e = document.getElementById("ff1e").value;
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
  var ll2a = document.getElementById("ll2a").value;
  var ll2b = document.getElementById("ll2b").value;
  var ll2c = document.getElementById("ll2c").value;
  var ll2d = document.getElementById("ll2d").value;
  var ll2e = document.getElementById("ll2e").value;
  var ff2a = document.getElementById("ff2a").value;
  var ff2b = document.getElementById("ff2b").value;
  var ff2c = document.getElementById("ff2c").value;
  var ff2d = document.getElementById("ff2d").value;
  var ff2e = document.getElementById("ff2e").value;
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
  var ll3a = document.getElementById("ll3a").value;
  var ll3b = document.getElementById("ll3b").value;
  var ll3c = document.getElementById("ll3c").value;
  var ll3d = document.getElementById("ll3d").value;
  var ll3e = document.getElementById("ll3e").value;
  var ff3a = document.getElementById("ff3a").value;
  var ff3b = document.getElementById("ff3b").value;
  var ff3c = document.getElementById("ff3c").value;
  var ff3d = document.getElementById("ff3d").value;
  var ff3e = document.getElementById("ff3e").value;
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
  var ll4a = document.getElementById("ll4a").value;
  var ll4b = document.getElementById("ll4b").value;
  var ll4c = document.getElementById("ll4c").value;
  var ll4d = document.getElementById("ll4d").value;
  var ll4e = document.getElementById("ll4e").value;
  var ff4a = document.getElementById("ff4a").value;
  var ff4b = document.getElementById("ff4b").value;
  var ff4c = document.getElementById("ff4c").value;
  var ff4d = document.getElementById("ff4d").value;
  var ff4e = document.getElementById("ff4e").value;
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
  var ll5a = document.getElementById("ll5a").value;
  var ll5b = document.getElementById("ll5b").value;
  var ll5c = document.getElementById("ll5c").value;
  var ll5d = document.getElementById("ll5d").value;
  var ll5e = document.getElementById("ll5e").value;
  var ff5a = document.getElementById("ff5a").value;
  var ff5b = document.getElementById("ff5b").value;
  var ff5c = document.getElementById("ff5c").value;
  var ff5d = document.getElementById("ff5d").value;
  var ff5e = document.getElementById("ff5e").value;
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
  var ll6a = document.getElementById("ll6a").value;
  var ll6b = document.getElementById("ll6b").value;
  var ll6c = document.getElementById("ll6c").value;
  var ll6d = document.getElementById("ll6d").value;
  var ll6e = document.getElementById("ll6e").value;
  var ff6a = document.getElementById("ff6a").value;
  var ff6b = document.getElementById("ff6b").value;
  var ff6c = document.getElementById("ff6c").value;
  var ff6d = document.getElementById("ff6d").value;
  var ff6e = document.getElementById("ff6e").value;
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
  var ll7a = document.getElementById("ll7a").value;
  var ll7b = document.getElementById("ll7b").value;
  var ll7c = document.getElementById("ll7c").value;
  var ll7d = document.getElementById("ll7d").value;
  var ll7e = document.getElementById("ll7e").value;
  var ff7a = document.getElementById("ff7a").value;
  var ff7b = document.getElementById("ff7b").value;
  var ff7c = document.getElementById("ff7c").value;
  var ff7d = document.getElementById("ff7d").value;
  var ff7e = document.getElementById("ff7e").value;
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
  var ll8a = document.getElementById("ll8a").value;
  var ll8b = document.getElementById("ll8b").value;
  var ll8c = document.getElementById("ll8c").value;
  var ll8d = document.getElementById("ll8d").value;
  var ll8e = document.getElementById("ll8e").value;
  var ff8a = document.getElementById("ff8a").value;
  var ff8b = document.getElementById("ff8b").value;
  var ff8c = document.getElementById("ff8c").value;
  var ff8d = document.getElementById("ff8d").value;
  var ff8e = document.getElementById("ff8e").value;
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
  var ll9a = document.getElementById("ll9a").value;
  var ll9b = document.getElementById("ll9b").value;
  var ll9c = document.getElementById("ll9c").value;
  var ll9d = document.getElementById("ll9d").value;
  var ll9e = document.getElementById("ll9e").value;
  var ff9a = document.getElementById("ff9a").value;
  var ff9b = document.getElementById("ff9b").value;
  var ff9c = document.getElementById("ff9c").value;
  var ff9d = document.getElementById("ff9d").value;
  var ff9e = document.getElementById("ff9e").value;
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
  var ll10a = document.getElementById("ll10a").value;
  var ll10b = document.getElementById("ll10b").value;
  var ll10c = document.getElementById("ll10c").value;
  var ll10d = document.getElementById("ll10d").value;
  var ll10e = document.getElementById("ll10e").value;
  var ff10a = document.getElementById("ff10a").value;
  var ff10b = document.getElementById("ff10b").value;
  var ff10c = document.getElementById("ff10c").value;
  var ff10d = document.getElementById("ff10d").value;
  var ff10e = document.getElementById("ff10e").value;
  var td1j = document.getElementById("td1j").value;
  var td2j = document.getElementById("td2j").value;
  var developer10 = document.getElementById("developer10").value;
  var osminimal10 = document.getElementById("osminimal10").value;
  var ukuran10 = document.getElementById("ukuran10").value;
  var rating10 = document.getElementById("rating10").value;
  var download10 = document.getElementById("download10").value;
  var update10 = document.getElementById("update10").value;
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot; alt=&quot;"+h2+"&quot; title=&quot;"+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+deskripsi+
  "<br><br>"+"&lt;div class=&quot;toc&quot;&gt;&lt;input type=&quot;checkbox&quot; role=&quot;button&quot; id=&quot;toctoggle&quot; class=&quot;toctoggle&quot;&gt;&lt;div class=&quot;toctitle&quot;&gt;&lt;h2&gt;Daftar isi&lt;/h2&gt; &lt;span class=&quot;toctogglespan&quot;&gt;&lt;label class=&quot;toctogglelabel&quot; for=&quot;toctoggle&quot;&gt;&lt;/label&gt;&lt;/span&gt;&lt;/div&gt;"+"<br>"+"&lt;ul&gt;"+"<br>"+"&lt;li&gt;1. &lt;a href=&quot;#toc1&quot; title=&quot;"+jd1+"&quot;&gt;"+jd1+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;2. &lt;a href=&quot;#toc2&quot; title=&quot;"+jd2+"&quot;&gt;"+jd2+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;3. &lt;a href=&quot;#toc3&quot; title=&quot;"+jd3+"&quot;&gt;"+jd3+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;4. &lt;a href=&quot;#toc4&quot; title=&quot;"+jd4+"&quot;&gt;"+jd4+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;5. &lt;a href=&quot;#toc5&quot; title=&quot;"+jd5+"&quot;&gt;"+jd5+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;6. &lt;a href=&quot;#toc6&quot; title=&quot;"+jd6+"&quot;&gt;"+jd6+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;7. &lt;a href=&quot;#toc7&quot; title=&quot;"+jd7+"&quot;&gt;"+jd7+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;8. &lt;a href=&quot;#toc8&quot; title=&quot;"+jd8+"&quot;&gt;"+jd8+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;9. &lt;a href=&quot;#toc9&quot; title=&quot;"+jd9+"&quot;&gt;"+jd9+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;li&gt;10. &lt;a href=&quot;#toc10&quot; title=&quot;"+jd10+"&quot;&gt;"+jd10+"&lt;/a&gt;&lt;/li&gt;"+"<br>"+"&lt;/ul&gt;"+"<br>"+"&lt;/div&gt;"+
  "<br><br>"+"&lt;h2&gt;"+h2+"&lt;/h2&gt;"+
  "<br><br>"+"&lt;b id=&quot;toc1&quot;&gt;1. "+jd1+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd1+"&quot; alt=&quot;"+jd1+" "+h2+"&quot; title=&quot;"+jd1+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd1a+
  "<br><br>"+dd1b+
  "<br><br>"+dd1c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd2+"&quot; alt=&quot;"+jd2+" "+h2+"&quot; title=&quot;"+jd2+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd2a+
  "<br><br>"+dd2b+
  "<br><br>"+dd2c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd3+"&quot; alt=&quot;"+jd3+" "+h2+"&quot; title=&quot;"+jd3+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd3a+
  "<br><br>"+dd3b+
  "<br><br>"+dd3c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd4+"&quot; alt=&quot;"+jd4+" "+h2+"&quot; title=&quot;"+jd4+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd4a+
  "<br><br>"+dd4b+
  "<br><br>"+dd4c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd5+"&quot; alt=&quot;"+jd5+" "+h2+"&quot; title=&quot;"+jd5+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd5a+
  "<br><br>"+dd5b+
  "<br><br>"+dd5c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd6+"&quot; alt=&quot;"+jd6+" "+h2+"&quot; title=&quot;"+jd6+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd6a+
  "<br><br>"+dd6b+
  "<br><br>"+dd6c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll6a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff6a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd7+"&quot; alt=&quot;"+jd7+" "+h2+"&quot; title=&quot;"+jd7+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd7a+
  "<br><br>"+dd7b+
  "<br><br>"+dd7c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll7a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff7a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd8+"&quot; alt=&quot;"+jd8+" "+h2+"&quot; title=&quot;"+jd8+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd8a+
  "<br><br>"+dd8b+
  "<br><br>"+dd8c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll8a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff8a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd9+"&quot; alt=&quot;"+jd9+" "+h2+"&quot; title=&quot;"+jd9+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd9a+
  "<br><br>"+dd9b+
  "<br><br>"+dd9c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll9a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff9a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd10+"&quot; alt=&quot;"+jd10+" "+h2+"&quot; title=&quot;"+jd10+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd10a+
  "<br><br>"+dd10b+
  "<br><br>"+dd10c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll10a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff10a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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

function Generate10a() {
  var gambar = document.getElementById("gambar").value;
  var deskripsi = document.getElementById("deskripsi").value;
  var h2 = document.getElementById("h2").value;
  var jd1 = document.getElementById("jd1").value;
  var gd1 = document.getElementById("gd1").value;
  var dd1a = document.getElementById("dd1a").value;
  var dd1b = document.getElementById("dd1b").value;
  var dd1c = document.getElementById("dd1c").value;
  var ll1a = document.getElementById("ll1a").value;
  var ll1b = document.getElementById("ll1b").value;
  var ll1c = document.getElementById("ll1c").value;
  var ll1d = document.getElementById("ll1d").value;
  var ll1e = document.getElementById("ll1e").value;
  var ff1a = document.getElementById("ff1a").value;
  var ff1b = document.getElementById("ff1b").value;
  var ff1c = document.getElementById("ff1c").value;
  var ff1d = document.getElementById("ff1d").value;
  var ff1e = document.getElementById("ff1e").value;
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
  var ll2a = document.getElementById("ll2a").value;
  var ll2b = document.getElementById("ll2b").value;
  var ll2c = document.getElementById("ll2c").value;
  var ll2d = document.getElementById("ll2d").value;
  var ll2e = document.getElementById("ll2e").value;
  var ff2a = document.getElementById("ff2a").value;
  var ff2b = document.getElementById("ff2b").value;
  var ff2c = document.getElementById("ff2c").value;
  var ff2d = document.getElementById("ff2d").value;
  var ff2e = document.getElementById("ff2e").value;
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
  var ll3a = document.getElementById("ll3a").value;
  var ll3b = document.getElementById("ll3b").value;
  var ll3c = document.getElementById("ll3c").value;
  var ll3d = document.getElementById("ll3d").value;
  var ll3e = document.getElementById("ll3e").value;
  var ff3a = document.getElementById("ff3a").value;
  var ff3b = document.getElementById("ff3b").value;
  var ff3c = document.getElementById("ff3c").value;
  var ff3d = document.getElementById("ff3d").value;
  var ff3e = document.getElementById("ff3e").value;
  var td1c = document.getElementById("td1c").value;
  var td2c = document.getElementById("td2c").value;
  var developer3 = document.getElementById("developer3").value;
  var osminimal3 = document.getElementById("osminimal3").value;
  var ukuran3 = document.getElementById("ukuran3").value;
  var rating3 = document.getElementById("rating3").value;
  var download3 = document.getElementById("download3").value;
  var update3 = document.getElementById("update3").value;
  var halaman2 = document.getElementById("halaman2").value;
  var halaman3 = document.getElementById("halaman3").value;
  var halamanfull = document.getElementById("halamanfull").value;
  document.getElementById("Result").innerHTML = "&lt;center&gt;&lt;img src=&quot;"+gambar+"&quot; alt=&quot;"+h2+"&quot; title=&quot;"+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+deskripsi+
  "<br><br>"+"&lt;h2&gt;"+h2+"&lt;/h2&gt;"+
  "<br><br>"+"&lt;b&gt;1. "+jd1+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd1+"&quot; alt=&quot;"+jd1+" "+h2+"&quot; title=&quot;"+jd1+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd1a+
  "<br><br>"+dd1b+
  "<br><br>"+dd1c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff1a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff1e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;2. "+jd2+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd2+"&quot; alt=&quot;"+jd2+" "+h2+"&quot; title=&quot;"+jd2+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd2a+
  "<br><br>"+dd2b+
  "<br><br>"+dd2c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff2a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff2e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;3. "+jd3+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd3+"&quot; alt=&quot;"+jd3+" "+h2+"&quot; title=&quot;"+jd3+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd3a+
  "<br><br>"+dd3b+
  "<br><br>"+dd3c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff3a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff3e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br>"+"&lt;div class=&quot;bhal&quot;&gt;"+
  "<br>"+"&lt;b&gt;Halaman&lt;/b&gt; &lt;button class=&quot;btnhal bred&quot;&gt;1&lt;/button&gt; &lt;a href=&quot;"+halaman2+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;2&lt;/button&gt&lt;/a&gt; &lt;a href=&quot;"+halaman3+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;3&lt;/button&gt;&lt;/a&gt; &lt;a href=&quot;"+halamanfull+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;Selengkapnya&lt;/button&gt;&lt;/a&gt;&lt;/div&gt;"
}

function Generate10b() {
  var h2 = document.getElementById("h2").value;
  var jd4 = document.getElementById("jd4").value;
  var gd4 = document.getElementById("gd4").value;
  var dd4a = document.getElementById("dd4a").value;
  var dd4b = document.getElementById("dd4b").value;
  var dd4c = document.getElementById("dd4c").value;
  var ll4a = document.getElementById("ll4a").value;
  var ll4b = document.getElementById("ll4b").value;
  var ll4c = document.getElementById("ll4c").value;
  var ll4d = document.getElementById("ll4d").value;
  var ll4e = document.getElementById("ll4e").value;
  var ff4a = document.getElementById("ff4a").value;
  var ff4b = document.getElementById("ff4b").value;
  var ff4c = document.getElementById("ff4c").value;
  var ff4d = document.getElementById("ff4d").value;
  var ff4e = document.getElementById("ff4e").value;
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
  var ll5a = document.getElementById("ll5a").value;
  var ll5b = document.getElementById("ll5b").value;
  var ll5c = document.getElementById("ll5c").value;
  var ll5d = document.getElementById("ll5d").value;
  var ll5e = document.getElementById("ll5e").value;
  var ff5a = document.getElementById("ff5a").value;
  var ff5b = document.getElementById("ff5b").value;
  var ff5c = document.getElementById("ff5c").value;
  var ff5d = document.getElementById("ff5d").value;
  var ff5e = document.getElementById("ff5e").value;
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
  var ll6a = document.getElementById("ll6a").value;
  var ll6b = document.getElementById("ll6b").value;
  var ll6c = document.getElementById("ll6c").value;
  var ll6d = document.getElementById("ll6d").value;
  var ll6e = document.getElementById("ll6e").value;
  var ff6a = document.getElementById("ff6a").value;
  var ff6b = document.getElementById("ff6b").value;
  var ff6c = document.getElementById("ff6c").value;
  var ff6d = document.getElementById("ff6d").value;
  var ff6e = document.getElementById("ff6e").value;
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
  var ll7a = document.getElementById("ll7a").value;
  var ll7b = document.getElementById("ll7b").value;
  var ll7c = document.getElementById("ll7c").value;
  var ll7d = document.getElementById("ll7d").value;
  var ll7e = document.getElementById("ll7e").value;
  var ff7a = document.getElementById("ff7a").value;
  var ff7b = document.getElementById("ff7b").value;
  var ff7c = document.getElementById("ff7c").value;
  var ff7d = document.getElementById("ff7d").value;
  var ff7e = document.getElementById("ff7e").value;
  var td1g = document.getElementById("td1g").value;
  var td2g = document.getElementById("td2g").value;
  var developer7 = document.getElementById("developer7").value;
  var osminimal7 = document.getElementById("osminimal7").value;
  var ukuran7 = document.getElementById("ukuran7").value;
  var rating7 = document.getElementById("rating7").value;
  var download7 = document.getElementById("download7").value;
  var update7 = document.getElementById("update7").value;
  var halaman1 = document.getElementById("halaman1").value;
  var halaman3 = document.getElementById("halaman3").value;
  var halamanfull = document.getElementById("halamanfull").value;
  document.getElementById("Result").innerHTML = "&lt;b&gt;4. "+jd4+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd4+"&quot; alt=&quot;"+jd4+" "+h2+"&quot; title=&quot;"+jd4+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd4a+
  "<br><br>"+dd4b+
  "<br><br>"+dd4c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff4a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff4e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;5. "+jd5+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd5+"&quot; alt=&quot;"+jd5+" "+h2+"&quot; title=&quot;"+jd5+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd5a+
  "<br><br>"+dd5b+
  "<br><br>"+dd5c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff5a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff5e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;6. "+jd6+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd6+"&quot; alt=&quot;"+jd6+" "+h2+"&quot; title=&quot;"+jd6+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd6a+
  "<br><br>"+dd6b+
  "<br><br>"+dd6c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll6a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll6e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff6a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff6e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;7. "+jd7+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd7+"&quot; alt=&quot;"+jd7+" "+h2+"&quot; title=&quot;"+jd7+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd7a+
  "<br><br>"+dd7b+
  "<br><br>"+dd7c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll7a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll7e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff7a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff7e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br>"+"&lt;div class=&quot;bhal&quot;&gt;"+
  "<br>"+"&lt;b&gt;Halaman&lt;/b&gt; &lt;a href=&quot;"+halaman1+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;1&lt;/button&gt;&lt/a&gt; &lt;button class=&quot;btnhal bred&quot;&gt;2&lt;/button&gt &lt;a href=&quot;"+halaman3+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;3&lt;/button&gt;&lt;/a&gt; &lt;a href=&quot;"+halamanfull+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;Selengkapnya&lt;/button&gt;&lt;/a&gt;&lt;/div&gt;"
}

function Generate10c() {
  var h2 = document.getElementById("h2").value;
  var jd8 = document.getElementById("jd8").value;
  var gd8 = document.getElementById("gd8").value;
  var dd8a = document.getElementById("dd8a").value;
  var dd8b = document.getElementById("dd8b").value;
  var dd8c = document.getElementById("dd8c").value;
  var ll8a = document.getElementById("ll8a").value;
  var ll8b = document.getElementById("ll8b").value;
  var ll8c = document.getElementById("ll8c").value;
  var ll8d = document.getElementById("ll8d").value;
  var ll8e = document.getElementById("ll8e").value;
  var ff8a = document.getElementById("ff8a").value;
  var ff8b = document.getElementById("ff8b").value;
  var ff8c = document.getElementById("ff8c").value;
  var ff8d = document.getElementById("ff8d").value;
  var ff8e = document.getElementById("ff8e").value;
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
  var ll9a = document.getElementById("ll9a").value;
  var ll9b = document.getElementById("ll9b").value;
  var ll9c = document.getElementById("ll9c").value;
  var ll9d = document.getElementById("ll9d").value;
  var ll9e = document.getElementById("ll9e").value;
  var ff9a = document.getElementById("ff9a").value;
  var ff9b = document.getElementById("ff9b").value;
  var ff9c = document.getElementById("ff9c").value;
  var ff9d = document.getElementById("ff9d").value;
  var ff9e = document.getElementById("ff9e").value;
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
  var ll10a = document.getElementById("ll10a").value;
  var ll10b = document.getElementById("ll10b").value;
  var ll10c = document.getElementById("ll10c").value;
  var ll10d = document.getElementById("ll10d").value;
  var ll10e = document.getElementById("ll10e").value;
  var ff10a = document.getElementById("ff10a").value;
  var ff10b = document.getElementById("ff10b").value;
  var ff10c = document.getElementById("ff10c").value;
  var ff10d = document.getElementById("ff10d").value;
  var ff10e = document.getElementById("ff10e").value;
  var td1j = document.getElementById("td1j").value;
  var td2j = document.getElementById("td2j").value;
  var developer10 = document.getElementById("developer10").value;
  var osminimal10 = document.getElementById("osminimal10").value;
  var ukuran10 = document.getElementById("ukuran10").value;
  var rating10 = document.getElementById("rating10").value;
  var download10 = document.getElementById("download10").value;
  var update10 = document.getElementById("update10").value;
  var halaman1 = document.getElementById("halaman1").value;
  var halaman2 = document.getElementById("halaman2").value;
  var halamanfull = document.getElementById("halamanfull").value;
  document.getElementById("Result").innerHTML = "&lt;b&gt;8. "+jd8+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd8+"&quot; alt=&quot;"+jd8+" "+h2+"&quot; title=&quot;"+jd8+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd8a+
  "<br><br>"+dd8b+
  "<br><br>"+dd8c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll8a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll8e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff8a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff8e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;9. "+jd9+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd9+"&quot; alt=&quot;"+jd9+" "+h2+"&quot; title=&quot;"+jd9+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd9a+
  "<br><br>"+dd9b+
  "<br><br>"+dd9c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll9a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll9e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff9a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff9e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br><br>"+"&lt;b&gt;10. "+jd10+"&lt;/b&gt;"+
  "<br><br>"+"&lt;center&gt;&lt;img src=&quot;"+gd10+"&quot; alt=&quot;"+jd10+" "+h2+"&quot; title=&quot;"+jd10+" "+h2+"&quot; /&gt;&lt;/center&gt;"+
  "<br><br>"+dd10a+
  "<br><br>"+dd10b+
  "<br><br>"+dd10c+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ll10a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ll10e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
  "<br><br>"+"&lt;ul&gt;"+
  "<br>"+"&lt;li&gt;"+ff10a+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10b+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10c+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10d+"&lt;/li&gt;"+
  "<br>"+"&lt;li&gt;"+ff10e+"&lt;/li&gt;"+
  "<br>"+"&lt;/ul&gt;"+
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
  "<br>"+"&lt;/tbody&gt;&lt;/table&gt;"+
  "<br>"+"&lt;div class=&quot;bhal&quot;&gt;"+
  "<br>"+"&lt;b&gt;Halaman&lt;/b&gt; &lt;a href=&quot;"+halaman1+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;1&lt;/button&gt;&lt/a&gt; &lta href=&quot;"+halaman2+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;2&lt;/button&gt&lt;/a&gt; &lt;button class=&quot;btnhal bred&quot;&gt;3&lt;/button&gt; &lt;a href=&quot;"+halamanfull+"&quot;&gt;&lt;button class=&quot;btnhal&quot;&gt;Selengkapnya&lt;/button&gt;&lt;/a&gt;&lt;/div&gt;"
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
