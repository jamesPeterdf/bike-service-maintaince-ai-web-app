import https from 'https';
import http from 'http';
import fs from 'fs';

// Using a slightly older snapshot from 2022/2023 to avoid strict checks if any
const url = 'http://web.archive.org/web/20220121115852/https://www.99rpm.com/bajaj/catalogsearch/result/?q=pulsar';

function fetchUrl(targetUrl) {
    const protocol = targetUrl.startsWith('https') ? https : http;

    protocol.get(targetUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            console.log(`Redirecting to ${res.headers.location}`);
            // Handle relative redirects
            let nextUrl = res.headers.location;
            if (nextUrl.startsWith('/')) {
                const u = new URL(targetUrl);
                nextUrl = `${u.protocol}//${u.host}${nextUrl}`;
            }
            fetchUrl(nextUrl);
            return;
        }

        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            fs.writeFileSync('99rpm_archive.html', data);
            console.log('HTML saved to 99rpm_archive.html');
            console.log('Status Code:', res.statusCode);
        });

    }).on('error', (err) => {
        console.error('Error: ' + err.message);
    });
}

fetchUrl(url);
