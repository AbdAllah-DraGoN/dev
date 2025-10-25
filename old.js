//  My Loop Scroll -- this is old way __  New Way Use  CSS Only 
  const loopContainer = document.getElementById("my-loop-scroll-container");
  // console.log(loopContainer);
  let speed = 1;
  function myLoopScroll() {
    document.getElementById("my-loop-scroll-container").scrollLeft += speed;
    //   console.log(speed + 1);
    if (
      document.getElementById("my-loop-scroll-container").scrollLeft >=
      loopContainer.scrollWidth / 2
    ) {
      document.getElementById("my-loop-scroll-container").scrollLeft = 0;
    }
    requestAnimationFrame(myLoopScroll);
  }
  myLoopScroll();