const homeRealContainer = document.querySelector('#fullpage');

if (homeRealContainer) {
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    lazyLoading: true,
    navigation: true,
    navigationPosition: 'right',
    anchors:['landingPage', 'liveStreamPage'],
    onLeave: ( origin, destination ) => toggleDark(origin, destination),
  });
}

const formRealContainer = document.querySelector('#toktik');

if (formRealContainer) {
  new fullpage('#toktik', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollHorizontally: true,
    verticalCentered: false,
    lazyLoading: true,
    navigation: true,
    navigationPosition: 'right',
    anchors:['writeInfoPage', 'writeFormPage'],
    // onLeave: ( origin, destination ) => toggleDark(origin, destination),
  });
}

//function to add .dark to body
function toggleDark(origin, destination) {
  if(destination.index === 0 || origin.index === 0) {
    document.body.classList.toggle('dark');
  }
}

// remove trash
document.querySelector('.fp-watermark').remove();