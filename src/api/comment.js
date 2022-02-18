import instance from "./confix";

export const getAll = () =>{
    const url = `/comments`
    return instance.get(url)
}

export const add = (post) =>{
    const url = `/comments`
    return instance.post(url, post)
}
export const update = (post) =>{
    const url = `/comments/${post.id}`
    return instance.patch(url, post)
}

export const remove = (id) =>{
    const url = `/posts/${id}`
    return instance.delete(url, id)
}

