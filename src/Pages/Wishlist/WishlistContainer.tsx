import LastService from "../../Compomemts/Share/LastService"
import SubScribe from "../../Compomemts/Share/Subscribe"
import Wishlist from "./Wishlist"

function WishlistContainer() {
    return (
        <div className="container mx-auto px-4 lg:px-0">
            <Wishlist />
            <SubScribe src="/banner-13.png" />
            <LastService />
        </div>
    )
}

export default WishlistContainer
