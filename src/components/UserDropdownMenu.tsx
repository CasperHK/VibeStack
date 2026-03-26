import { Component, createSignal } from "solid-js";
import ConfirmLogoutDialog from "@dialogs/ConfirmLogoutDialog";

const UserDropdownMenu: Component = () => {
	const [logoutDialogOpen, setLogoutDialogOpen] = createSignal(false);

	const openLogoutDialog = () => {
		setLogoutDialogOpen(true);
	};

	const closeLogoutDialog = () => {
		setLogoutDialogOpen(false);
	};

	const confirmLogout = () => {
		setLogoutDialogOpen(false);
		window.location.href = "/login";
	};

	return (
		<>
			<div
				class="z-50 hidden bg-dark-800 border border-white/10 rounded-xl shadow-2xl w-52"
				id="user-dropdown"
			>
				<div class="px-4 py-3 border-b border-white/10">
					<p class="text-sm font-medium text-gray-200">Alex Chen</p>
					<p class="text-xs text-gray-500 truncate">alex@vibestack.dev</p>
				</div>
				<ul class="py-1">
					<li>
						<a href="/profile" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
							<svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
							Profile
						</a>
					</li>
					<li>
						<a href="/settings" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
							<svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							Settings
						</a>
					</li>
					<li>
						<a href="#" class="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-gray-200 transition-colors">
							<svg class="w-4 h-4 mr-2.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
							</svg>
							Billing
						</a>
					</li>
				</ul>
				<div class="border-t border-white/10">
					<button
						type="button"
						onClick={openLogoutDialog}
						class="w-full flex items-center px-4 py-2.5 text-sm text-neon-rose hover:bg-neon-rose/5 transition-colors"
					>
						<svg class="w-4 h-4 mr-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
						</svg>
						Sign Out
					</button>
				</div>
			</div>

			<ConfirmLogoutDialog
				open={logoutDialogOpen()}
				onCancel={closeLogoutDialog}
				onConfirm={confirmLogout}
			/>
		</>
	);
};

export default UserDropdownMenu;
