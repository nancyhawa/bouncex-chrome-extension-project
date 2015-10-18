
// Notes:
// Storage docs:  https://developer.chrome.com/extensions/storage
console.log('Overlay script loaded and started')

var firstHref = $('a[href^="http"]').eq(0).attr("href")
console.log(firstHref)

$(document).ready(function () {
  $('body').prepend('<div id="exit-intent-on-switch"></div>')
  $('body').prepend('<div id="exit-intent-checker"></div>')
  $('body').prepend('<div id="exit-intent-off-switch"></div>')
  $('body').append('<div id="chrome-extension-add-overlay"></div>')
  appendOverlay()
  $('#exit-intent-on-switch').on('mouseover', function () {
    turnExitIntentCheckerOff()
    turnExitIntentCheckerOn()
  })
  $('#exit-intent-off-switch').on('mouseover', function () {
    turnExitIntentCheckerOff()
  })
})

function enableOnSwitch () {
  $('#exit-intent-on-switch').on('mouseover', function () {
    turnExitIntentCheckerOff()
    turnExitIntentCheckerOn()
  })
};

function disableOnSwitch () {
  $('#exit-intent-on-switch').off()
};

function appendOverlay () {
  var overlay = chrome.extension.getURL('overlay.html')
  $.get(overlay, function (data) {
    $('#chrome-extension-add-overlay').html(data)
  })
};

function turnExitIntentCheckerOn () {
  // debugger
  $('#exit-intent-checker').on('mouseover', function () {
    showOverlay()
  })
};

function turnExitIntentCheckerOff () {
  // debugger
  $('#exit-intent-checker').off()
};

function showOverlay () {
  $('#chrome_campaign_container_overlay').show()
  turnExitIntentCheckerOff()
  noThanks()
};

function noThanks () {
  $('.no_thanks').click(function () {
    disableOnSwitch()
    turnExitIntentCheckerOff()
    $('#chrome_campaign_container_overlay').hide()
    setTimeout(enableOnSwitch, 8000)
  });
}
