export const updateProductAction = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('products').update({
            ...product,
            authorFirstName: profile.firstName || '',
            authorLastName: profile.lastName|| '',
            authorId: authorId || '',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'UPDATE_PRODUCT', product});
        }).catch((err) => {
            dispatch({type: 'UPDATE_PRODUCT_ERROR', err})
        });
    }
};
