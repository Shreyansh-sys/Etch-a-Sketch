document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const blackBtn = document.querySelector('#black-btn');
    const greyBtn = document.querySelector('#gray-btn');
    let isDrawing = false;
    let rows = 16;
    let columns = 16;

    function createGrid(rows, columns) {
        const squareSize = Math.floor(500 / rows);
        container.innerHTML = '';
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.classList.add('rows');
            container.appendChild(row);

            for (let j = 0; j < columns; j++) {
                const sqr = document.createElement('div');
                sqr.classList.add('squares');
                sqr.style.width = `${squareSize - 2}px`;
                sqr.style.height = `${squareSize - 2}px`;
                row.appendChild(sqr);
            }
        }
    }

    createGrid(rows, columns);

    function blackPen() {

        const pixels = document.querySelectorAll('.squares');
        blackBtn.addEventListener('click', () => {
            console.log("click");
            pixels.forEach((pixel) => {

                pixel.addEventListener('mousedown', function () {
                    isDrawing = true;
                    pixel.classList.add('hovered');
                });

                pixel.addEventListener('mouseenter', function () {
                    if (isDrawing) {
                        pixel.classList.add('hovered');
                    }
                });

                pixel.addEventListener('mouseup', function () {
                    isDrawing = false;
                });
            });
        });
    }

    blackPen();

    function grayPen() {

        const pixels = document.querySelectorAll('.squares');
        greyBtn.addEventListener('click', () => {
            console.log("click");
            pixels.forEach((pixel) => {

                pixel.addEventListener('mousedown', function () {
                    isDrawing = true;
                    pixel.classList.add('hovered');
                });

                pixel.addEventListener('mouseenter', function () {
                    if (isDrawing) {
                        let Rnum = Math.floor(Math.random() * 255);
                        pixel.style.backgroundColor = `rgb(${Rnum}, ${Rnum}, ${Rnum})`;
                    }
                });

                pixel.addEventListener('mouseup', function () {
                    isDrawing = false;
                });
            });
        });
    }

    grayPen();


    const button = document.querySelector('.button');

    button.addEventListener('click', function () {
        const userInput = prompt("Enter the number of square per side for the new grid");
        const newSize = parseInt(userInput);

        if (!isNaN(newSize) && newSize > 0 && newSize < 100) {
            rows = columns = newSize;
            createGrid(rows, columns);
        }
        else {
            alert("Enter a valid number");
        }
    });

});

