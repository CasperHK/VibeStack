import { Component, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";
import NestedPageLayout from "@layouts/NestedPageLayout";
import Card from "~/components/ui/Card";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";

const Profile: Component = () => {
  const [name, setName] = createSignal("Alex Chen");
  const [email, setEmail] = createSignal("alex@vibestack.dev");
  const [phone, setPhone] = createSignal("+1 (555) 123-4567");
  const [bio, setBio] = createSignal("Senior full-stack developer passionate about building great products with cutting-edge technologies.");
  const [saved, setSaved] = createSignal(false);

  const handleSave = (e: Event) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <NestedPageLayout>
      <Title>Profile — VibeStack</Title>

      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white mb-1">User Profile</h1>
        <p class="text-sm text-gray-400">Manage your personal information and account details</p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Avatar Card */}
        <Card glow="violet" class="text-center xl:col-span-1">
          <div class="flex flex-col items-center">
            <div class="relative mb-4">
              <img
                class="w-24 h-24 rounded-full ring-4 ring-neon-violet/20"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="Avatar"
              />
              <button class="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-neon-violet flex items-center justify-center shadow-lg hover:bg-neon-violet/80 transition-colors">
                <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </button>
            </div>
            <h3 class="text-lg font-bold text-white">{name()}</h3>
            <p class="text-sm text-gray-400 mb-2">{email()}</p>
            <span class="inline-flex px-2.5 py-1 text-xs font-semibold text-neon-violet bg-neon-violet/10 border border-neon-violet/20 rounded-lg">
              Administrator
            </span>

            <div class="mt-6 w-full grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
              {[
                { label: "Orders", value: "142" },
                { label: "Revenue", value: "$28K" },
                { label: "Rating", value: "4.9 ★" },
              ].map((s) => (
                <div class="text-center">
                  <p class="text-base font-bold text-white">{s.value}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div class="mt-6 w-full space-y-2">
              <Button variant="secondary" fullWidth size="sm">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                Share Profile
              </Button>
            </div>
          </div>
        </Card>

        {/* Edit Form */}
        <Card title="Personal Information" subtitle="Update your profile details" class="xl:col-span-2">
          {/* Success Banner */}
          {saved() && (
            <div class="mb-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-neon-emerald/10 border border-neon-emerald/20 text-sm text-neon-emerald">
              <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Profile saved successfully!
            </div>
          )}

          <form class="space-y-5" onSubmit={handleSave}>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                id="name"
                label="Full Name"
                value={name()}
                onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setName(e.currentTarget.value)}
                placeholder="Your full name"
              />
              <Input
                id="email"
                label="Email Address"
                type="email"
                value={email()}
                onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setEmail(e.currentTarget.value)}
                placeholder="you@example.com"
              />
              <Input
                id="phone"
                label="Phone Number"
                type="tel"
                value={phone()}
                onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => setPhone(e.currentTarget.value)}
                placeholder="+1 (555) 000-0000"
              />
              <Input
                id="role"
                label="Role"
                value="Administrator"
                disabled
                class="opacity-50 cursor-not-allowed"
              />
            </div>

            <div>
              <label for="bio" class="block mb-2 text-sm font-medium text-gray-300">Bio</label>
              <textarea
                id="bio"
                rows={4}
                class="w-full px-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 placeholder-gray-500 transition-all duration-200 resize-none"
                value={bio()}
                onInput={(e: InputEvent & { currentTarget: HTMLTextAreaElement }) => setBio(e.currentTarget.value)}
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Password section */}
            <div class="pt-4 border-t border-white/10">
              <h4 class="text-sm font-semibold text-gray-200 mb-4">Change Password</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input id="current-password" label="Current Password" type="password" placeholder="••••••••" />
                <Input id="new-password" label="New Password" type="password" placeholder="••••••••" />
              </div>
            </div>

            <div class="flex justify-end gap-3 pt-2">
              <Button variant="secondary" type="button">Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </Card>
      </div>
    </NestedPageLayout>
  );
};

export default Profile;
