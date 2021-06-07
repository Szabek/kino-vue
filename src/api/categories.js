import axios from "axios";

export const getCategories = () => axios.get('/categories')
export const getCategory = (categoryId) => axios.get('/categories/' + categoryId)

export const postCategory = (category) => axios.post('/categories', category)
export const updateCategory = (category) => axios.put('/categories/' + category.id, category)
export const deleteCategory = (categoryId) => axios.delete('/categories/' + categoryId)
