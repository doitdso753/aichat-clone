import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', 'local-app.liora.com'], // 허용할 호스트 지정
    host: "0.0.0.0", // 모든 IP 주소에서 접근 가능하도록 설정
    port: 3000, // 컨테이너 내부 포트
    strictPort: true, // 포트가 사용 중이면 에러 발생
    watch: {
      usePolling: true, // 파일 변경 감지를 위해 폴링 사용 (Docker 환경에서 필요)
    },
  },
})
