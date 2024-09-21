import Header from "components/Header";
import BackButton from "components/items/productId/BackButton";
import Inquire from "components/items/productId/Inquire";
import InquireItem from "components/items/productId/InquireItem";
import ProductImage from "components/items/productId/ProductImage";
import ProductSummary from "components/items/productId/ProductSummary";
import { useProductIdState } from "components/items/productId/useProductIdState";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchData } from "api/fetchData";
import { API_USEDS_PRODUCT_INFORMATION, API_USER_COMMENTS } from "config/api";
import styles from './ProductId.module.css';
import Line from "components/items/productId/Line";

const ProductId = () => {
  const {
    productName,
    productPrice,
    productDescription,
    productImage,
    productTags,
    productFavoriteCount,
    commentData,
    updateAt,
    ownerIamge,
    ownerNickname,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductTags,
    setProductFavoriteCount,
    setCommentCount,
    setCommentData,
  } = useProductIdState();

  const location = useLocation();
  const id = location.state.product.id;

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData(`${API_USEDS_PRODUCT_INFORMATION}/${id}`, {productId: id});
      const product = response.data;
      setProductName(product.name);
      setProductPrice(product.price);
      setProductDescription(product.description);
      setProductImage(product.images);
      setProductTags(product.tags);
      setProductFavoriteCount(product.favoriteCount);
    }

    asyncFunction();

  }, [id, setProductName, setProductPrice, setProductDescription, setProductImage, setProductTags, setProductFavoriteCount]);

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetchData(`${API_USER_COMMENTS}/${id}/comments`, {productId: id, limit: 3});
      setCommentCount(response.data.list.length);
      setCommentData(response.data.list);
    }

    asyncFunction();

  }, [id, setCommentCount, setCommentData]);

  return (
    <div>
      <Header />
      <div className={styles['card-container']}>
        <ProductImage productImage={productImage} />
        <ProductSummary
          productName={productName}
          productPrice={productPrice}
          productDescription={productDescription}
          productTags={productTags}
          productFavoriteCount={productFavoriteCount}
          ownerNickname={ownerNickname}
          ownerIamge={ownerIamge}
          updateAt={updateAt}
        />
      </div>
      <Line marginTop={40} marginBottom={40}/>
      <Inquire />
      {
        commentData && commentData.map((user, index) => (
          <>
            <InquireItem
              key={index}
              content={user.content}
              userNickname={user.writer.nickname}
              userImage={user.writer.image}
              updateAt={user.updatedAt}
              />
            <Line marginTop={12} marginBottom={24}/>
          </>
        ))
      }
      <BackButton />
    </div>
  );
};
export default ProductId;