![hatrack](https://user-images.githubusercontent.com/1305776/146048641-e8210be6-ee64-4976-b9b5-a30b23d7178d.png)

# @invisiblehats/hatrack

## Installation

Coming soon once the package is published.

## Development

### Running storybook

We use [Storybook](https://storybook.js.org/) to document our components and utilities included in Hatrack.

Start the app:
```bash
$ yarn storybook
```

The page should automagically open on its own. If not, it should be running at http://localhost:6006/

### Configuring yarn

When working on changes locally, you can tell `yarn` to use the local repo instead of the registry.

```bash
$ cd path/to/hatrack
$ yarn link

$ cd path/to/project
$ yarn link "@invisiblehats/hatrack"
```

Now your project will use the local version with your changes
