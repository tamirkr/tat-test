/**
 * Created by Tamir on 11/01/2017.
 */
'use strict';

function ModalController() {
    var ctrl = this;
    // var masterBook;
    ctrl.bookToEdit = {};

    ctrl.$onChanges = function (newData) {
        // debugger
        // masterBook = newData.data.currentValue
        ctrl.bookToEdit = angular.copy(newData.data.currentValue);
    }

    ctrl.save = function () {
        ctrl.data.title = ctrl.bookToEdit.title;
        ctrl.data.author = ctrl.bookToEdit.author;
        ctrl.data.date = ctrl.bookToEdit.date;

    }



}

app.component('modal', {
    templateUrl: 'templates/modal.component.html',
    bindings: {
        data: '<'
    },
    controller: ModalController
})