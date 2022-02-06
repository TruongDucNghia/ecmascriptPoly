import instance from "./confix";

export const getAll = () =>{
    const url = `/posts`
    return instance.get(url)
}

export const get = (id) =>{
    const url = `/posts/${id}`
    return instance.get(url)
}
export const add = (post) =>{
    const url = `/posts`
    return instance.post(url, post)
}
export const update = (post) =>{
    const url = `/posts/${post.id}`
    return instance.patch(url, post)
}
export const updateView = (post) =>{
    const url = `/posts/${post.id}`
    return instance.patch(url, post)
}
export const remove = (id) =>{
    const url = `/posts/${id}`
    return instance.delete(url, id)
}
export const getTop3Posts = () =>{
    const url = `/posts?_sort=view&_order=desc&_limit=3`
    return instance.get(url)
}
