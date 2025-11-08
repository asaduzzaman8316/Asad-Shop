import Heading from "../../../../Compomemts/Share/Heading"


function StatusTop() {
    const card = [{
        title: "Who we are",
        para: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    }, {
        title: "Our history",
        para: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    }, {
        title: "Our mission",
        para: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in."
    }
    ]
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-between gap-5 items-center text-center '>
            {
                card.map((item, idx) => (
                    <div key={idx}>
                        <Heading size='text-4xl' title={item.title} />
                        <p className='text-gray-600 pt-5'>{item.para}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default StatusTop
