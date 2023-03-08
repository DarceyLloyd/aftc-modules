export class CookieManager {

    // Var defs
    expiryTimeInSeconds;
    path = "/";
    domain = ""

    httpOnly = false;
    secureCookies = false;
    sameSite = false;
    securityStr = "";
    // - - - - - - - - - - - - - - - - - - - - - - - -

    constructor() {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (3600 * 1000));
        this.buildSecurityString();
        // this.log(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setDomain(domain) {
        this.domain = domain;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setPath(path) {
        this.path = path;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setHttpOnly(enableHttpOnly) {
        this.httpOnly = enableHttpOnly;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setSecure(useSecureCookies) {
        this.secureCookies = useSecureCookies;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setSameSiteStrict(useSameSiteStrict) {
        this.sameSite = useSameSiteStrict;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    buildSecurityString() {
        if (this.httpOnly) {
            this.securityStr = "HttpOnly;"
        }
        if (this.secureCookies) {
            this.securityStr += "Secure;"
        }
        if (this.sameSite) {
            this.securityStr += "SameSite=Strict;"
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setExpiryTime(expiryTimeInSeconds) {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (expiryTimeInSeconds * 1000));
        // console.warn(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -



    setCookie(
        name,
        value,
        expiryTimeInSeconds,
        path,
        domain
    ) {

        if (name === "" || name.length === 0) {
            console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to set!");
            return;
        }

        // Local vars for override
        let localExpiryTime = this.expiryTimeInSeconds;
        if (expiryTimeInSeconds != null) {
            const now = new Date();
            localExpiryTime = new Date(now.getTime() + (expiryTimeInSeconds * 1000));;
        }

        let localPath = this.path;
        if (path != null) {
            localPath = path;
        }

        let localDomain = this.domain;
        if (domain != null) {
            localDomain = domain;
        }

        const cookie = `${name}=${value};expires=${localExpiryTime.toUTCString()};path=${localPath};domain=${localDomain};${this.securityStr}`;
        // console.warn(cookie);
        document.cookie = cookie;

    }
    // Alias
    set(
        name,
        value,
        expiryTimeInSeconds,
        path,
        domain
    ) {
        this.setCookie(name, value, expiryTimeInSeconds, path, domain);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    getCookie(name) {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to get!");
            return undefined;
        }
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : undefined;
    }
    // Alias's
    get(name) {
        return this.getCookie(name);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    deleteCookie(name) {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.deleteCookie(name): Usage error - come on, I need the name of the cookie to delete!");
            return;
        }
        const cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${this.path};domain=${this.domain};${this.securityStr}`;
        // document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        document.cookie = cookie;
    }
    // Alias's
    del(name) { this.deleteCookie(name); }
    rem(name) { this.deleteCookie(name); }
    remove(name) { this.deleteCookie(name); }
    delete(name) { this.deleteCookie(name); }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    logCookies() {
        const cookies = document.cookie.split(";");

        console.log("\nCookies:");
        for (let i = 0; i < cookies.length; i++) {
            console.log(cookies[i]);
        }
        console.log("");
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}
