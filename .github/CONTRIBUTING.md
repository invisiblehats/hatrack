# Contributing & supporting this project

Thanks for checking out how to contribute to this project! :tada:

## Getting involved
- [ ] Help review and respond to open issues
- [ ] Review any open PRs
- [ ] Suggest ways to expand or improve this library

## Conventions
### Branch names

Branch names should include the target branch, optional date and a short identifier. 

Ex: `main_20210101-foo-bar`

Add this helper function to your `~/.zshrc` or `~/.bashprofile` to generate this for you

```bash
function gcfb() {
  now=$(date +'%Y%m%d')
  git checkout main
  git pull
  if test -f "package.json"; then
    yarn
  fi
  if test -f "Gemfile"; then
    bundle install
    bundle exec rake db:migrate
  fi
  git checkout -b main_$now-$1 main
}
```
