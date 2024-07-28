'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function CV() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'}>
                <Viewer
                    fileUrl="/CV.pdf"
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
}
