'use strict';

window.addEventListener('DOMContentLoaded', function() {

    console.log('DOMContentLoaded');

    let nickName = window.document.querySelector('#nickname');
    nickName.focus();
    nickName.select();
    console.table([Date.now(), 'nickName focused and selected!']);

    let antal = window.document.querySelector('#antal');
    window.document.querySelector('#txtAntal').textContent = antal.value;

    antal.addEventListener('input', function(e) {
        console.table([Date.now(), 'input']);
        e.target.parentElement.querySelector('span').textContent = e.target.value;
    });
});