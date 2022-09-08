// https://www.omnicalculator.com/finance/gst

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const GSTRadio = document.getElementById('GSTRadio');
const netpriceRadio = document.getElementById('netpriceRadio');
const taxamountRadio = document.getElementById('taxamountRadio');

let GST;
let netprice = v1;
let taxamount = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

GSTRadio.addEventListener('click', function() {
  variable1.textContent = 'Net price';
  variable2.textContent = 'Tax amount';
  netprice = v1;
  taxamount = v2;
  result.textContent = '';
});

netpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'GST';
  variable2.textContent = 'Tax amount';
  GST = v1;
  taxamount = v2;
  result.textContent = '';
});

taxamountRadio.addEventListener('click', function() {
  variable1.textContent = 'GST';
  variable2.textContent = 'Net price';
  GST = v1;
  netprice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(GSTRadio.checked)
    result.textContent = `GST = ${computeGST().toFixed(2)}`;

  else if(netpriceRadio.checked)
    result.textContent = `Net price = ${computenetprice().toFixed(2)}`;

  else if(taxamountRadio.checked)
    result.textContent = `Tax amount = ${computetaxamount().toFixed(2)}`;
})

// calculation

function computeGST() {
  return (Number(taxamount.value) / Number(netprice.value)) * 100;
}

function computenetprice() {
  return Number(taxamount.value) / (Number(GST.value) / 100);
}

function computetaxamount() {
  return (Number(GST.value) / 100) * Number(netprice.value);
}