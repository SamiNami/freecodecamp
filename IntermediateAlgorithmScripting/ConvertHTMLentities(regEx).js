
function convertHTML(str) {

str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;");
str = str.replace(/>/g,"&gt;");
str = str.replace(/"/g,"&quot;");
str = str.replace(/'/g,"&apos;");

  return str;
}

convertHTML("Dolce & Gabbana");
