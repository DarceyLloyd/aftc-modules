export function isEmail(email: string): boolean {
    if (!email) {
        return false;
    }

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
        return false;
    }

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(trimmedEmail);
}
