const os = require('os');

//RAM HESABI
const totalRam = os.totalmem();
console.log('totalRam: ',totalRam)

const freeRam = os.freemem();
console.log('freeram: ',freeRam);

const usageRam = totalRam-freeRam;
console.log('usageRam',usageRam)

const percent = usageRam*100;
const ramPercent = percent/totalRam;
console.log('ramPercent','%',ramPercent.toFixed(0))

//İşletim sistemi bilgileri

const osType = os.type();
console.log('osType: ',osType);

const osArc = os.arch();
console.log('osArch: ',osArc);

const osHost = os.hostname();
console.log('osHost: ',osHost);

const home=os.homedir();
console.log('home: ',home);

const platform=os.platform();
console.log('platform: ',platform);

const version = os.version();
console.log('version',version);


const netWork = os.networkInterfaces();   //ipconfig gibi
console.log('netWork', netWork)

const cpu = os.cpus();
console.log('cpu', cpu)

