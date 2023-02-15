export async function promiseLoadCss(href: string): Promise<boolean> {
    try {
        const response = await fetch(href, { method: 'GET' });
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
    } catch (error) {
        console.error(error);
        return false;
    }
}
