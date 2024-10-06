export function getImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    q: query,
    key: '46359469-7b013fe590d21d7ac02b102d9',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {};

  return fetch(url, { headers }).then(res => res.json());
}
