// app/cv/page.tsx
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; // Make sure this file is in public/

const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });

export default function CV() {
    const [numPages, setNumPages] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    function onPageLoadSuccess(page: any, index: number) {
        if (index === 0 && typeof window !== 'undefined') {
            const viewport = page.getViewport({ scale: 1 });
            const desiredWidth = window.innerWidth * 0.9;
            const newScale = desiredWidth / viewport.width;
            setScale(newScale > 1 ? 1 : newScale); // Cap at 1 if needed, or adjust multiplier
        }
    }

    function onLoadError(error: Error): void {
        console.error('Error while loading document!', error);
    }

    return (
        <div style={{ width: '600px', margin: '0 auto', height: '100vh', overflowY: 'auto' }}>
            <Document
                file="/CV.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onLoadError}
            >
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`} // Added key
                        pageNumber={index + 1}
                        width={600}
                        renderTextLayer={false}
                        renderAnnotationLayer={true}
                    />
                ))}

            </Document>
        </div>
    );
}

// git remote add origin https://github.com/lubani/Portfolio.git
