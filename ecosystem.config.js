module.exports = {
  apps: [
    {
      name: 'order-system',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 8082',
      cwd: './',
    }
  ]
}
