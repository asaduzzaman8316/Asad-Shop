
import { CiSearch } from "react-icons/ci";
import useData from "../useData";
type categoriesType = {
  id: number,
  name: string
}
const Search = () => {

  const { categories } = useData()

  return (
    <>
      <div className="flex items-center border border-[#bce3c9] rounded-sm px-2 py-3">
        <div className="border-r border-r-gray-300 px-3 mr-2 ">
          <div className="flex items-center gap-3.5 font-quicksand outline-none">
            <select
              name="" id="">
              <option value="">All Categories</option>
              {
                categories.map((item: categoriesType) => (
                  <option value={item.name} key={item.id}>{item.name}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="flex items-center relative flex-1">
          <input
            className="flex-1 pl-2 font-lato text-sm outline-none py-1"
            type="text"
            placeholder="Search for items..."
          />
          <CiSearch strokeWidth="1" className="absolute right-2 text-2xl text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Search;
