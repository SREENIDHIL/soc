const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/submit' && req.method === 'POST') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const xmlData = data.substring(0, data.length - 1); // Remove the trailing '&' character

            // Load existing XML content, if available
            let existingData = '';
            if (fs.existsSync('holder_data.xml')) {
                existingData = fs.readFileSync('holder_data.xml', 'utf8');
            }

            const updatedData = existingData.replace('</holders>', xmlData + '</holders>');

            fs.writeFileSync('holder_data.xml', updatedData);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('holder information saved in XML!');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
