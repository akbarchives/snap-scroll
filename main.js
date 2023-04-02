// Add active class to the current button (highlight it)
var header = document.getElementById('myList');
//var lists = header.getElementsByClassName('btn');
var lists = header.getElementsByTagName('a');
for (var i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    // console.log(current);

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
      //   current[1].className = current[1].className.replace(' active', '');
    }
    this.className += ' active';
  });
}
