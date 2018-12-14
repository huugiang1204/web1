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
function setCurrentUser(user){
    localStorage.setItem("currentUser",JSON.stringify(user));
}
function getCurrentUser(){
    return JSON.parse(localStorage.getItem("currentUser"));
}
function checkAdmin(){
	if(getCurrentUser.username != "admin")
	{
		alert("Từ chối truy cập");
		window.location.href = "https://thienhuu1804.github.io/web1/index.html"; 
	}
}
window.onload = function{
	checkAdmin();
}