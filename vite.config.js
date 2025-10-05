import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0', // Permite conexões de qualquer host
        port: 5173, // Porta dentro do container
        hmr: {
            host: 'localhost', // Host para Hot Module Replacement
            port: 5174, // Porta mapeada no docker-compose
        },
    },
});
