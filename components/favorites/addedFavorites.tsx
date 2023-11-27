import { app, db } from "@/firebaseConfig";
import { CollectionReference, DocumentData, DocumentReference, QueryDocumentSnapshot, QuerySnapshot, collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const AddedFavorites = () => {
    const [data, setData] = useState<any[]>([]);
    const [likedProducts, setLikedProducts] = useState([]);

    // useEffect(() => {
    //   const fetchLikedProducts = async () => {
       
    //     const userRef = db.collection('users').doc('1');
    //     const likedProductsSnapshot = await userRef.collection('likedProducts').get();
    //     const products = likedProductsSnapshot.docs.map((doc: { id: any; }) => doc.id);
    //     setLikedProducts(products);
    //   };
  
    //   fetchLikedProducts();
    // }, [1]);
    useEffect(() => {
        const userId = '1'; // Assuming 'userId' is a string identifier for the user
    
        const fetchLikedProducts = async () => {
          try {
            const userDocRef = doc(db, 'users', userId);
            const likedProductsCollectionRef = collection(userDocRef, 'likedProducts');
    
            const querySnapshot = await getDocs(likedProductsCollectionRef);
    
            querySnapshot.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data());
            });
          } catch (error) {
            console.error('Error fetching liked products:', error);
          }
        };
    
        fetchLikedProducts();
      }, [1]);


    return (
      <div>
        <h1>My Liked Products</h1>
        <ul>
          {likedProducts.map(productId => (
            <li key={productId}>
              {/* Visa gillade produkter här */}
            </li>
          ))}
        </ul>
      </div>
    );
    //in database if user
    //  fetch if right user 
    // match like 


    // useEffect(() => {
    //   const fetchByProducts = async () => {
    //     const menProductsQuery = query(collection(db, 'products'), where('category', '==', item));
    //     const menProductsSnapshot = await getDocs(menProductsQuery);
    //     const menProductsData = menProductsSnapshot.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id
    //     }));
  
    //     setData(menProductsData);
    //   };
  
    //   fetchByProducts();
    // }, [item]);

//    return ( <></> );
}
 
export default AddedFavorites;