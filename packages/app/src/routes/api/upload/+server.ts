import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  const file = data.get('file') as Blob;

  if (!file) {
    return json({ error: 'No file uploaded' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const hash = crypto.createHash('sha256').update(buffer).digest('hex');
  const filename = `${hash}.jpg`;
  const filepath = path.join('static/uploads', filename);

  // Ensure the uploads directory exists
  fs.mkdirSync(path.dirname(filepath), { recursive: true });

  // Write the file to the file system
  fs.writeFileSync(filepath, buffer);

  return json({ url: `/uploads/${filename}` });
};
