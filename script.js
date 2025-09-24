

        const allBoxes = document.querySelectorAll(".div");


        for (let i = 0; i < allBoxes.length; i++) {
            allBoxes[i].addEventListener("dragstart", (e) => {
                //console.log("dragstart",e)
                e.dataTransfer.setData("text", allBoxes[i].id);
            })
            allBoxes[i].addEventListener("dragover", (e) => {
                e.preventDefault();
            })
            allBoxes[i].addEventListener("drop", (e) => {
                //e.preventDefault();
                const dragEleId = e.dataTransfer.getData("text");

                const dragEle = document.getElementById(dragEleId);

                console.log(dragEle,dragEleId,'drag ele')


                const dropEle = e.currentTarget;


                const dragImg = dragEle.querySelector("img");
                const dropImg = dropEle.querySelector("img");

                // swap image src
                const tempSrc = dragImg.src;
                dragImg.src = dropImg.src;
                dropImg.src = tempSrc;

                // get <p> inside both divs
                const dragText = dragEle.querySelector("p");
                const dropText = dropEle.querySelector("p");

                // swap text
                const tempText = dragText.innerText;
                dragText.innerText = dropText.innerText;
                dropText.innerText = tempText;
            })
        }
