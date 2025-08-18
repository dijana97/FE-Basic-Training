function loadIncludes() {
  const headerPromise = fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    });

  const footerPromise = fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

  headerPromise.then(() => {
    initMobileNavigation();
    openCloseSideMenu();
    initSearch();
  });

  return Promise.all([headerPromise, footerPromise]);
}

function initMobileNavigation() {
  const burger = document.querySelector('.nav__burger');
  const navList = document.querySelector('.nav__list');
  const search = document.querySelector('.search');

  if (burger && navList && search) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('active');
      search.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
}

function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.querySelector('.search__img');
  const articles = document.querySelectorAll('.article');

  if (!searchInput || !searchButton || articles.length === 0) return;

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      article.style.display = text.includes(query) ? '' : 'none';
    });
  });
}

function openCloseSideMenu() {
  const buttons = document.querySelectorAll('.left-menu__btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const listItem = button.closest('li');
      const submenu = listItem.querySelector('ul');
      const submenuTitle = listItem.querySelector('.left-menu__item');

      const isOpened = submenu.classList.contains('left-menu__item--opened');

      if (isOpened) {
        submenu.style.display = 'none';
        submenu.classList.remove('left-menu__item--opened');
        submenuTitle.classList.remove('item--opened');
        button.classList.remove('item--opened');
        button.textContent = '+';
        button.setAttribute('aria-expanded', 'false');
      } else {
        submenu.style.display = 'block';
        submenu.classList.add('left-menu__item--opened');
        submenuTitle.classList.add('item--opened');
        button.classList.add('item--opened');
        button.textContent = '-';
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadIncludes();
});

