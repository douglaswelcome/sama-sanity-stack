const nextBuildId = require('next-build-id')
/* const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({}) */
module.exports = {
    generateBuildId: () => nextBuildId({ dir: __dirname })
}