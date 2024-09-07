module.exports = {
    semi: true,
    singleQoute: fasle,
    tabWidth: 2,
    useTabs: true,
    plugins: [require('prettier-plugin-astro')],
    overrides: [
        {
            files: '**/*astro',
            option: {
                parser: 'astro',
            },
        },
    ],
};
