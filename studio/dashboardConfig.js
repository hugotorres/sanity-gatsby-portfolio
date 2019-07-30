export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d406e4fc8b906515ea9df3a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8nau8e25',
                  apiId: 'd46de543-f73d-4958-830e-ca14a24dd062'
                },
                {
                  buildHookId: '5d406e4ff5a5d83e44c9802c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-abqi3cfs',
                  apiId: '440d6a62-5539-4a0b-ae8d-6274e54734fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hugotorres/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-abqi3cfs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
