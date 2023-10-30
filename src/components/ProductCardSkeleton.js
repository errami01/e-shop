export default function ProductCardSkeleton(){
    return(
        <div className="product-container">
            <section className='product-image-section '>
                <div className="product-image skeleton" style={{height: "90%", borderRadius: 10}}/>
            </section>
            <section className='name-and-rating'>
                <div className='price skeleton' style={{width: "40%", height: "20px", borderRadius: 5}}></div>
                <div 
                    className="product-name skeleton" 
                    style={{width: "90%", height: "20px", borderRadius: 5}}
                    >
                </div>    
                <div className="product-rating" style={{height: "20px", width: '80%'}}>
                    <span className='count skeleton' style={{height: "100%", width: "20%", borderRadius: 5}}></span>
                    <span className='count skeleton' style={{height: "100%", width: "100%", borderRadius: 5}}></span>
                </div>
            </section>
        </div>
    )
}