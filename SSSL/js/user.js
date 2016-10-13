document.write('\

\<!-- The Signup Modal -->\
\<div id="mySignupModal" class="modal">\
\  <!-- Modal content -->\
\  <div class="modal-content">\
\    <div class="modal-header">\
\      <span id="spanS" class="close">×</span>\
\      <h2>Sign Up</h2>\
\    </div>\
\    <div class="modal-body">\
\      <form class="form-horizontal form-responsive" role="form" autocomplete="off" name="details" method="post" action="" target="_self">\
\	<div class="form-group">\
\      <label class="control-label col-sm-4" name="userName">User Name:</label>\
\      <div class="col-sm-8" >\
\        <input type="text" required autofocus class="form-control" id="userName" placeholder="Enter Username">\
\      </div>\
\    </div>\
\	<div class="form-group">\
\      <label class="control-label col-sm-4" name="userEmail">Email:</label>\
\      <div class="col-sm-8" >\
\        <input type="email" required class="form-control" id="userEmail" placeholder="Enter Email">\
\      </div>\
\    </div>\
\	<div class="form-group">\
\      <label class="control-label col-sm-4" name="userPwd">Password:</label>\
\      <div class="col-sm-8" >\
\        <input type="password" required class="form-control" id="userPwd" placeholder="Enter Password">\
\      </div>\
\    </div>\
\	<div class="form-group">\
\      <div class="col-sm-offset-6 col-sm-6">\
\		  <button type="button" name="signup button" class="btn btn-success btn-md" id="usersignup">Sign Up</button>\
\      </div>\
\    </div>\
\</form>\
\    </div>\
\  </div>\
\</div>\

\<div id="myLoginModal" class="modal">\
\  <!-- Modal content -->\
\  <div class="modal-content">\
\    <div class="modal-header">\
\      <span id="spanL" class="close">×</span>\
\      <h2>Login</h2>\
\    </div>\
\    <div class="modal-body">\
\      <form class="form-horizontal form-responsive" role="form" autocomplete="off" name="details" method="post" action="" target="_self">\
\	<div class="form-group">\
\      <label class="control-label col-sm-4" name="userEmail">Email:</label>\
\      <div class="col-sm-8" >\
\        <input type="email" required class="form-control" id="userEmail" placeholder="Enter Email">\
\      </div>\
\    </div>\
\	<div class="form-group">\
\      <label class="control-label col-sm-4" name="userPwd">Password:</label>\
\      <div class="col-sm-8" >\
\        <input type="password" required class="form-control" id="userPwd" placeholder="Enter Password">\
\      </div>\
\    </div>\
\	<div class="form-group">\
\      <div class="col-sm-offset-6 col-sm-6">\
\		  <button type="button" name="login button" class="btn btn-success btn-md" id="userlogin">Login</button>\
\      </div>\
\    </div>\
\</form>\
\    </div>\
\  </div>\
\</div>\
');