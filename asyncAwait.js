import { readFile } from 'fs/promises';

async function readFileAsync() {
  try {
    const data = await readFile('data.txt', 'utf8');
    console.log('File contents (async/await):', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();
