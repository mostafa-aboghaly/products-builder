import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { memo, type ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, close, title, description, children }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen backdrop-brightness-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl backdrop-blur-3xl duration-200 ease-in data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="font-medium text-lg text-black flex items-center justify-between"
                >
                  {title}
                </DialogTitle>
              )}
              {description && (
                <p className="text-sm text-gray-500 mt-3">{description}</p>
              )}
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default memo(Modal);
