// const init = [
//     {
//         id: 1,
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit."
//     },

//     {
//         id:2,
//         content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
//     },

//     {
//         id:3,
//         content:'Nguyễn Thị Hồng'
//     }
// ]

// const testimonicalsReducer = (state = init, action) => {
//     switch (action.type) {     
//         case "Next_Content":
//             const indexContent = state.findIndex(item => item.id === action.id);
//             if (indexContent === -1 || indexContent === state.length - 1) {
//                 return state;
//             }
//             return [state[indexContent + 1]]; 

//         case "Back_Content":
//                 const prevIndexContent = state.findIndex(item => item.id === action.id);
//                 if (prevIndexContent === -1 || prevIndexContent === 0) {
//                     return state;
//                 }
//                 return [state[prevIndexContent - 1]];
    
//         default:
//             return state;
//     }
// }

// export default testimonicalsReducer;


const init = {
    currentIndex: 0,
    contentList: [
        {
            id: 1,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit."
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
        },
        {
            id: 3,
            content: 'Nguyễn Thị Hồng'
        }
    ]
};

const testimonicalsReducer = (state = init, action) => {
    switch (action.type) {
        case "Next_Content":
            return {
                ...state,
                currentIndex: Math.min(state.currentIndex + 1, state.contentList.length - 1)
            };

        case "Back_Content":
            return {
                ...state,
                currentIndex: Math.max(state.currentIndex - 1, 0)
            };

        default:
            return state;
    }
};

export default testimonicalsReducer;
