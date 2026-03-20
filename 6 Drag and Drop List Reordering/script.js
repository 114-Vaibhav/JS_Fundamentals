function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
    ev.preventDefault();
}

function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const dragged = document.getElementById(data);

    let dropZone = ev.target;

    // Ensure we always append to the div, not inside li
    if (dropZone.tagName === "LI") {
        dropZone = dropZone.parentElement;
    }

    dropZone.appendChild(dragged);
}