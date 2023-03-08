export declare class CookieManager {
    expiryTimeInSeconds: Date;
    private path;
    private domain;
    private httpOnly;
    private secureCookies;
    private sameSite;
    private securityStr;
    constructor();
    setDomain(domain: string): void;
    setPath(path: string): void;
    setHttpOnly(enableHttpOnly: boolean): void;
    setSecure(useSecureCookies: boolean): void;
    setSameSiteStrict(useSameSiteStrict: boolean): void;
    private buildSecurityString;
    setExpiryTime(expiryTimeInSeconds: number): void;
    setCookie(name: string, value: string, expiryTimeInSeconds: number, path?: string | null, domain?: string | null): void;
    set(name: string, value: string, expiryTimeInSeconds: number, path?: string | null, domain?: string | null): void;
    getCookie(name: string): string | undefined;
    get(name: string): string | undefined;
    deleteCookie(name: string): void;
    del(name: string): void;
    rem(name: string): void;
    remove(name: string): void;
    delete(name: string): void;
    logCookies(): void;
}
