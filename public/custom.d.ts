// custom.d.ts
declare module 'pdfjs-dist/build/pdf.worker.entry' {
  const src: string;
  export default src;
}
declare module 'pdfjs-dist/build/pdf' {
  export * from 'pdfjs-dist';
}

// rmdir /s /q node_modules
// del /f /q package-lock.json
