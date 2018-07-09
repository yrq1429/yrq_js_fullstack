module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        indent: ['error', 4]
        // 'linebreak-style': ['error', 'unix']
    }
}