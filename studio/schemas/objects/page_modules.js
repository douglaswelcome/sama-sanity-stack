function importAll(r) {
    let modules = [];
    r.keys().map((item) => { 
        const type = {type: item.replace("./", "").replace(".js", "")}
        modules.push(type);
    });
    return modules;
}
  
const moduleTypes = importAll(require.context('../modules', false, /\.(js)$/))

export default {
    type: 'object',
    name: 'page_modules',
    title: 'Page Modules',
    fields: [
        {
            name: 'modules',
            title: 'Modules',
            type: 'array',
            
            options: {
                editModal: 'fullscreen'
            },
            of: moduleTypes,
        }
    ],
    preview: {
        select: {
            modules: 'modules'
        },
        prepare: ({modules}) => {
            let title;
            let subtitle;
            if(modules){
                const moduleNames = [];
                modules.map((module) =>  {
                    const moduleName = module._type.replace(/(^|_)(\w)/g, function ($0, $1, $2) {
                        return ($1 && ' ') + $2.toUpperCase();
                    });
                    moduleNames.push(moduleName);
                })
                title = moduleNames.length > 0 ? moduleNames[0] : `Empty`;
                moduleNames.shift();
                const otherModules = moduleNames.length > 0 ? `${moduleNames.join(', ')}` : ''
                const hasMoreModules = Boolean(moduleNames[3])
                subtitle = hasMoreModules ? `${otherModules}…` : otherModules
            }else{
                title = `Section Empty`;
                subtitle = ''
            }
          return {
            title: title,
            subtitle: subtitle
          }
        }
    }
}