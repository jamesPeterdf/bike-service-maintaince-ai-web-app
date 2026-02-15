import https from 'https';
import fs from 'fs';

const url = 'https://www.99rpm.com/bajaj/catalogsearch/result/?q=pulsar';

const options = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.99rpm.com/'
    }
};

function fetchUrl(targetUrl) {
    https.get(targetUrl, options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            console.log(`Redirecting to ${res.headers.location}`);
            fetchUrl(res.headers.location);
            return;
        }

        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            fs.writeFileSync('99rpm_search.html', data);
            console.log('HTML saved to 99rpm_search.html');
            console.log('Status Code:', res.statusCode);
        });

    }).on('error', (err) => {
        console.error('Error: ' + err.message);
    });
}

fetchUrl(url);
