const showMore = document.querySelector('.coment_more');
const itemLength = document.querySelectorAll('.coment_item').length;

let items = 5;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.coment_list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('visible'));

    if (visItems.length === itemLength) {
        showMore.style.display = 'none';
    }
});