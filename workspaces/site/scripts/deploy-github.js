const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'develop',
    repo: 'https://github.com/openbook/andybrace.com-workspace.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)