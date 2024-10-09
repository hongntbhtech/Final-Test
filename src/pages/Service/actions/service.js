export const visibleContent = (id) => {
    return {
        type: "Visible_Content",
        id: id
    };
};

export const hiddenContent = () => {
    return {
        type: "Hidden_Content"
    };
};
