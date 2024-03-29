import React from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
            <p className="text-xl font-semibold">${productInfo.price}</p>
            <p className="text-base text-gray-600">{productInfo.description}</p>
            <p className="text-sm">Be the first to leave a review.</p>
            <p className="font-medium text-lg">
                <span className="font-normal">Colors:</span>
                {productInfo?.variantListDto?.map((variant, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={`colorCheckbox-${index}`}
                            name="colorOptions"
                            value={variant?.colorDto.name}
                        />
                        <label htmlFor={`colorCheckbox-${index}`}>
                            {" "+variant?.colorDto.name}
                        </label>
                    </div>
                ))}
            </p>
            <p className="font-medium text-lg">
                <span className="font-normal">Size:</span>
                {productInfo?.variantListDto?.map((variant, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            id={`colorCheckbox-${index}`}
                            name="colorOptions"
                            value={variant?.sizeDto.name}
                        />
                        <label htmlFor={`colorCheckbox-${index}`}>
                            {" "+variant?.sizeDto.name}
                        </label>
                    </div>
                ))}
            </p>
            <button
                className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
            >
                Add to Cart
            </button>
            <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span> Spring
                collection, Streetwear, Women Tags: featured SKU: N/A
            </p>
        </div>
    );
};

export default ProductInfo;
