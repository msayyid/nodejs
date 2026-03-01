const os = require("os");

// infor about the current user
const user = os.userInfo();
// console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);



const currentOS = {
    name: os.type(),        // Returns operating system name (e.g. 'Darwin', 'Windows_NT')
    release: os.release(),  // Returns OS version/release
    totalMem: os.totalmem(),// Returns total system memory in bytes
    freeMem: os.freemem()   // Returns available/free memory in bytes
};

const {totalMem, freeMem} = currentOS;
console.log(`free memory from destructuring: ${freeMem}`);
console.log(`total memory from destructuring: ${totalMem}`);

console.log(currentOS);            // Prints the whole OS info object
console.log(currentOS.totalMem);   // Prints only total memory value