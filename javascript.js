function hBook(event) 
{
    var bookList = document.getElementById('bookList').getElementsByTagName('li');
    for (var i = 0; i < bookList.length; i++) 
    {
        bookList[i].classList.remove('selected');
    }
    var selectedBook = event.target;
    selectedBook.classList.toggle('selected');
}