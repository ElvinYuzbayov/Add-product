import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Modal from "../components/modal/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { createDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useLocation } from "react-router-dom";
function Products() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { modal } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.data);
  const loc = location && location.search.split("=")[1];
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInsfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };
  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id === loc.id));
    }
  }, [loc, data]);
  const [productInsfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    e.preventDefault();
    if (type === "url") {
      const file = e.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        setProductInfo((prev) => ({
          ...prev,
          [e.target.name]: imageURL,
        }));
      }
    } else {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: [e.target.value],
      }));
    }
  };
  const modalContent = (
    <>
      <Input
        value={productInsfo && productInsfo.name}
        type={"text"}
        placeholder={"Məhsul əlavə et"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        value={productInsfo && productInsfo.price}
        type={"text"}
        placeholder={"Qiymət əlavə et"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Şəkil seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button btnText={loc ? "Yenilə" : "Əlavə et"} onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <div className="p-4">
        {data?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
      {modal && <Modal content={modalContent} title={"Məhsul yerləşdir"} />}
    </div>
  );
}

export default Products;
