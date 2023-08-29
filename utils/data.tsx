
import { useState } from "react";
import { colRef, getDocs, colProductRef } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import {  query, where } from "firebase/firestore";

export const filterPost = async () => {
  console.log("hi")
}

export const fetchByProducts = async (item:string) => {
  const menProductsQuery = query(collection(db, "products"), where("category", "==", item));
  const menProductsSnapshot = await getDocs(menProductsQuery);

  const menProductsData = menProductsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));

  return menProductsData;
};
export const fetchingPost = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const newData = querySnapshot.docs
  .map((doc) => ({...doc.data(), id:doc.id }));

  return newData;
};


export const getProducts = () => {
        getDocs(colRef)
        .then((snapshot) => {
        let arr:any = []
        snapshot.docs.forEach((doc) => {
          arr.push({...doc.data(), id: doc.id})
        })
        
        })
        .catch(err => {
          console.log(err.message)
        })

 }


