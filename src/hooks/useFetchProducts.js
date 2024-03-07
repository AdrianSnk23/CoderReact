import { useState, useEffect } from 'react';

const useFetchProductos = (categoria) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/productos/productos.json");
        const data = await response.json();

        if (categoria) {
            const filteredProducts = data.filter((p) => p.categoria === categoria);
            setProductos(filteredProducts);
        } else {
          const nonPromoProducts = data.filter((p) => p.categoria !== 'promos');
          setProductos(nonPromoProducts);
        }
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
