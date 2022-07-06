import fs from 'fs';
import path from 'path';

export function getData() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
}