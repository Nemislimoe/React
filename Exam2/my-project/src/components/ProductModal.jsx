import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ProductModal({ product, isOpen, onClose }) {
  if (!product) return null;
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Panel className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500">
            <XMarkIcon className="w-6 h-6" />
          </button>
          <Dialog.Title className="text-xl font-semibold mb-2">{product.title}</Dialog.Title>
          <Dialog.Description className="text-sm text-gray-600 mb-4">{product.desc}</Dialog.Description>
          <div className="mb-4">Ціна: <span className="font-bold">{product.price} UAH</span></div>
          <div className="text-sm text-gray-700">
            Детальна інформація про товар. Тут можна реалізувати tabs або accordion через headlessui.
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
