// Accordion Toggle

let button = document.getElementById('accordion-toggle');
let content = document.getElementById('accordion-content');

let toggle = function() {
    if (content.style.display === 'none') {
        return content.style.display = 'block';
    } else {
        return content.style.display = 'none';
    }
};

button.onclick = toggle;

button.addEventListener('click', toggle);