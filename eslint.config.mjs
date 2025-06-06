import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    // Your existing Next.js and TypeScript configuration
    ...compat.extends("next/core-web-vitals", "next/typescript"),

    // Add this new object to override the rules
    {
        rules: {
            // Disables the rule that errors on unused variables.
            "@typescript-eslint/no-unused-vars": "off",
            
            // Disables the rule that errors on unused expressions.
            "@typescript-eslint/no-unused-expressions": "off",
        },
    },
];

export default eslintConfig;
