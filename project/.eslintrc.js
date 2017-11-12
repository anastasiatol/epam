{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "rules": {
        ////Possible Errors////
        "comma-dangle": [
            2,
            "never"
        ],
        "no-cond-assign": 2,
        "no-console": 1,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-inner-declarations": 2,
        "no-func-assign": 2,
        "no-unreachable": 2,
        "no-empty": 2,
        "no-dupe-keys": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        "no-extra-parens": 2,
        ////Best Practices////
        "eqeqeq": [
            2,
            "smart"
        ],
        "no-alert": 1,
        "no-warning-comments": [
            2,
            {
                "terms": [
                    "todo",
                    "fixme"
                ],
                "location": "anywhere"
            }
        ],
        "guard-for-in": 2,
        "default-case": 2,
        "no-with": 2,
        "no-new-object": 2,
        "no-eval": 2,
        "no-sequences": 2,
        "curly": 2,
        "no-loop-func": 2,
        "complexity": [
            2,
            14
        ],
        "no-trailing-spaces": 2,
        "no-octal": 2,
        "no-labels": 2,
        "no-fallthrough": 2,
        "no-unused-vars": [
            1,
            {
                "vars": "all",
                "args": "after-used"
            }
        ],
        "no-redeclare": 2,
        "no-new-wrappers": 2,
        "consistent-return": 2,
        //"no-empty-function": 2,
        "no-eq-null": 2,
        "no-magic-numbers": 1,
        "no-multi-spaces": 2,
        //"no-self-assign": 2,
        "no-self-compare": 2,
        "max-statements": [
            2,
            300
        ],
        ////Variables////
        "no-shadow-restricted-names": 2,
        "no-multi-str": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-delete-var": 2,
        "no-shadow": 1,
        ////Stylistic Issues////
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-inline-comments": 1,
        "semi": 2,
        "no-mixed-spaces-and-tabs": 2,
        "brace-style": [
            1,
            "1tbs"
        ],
        "no-continue": 2,
        "max-len": [
            2,
            140
        ],
        ////Legacy////
        "max-params": [
            1,
            18
        ],
        "max-depth": [
            2,
            3
        ],
        "quotes": [1, "single"]
    }
}
