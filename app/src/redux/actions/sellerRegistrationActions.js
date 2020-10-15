import { functions } from "../../lib/firebase/client";

export const registerSeller = (seller, setIsSeller, router) => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(seller);
    const {
      uid,
      email,
      firstName,
      lastName,
      phoneNumber,
      storeName,
      address,
      openingHour,
      closingHour,
    } = seller;

    firestore
      .collection("sellers")
      .doc(uid)
      .set({
        firstName,
        lastName,
        phoneNumber,
        storeName,
        address,
        openingHour,
        closingHour,
      })
      .then(() => {
        dispatch({ type: "SELLER_REGISTRATION_SUCCESS" });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "SELLER_REGISTRATION_ERROR", err });
      });

    firestore
      .collection("users")
      .doc(uid)
      .update({ isSeller: true })
      .then(() => {
        setIsSeller(true);
      });
  };
};
