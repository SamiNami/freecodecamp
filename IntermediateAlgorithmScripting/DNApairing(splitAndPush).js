// Match the letter with the mathcing dna pair

function pairElement(str) {

var dna = [];
var arr = str.split("");

arr.forEach(function(element){
  if(element === "G"){
    dna.push(["G","C"]);
  }
  else if(element === "C"){
    dna.push(["C","G"]);
  }
  else if(element === "A"){
    dna.push(["A","T"]);
  }
  else if(element === "T"){
    dna.push(["T","A"]);
  }
});
return dna;
}

pairElement("GCG");

// looked up another solution, could have used a switch
