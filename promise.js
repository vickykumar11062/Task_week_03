const fs = require('fs').promises;

fs.readFile('data.txt', 'utf8')
  .then(data => {
    console.log('File contents (promise):', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
