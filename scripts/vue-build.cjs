// Vue CLI's optional IPC module inspects interfaces even during a static build.
// Some container hosts do not expose that information; IPC is unused here.
const os = require('node:os');
const interfaces = os.networkInterfaces;
os.networkInterfaces = () => {
  try { return interfaces(); }
  catch (error) { if (error.code === 'ERR_SYSTEM_ERROR') return {}; throw error; }
};
process.argv = [process.argv[0], require.resolve('@vue/cli-service/bin/vue-cli-service.js'), 'build'];
require('@vue/cli-service/bin/vue-cli-service.js');
