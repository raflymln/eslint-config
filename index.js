// @ts-check

module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["prettier", "import", "no-relative-import-paths"],
    extends: [
        "prettier",
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:import/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:tailwindcss/recommended",
        "plugin:react/recommended",
    ],
    rules: {
        "no-multi-spaces": "error",
        "no-case-declarations": "off",
        "no-empty-function": "off",
        "prefer-const": "off",
        "prettier/prettier": "error",
        "@next/next/no-img-element": "off",
        "react/no-unescaped-entities": "off",
        "import/no-duplicates": "error",
        "import/no-absolute-path": "error",
        "import/no-namespace": "error",
        "import/first": "error",
        "import/no-anonymous-default-export": "error",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                groups: ["type", "index", "sibling", "parent", "internal", "external", "builtin", "object"],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
        "no-relative-import-paths/no-relative-import-paths": [
            "error",
            {
                allowSameFolder: false,
                rootDir: "src",
                prefix: "@",
            },
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                prefer: "type-imports",
                disallowTypeAnnotations: true,
                fixStyle: "separate-type-imports",
            },
        ],
        "tailwindcss/no-custom-classname": [
            "error",
            {
                whitelist: ["group(/.*)?"],
            },
        ],
        "tailwindcss/no-arbitrary-value": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-boolean-value": "error",
        "react/destructuring-assignment": ["error", "always"],
        "react/jsx-curly-brace-presence": [
            "error",
            {
                props: "never",
                children: "never",
                propElementValues: "always",
            },
        ],
        "react/jsx-sort-props": [
            "error",
            {
                multiline: "last",
                ignoreCase: false,
                noSortAlphabetically: true,
                reservedFirst: ["key", "ref"],
                locale: "auto",
            },
        ],
        "react/jsx-no-useless-fragment": "error",
        "react/no-unknown-property": "error",
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "react/sort-prop-types": [
            "error",
            {
                callbacksLast: true,
                ignoreCase: false,
                noSortAlphabetically: true,
            },
        ],
    },
    globals: {
        JSX: true,
    },
};
