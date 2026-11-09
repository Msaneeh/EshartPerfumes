// Shadcn UI
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DeleteModal = ({ deleteModalOpen, setDeleteModalOpen, productToDelete, confirmDelete }) => {
  return (
    <>
          <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Delete Product?</DialogTitle>
            <DialogDescription className="pt-2">
              Are you sure you want to delete <strong>{productToDelete?.name}</strong>? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-0">
            <button
              onClick={() => setDeleteModalOpen(false)}
              className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={confirmDelete}
              className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Delete Product
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DeleteModal