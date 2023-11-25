new fullpage('#fullpage', {
  licenseKey: 'gplv3-license',
  autoScrolling:true,
  scrollHorizontally: true,
  verticalCentered: false,
  onLeave: function(origin, destination, direction, trigger){ console.log("Leaving section " + origin.index); console.log("Going to section " + destination.index)  },
});

document.querySelector('.fp-watermark').remove();