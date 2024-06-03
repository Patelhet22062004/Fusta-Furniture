"use client"
import Button from "@/components/common/Button"
import { useStore } from "@/lib/context/store-context"
import Modal from "@/modules/common/components/modal"
import Trash from "@/modules/common/icons/trash"
import { Dialog } from "@headlessui/react"
import { useState } from "react"

const RemoveFromCartBtn = ({ id }: { id: string }) => {
  const { deleteItem } = useStore()
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const removeItem = () => {
    deleteItem(id)
    setShowModal(false)
  }

  return (
    <>
      <button
        className="flex items-center gap-x-1 text-rose-500 hover:text-rose-600 duration-300"
        onClick={openModal}
      >
        <Trash size={14} />
        <span>Remove</span>
      </button>
      <Modal size="small" isOpen={showModal} close={closeModal}>
        <p className="text-heading5 mb-4">Remove item</p>
        <p className="text-caption1 text-gray-500">
          Are you sure you would like to remove this item from your cart?
        </p>

        <div className="mt-4 flex gap-4 items-center flex-wrap">
          <Button
            variant="fill"
            color="green"
            className=""
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            variant="fill"
            className="!bg-rose-200 !text-rose-900 duration-300"
            onClick={removeItem}
          >
            Remove
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default RemoveFromCartBtn
