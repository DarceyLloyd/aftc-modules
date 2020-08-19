export function setCookie(cname, cvalue, exdays) {
	// var expires = new Date();
	// expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	// document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// export function setCookie(name, value) {
// 	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
// 	//.cookie(name, value, {expires:365,path:'/cookies'});
// 	var expires = new Date();
// 	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
// 	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
// }