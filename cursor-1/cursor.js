const circle=document.querySelector("#circle");
        document.addEventListener("mousemove",(e)=>{
            let x=e.pageX;
            let y=e.pageY;

            circle.style.top=y+"px";
            circle.style.left=x+"px";
        });