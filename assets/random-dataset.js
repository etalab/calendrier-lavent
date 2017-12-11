'use strict';

function random (data) {
  return data[Math.floor(Math.random() * data.length)];
}

function getRandomDataset () {
  const url = 'https://www.data.gouv.fr/api/1/datasets/?sort=-reuses&page_size=100&reuses=few';

  const options = {
    mode: 'cors',
    cache: 'default',
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json',
      'X-Fields': 'data{id}'
    })
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(({data}) => random(data).id)
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('random-dataset');

  if (container) {
    getRandomDataset()
      .then(id => {
        container.innerHTML = `<div data-udata-dataset-id="${id}"></div>`;
      })
      .then(() => udataScript.loadDatasets());
  }
});
