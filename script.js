"use strict";
const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

let [current] = placeholders;

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
});
//#region itemEvents
function dragstart(e) {
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
    e.target.classList.add('hold');
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide');

    setTimeout(() => e.target.classList.remove('return'), 1005);
}
//#endregion

//#region placeholderEvents
function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    if (current !== e.target) {
        e.target.classList.add('hovered');
    }
}

function dragleave(e) {
    e.target.classList.remove('hovered');
}

function dragdrop(e) {
    current = e.target;
    e.target.classList.remove('hovered');
    item.className = `item ${e.target.dataset.color}`;
    e.target.append(item);
}
//#endregion