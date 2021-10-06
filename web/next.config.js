const client = require('./client')

const query = `
{
	"routes": *[_type == "page"],
	"home": *[_id == "global-config"]{
		frontpage -> {slug}
	}[0]
}
`

const reduceRoutes = (obj, route) => {
	const {_createdAt, _updatedAt, title, slug = {}} = route
	const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
	obj[path] = {
	  query: {
		slug: slug.current
	  },
	  _createdAt,
	  _updatedAt,
	  title,
	  page: '/page'
	}
	return obj
}

module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	},
	exportPathMap: function () {
		return client.fetch(query).then(res => {
		  const {routes = [], home} = res;
		  const { frontpage } = home;

		  routes.find((route, i) => {
			  if(route.slug.current === frontpage.slug.current){
				  //routes[i].slug.current = '/';
			  }
		  });

		  const nextRoutes = {
			// Routes imported from sanity
			...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {})
		  }
		  return nextRoutes
		})
	}
};