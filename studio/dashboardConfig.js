export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8649b781486b1c0283fa25',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i1v3x6ue',
                  apiId: '573add8a-20f5-44d8-ba1d-c73097c701f2'
                },
                {
                  buildHookId: '5f8649b70c28e61ee0ec309f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5r7asnr4',
                  apiId: 'a3d829e2-6bea-411f-ba93-1b14791869dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joahn3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5r7asnr4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
