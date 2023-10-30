import ProductCardSkeleton from "./ProductCardSkeleton";
export default function CategoryContainerSkeleton(){
    return(
        <div className="category-container">
            <header className="category-name " >
                <div className="skeleton" style={{height: "60%", width: "20px", borderRadius:"5px"}} ></div>
            </header>
            <div className="products-container">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    )
}