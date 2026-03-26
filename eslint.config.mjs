import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["node_modules/**", ".output/**", "dist/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "~/components/layouts/*",
                "@components/layouts/*",
                "./layouts/*",
                "../layouts/*",
                "../components/layouts/*",
                "../../components/layouts/*",
                "../../../components/layouts/*",
                "../../../../components/layouts/*"
              ],
              message: "Use @layouts/* alias for layout imports."
            }
          ]
        }
      ]
    }
  }
];
