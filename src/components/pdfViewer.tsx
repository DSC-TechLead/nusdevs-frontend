import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const PdfViewerComponent: React.FC = () => {
    const [numPages, setNumPages] = useState<number>();

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <div className="w-full flex flex-row justify-center items-center">
            <Document onLoadSuccess={onDocumentLoadSuccess} file={"./sample.pdf"}>
                {Array.from(new Array(numPages), (_el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                    />
                ))}
            </Document>
        </div>
    );
}

export default PdfViewerComponent