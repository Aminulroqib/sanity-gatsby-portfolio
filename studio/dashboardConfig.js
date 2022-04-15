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
                  buildHookId: '6259723384de7d52e75312fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qpr2n1ng',
                  apiId: '47f5c6f3-df35-4eff-8b86-ac6ffc986295'
                },
                {
                  buildHookId: '62597233a287084fa11106ee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1j4x2rdz',
                  apiId: '38dc50ed-169e-40b3-b035-a9c14a67a844'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Aminulroqib/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1j4x2rdz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
