/**
 * 
 */

function loginCheck() {
	if (document.frm.userid.value.length == 0) {
		alert("아이디를 입력해주세요.");
		frm.userid.focus();    /* frm 은 form의 name*/
		return false;
	}
	if (document.frm.pwd.value == "") {
		alert("암호는 반드시 입력해야 합니다.");
		frm.pwd.focus();
		return false;
	}
	return true;
}

function idCheck() {
	if (document.frm.userid.value == ""){
		alert('아이디를 입력하여 주십시오.');
		document.formm.userid.focus();
		return;
	}
	var url = "idCheck.do?userid=" + document.frm.userid.value;
	window.open(url, "_blank_1", 
			"toolbar=no, menubar=no, scrollbars=yes, reizable=no, width=450 height=200");
}

function idok(userid){
	opener.frm.userid.value = document.frm.userid.value;
	opener.frm.reid.value = document.frm.userid.value;
	self.close();
}

function joinCheck(){
	// 이름을 쓰지 않은 경우
	if(document.frm.name.value.length == 0){
		alert('이름을 입력해주세요.');
		frm.name.focus();
		return false;
	}
	// 아이디를 입력하지 않은 경우
	if (document.frm.userid.value.length == 0) {
		alert("아이디를 입력해주세요.");
		frm.userid.focus();   
		return false;
	}
	// 아이디가 4글자 미만인 경우
	if (document.frm.userid.value.length < 4) {
		alert("아이디는 4글자 이상이어야 합니다.");
		frm.userid.focus();   
		return false;
	}
	// 비밀번호 입력하지 않은 경우
	if (document.frm.pwd.value == ""){
		alert("암호를 입력해주세요.")
		frm.pwd.focus();
		return false;
	}
	if (document.frm.pwd.value != document.frm.pwd_check.value){
		alert("암호가 일치하지 않습니다.");
		frm.pwd_check.focus();
		return false;
	}
	if (document.frm.reid.value.length == 0){
		alert("중복 체크를 하지 않았습니다.");
		frm.userid.focus();
		return false;
	}
	return true;
}