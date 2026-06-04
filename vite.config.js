import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite가 React 문법(JSX)을 올바르게 처리하도록 플러그인을 연결합니다.
export default defineConfig({
  plugins: [react()],
});
