import axios from "axios";

export const getCategories = () => axios.get('/categories')
export const getCategory = (categoryId) => axios.get('/categories/' + categoryId)

export const postCategory = (category) => axios.post('/categories', category)
export const updateCategory = (categoryId, data) => axios.put('/categories/' + categoryId, data)
export const deleteCategory = (categoryId) => axios.delete('/categories/' + categoryId)
