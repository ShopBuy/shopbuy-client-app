import React, {useState} from 'react'
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ProductBySubCategoryId from "../product/ProductBySubCategory ";

function ShopBuySubCategory() {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const itemsPerPageFromBanner = (itemsPerPage) => {
        setItemsPerPage(itemsPerPage);
    };

    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Tất Cả" />
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
                <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
                    <ShopSideNav />
                </div>
                <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
                    <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
                    <ProductBySubCategoryId />
                </div>
            </div>
            {/* ================= Products End here ===================== */}
        </div>
    );
};
export default ShopBuySubCategory;
