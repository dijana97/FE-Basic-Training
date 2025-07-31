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

$(function() {
  evenArticlesHeight();

  $('.left-menu__btn').on('click', function (i) {
    const $button = $(this);
    const $submenuOpened = $button.siblings('.left-menu__item--opened');
    const $submenuClosed = $button.siblings('.left-menu__item--closed');
    const $submenuTitle = $button.siblings('.left-menu__item');

    if ($submenuClosed.length) {
      $submenuClosed.slideDown(200)
        .removeClass('left-menu__item--closed')
        .addClass('left-menu__item--opened');

        $submenuTitle.addClass("item--opened");
        $button.addClass("item--opened");

      $button.text('-');
    } else if ($submenuOpened.length) {
      $submenuOpened.slideUp(200)
        .removeClass('left-menu__item--opened')
        .addClass('left-menu__item--closed');

        $submenuTitle.removeClass("item--opened");
        $button.removeClass("item--opened");

      $button.text('+');
    }
  });
});