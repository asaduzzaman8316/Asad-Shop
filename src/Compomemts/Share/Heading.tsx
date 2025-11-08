

function Heading({ title, size }: { title: string, size: string }) {
    return (
        <div>
            <h1 className={`about-hero__title text-2xl lg:${size} font-semibold`}>{title}</h1>
        </div>
    )
}

export default Heading
