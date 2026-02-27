import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Watching-sculptures-V.K./', // важливо з косими рисками і крапкою
})
