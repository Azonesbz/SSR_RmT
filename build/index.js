import * as esbuild from 'esbuild'

let ctxServer = await esbuild.context({
    entryPoints: ['src/App.jsx', 'src/server.jsx'],
    target: 'node18',
    format: 'esm',
    platform: 'node',
    outdir: 'dist',
    logLevel: 'debug'
})
let ctxClient = await esbuild.context({
    entryPoints: ['src/main.jsx'],
    target: 'chrome96',
    logLevel: 'debug',
    platform: 'browser',
    bundle: true,
    outdir: 'dist'
})

ctxServer.watch().then(_ => console.log('watching Server...'))
ctxClient.watch().then(_ => console.log('watching Client...'))