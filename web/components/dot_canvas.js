import React, { useRef, useEffect } from 'react'

const DotCanvas = (props) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {

    function getDocumentWidth() {
        return canvas.clientWidth;
    };

    function getDocumentHeight() {
        return canvas.clientHeight;
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let vw = getDocumentWidth();
    let vh = getDocumentHeight();

    function drawDots() {
        let r = 4,
            cw = 44,
            ch = 44;

        for (
            let x = 20; x < vw; x += cw) {
            for (let y = 20; y < vh; y += ch) {
                const circle = new Path2D();

                circle.arc(x - r / 2, y - r / 2, r, 0, 2 * Math.PI);

                context.fillStyle = '#fff';
                context.fill(circle);
            }
        }
    }

    drawDots();

    //fix it on resize
    function resizeCanvas() {
        canvas.width = vw;
        canvas.height = vh;
        drawDots();
    }

    function onResize() {
        vw = getDocumentWidth();
        vh = getDocumentHeight();
        resizeCanvas();
    }

    resizeCanvas();

    // resize the canvas to fill the browser window
    window.addEventListener('resize', onResize, false);
  }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default DotCanvas