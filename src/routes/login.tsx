import { Component, createSignal } from "solid-js";
import { Title } from "@solidjs/meta";

const Login: Component = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);
  const [rememberMe, setRememberMe] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // TODO: wire up authentication
  };

  return (
    <>
      <Title>Sign In — VibeStack</Title>

      <div class="min-h-screen flex items-center justify-center bg-dark-900 grid-pattern px-4 py-12 relative overflow-hidden">
        {/* Background glow orbs */}
        <div class="absolute top-1/4 -left-32 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] pointer-events-none" />
        <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-violet/10 rounded-full blur-[128px] pointer-events-none" />

        <div class="w-full max-w-md relative z-10">
          {/* Logo */}
          <div class="text-center mb-8">
            <a href="/" class="inline-flex items-center gap-3 group">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-violet flex items-center justify-center shadow-lg shadow-neon-cyan/20 group-hover:shadow-neon-cyan/40 transition-shadow">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span class="text-2xl font-bold gradient-text">VibeStack</span>
            </a>
            <p class="mt-3 text-sm text-gray-500">E-Commerce Management Platform</p>
          </div>

          {/* Card */}
          <div class="glass-card-strong p-0 overflow-hidden glow-cyan">
            {/* Accent stripe */}
            <div class="h-1 w-full bg-gradient-to-r from-neon-cyan to-neon-violet" />

            <div class="p-8">
              <h2 class="text-xl font-semibold text-white mb-1">Welcome back</h2>
              <p class="text-sm text-gray-400 mb-6">Sign in to your account to continue</p>

              {/* Social login */}
              <div class="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-200"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Divider */}
              <div class="flex items-center gap-3 mb-6">
                <div class="flex-1 h-px bg-white/10" />
                <span class="text-xs text-gray-500 uppercase tracking-wider">or continue with email</span>
                <div class="flex-1 h-px bg-white/10" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} class="space-y-5">
                {/* Email */}
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-300">
                    Email address
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email()}
                      onInput={(e) => setEmail(e.currentTarget.value)}
                      class="w-full pl-10 pr-4 py-2.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all duration-200"
                      placeholder="you@company.com"
                      required
                      autocomplete="email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                    <input
                      type={showPassword() ? "text" : "password"}
                      id="password"
                      value={password()}
                      onInput={(e) => setPassword(e.currentTarget.value)}
                      class="w-full pl-10 pr-11 py-2.5 text-sm text-white bg-white/5 border border-white/10 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan/50 transition-all duration-200"
                      placeholder="••••••••"
                      required
                      autocomplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword())}
                      class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {showPassword() ? (
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me + Forgot password */}
                <div class="flex items-center justify-between">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe()}
                      onChange={(e) => setRememberMe(e.currentTarget.checked)}
                      class="w-4 h-4 rounded bg-white/5 border-white/20 text-neon-cyan focus:ring-neon-cyan/50 focus:ring-2 focus:ring-offset-0"
                    />
                    <span class="text-sm text-gray-400">Remember me</span>
                  </label>
                  <a href="#" class="text-sm text-neon-cyan hover:text-neon-cyan/80 hover:underline transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  class="w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-neon-cyan to-neon-violet hover:from-neon-cyan/90 hover:to-neon-violet/90 rounded-xl shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>

          {/* Sign up link */}
          <p class="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="#" class="font-medium text-neon-cyan hover:text-neon-cyan/80 hover:underline transition-colors">
              Create an account
            </a>
          </p>

          {/* Footer */}
          <p class="mt-8 text-center text-xs text-gray-600">
            © 2026 VibeStack. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
