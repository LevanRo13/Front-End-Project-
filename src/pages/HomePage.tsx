import CarouselHome from "../components/CarouselHome/CarouselHome"
import Categories from "../components/Categories/categories"

const HomePage = () => {
    return (
        <>
        <div style={{backgroundColor: "#333333"}}>
        <CarouselHome/>
        </div>
        <br />
        <div>
        <Categories/>
        </div>
        
        </>
    )
}

export default HomePage