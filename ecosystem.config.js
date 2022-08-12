module.exports = {
  apps: [
    {
      name: 'imskyyc-website',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        "NITRO_PORT": 9002,
        "PORT": 9002
      }
    }
  ]
}
