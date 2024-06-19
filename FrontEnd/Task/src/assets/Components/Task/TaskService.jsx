import api from '../api-config';

const getAll = () => {
  return api.get('/tasks');
};

const get = id => {
  return api.get(`/tasks/${id}`);
};

const create = data => {
  return api.post('/tasks', data);
};

const update = (id, data) => {
  return api.put(`/tasks/${id}`, data);
};

const remove = id => {
  return api.delete(`/tasks/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
