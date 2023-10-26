import { createDbConnection, query } from "./db.js";
import PDFDocument from 'pdfkit';
import fs from 'fs';

function buildPDF(){
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream('output.pdf'));
  
  // Embed a font, set the font size, and render some text
  doc
    .fontSize(25)
    .text('Some text with an embedded font!', 100, 100);
  
  // Add an image, constrain it to a given size, and center it vertically and horizontally
  
  // Add another page
  doc
    .addPage()
    .fontSize(25)
    .text('Here is some vector graphics...', 100, 100);
  
  // Draw a triangle
  doc
    .save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF3300');
  
  // Apply some transforms and render an SVG path with the 'even-odd' fill rule
  doc
    .scale(0.6)
    .translate(470, -380)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();
  
  // Add some text with annotations
  doc
    .addPage()
    .fillColor('blue')
    .text('Here is a link!', 100, 100)
    .underline(100, 100, 160, 27, { color: '#0000FF' })
    .link(100, 100, 160, 27, 'http://google.com/');
  
  // Finalize PDF file
  doc.end();
    return doc;
}

async function get(id = 0) {
  let connection = await createDbConnection();
  if (id > 0) {
    
    const data = await query(
      `SELECT * FROM document_requests WHERE id = ${id}`,
      [],
      connection
    );
    return data;
  }
  const data = await query(`SELECT * FROM document_requests`, [], connection);

  return data;
}
async function getbyStudent(id) {
  let connection = await createDbConnection();
  const data = await query(`SELECT * FROM document_requests WHERE student_id=${id}`, [], connection);

  return data;
}
async function create(document) {
  let connection = await createDbConnection();
  const result = await query(
    `INSERT INTO document_requests 
    (student_id, reason, note, status_id) 
    VALUES 
    ("${document.student_id}", "${document.reason.name}", "${document.note}", "${document.status_id}")`,
    [],
    connection
  );

  let message = "Error in creating a new document request";

  if (result.affectedRows) {
    message = "Request created successfully";
  }

  return { message };
}
async function update(id,status_id,rejection_reason){
  let connection = await createDbConnection();
  const result = await query(
    `UPDATE document_requests
    SET status_id="${status_id}",rejection_reason="${rejection_reason}"
    WHERE id = ${id}`,
    [],
    connection
  );
  let message = "Error in creating a new document request";

  if (result.affectedRows) {
    message = "Request created successfully";
  }

  return { message };
}

export { get, create ,update,getbyStudent ,buildPDF};
