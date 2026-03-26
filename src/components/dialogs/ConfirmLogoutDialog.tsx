import { Component, Show, createEffect, onCleanup } from "solid-js";

interface ConfirmLogoutDialogProps {
	open: boolean;
	onConfirm: () => void;
	onCancel: () => void;
}

const ConfirmLogoutDialog: Component<ConfirmLogoutDialogProps> = (props) => {
	let dialogRef: HTMLDivElement | undefined;

	createEffect(() => {
		if (!props.open) {
			return;
		}

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				props.onCancel();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		onCleanup(() => document.removeEventListener("keydown", handleKeyDown));
	});

	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === dialogRef) {
			props.onCancel();
		}
	};

	return (
		<Show when={props.open}>
			<div
				ref={dialogRef}
				class="fixed inset-0 z-[60] flex items-center justify-center bg-dark-900/70 backdrop-blur-sm transition-opacity"
				onClick={handleBackdropClick}
				role="dialog"
				aria-modal="true"
				aria-labelledby="confirm-logout-title"
			>
				<div class="relative w-full max-w-md mx-4 glass-card-strong p-0 overflow-hidden glow-rose">
					<div class="h-1 w-full bg-gradient-to-r from-neon-rose to-neon-amber" />

					<div class="p-6">
						<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neon-rose/10 border border-neon-rose/20 mb-4">
							<svg class="w-6 h-6 text-neon-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
							</svg>
						</div>

						<h3 id="confirm-logout-title" class="text-lg font-semibold text-white text-center mb-2">
							Confirm Sign Out
						</h3>

						<p class="text-sm text-gray-400 text-center">
							Are you sure you want to sign out of your account?
						</p>
					</div>

					<div class="flex items-center gap-3 px-6 pb-6">
						<button
							type="button"
							onClick={props.onCancel}
							class="flex-1 px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
						>
							Cancel
						</button>
						<button
							type="button"
							onClick={props.onConfirm}
							class="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-neon-rose to-neon-rose/80 hover:from-neon-rose/90 hover:to-neon-rose/70 rounded-xl shadow-lg shadow-neon-rose/20 transition-all duration-200"
						>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</Show>
	);
};

export default ConfirmLogoutDialog;
