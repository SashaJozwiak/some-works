const form = document.querySelector('.search__form');
const resultsContainer = document.querySelector('.search__findings-list');
const countContainer = document.querySelector('.search__findings');
const errorContainer = document.querySelector('.search__error');

const renderError = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            Произошла ошибка...
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderEmptyResults = () => {
  errorContainer.innerHTML = `
        <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
        <p class="search__error-message">
            По вашему запросу ничего не найдено, попробуйте уточнить запрос
        </p>
  `;
  countContainer.innerHTML = '';
};

const renderCount = count => {
  countContainer.innerHTML = `
      Найдено <span class="search__findings-amount">${count.toLocaleString(
        'ru-RU'
      )}</span> результатов
  `;
};

const onSubmitStart = () => {
  countContainer.innerHTML = `Загрузка...`;
  resultsContainer.innerHTML = '';
  errorContainer.innerHTML = '';
};

function template(item) {
  const newElement = document.createElement('li');
  newElement.classList.add('search__finding-item');
  newElement.innerHTML = `
    <a href = ${item.html_url} class="search__finding-link">
    ${item.full_name}
    <span class="search__finding-description">${item.description}</span>
    </a>
	`;
  return newElement;
}

async function onSubmit(event) {
  event.preventDefault();
  onSubmitStart();
  await fetch(
    `https://api.nomoreparties.co/github-search?q=${event.target.elements['title'].value}`
  )
    .then(r => r.json())
    .then(data => {
      const { items, total_count } = data;
      if (total_count) {
        renderCount(total_count);
        items.forEach(item => resultsContainer.appendChild(template(item)));
      } else {
        renderEmptyResults();
      }
    })
    .catch(() => {
      renderError();
    });
}

form.addEventListener('submit', onSubmit);