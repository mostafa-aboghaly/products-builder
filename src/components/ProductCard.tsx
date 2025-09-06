import { memo } from "react";
import type { IProduct } from "../interfaces";
import { formatNumberWithCommas, textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";
import { Edit, Trash2 } from "lucide-react";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  index: number;
  setProductToEditIndex: (value: number) => void;
  openConfirmModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  index,
  setProductToEditIndex,
  openConfirmModal,
}: IProps) => {
  const { description, imageURL, price, title, category, colors } = product;

  /*-----HANDLERS-----*/
  const onEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index);
  };
  const onRemove = () => {
    setProductToEdit(product);
    openConfirmModal();
  };

  /*-----RENDER-----*/
  const renderCircleColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="relative w-full h-full rounded-2xl flex flex-col hover:scale-[1.02] duration-200 group overflow-hidden hover:shadow-2xl bg-white border shadow-md">
      <div className="overflow-hidden flex items-center justify-center">
        <Image
          imageURL={imageURL}
          alt={title}
          className="h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-3">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-2">
          {textSlicer(description)}
        </p>

        <div className="flex items-center flex-wrap gap-1 mb-3">
          {colors.length ? (
            renderCircleColors
          ) : (
            <p className="text-xs text-gray-400">No available colors</p>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="bg-gradient-to-r from-emerald-400 to-green-500 text-white font-bold px-3 py-1 rounded-full shadow-sm text-sm">
            ${formatNumberWithCommas(price)}
          </span>
          <div className="flex items-center gap-2 font-semibold text-sm">
            {product.category.name}
            <Image
              imageURL={category.imageURL}
              alt={category.name}
              className="rounded-full w-8 h-8 object-cover border"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 mt-4 px-3 pb-3">
        <Button
          className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm shadow-sm"
          onClick={onEdit}
        >
          <Edit className="h-4 w-4" />
          Edit
        </Button>
        <Button
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-sm shadow-sm"
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default memo(ProductCard);
