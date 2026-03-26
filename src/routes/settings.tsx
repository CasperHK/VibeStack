import { Component, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";
import NestedPageLayout from "@layouts/NestedPageLayout";
import Card from "~/components/ui/Card";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";
import { useTheme } from "~/context/ThemeContext";

const Toggle: Component<{ checked: boolean; onChange: () => void; label: string; description?: string }> = (props) => (
  <div class="flex items-start justify-between gap-4 py-3">
    <div class="min-w-0">
      <p class="text-sm font-medium text-white">{props.label}</p>
      {props.description && <p class="text-xs text-gray-400 mt-0.5">{props.description}</p>}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={props.checked}
      onClick={props.onChange}
      class={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 focus:outline-none ${props.checked ? "bg-neon-cyan" : "bg-white/10"}`}
    >
      <span
        class={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${props.checked ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  </div>
);

const securityItems = [
  { label: "Two-Factor Authentication", status: "Enabled", statusClass: "text-neon-emerald" },
  { label: "Active Sessions", status: "2 devices", statusClass: "text-neon-cyan" },
  { label: "Last Login", status: "Today at 09:41", statusClass: "text-gray-400" },
];

const Settings: Component = () => {
  const { theme, toggleTheme } = useTheme();
  const [storeName, setStoreName] = createSignal("VibeStack Store");
  const [currency, setCurrency] = createSignal("USD");
  const [taxRate, setTaxRate] = createSignal("7.5");
  const [emailNotif, setEmailNotif] = createSignal(true);
  const [orderAlerts, setOrderAlerts] = createSignal(true);
  const [marketing, setMarketing] = createSignal(false);
  const [saved, setSaved] = createSignal(false);

  const handleSave = (e: Event) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <NestedPageLayout>
      <Title>Settings — VibeStack</Title>

      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white mb-1">Settings</h1>
        <p class="text-sm text-gray-400">Manage application preferences and store configuration</p>
      </div>

      {saved() && (
        <div class="mb-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-neon-emerald/10 border border-neon-emerald/20 text-sm text-neon-emerald">
          <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Appearance */}
        <Card title="Appearance" subtitle="Customize how VibeStack looks" glow="cyan">
          <div class="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <div class="flex items-center gap-3">
              <div class={`flex items-center justify-center w-9 h-9 rounded-lg ${theme() === "dark" ? "bg-neon-violet/10 ring-1 ring-neon-violet/20" : "bg-amber-400/10 ring-1 ring-amber-400/20"}`}>
                {theme() === "dark" ? (
                  <svg class="w-5 h-5 text-neon-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                ) : (
                  <svg class="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )}
              </div>
              <div>
                <p class="text-sm font-medium text-white capitalize">{theme() === "dark" ? "Dark Mode" : "Light Mode"}</p>
                <p class="text-xs text-gray-400">{theme() === "dark" ? "Easy on the eyes at night" : "Bright interface for daytime"}</p>
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={theme() === "dark"}
              onClick={toggleTheme}
              class={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 focus:outline-none ${theme() === "dark" ? "bg-neon-violet" : "bg-amber-400"}`}
            >
              <span
                class={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${theme() === "dark" ? "translate-x-5" : "translate-x-0"}`}
              />
            </button>
          </div>
        </Card>

        {/* Store Configuration */}
        <Card title="Store Configuration" subtitle="Basic store settings">
          <div class="space-y-4">
            <Input
              id="store-name"
              label="Store Name"
              value={storeName()}
              onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setStoreName(e.currentTarget.value)}
              placeholder="My Store"
            />

            <div>
              <label for="currency" class="block mb-2 text-sm font-medium text-gray-300">Currency</label>
              <select
                id="currency"
                value={currency()}
                onChange={(e) => setCurrency(e.currentTarget.value)}
                class="w-full px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all duration-200"
              >
                <option value="USD" class="bg-dark-800">USD — US Dollar</option>
                <option value="EUR" class="bg-dark-800">EUR — Euro</option>
                <option value="GBP" class="bg-dark-800">GBP — British Pound</option>
                <option value="JPY" class="bg-dark-800">JPY — Japanese Yen</option>
                <option value="CAD" class="bg-dark-800">CAD — Canadian Dollar</option>
              </select>
            </div>

            <Input
              id="tax-rate"
              label="Tax Rate (%)"
              type="number"
              value={taxRate()}
              onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setTaxRate(e.currentTarget.value)}
              placeholder="0.00"
            />
          </div>
        </Card>

        {/* Notifications */}
        <Card title="Notifications" subtitle="Choose what you hear about">
          <div class="divide-y divide-white/5">
            <Toggle
              checked={emailNotif()}
              onChange={() => setEmailNotif(!emailNotif())}
              label="Email Notifications"
              description="Receive updates via email for account activity"
            />
            <Toggle
              checked={orderAlerts()}
              onChange={() => setOrderAlerts(!orderAlerts())}
              label="Order Alerts"
              description="Get notified immediately when new orders arrive"
            />
            <Toggle
              checked={marketing()}
              onChange={() => setMarketing(!marketing())}
              label="Marketing Emails"
              description="Receive tips, product updates, and special offers"
            />
          </div>
        </Card>

        {/* Security */}
        <Card title="Security" subtitle="Protect your account">
          <div class="space-y-3">
            {securityItems.map((item) => (
              <div class="flex items-center justify-between py-2.5 px-3 rounded-lg bg-white/5">
                <span class="text-sm text-gray-300">{item.label}</span>
                <span class={`text-xs font-medium ${item.statusClass}`}>{item.status}</span>
              </div>
            ))}
            <div class="pt-2">
              <Button variant="secondary" size="sm">
                Manage Security
              </Button>
            </div>
          </div>
        </Card>

        {/* Save Actions */}
        <div class="xl:col-span-2 flex justify-end gap-3 pt-2">
          <Button variant="secondary" type="button">Reset to Defaults</Button>
          <Button type="submit">Save Settings</Button>
        </div>

        {/* Danger Zone */}
        <div class="xl:col-span-2">
          <Card title="Danger Zone" subtitle="Irreversible and destructive actions" glow="rose">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-neon-rose/5 border border-neon-rose/10">
              <div>
                <p class="text-sm font-semibold text-neon-rose">Delete Account</p>
                <p class="text-xs text-gray-400 mt-0.5">
                  Permanently delete your account, all data, orders, and settings. This action cannot be undone.
                </p>
              </div>
              <Button variant="danger" size="sm" type="button" class="shrink-0">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </form>
    </NestedPageLayout>
  );
};

export default Settings;
