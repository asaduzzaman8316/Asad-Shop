
import Card from './Card'

function DealsOfDay() {
    const dataa = [
        {
            title: "Seeds of Change Organic Quinoa, Brown , & Red Rice",
            rating: 4.0,
            brand: "NestFood",
            currentPrice: 32.85,
            preprice: 33.0,
            src:'https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-5.png'
        },
        {
            title: "Perduce Simple Smart Organics Gluten Free",
            rating: 4.0,
            brand: "Old El Paso",
            currentPrice: 24.85,
            preprice: 26.0,
            src:'https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-6.png'
        },
        {
            title: "Signature Wood-Fired Mushroom and Caramelized",
            rating: 3.0,
            brand: "Progresso",
            currentPrice: 12.85,
            preprice: 13.0,
            src:'https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-7.png'
        },
        {
            title: "Simple Lemonade with Raspberry Juice",
            rating: 5.0,
            brand: "NestFood",
            currentPrice: 15.85,
            preprice: 16.0,
            src:'https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-8.png'
        }
    ]
    return (
        <div className='container mx-auto mt-16 mb-24'>
            <h1 className='text-3xl font-[quicksand] font-bold'>Deals Of The Day</h1>
            <div className='grid lg:grid-cols-4 gap-36 lg:gap-5 justify-between items-center mt-5'>
                {
                    dataa.map((item, idx) => (
                        <Card key={idx} props={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DealsOfDay
