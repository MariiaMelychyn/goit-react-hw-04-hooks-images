import axios from 'axios';

const key = '22926721-5d20aa08498ffd1ff2f906542';
const image_type = 'photo';
const orientation = 'horizontal';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key,
  image_type,
  orientation,
  per_page: 12,
};

async function fetchImages(requestKey, page) {
  try {
    const { data } = await axios({
      params: {
        q: requestKey,
        page,
      },
    });
    return data.hits;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchImages };

export default api;
