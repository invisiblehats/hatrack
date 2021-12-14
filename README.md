# hatrack# @invisiblehats/hatrack
## Development

### Configuring yarn

When working on changes locally, you can tell `yarn` to use the local repo instead of the registry.

```bash
$ cd path/to/hatrack
$ yarn link

$ cd path/to/project
$ yarn link "@invisiblehats/hatrack"
```

Now your project will use the local version with your changes