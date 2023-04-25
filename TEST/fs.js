const fs = require('fs');
const path = require('path');

const fsRead = (url) => {
  fs.readFile(url, 'utf8', (err, content) => {
    if (err) {
      throw new Error(err);
    }
    console.log('content', content);
  });
};

fsRead('./test.json');
