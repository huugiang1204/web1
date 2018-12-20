// JavaScript Document
function formcheck() {
    var check = 1;
    // username
    telphone = document.getElementById("telphone").value;
    if (telphone == "") {
        document.getElementById("z-telphone").innerHTML = '<span style="color:red;">Bạn chưa nhập số điện thoại</span>';
        check = 0;
        document.getElementById("telphone").focus();
    }
    else if (telphone.length >= 9 && telphone.length <= 11)
        {
        document.getElementById("z-telphone").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    } 
    else 
    {
        document.getElementById("z-telphone").innerHTML = '<span style="color:red;">Số điện thoại của bạn không hợp lệ hợp lệ</span>';
        document.getElementById("telphone").focus();
        check = 0;
    }
    email = document.getElementById("email").value;
    var aCong = email.indexOf("@");
    var dauCham = email.lastIndexOf(".");
    if (email == "") {
        document.getElementById("z-email").innerHTML = '<span style="color:red;">Bạn chưa nhập email</span>';
        check = 0;
        document.getElementById("email").focus();
    } else if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > email.length)) {
        document.getElementById("z-email").innerHTML = '<span style="color:red;">Bạn nhập email chưa hợp lý</span>';
        check = 0;
        document.getElementById("email").focus();
    } else {
        document.getElementById("z-email").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    }
    lname = document.getElementById("lname").value;
    if (lname == "") {
        document.getElementById("z-lname").innerHTML = '<span style="color:red;">Bạn chưa nhập tên</span>';
        check = 0;
        document.getElementById("lname").focus();
    } else {
        document.getElementById("z-lname").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    }
    fname = document.getElementById("fname").value;
    if (fname == "") {
        document.getElementById("z-fname").innerHTML = '<span style="color:red;">Bạn chưa nhập họ và tên lót/đệm</span>';
        check = 0;
    } else {
        document.getElementById("z-fname").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    }
        password = document.getElementById("password").value;
    if (password == "") {
        document.getElementById("z-password").innerHTML = '<span style="color:red;">Bạn chưa nhập mật khẩu</span>';
        check = 0;
        document.getElementById("password").focus();
    } else if (password.length >= 6 && password.length <= 20) {
        document.getElementById("z-password").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    } else {
        document.getElementById("z-password").innerHTML = '<span style="color:red;">Kích thước mật khẩu bạn nhập không hợp lệ</span>';
        check = 0;
        document.getElementById("password").focus();
    }
    repassword = document.getElementById("repassword").value;
    if (repassword == "") {
        document.getElementById("z-repassword").innerHTML = '<span style="color:red;">Bạn chưa nhập mật khẩu lại</span>';
        check = 0;
        //document.getElementById("repassword").style.background="red";
        document.getElementById("repassword").focus();
    } else if (password != repassword) {
        document.getElementById("z-repassword").innerHTML = '<span style="color:red;">Mật khẩu nhập lại khác với mật khẩu trên</span>';
        check = 0;
        document.getElementById("repassword").focus();
    }else if (repassword.length < 6 || repassword.length > 20) {
        document.getElementById("z-repassword").innerHTML = '<span style="color:red;">Kích thước mật khẩu bạn nhập không hợp lệ</span>';
        check = 0;
        document.getElementById("repassword").focus();
    } else {
        document.getElementById("z-repassword").innerHTML = '<span style="color:#17EB50;">OK!</span>';
        }
    //password

    //repassword
    
        username = document.getElementById("username").value;
    if (username == "") {
        document.getElementById("z-username").innerHTML = '<span style="color:red;">Bạn chưa nhập tài khoản</span>';
        document.getElementById("username").focus();
        check = 0;
    } else {
        document.getElementById("z-username").innerHTML = '<span style="color:#17EB50;">OK!</span>';
    }
    // name
    
    //lname
    
    //email
    
    // telphone
    
    if (check == 1) {
        alert("Bạn đã đăng ký thành công");
        return true;
    } else {
        alert("Bạn đăng ký chưa thành công! Bạn cần phải sửa lại thông tin chưa chính xác.");
        return false;
    }
}


function user(username,pass,ho,ten,mail,gioiTinh,ngaySinh,sdt,diaChi,trangthai){
    this.username=username;
    this.pass=pass;
    this.ho=ho;
    this.ten=ten;
    this.mail=mail;
    this.gioiTinh=gioiTinh;
    this.ngaySinh=ngaySinh;
    this.sdt=sdt;
    this.diaChi=diaChi;
    this.trangthai = trangthai ;
}
function getListUser(){
    var ListUser=JSON.parse(localStorage.getItem("listUser"))||[];
    var l=[];
    for(var d of ListUser)
    l.push(d);
    return l;
}
function dangKy(form){
    var tenDangNhap=form.username.value;
    var pass=form.password.value;
    var gt=form.gender.value;
    var ho=form.fname.value;
    var ten=form.lname.value;
    var ngaySinh=form.dateofbirth.value;
    var sdt=form.telphone.value;
    var mail=form.email.value;
    var diaChi=form.address.value;
    var trangthai = 0;
    var userInfo=new user(tenDangNhap,pass,ho,ten,mail,gt,ngaySinh,sdt,diaChi,trangthai);
    var listUser = getListUser();
    for(var x of listUser)
    {
        if(tenDangNhap == x.username)
        {   alert("Tên đã có người dùng.Chậm tay rồi bác :v !!!");
            return 0;
        }
    }
    if(formcheck())
    {
        listUser.push(userInfo);
        localStorage.setItem("listUser",JSON.stringify(listUser));
        window.location.pathname = 'web1/index.html';
    }
}


