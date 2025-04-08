# etch-a-sketch
The UI of this project was inspired by https://www.calculators.org/games/etch-a-sketch/

Before I did this project I had been reading a book on the importance of properly planning any project before execution so that you can execute faster. I thought I would practice that on this project. In the midst of that I ended up doing the project entirely on a non-git folder where I couldn't commit my changes and my thinking process. (I obviously didn't finish reading the book. How ironic.) 

Now, I have to unfortunately document my thinking entirely on the README.

This project is an Odin Project. It was to demonstrate my DOM Manipulation skills and practice Flexbox.

After I added my initial divs, with a screen and two buttons at the bottom, I thought the project would require me to append a text node to the screen after every click on the two bottom buttons. The left button would append to the left, and the right button to the right. I used object.style.direction to do that. That's when everything went completely wrong.

When I did that,the entire screen would shift direction because I was ultimately talking to the SCREEN and not any element that is ON TOP of the screen.  

I then decided to create a pointer-like div that would sit on top of the screen and be the element that moves and draws to leave a trail. 

Either before or after that, I was working on a way to use element.offsetX and offsetY to try and divide each button into two parts, where if the user presses one part of the button the pointer would change directions. 

After some time, I realised that was stupid and created two more buttons at the bottom instead.

Upon realising that the pointer needed to move and change directions, the project quickly turned from DOM Manipulation to Animation in click events. After much research I managed to create an animation that can move in the different directions (left, up, down, right) after relevant button clicks.

That was half the battle done. 

The movements were not drawing anything. After much research, I found out I needed a canvas in my screen div, which I added. I followed the prompts to draw lines from the center of the screen. 

But another problem arose, every direction change lead the pointer to move from the center rather than from the last point the previous direction took. 

Even though, this was not the plan for the project, I considered keeping this because it looked awesome to have shapes that have a colour in them and the more I moved around, the more it looked like I was creating a 3D image. But I thought I should just change it. I don't want to be accused of lazy work.

That's when I came across the concept of delta in my function. 

The rest is history.