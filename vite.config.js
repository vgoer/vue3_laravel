import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        'src/assets/css/base.less',
                    )}";`,
                },
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve('./src'), // @代替src
        },
    },
    server: {
        host: true,
        cors: true,
        open: false,
        port: '7777',
    },
    build: {
        target: 'modules',
        outDir: 'dist',
        cssCodeSplit: true,
    },
});
