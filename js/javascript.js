var wdi_17_names = ["Addison", "Ben", "Christine", "Chloe", "Cris", "Dane", "David H", "David Z", "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z", "Jonathan", "Pericles", "Peter", "Philippe", "Sergio", "Simon", "Tali", "Tavo", "Trevor"];

var copiedNames = [];

function exchange(arry, a, b){
  var temp=arry[a];
  arry[a]=arry[b];
  arry[b]=temp;
}

function namePicker(){
  if(copiedNames.length === 0){
    copiedNames = wdi_17_names.slice();
  }
  var lastNum=copiedNames.length-1;
  var rand=Math.floor(Math.random()*lastNum+1);

  exchange(copiedNames, rand, lastNum);

  console.log(copiedNames.pop());
}
