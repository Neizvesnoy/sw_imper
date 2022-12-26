const showMore = document.querySelector('.show-more');
const itemLength = document.querySelectorAll('.ourteam_item').length;

let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.ourteam_list').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visible'));

    if (visItems.length === itemLength) {
        showMore.style.display = 'none';
    }
});