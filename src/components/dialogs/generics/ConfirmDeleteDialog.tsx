import { Component, Show, createEffect, onCleanup } from "solid-js";
import { Portal } from "solid-js/web";

interface ConfirmDeleteDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  itemName?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteDialog: Component<ConfirmDeleteDialogProps> = (props) => {
  let dialogRef: HTMLDivElement | undefined;

  // Close on Escape key
  createEffect(() => {
    if (!props.open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") props.onCancel();
    };
    document.addEventListener("keydown", handleKeyDown);
    onCleanup(() => document.removeEventListener("keydown", handleKeyDown));
  });

  // Close on backdrop click
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === dialogRef) props.onCancel();
  };

  return (
    <Show when={props.open}>
      <Portal>
        {/* Backdrop */}
        <div
          ref={dialogRef}
          class="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center bg-dark-900/70 backdrop-blur-sm transition-opacity"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-delete-title"
        >
          {/* Dialog */}
          <div class="relative w-full max-w-md mx-4 glass-card-strong p-0 overflow-hidden glow-rose">
            {/* Rose accent stripe */}
            <div class="h-1 w-full bg-gradient-to-r from-neon-rose to-neon-amber" />

            <div class="p-6">
              {/* Icon */}
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neon-rose/10 border border-neon-rose/20 mb-4">
                <svg class="w-6 h-6 text-neon-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>

              {/* Title */}
              <h3 id="confirm-delete-title" class="text-lg font-semibold text-white text-center mb-2">
                {props.title ?? "Confirm Deletion"}
              </h3>

              {/* Description */}
              <p class="text-sm text-gray-400 text-center">
                {props.description ?? "This action cannot be undone. This will permanently delete the selected item."}
              </p>

              {/* Item name highlight */}
              <Show when={props.itemName}>
                <div class="mt-3 px-3 py-2 rounded-lg bg-neon-rose/5 border border-neon-rose/10 text-center">
                  <span class="text-sm font-medium text-neon-rose">{props.itemName}</span>
                </div>
              </Show>
            </div>

            {/* Actions */}
            <div class="flex items-center gap-3 px-6 pb-6">
              <button
                type="button"
                onClick={props.onCancel}
                class="flex-1 px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
              >
                {props.cancelLabel ?? "Cancel"}
              </button>
              <button
                type="button"
                onClick={props.onConfirm}
                class="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-neon-rose to-neon-rose/80 hover:from-neon-rose/90 hover:to-neon-rose/70 rounded-xl shadow-lg shadow-neon-rose/20 transition-all duration-200"
              >
                {props.confirmLabel ?? "Delete"}
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
};

export default ConfirmDeleteDialog;
