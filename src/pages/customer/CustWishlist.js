import EmptyCustPage from "../../components/EmptyCustPage"
export default function CustWishlist(){
    return(
        <div className="custWishlist-container customer-page-container">
            <h1 className="title--customerLayout">Your Wishlist</h1>
            <EmptyCustPage
                icon={<i className="fa-solid fa-heart"></i>}
                notification='Your wishlist is empty!'
                explanation='Found something you like? Tap the heart icon next to the item to add it to your wishlist! All of your saved items will appear here.'
                btnText='CONTINUE SHOPPING'
            />
        </div>
    )
}