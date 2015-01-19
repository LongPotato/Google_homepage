doSearch = function() {
    var search_string = document.getElementById('search_box').value;

    alert('Ok, so let me google it for you :)');

    window.location = "http://www.google.com/#q=" + search_string;
}
