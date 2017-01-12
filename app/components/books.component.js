/**
 * Created by Tamir on 09/01/2017.
 */

'use strict';
function BooksController(SweetAlert) {
    var $ctrl = this;
    $ctrl.clickedBook = {}
    $ctrl.master = {}
    $ctrl.$onInit = function () {
        $ctrl.books = $ctrl.books;
    }

    $ctrl.delete = function(book) {
        SweetAlert.swal({
                title: "Are you sure?", //Bold text
                text: "Your will not be able to recover this book!", //light text
                type: "warning", //type -- adds appropiriate icon
                showCancelButton: true, // displays cancel btton
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) { //Function that triggers on user action.
                if (isConfirm) {
                    var idx = $ctrl.books.indexOf(book)
                    if (idx >= 0)
                        $ctrl.books.splice(idx, 1)
                    SweetAlert.swal("Deleted!", "Your book has been deleted.", "success");
                } else {
                    SweetAlert.swal("Cancelled", "Your book is safe :)", "error");
                }
            });
    }
    
    $ctrl.edit = function (book) {
        $ctrl.clickedBook = book;
    }
    

}
app.component('books', {
    templateUrl: 'templates/book.component.html',
    bindings: {
        books: '='
    },
    controller: BooksController

})