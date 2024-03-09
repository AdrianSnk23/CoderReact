import { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const useFetchProductos = (categoria) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      const productosCollection = collection(db, 'producto');
      let q;

      if (categoria) {
        q = query(productosCollection, where('categoria', '==', categoria));
      } else {
        q = query(productosCollection, where('categoria', '!=', 'promos'));
      }

      try {
        const querySnapshot = await getDocs(q);
        const fetchedProducts = [];

        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() });
        });

        setProductos(fetchedProducts);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Error en el fetch: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoria]);

  return { productos, loading, error };
};

export default useFetchProductos;