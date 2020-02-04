export function GetCookie(name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}