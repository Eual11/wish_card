document.onreadystatechange = function()
{
  if(document.readyState !=="complete")
  {
    document.querySelector("body").style.display ="none"

  }
  else
  {
    document.querySelector("body").style.display="block"
    document.querySelector("#loader").style.display = "none"
  }
}
/**var words = ['I am Utterly Alone ', 'In a soulless uncaring universe', 'Devoid of empathy', 'Where the Magic i once saw as a child ', 'Has been corroded away by the Ceaseless March of time',"and inevitable entropic decay of life"],
 */
var words = ['HAPPY BIRTHDAY BEZUU <3 ', 'Wishing You A Very Happy Birthday AND ', 'A Year Filled with Love AND Happiness', 'You’re Truly A Ray of Sunshine in My Life. ', 'The Journey Continues! And Yours is Truly Special'," Happy Birthday To A Wonderful Ray of Sunshine in My Life","I’m so Happy Our Paths Crossed in This Life"],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 23,
    speed = 56;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('#wish').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

