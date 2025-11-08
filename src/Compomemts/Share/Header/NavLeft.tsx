import useData from "../useData"
type categoriesType = {
  id: number,
  name: string
}
function NavLeft() {
  const { categories } = useData()
  return (
    <div className='bg-[#3BB77E] text-white flex py-2 rounded-md items-center gap-2 px-4'>
      <i className='fa-solid fa-border-all'></i>
      <div className="text-xs lg:text-base font-semibold font-[quicksand]">

        <select
          className="bg-[#3BB77E] rounded-lg outline-none"
          name="" id="">
          <option value="">Browse All Categoris </option>
          {
            categories.map((item: categoriesType) => (
              <option value={item.name} key={item.id}>{item.name}</option>
            ))
          }

        </select>
      </div>
    </div>
  )
}

export default NavLeft
