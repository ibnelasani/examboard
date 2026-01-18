
import dns from 'dns';

// Force Node.js to use Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log('Custom DNS servers set:', dns.getServers());
