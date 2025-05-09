import axios from 'axios';
import config from '../config/config';

export async function fetchBlogs({ page = 1, limit = 5 } = {}) {
  try {
    const response = await axios.get(`${config.blogEndpoint}/api/blogs`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function fetchBlogsCount() {
  try {
    const response = await axios.get(`${config.blogEndpoint}/api/blogs/count`);
    return response.data.count;
  } catch (error) {
    console.error('Error fetching blog count:', error);
    return 0;
  }
}