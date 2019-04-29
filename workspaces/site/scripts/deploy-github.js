const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/openbook/andybrace.com-workspace.git',
  },
  (outcome) => {
    console.log('Deploy Complete!', outcome)
  }
)