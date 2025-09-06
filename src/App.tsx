import { v4 as uuidv4 } from "uuid";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import { useCallback, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Select from "./components/ui/Select";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { categories } from "./data";
import type { TProductNames } from "./types";
import toast, { Toaster } from "react-hot-toast";
import { Package } from "lucide-react";

const App = () => {
  const defaultProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /*-----STATES-----*/
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /* -----HANDLERS----- */
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const closeEditModal = () => {
    setTempColors([]);
    setIsOpenEditModal(false);
  };
  const openEditModal = useCallback(() => setIsOpenEditModal(true), []);
  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = useCallback(() => setIsOpenConfirmModal(true), []);
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setProduct((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );
  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    close();
  };

  const removeProductHandler = () => {
    const filtered = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filtered);
    closeConfirmModal();
    toast("Product has been removed", {
      style: { backgroundColor: "black", color: "white" },
      icon: "🔔",
      duration: 2000,
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const isValid = Object.values(errors).every((value) => value === "");
    if (!isValid) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuidv4(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempColors([]);
    close();
    toast("Product has been added", {
      style: { backgroundColor: "black", color: "white" },
      icon: "🔔",
      duration: 2000,
    });
  };

  const editHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const isValid = Object.values(errors).every((value) => value === "");
    if (!isValid) {
      setErrors(errors);
      return;
    }

    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: productToEdit.colors.concat(tempColors),
    };
    setProducts(updatedProducts);
    setProductToEdit(defaultProduct);
    setTempColors([]);
    closeEditModal();

    toast("Product has been edited", {
      style: { backgroundColor: "black", color: "white" },
      icon: "🔔",
      duration: 2000,
    });
  };

  /* -----RENDERS----- */
  const renderProductList = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      index={index}
      setProductToEditIndex={setProductToEditIndex}
      openConfirmModal={openConfirmModal}
    />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        className="mb-2 text-sm font-medium text-gray-700"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
        data-autofocus
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderCircleColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TProductNames
  ) => (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-gray-700" htmlFor={id}>
        {label}
      </label>
      <Input
        type="text"
        id={id}
        name={name}
        value={productToEdit[name]}
        onChange={onChangeEditHandler}
        data-autofocus
      />
      <ErrorMessage msg={errors[name]} />
    </div>
  );

  return (
    <>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className=" p-2 rounded-lg shrink-0 bg-indigo-600">
                <Package className="h-6 w-6 text-white" />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-indigo-600">
                  Product Builder
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your product catalog
                </p>
              </div>
            </div>

            <div className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-md">
              {products.length} Products
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="min-h-screen px-4 sm:px-8 py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Button
          className="block mx-auto mb-10 px-8 sm:px-10 font-medium bg-indigo-600 hover:bg-indigo-700 text-white py-2 shadow-lg hover:shadow-xl transition-all duration-200 rounded-full"
          onClick={open}
          width="max-w-fit"
        >
          Add Product
        </Button>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 place-items-stretch">
            {renderProductList}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <Package className="h-12 w-12 text-gray-400 mb-3" />
            <p className="text-lg font-medium">No products yet</p>
            <p className="text-sm">Add your first product to get started</p>
          </div>
        )}

        {/* ADD PRODUCT MODAL */}
        <Modal isOpen={isOpen} close={close} title="ADD A NEW PRODUCT">
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputs}
            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <div className="flex flex-wrap items-center space-x-1 my-4">
              {renderCircleColors}
            </div>
            <div className="flex flex-wrap items-center space-x-1 my-4">
              {tempColors.map((color) => (
                <span
                  className="p-1 mr-1 mb-1 text-xs text-white rounded-md"
                  style={{ backgroundColor: color }}
                  key={color}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-500 hover:bg-indigo-600">
                Submit
              </Button>
              <Button
                type="button"
                className="border border-gray-300 text-white bg-gray-400 hover:bg-gray-500"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* EDIT PRODUCT MODAL */}
        <Modal
          isOpen={isOpenEditModal}
          close={closeEditModal}
          title="EDIT PRODUCT"
        >
          <form className="space-y-3" onSubmit={editHandler}>
            {renderProductEditWithErrorMsg("title", "Product Title", "title")}
            {renderProductEditWithErrorMsg(
              "description",
              "Product Description",
              "description"
            )}
            {renderProductEditWithErrorMsg(
              "imageURL",
              "Product Image URL",
              "imageURL"
            )}
            {renderProductEditWithErrorMsg("price", "Product Price", "price")}
            <Select
              selected={productToEdit.category}
              setSelected={(value) =>
                setProductToEdit({ ...productToEdit, category: value })
              }
            />
            <div className="flex flex-wrap items-center space-x-1 my-4">
              {renderCircleColors}
            </div>
            <div className="flex flex-wrap items-center space-x-1 my-4">
              {productToEdit.colors.concat(tempColors).map((color) => (
                <span
                  className="p-1 mr-1 mb-1 text-xs text-white rounded-md"
                  style={{ backgroundColor: color }}
                  key={color}
                >
                  {color}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-500 hover:bg-indigo-600">
                Submit
              </Button>
              <Button
                type="button"
                className="border border-gray-300 text-white bg-gray-400 hover:bg-gray-500"
                onClick={closeEditModal}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* DELETE PRODUCT CONFIRM MODAL */}
        <Modal
          isOpen={isOpenConfirmModal}
          close={closeConfirmModal}
          title="Are you sure you want to remove this Product from your Store?"
          description="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
        >
          <div className="flex items-center space-x-3">
            <Button
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={removeProductHandler}
            >
              Yes, remove
            </Button>
            <Button
              type="button"
              className="border border-gray-300 text-white bg-gray-400 hover:bg-gray-500"
              onClick={closeConfirmModal}
            >
              Cancel
            </Button>
          </div>
        </Modal>
        <Toaster />
      </main>
    </>
  );
};

export default App;
