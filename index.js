const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, black, degrees } = PDFLib;


const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {
  const val = capitalize(userName.value);

  //check if the text is empty or not
  if (val.trim() !== "" && userName.checkValidity()) {
    // console.log(val);
    generatePDF(val);
  } else {
    userName.reportValidity();
  }
});

const generatePDF = async (name) => {
  const existingPdfBytes = await fetch("./max.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./LeckerliOne-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );

  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across tugyhe first page
  console.log(userName.value);
  console.log(userName.value.length);

if(userName.value.length == 3){
  firstPage.drawText(name, {
    x: 350,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 4){
  firstPage.drawText(name, {
    x: 350,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 5){
  firstPage.drawText(name, {
    x: 335,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 6){
  firstPage.drawText(name, {
    x: 325,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 7){
  firstPage.drawText(name, {
    x: 310,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 8){
  firstPage.drawText(name, {
    x: 285,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 9){
  firstPage.drawText(name, {
    x: 275,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 10){
  firstPage.drawText(name, {
    x: 265,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 11){
  firstPage.drawText(name, {
    x: 250,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 12){
  firstPage.drawText(name, {
    x: 243,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}

if(userName.value.length == 13){
  firstPage.drawText(name, {
    x: 230,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 14){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 58,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 15){
  firstPage.drawText(name, {
    x: 230,
    y: 310,
    size: 50,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 16){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 50,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 17){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 48,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 18){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 43,
    font: SanChezFont,
    color: black,
  });
}
if(userName.value.length == 19){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 40,
    font: SanChezFont,
    color: black,
  });
}


if(userName.value.length == 20){
  firstPage.drawText(name, {
    x: 220,
    y: 310,
    size: 38,
    font: SanChezFont,
    color: black,
});
}
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    'Your Certificate.pdf',
    {
      type: "application/pdf;charset=utf-8",
    }
  );
 saveAs(file);
};
