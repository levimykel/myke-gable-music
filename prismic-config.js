
const prismicRepoName = 'myke-gable-music';

module.exports = {

  prismicRepoName: prismicRepoName,
  
  apiEndpoint: `https://${prismicRepoName}.prismic.io/api/v2`,

  // -- Links Resolver
  // This function will be used to generate links to Prismic documents
  linkResolver(doc) {
    if (doc.type === 'page') return '/' + doc.uid;
    if (doc.type === 'contact_page') return '/contact';
    return '/';
  }
};
