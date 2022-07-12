module.exports =  {
    dest: '.', // Main output directory
    log: null, // Logging verbosity (default: no logging)
    shape: { // SVG shape related options
        id: { // SVG shape ID related options
            separator: '--', // Separator for directory name traversal
            pseudo: '~' // File name separator for shape states (e.g. ':hover')
        },
        dimension: {// Dimension related options
            maxWidth: 2000, // Max. shape width
            maxHeight: 2000, // Max. shape height
            precision: 2, // Floating point precision
            attributes: false, // Width and height attributes on embedded shapes
        },
        spacing: { // Spacing related options
            padding: 0, // Padding around all shapes
            box: 'content' // Padding strategy (similar to CSS `box-sizing`)
        },
        svg: { // General options for created SVG files
            xmlDeclaration: false, // Add XML declaration to SVG sprite
            doctypeDeclaration: false, // Add DOCTYPE declaration to SVG sprite
            namespaceIDs: true, // Add namespace token to all IDs in SVG shapes
            namespaceClassnames: true, // Add namespace token to all CSS class names in SVG shapes
            dimensionAttributes: true, // Width and height attributes on the sprite
        },
        transform: ['svgo'], // List of transformations / optimizations
    },
    mode: {
        symbol: {
            dest: '.',
            layout: 'vertical',
            common: 'icon',
            prefix: '.icon-%s',
            sprite: '../assets/svg/icons.svg',
            dimensions: true,
            bust: false
        }
    }
};
