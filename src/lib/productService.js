import { 
  collection, addDoc, updateDoc, deleteDoc, doc, getDoc, getDocs, 
  query, orderBy, serverTimestamp 
} from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';

const PRODUCTS_COLLECTION = 'products';

// 1. Upload Image
// Cloudinary Upload Function
export const uploadProductImage = (file, onProgress) => {
  return new Promise((resolve, reject) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    // 1. Print to console
    console.log("CLOUD NAME:", cloudName);
    console.log("PRESET:", uploadPreset);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        const progress = (event.loaded / event.total) * 100;
        onProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resolve(data.secure_url);
      } else {
        const errorData = JSON.parse(xhr.responseText);
        console.error("Cloudinary Error:", errorData);
        // 2. ALERT THE ERROR TO YOU
        alert("Cloudinary says: " + (errorData.error?.message || 'Unknown error'));
        reject(new Error(errorData.error?.message || 'Cloudinary upload failed'));
      }
    };

    xhr.onerror = () => reject(new Error('Network error during upload'));
    xhr.send(formData);
  });
};

// 2. Create
export const createProduct = async (productData, imageFile, onProgress) => {
  try {
    console.log("1. Starting image upload...");
    const imageUrl = await uploadProductImage(imageFile, onProgress);
    console.log("2. Image uploaded. URL:", imageUrl);

    console.log("3. Saving to Firestore...");
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
      ...productData,
      imageUrl,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log("4. Firestore doc created:", docRef.id);
    return docRef.id;
  } catch (err) {
    console.error("❌ createProduct failed:", err);
    throw err; // re-throw so the UI can show the toast
  }
};

// 3. Update
export const updateProduct = async (id, productData, imageFile, onProgress) => {
  let imageUrl = productData.imageUrl;
  if (imageFile) {
    imageUrl = await uploadProductImage(imageFile, onProgress);
  }
  const docRef = doc(db, PRODUCTS_COLLECTION, id);
  await updateDoc(docRef, {
    ...productData,
    imageUrl,
    updatedAt: serverTimestamp(),
  });
};

// 4. Delete
export const deleteProduct = async (id, imageUrl) => {
  await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
  if (imageUrl && imageUrl.includes('firebasestorage')) {
    try {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    } catch (err) {
      console.warn("Could not delete image:", err.message);
    }
  }
};

// 5. Read All
export const getAllProducts = async () => {
  const q = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 6. Read One
export const getProductById = async (id) => {
  const docRef = doc(db, PRODUCTS_COLLECTION, id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  }
  return null;
};
