export const nextContent = (id) => {
    return{
        type:"Next_Content",
        id:id
    };
}

export const backContent = (id) => {
    return{
        type:"Back_Content",
        id:id
    };
}
