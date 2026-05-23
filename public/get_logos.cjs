const https = require('https');
function getHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const shaktiHtml = await getHTML('https://shaktimat.com/');
    const shaktiLogos = shaktiHtml.match(/<img[^>]+src=["']([^"']*(?:logo)[^"']*)["'][^>]*>/gi);
    console.log('Shakti Logos:', shaktiLogos);
  } catch(e) { console.log(e); }

  try {
    const fulldomeHtml = await getHTML('https://fulldome.pro/');
    const fulldomeLogos = fulldomeHtml.match(/<img[^>]+src=["']([^"']*(?:logo)[^"']*)["'][^>]*>/gi);
    console.log('Fulldome Logos:', fulldomeLogos);
  } catch(e) { console.log(e); }
}
run();
