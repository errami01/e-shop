import ProductCardSkeleton from "../components/ProductCardSkeleton";

export default function CategoryPageSkeleton(){
    return(
        <div className="categorypage-container">       
            <div className="products-grid">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    )
}