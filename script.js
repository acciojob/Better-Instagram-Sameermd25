//your code here
const allBoxes=document.querySelectorAll(".image");
for(let i=0;i<allBoxes.length;i++){
            allBoxes[i].addEventListener("dragstart",(e)=>{
                e.dataTransfer.setData("text",e.target.id);
            })
            allBoxes[i].addEventListener("dragover",(e)=>{
                e.preventDefault();
            })
            allBoxes[i].addEventListener("drop",(e)=>{
              const dragEleId=e.dataTransfer.getData("text") ;
              const dragEle=document.getElementById(dragEleId);
              const dragBackground=window.getComputedStyle(dragEle).backgroundImage;

              const dropEle=e.target//.closest('.div');
              const dropBackground=window.getComputedStyle(dropEle).backgroundImage;
                
              dragEle.style.backgroundImage=dropBackground;
              dropEle.style.backgroundImage=dragBackground;

              let temp=dragEle.innerText;
              dragEle.innerText=dropEle.innerText;
              dropEle.innerText=temp;
            })
        }