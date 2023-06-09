module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/prefer-default-export': 'off',
        'linebreak-style': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
            },
        ],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prop-types': [0],
        'react/jsx-boolean-value': [0],
    },
};
