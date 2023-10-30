import CategoryContainerSkeleton from "../components/CategoryContainerSkeleton";

export default function HomeSkeleton(){
    return(
        <div className="home-container">
             <CategoryContainerSkeleton />
             <CategoryContainerSkeleton />
             <CategoryContainerSkeleton />
             <CategoryContainerSkeleton />
        </div>  
    )
}