// app/cv/page.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; // Make sure this file is in public/

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });

export default function CV() {
    const [numPages, setNumPages] = useState<number>(0);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    function onLoadError(error: Error): void {
        console.error('Error while loading document!', error);
    }

    return (
        <div style={{ width: '800px', margin: '0 auto', height: '100vh', overflowY: 'auto' }}>
            <Document
                file="/CV.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onLoadError}
            >
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={800} // Increased width from 600 to 800
                        renderTextLayer={false}
                        renderAnnotationLayer={true}
                    />
                ))}
            </Document>
        </div>
    );
}
