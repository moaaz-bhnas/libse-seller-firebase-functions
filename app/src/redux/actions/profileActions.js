export const setProfile = (sellerId) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    try {
      // request data
      console.log("sellerId: ", sellerId);
      const doc = await firestore.collection("users").doc(sellerId).get();
      console.log("doc: ", doc);
      const profile = doc.data();
      dispatch({ type: "SET_PROFILE_SUCCESS", profile });
    } catch (err) {
      dispatch({ type: "SET_PROFILE_ERROR", err });
    }
  };
};
