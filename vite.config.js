import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
    alias: {
      '^chart.js$': './__mocks__/chart.js', // ajusta el camino según tu estructura de proyecto
    },
  },
})
