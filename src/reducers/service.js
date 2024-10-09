const initialState = {
    visibleQuestion: null // Chứa ID câu hỏi đang mở
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Visible_Content":
            return {
                ...state,
                visibleQuestion: action.id // Lưu ID của câu hỏi đang mở
            };
        case "Hidden_Content":
            return {
                ...state,
                visibleQuestion: null // Đóng tất cả
            };
        default:
            return state;
    }
};

export default serviceReducer;
