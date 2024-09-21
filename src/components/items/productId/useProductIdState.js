import { useState } from "react";

export const useProductIdState = () => {
  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productImage, setProductImage] = useState();
  const [productTags, setProductTags] = useState([]);
  const [productFavoriteCount, setProductFavoriteCount] = useState();
  const [commentCount, setCommentCount] = useState();
  const [commentData, setCommentData] = useState([]);
  const [createAt, setCreateAt] = useState();
  const [updateAt, setUpdateAt] = useState('2024. 01. 02');
  const [ownerId, setOwnerId] = useState();
  const [ownerIamge, setOwnerImage] = useState('assets/imgs/user_icon.svg');
  const [ownerNickname, setOwnerNickname] = useState('총명한 판다');

  return {
    productId,
    productName,
    productPrice,
    productDescription,
    productImage,
    productTags,
    productFavoriteCount,
    commentCount,
    commentData,
    createAt,
    updateAt,
    ownerId,
    ownerIamge,
    ownerNickname,
    setProductId,
    setProductName,
    setProductPrice,
    setProductDescription,
    setProductImage,
    setProductTags,
    setProductFavoriteCount,
    setCommentCount,
    setCommentData,
    setCreateAt,
    setUpdateAt,
    setOwnerId,
    setOwnerImage,
    setOwnerNickname,
  }
}