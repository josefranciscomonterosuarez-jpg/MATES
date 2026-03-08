// script.js

const texFilePath = 'algebra.tex';
const pdfFilePath = 'algebra.pdf';

// Compila el archivo TeX en un archivo PDF
execSync(`pdflatex ${texFilePath}`);

// Muestra el archivo PDF en GitHub Pages
execSync(`git add ${pdfFilePath}`);
execSync(`git commit -m "Update algebra.pdf"`);
execSync(`git push origin main`);