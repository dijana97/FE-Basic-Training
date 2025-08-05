function evenArticlesHeight() {
  $('.content__row').each(function () {
    let maxHeight = 0;
    const $articles = $(this).find('.article');

    $articles.css('height', 'auto');

    $articles.each(function () {
      const h = $(this).outerHeight();
      if (h > maxHeight) maxHeight = h;
    });

    $articles.height(maxHeight);
  });
}
function openCloseSideMenu() {
  $('.left-menu__btn').on('click', function () {
    const $button = $(this);
    const $listItem = $button.closest('li');
    const $submenu = $listItem.find('ul').first();
    const $submenuTitle = $listItem.find('.left-menu__item');

    const isOpened = $submenu.hasClass('left-menu__item--opened');

    if (isOpened) {
      $submenu.slideUp(200).removeClass('left-menu__item--opened');
      $submenuTitle.removeClass('item--opened');
      $button.removeClass('item--opened').text('+');
    } else {
      $submenu.slideDown(200).addClass('left-menu__item--opened');
      $submenuTitle.addClass('item--opened');
      $button.addClass('item--opened').text('-');
    }
  });
}

async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('Users:', response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}


function init() {
  evenArticlesHeight();
  openCloseSideMenu();
  fetchUsers();

  
}

$(function() {
  init();

  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(evenArticlesHeight, 150);
  });
});