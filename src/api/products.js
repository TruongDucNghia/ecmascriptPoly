import instance from "./confix";

export const getAll = () => {
    const url = `/product`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
}