MathJax = {
    loader: {
        load: ['input/tex']
    },
    // 配置解析式定位符
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
    },
    svg: {
        fontCache: 'global'
    }
};