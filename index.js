import useragent from "useragent";

//!useragent.parse(useragent string[, js useragent]);

// const userAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36';

// const agent = useragent.parse(userAgentString);
// console.log(agent)
// console.log(`Brwoser : ${agent.toAgent()}`);
// console.log(`Sistem Operasi : ${agent.os.toString()}`);
// console.log(`Perangkat : ${agent.device.toString()}`);

//!useragent.lookup(useragent string[, js useragent]);
//jikar mengambil request langsung dari aPi seperti ini
// const userAgentString = req.headers[`user-agent`];
//Akan tetapi contoh di bawah hanya pengimplementasiannya saja, jadi menggunakan userAgent yang saya tulis manual.

// const userAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36';

//Mencari useragaent.lookup untuk mencari dalam cache atau mengurai jika belum ada di dalam cache

// const agent = useragent.lookup(userAgentString)

//Menampilkan di console.log
// console.log(agent)
// console.log('Browser: ' + agent.toAgent());
// console.log('Sistem Operasi: ' + agent.os.toString());
// console.log('Perangkat: ' + agent.device.toString());

//!useragent.fromJSON(obj); dan useragent.is(useragent string).browsername;

//Membuatvariabel penampung useragaent nya

const userAgentString = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36`;

//Mengurai string useragent menjadi objeck agent

const agent = useragent.parse(userAgentString);

//Mengubah representasi JSON kembali menjadi objeck agent yang dapat digunakan
const agentJSON = JSON.stringify(agent)

const another = JSON.parse(agentJSON)

//Implementasi useragent.is

const ua = useragent.is(userAgentString)

//Menampilkannya di terminal dengan mengunakan console.log

console.log(agentJSON === JSON.stringify(another)) //Ini mengecek apakah anothernya sama dengan agentnya, jika bernilai true maka benar
console.log(agent);
console.log(another);
console.log(ua)
