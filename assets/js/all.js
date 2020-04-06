$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var navScene = new ScrollMagic.Scene({
    triggerElement: ".banner",
    offset: 900
  })
    .setClassToggle("nav", "show")
    .addTo(controller);

  $(".content-block").each(function() {
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      duration: "70%",
      triggerHook: 0.6
    })
      .setTween(
        TweenMax.from(this.children[1].children[0], 1, {
          y: "-40%"
        })
      )
      //   .addIndicators()
      .addTo(controller);

    // var imgScene = new ScrollMagic.Scene({
    //   triggerElement: this,
    //   duration: "40%",
    //   triggerHook: 0.4
    // })
    //   .setTween(
    //     TweenMax.from(this.children[0].children[0], 1, {
    //       y: "-30%",
    //       x: "-30%"
    //     })
    //   )
    //   //   .addIndicators()
    //   .addTo(controller);
  });
});
