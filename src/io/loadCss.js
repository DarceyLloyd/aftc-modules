var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function promiseLoadCss(href) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(href, { method: 'GET' });
            if (!response.ok) {
                throw new Error(`Failed to load CSS: ${response.status} ${response.statusText}`);
            }
            const link = document.createElement('link');
            link.href = href;
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.media = 'screen,print';
            document.getElementsByTagName('head')[0].appendChild(link);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    });
}
