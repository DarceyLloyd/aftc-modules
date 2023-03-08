// interfaces
// - - - - - - -

// types
// - - - - - - - - - - - - - - - - - - - - - - - -

export class CookieManager {

    // Var defs
    public expiryTimeInSeconds: Date;
    private path: string = "/";
    private domain: string = ""

    private httpOnly: boolean = false;
    private secureCookies: boolean = false;
    private sameSite: boolean = false;
    private securityStr: string = "";
    // - - - - - - - - - - - - - - - - - - - - - - - -

    constructor() {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (3600 * 1000));
        this.buildSecurityString();
        // this.log(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setDomain(domain: string) {
        this.domain = domain;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setPath(path: string) {
        this.path = path;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setHttpOnly(enableHttpOnly: boolean) {
        this.httpOnly = enableHttpOnly;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setSecure(useSecureCookies: boolean) {
        this.secureCookies = useSecureCookies;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    setSameSiteStrict(useSameSiteStrict: boolean) {
        this.sameSite = useSameSiteStrict;
        this.buildSecurityString();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    private buildSecurityString() {
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

    setExpiryTime(expiryTimeInSeconds: number) {
        const now = new Date();
        this.expiryTimeInSeconds = new Date(now.getTime() + (expiryTimeInSeconds * 1000));
        console.warn(this.expiryTimeInSeconds);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -



    setCookie(
        name: string,
        value: string,
        expiryTimeInSeconds: number,
        path: string | null = null,
        domain: string | null = null
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
        name: string,
        value: string,
        expiryTimeInSeconds: number,
        path: string | null = null,
        domain: string | null = null
    ) {
        this.setCookie(name, value, expiryTimeInSeconds, path, domain);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    getCookie(name: string): string | undefined {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.getCookie(name): Usage error - come on, I need the name of the cookie to get!");
            return undefined;
        }
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : undefined;
    }
    // Alias's
    get(name: string): string | undefined {
        return this.getCookie(name);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

    deleteCookie(name: string) {
        if (name === "" || name.length === 0) {
            console.error("CookieManager.deleteCookie(name): Usage error - come on, I need the name of the cookie to delete!");
            return;
        }
        const cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${this.path};domain=${this.domain};${this.securityStr}`;
        // document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
        document.cookie = cookie;
    }
    // Alias's
    del(name: string) { this.deleteCookie(name); }
    rem(name: string) { this.deleteCookie(name); }
    remove(name: string) { this.deleteCookie(name); }
    delete(name: string) { this.deleteCookie(name); }
    // - - - - - - - - - - - - - - - - - - - - - - - -


    logCookies(): void {
        const cookies: string[] = document.cookie.split(";");

        console.log("\nCookies:");
        for (let i = 0; i < cookies.length; i++) {
            console.log(cookies[i]);
        }
        console.log("");
    }
    // - - - - - - - - - - - - - - - - - - - - - - - -

}
