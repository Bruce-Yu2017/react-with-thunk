import axios from 'axios';

// export const fetchAllList = () => {
//     return (dispatch) => {
//         axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
//             console.log('res: ', res.data);
//             dispatch({
//                 type: "FETCH_LIST",
//                 payload: res.data
//             })
//         })
//     }
// }

export const fetchAllList = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type: "FETCH_LIST",
        payload: response.data
    })
}