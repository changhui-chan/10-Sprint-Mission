import Header from "components/Header";
import AllProductsHeader from "components/items/AllProductsHeader";
import BestProductsHeader from "components/items/BestProductsHeader";
import ItemPageNation from "components/items/ItemPageNation";
import ProductCard from "components/items/ProductCard";
import { useItemsSharedData } from "components/items/useItemsSharedData";

interface ProductCardProps {
  latestData: any;
  setLatestData: (data: any) => void;
  favoriteData: any;
  setFavoriteData: (data: any) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: any;
  setError: (error: any) => void;
  totalCount: number;
  setTotalCount: (count: number) => void;
  totalPage: number;
  setTotalPage: (page: number) => void;
  responsiveAllProductCount: number;
  setResponsiveAllProductCount: (count: number) => void;
  responsiveFavoriteProductCount: number;
  setResponsiveFavoriteProductCount: (count: number) => void;
  sortProduct: string;
  setSortProduct: (sort: string) => void;
  pageNumber: number;
  setPageNumber: (page: number) => void;
  isEmptyHeart: boolean;
  setIsEmptyHeart: (isEmpty: boolean) => void;
  isBestProduct: boolean;
}


const Items = () => {
  const {
    latestData,
    setLatestData,
    favoriteData,
    setFavoriteData,
    loading,
    setLoading,
    error,
    setError,
    totalCount,
    setTotalCount,
    totalPage,
    setTotalPage,
    responsiveAllProductCount,
    setResponsiveAllProductCount,
    responsiveFavoriteProductCount,
    setResponsiveFavoriteProductCount,
    sortProduct,
    setSortProduct,
    pageNumber,
    setPageNumber,
    isEmptyHeart,
    setIsEmptyHeart,
    isDropdown,
    setIsDropdown,
    maxVisiblePage,
    setMaxVisiblePage,
  } = useItemsSharedData();

  return (
    <div>
      <Header />
      <BestProductsHeader />
      <ProductCard 
        latestData={latestData}
        setLatestData={setLatestData}
        favoriteData={favoriteData}
        setFavoriteData={setFavoriteData}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        setTotalPage={setTotalPage}
        responsiveAllProductCount={responsiveAllProductCount} 
        setResponsiveAllProductCount={setResponsiveAllProductCount}
        responsiveFavoriteProductCount={responsiveFavoriteProductCount}
        setResponsiveFavoriteProductCount={setResponsiveFavoriteProductCount}
        sortProduct={sortProduct}
        pageNumber={pageNumber}
        isEmptyHeart={isEmptyHeart}
        setIsEmptyHeart={setIsEmptyHeart}
        isBestProduct={true}
      />
      <AllProductsHeader 
        responsiveAllProductCount={responsiveAllProductCount} 
        isDropdown={isDropdown} 
        setIsDropdown={setIsDropdown} 
        sortProduct={sortProduct} 
        setSortProduct={setSortProduct} 
      />
      <ProductCard 
        latestData={latestData}
        setLatestData={setLatestData}
        favoriteData={favoriteData}
        setFavoriteData={setFavoriteData}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        setTotalPage={setTotalPage}
        responsiveAllProductCount={responsiveAllProductCount}
        setResponsiveAllProductCount={setResponsiveAllProductCount}
        responsiveFavoriteProductCount={responsiveFavoriteProductCount}
        setResponsiveFavoriteProductCount={setResponsiveFavoriteProductCount}
        sortProduct={sortProduct}
        pageNumber={pageNumber}
        isEmptyHeart={isEmptyHeart}
        setIsEmptyHeart={setIsEmptyHeart}
        isBestProduct={false}
      />
      <ItemPageNation 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber} 
        totalPage={totalPage} 
        maxVisiblePage={maxVisiblePage}
      />
    </div>
  );
}

export default Items;
