import { useEffect, useState } from "react";

const PageUseEffectDemo = () => {
  const [name, setName] = useState("Aulona");
  const [products, setProducts] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const getProducts = async () => {
      try {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      } catch (error) {
        console.error("Error to load data");
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      } catch (error) {
        console.error("Error to load data");
      }
    };

    getProducts();
  }, [name]);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(products);

  return (
    <>
      <h1>I am {name}</h1>
      <button onClick={() => setName("Gazmend")}>Change name</button>
      <p>
        Current mouse postin: {position.x} - {position.y}
      </p>
    </>
  );
};

export default PageUseEffectDemo;
