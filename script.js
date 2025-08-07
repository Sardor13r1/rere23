let name = prompt('String tappidagi malumotni kiriting');
console.log(name);

let number = prompt('Number tappidagi malumotni kiriting');
let numberConvert = Number(number);
console.log(number);

let boolean = prompt('Boolean tappidagi malumotni kiriting');
let booleanConvert = Boolean(boolean);
console.log(boolean);

let natija = confirm("Malumotlaringizni kiritganingizga ishonchingiz komilmi?");

alert ( `Siz kiritgan malumot ${name} ${typeof name} type ga tegishli
Siz kiritgan malumot ${number} ${typeof numberConvert} type ga tegishli
Siz kiritgan malumot ${boolean} ${typeof booleanConvert} type ga tegishli`);