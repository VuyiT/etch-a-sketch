const leftKnob = document.querySelector(".left-knob");
        const upKnob = document.querySelector(".up-knob");
        const downKnob = document.querySelector(".down-knob");
        const rightKnob = document.querySelector(".right-knob");
        const displayScreen = document.querySelector(".display-screen");
        const pointer = document.querySelector(".pointer");
        const canvas = document.querySelector(".my-canvas");
        const ctx = canvas.getContext("2d");

        const trailMoveAmount = 5;

        let pointerX = pointer.offsetLeft + pointer.offsetWidth / 2; 
        let pointerY = pointer.offsetTop + pointer.offsetHeight / 2; 

        function resizeCanvas() {
            if (displayScreen) {
                canvas.width = displayScreen.offsetWidth;
                canvas.height = displayScreen.offsetHeight;
            }
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        function leaveATrail(deltaX, deltaY) {
            const previousX = pointerX;
            const previousY = pointerY;

            pointerX += deltaX;
            pointerY += deltaY;

            pointer.style.left = pointerX - pointer.offsetWidth / 2 + "px";
            pointer.style.top = pointerY - pointer.offsetHeight / 2 + "px";

            ctx.beginPath();
            ctx.moveTo(previousX, previousY);
            ctx.lineTo(pointerX, pointerY);
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        leftKnob.addEventListener("click", () => {
            leaveATrail(-trailMoveAmount, 0);
        });

        upKnob.addEventListener("click", () => {   
            leaveATrail(0, -trailMoveAmount);
        });

        downKnob.addEventListener("click", () => {
            leaveATrail(0, trailMoveAmount);
        });

        rightKnob.addEventListener("click", () => {
            leaveATrail(trailMoveAmount, 0);
        });