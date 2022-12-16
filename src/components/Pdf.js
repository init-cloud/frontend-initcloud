import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Pdf = () => {
    const converToImg = async () => {
        // html to imageFile
        const papers = document.querySelectorAll("article");
        const canvases = []
        for (let i = 0; i < papers.length; i++) {
            papers[i].style.transform = "scale(3)";
            const canvas = await html2canvas(papers[i]);
            canvases.push(canvas);
            papers[i].style.transform = "scale(1)";
        }
        return canvases;
    }

    const converToPdf = (canvases) => {
        
        let position = 0
        const doc = new jsPDF("p", "mm", "a4");        
        for (let i = 0; i < canvases.length; i++) {
            const imageFile = canvases[i].toDataURL("image/png", 0.5);

            const imgWidth = doc.internal.pageSize.getWidth();
            const imgHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imageFile, "PNG", 0, position, imgWidth, imgHeight);
            if(i === canvases.length - 1) break;    
            doc.addPage();
        }

        window.open(doc.output("bloburl"))
    }

    return {
        viewWithPdf: async () => {
            const canvases = await converToImg()
            converToPdf(canvases);
        }
    }
}

export default Pdf