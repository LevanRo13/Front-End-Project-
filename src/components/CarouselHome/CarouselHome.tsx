import Carousel from 'react-bootstrap/Carousel';



const CarouselHome = () => {

    return (
        <Carousel>


            <Carousel.Item> 
                <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit: 'cover', maxWidth:"100%"}}
                src="https://www.smarttravel.news/wp-content/uploads/2023/07/Copia-de-banner-email-1-2000x500.png" alt="1"/>    
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item> 
            <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit:'cover'}}
                src="https://static.vecteezy.com/system/resources/previews/002/294/824/non_2x/sales-index-web-banner-design-free-vector.jpg" alt="2"/>              
                <Carousel.Caption>
   
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <img
                className='d block w-100'
                style={{maxHeight:"400px", objectFit:'cover'}}
                src="https://www.piercecountywa.gov/ImageRepository/Document?documentID=118495" alt="3"/> 
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>


    </Carousel>
    )

}

export default CarouselHome