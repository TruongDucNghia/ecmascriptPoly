import instance from "./confix";

export const getAll = () =>{
    const url = `/products`
    return instance.get(url)
}

export const get = (id) =>{
    const url = `/products/${id}`
    return instance.get(url)
}
export const getTop10ViewProduct = () =>{
    const url = `/products?_sort=view&_order=desc&_limit=10`
    return instance.get(url)
}
export const getTop10ProductNew = () =>{
    const url = `/products?_sort=updatedAt&_order=desc&_limit=10`
    return instance.get(url)
}
export const add = (post) =>{
    const url = `/products`
    return instance.post(url, post)
}
export const update = (post) =>{
    const url = `/products/${post.id}`
    return instance.patch(url, post)
}
export const updateProduct = (post) =>{
    const url = `/products/${post.id}`
    return instance.patch(url, post)
}
export const remove = (id) =>{
    const url = `/products/${id}`
    return instance.delete(url, id)
}

export const filterCateProduct = (cate) =>{
    const url = `http://localhost:3001/cateProducts/${cate}?_embed=products`
    return instance.get(url)
}

export const filterPriceProduct = (min, max) =>{
    const url = `http://localhost:3001/products?price_gte=${min}&price_lte=${max}`
    return instance.get(url)
}

export const searchProduct = (text) =>{
    const url = `http://localhost:3001/products?q=${text}`
    return instance.get(url)
}

