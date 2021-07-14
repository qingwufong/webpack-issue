
const worker1 = new Worker(/* webpackChunkName: "worker-1" */ new URL('@/workers/worker-1.js', import.meta.url));
const worker2 = new Worker(/* webpackChunkName: "worker-2" */ new URL('@/workers/worker-2.js', import.meta.url));