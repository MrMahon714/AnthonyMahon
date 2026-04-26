import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended, // This pulls in the "standard" rules from ESLint
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser, // This fixes 'document', 'window', 'XMLHttpRequest', etc.
                ...globals.node,    //Allow 'require' and 'module'
                ...globals.jest,    //Allow 'test' and 'expect'
                md5: "readonly",    // This fixes the 'md5 is not defined' error
                module: "readonly"
            }
        },

        rules: {
            "no-unused-vars": "warn",    // Warns you if you create a variable but never use it
           "no-undef": "error",          // Errors if you try to use a variable that isn't defined
            "prefer-const": "error",      // Forces you to use 'const' for variables that don't change
          "eqeqeq": "warn"             //Warns you if you use === instead of == (prevents weird JS bugs)
        }
    }
];
