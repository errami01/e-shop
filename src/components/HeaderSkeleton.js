import './Header.css'
import './HeaderSkeleton.css'
import SearchBar from './SearchBar'
export default function HeaderSkeleton(){
    return(
        <header className="header-container">
            <div className='header-items-container--header'>
                <div 
                    id='barsIconContainer'
                    className='icon-container--header bars-icon-container--header skeleton icon-skeleton--header-skeleton' 
                    >     
                </div>
                <div className='logo logo--header-skeleton skeleton'></div>
                <SearchBar 
                    className='search-bar-container--header' 
                    inputClassName='search-input--header'
                    />
                
                <div className='user-icon-header icon-container--header skeleton icon-skeleton--header-skeleton'>
                </div>
                
                <div 
                    id='cartMenu'
                    className='cartIconLink-header icon-container--header skeleton icon-skeleton--header-skeleton' 
                    >
                </div>   
            </div>    
        </header>
    )
}