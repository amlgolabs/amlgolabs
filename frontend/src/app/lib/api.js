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


export async function fetchJobs() {
  try {
    const response = await axios.get(`${config.blogEndpoint}/api/jobs`);
    return response.data;
  } catch (error) {
    console.log('Error fetching jobs :' , error);
    return [];
  }
}

export async function fetchSingleJob({id}) {
  try {
    const response = await axios.get(`${config.blogEndpoint}/api/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching jobs :' , error);
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