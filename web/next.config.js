const client = require('./client')

const query = `
{
	"routes": *[_type == "page"] {
		...,
		page->{
		_id,
		title,
		_createdAt,
		_updatedAt
	}},
	"home": *[_id == "global-config"]{
		frontpage -> {slug}
	}[0]
}
`

module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	},
	exportPathMap: function () {
		return client.fetch(query).then(res => {
		  	const {routes = [], home} = res
			const {frontpage} = home;
			const nextRoutes = {};

			routes.filter(({slug}) => slug.current).map(route => {
				const {page = {}, slug = {}, _createdAt, _updatedAt} = route
				const path = route['slug']['current'] === frontpage.slug.current ? '/' : `/${route['slug']['current']}`
			
				nextRoutes[path] = {
					query: {
					slug: slug.current
					},
					_createdAt,
					_updatedAt,
					page: '/page'
				}
			})

			return nextRoutes
		})
	}
};