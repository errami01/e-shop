import {nanoid} from 'nanoid'
export function useRate(rate){
        const starIcons = []
        let counter=1;
        while(counter <= rate){
            starIcons.push(<i key={nanoid()} className="fa-solid fa-star gold-star"></i>)
            counter++
        }
        const remaining = counter-rate
        if( remaining < 1){
            if(remaining > 0.75)  starIcons.push(<i key={nanoid()} className="fa-regular fa-star gold-star"></i>)
            else if(remaining > 0.25)  starIcons.push(<i key={nanoid()} className="fa-solid fa-star-half gold-star"></i>)
            else starIcons.push(<i key={nanoid()} className="fa-solid fa-star gold-star"></i>)
        }
        while(starIcons.length <5){
            starIcons.push(<i key={nanoid()} className="fa-regular fa-star gold-star"></i>)
        }
        return starIcons
}