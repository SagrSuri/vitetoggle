import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts'; // Plugin for generating TypeScript declarations

export default defineConfig({
  plugins: [
    react(),
    dts({ // Plugin to generate TypeScript declarations
      include: ['./src/**/*.ts', './src/**/*.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/Toggle.jsx'), // Adjust entry point as needed
      name: 'ViteDarkmodeToggle',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'], // Build both CommonJS and ES modules
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-icons'], // Ensure these are treated as external
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-icons': 'ReactIcons',
        },
      },
    },
  },
});
