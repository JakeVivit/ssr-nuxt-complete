const vuxLoader = require('vux-loader')
const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {

    head: {
        title: 'ssr-nuxt-express',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    serverMiddleware: [
        // body-parser middleware
        bodyParser.json(),
        // session middleware
        session({
            secret: 'super-secret-key',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        }),
        // Api middleware
        // We add /api/login & /api/logout routes
        '~/api/index.js'
    ],

    modules:[
        '@nuxtjs/axios',
    ],


    //路由中间件--全局

    // router: {
    //   middleware :'auth'
    // },

    css: [
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        '@/assets/css/main.scss',
        'vux/src/styles/reset.less',
        'vux/src/styles/1px.less',
    ],

    plugins: [{
            src: '~/plugins/vux-plugins',
            ssr: false
        },
        {
            src: '~/plugins/vux-components',
            ssr: true
        },
        {
            src: '~/plugins/http',
            ssr: true
        }
    ],

    vendor: ['axios'],

    loading: { color: '#3B8070' },

    build: {
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }

            const configs = vuxLoader.merge(config, {
                options: {
                    ssr: true
                },
                plugins: ['vux-ui']
                    // plugins: ['vux-ui', {
                    //   name: 'less-theme',
                    //   path: path.join(__dirname, './styles/theme.less')
                    // }]
            })
            return configs
        },

        postcss: {
            plugins: {
                "postcss-import": {},
                "postcss-url": {},
                "postcss-aspect-ratio-mini": {},
                "postcss-write-svg": { utf8: false },
                "postcss-cssnext": {},
                "postcss-px-to-viewport": {
                    viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                    viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
                    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
                    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                    minPixelValue: 1, // (小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                    mediaQuery: false // 允许在媒体查询中转换`px` 
                },
                "postcss-viewport-units": {},
                "cssnano": { preset: "advanced", autoprefixer: false, "postcss-zindex": false }
            }
        }
    }
}