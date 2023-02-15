export async function loadHTML(url: string): Promise<string> {
    const response = await fetch(url);
    const html = await response.text();
    return html;
  }
  