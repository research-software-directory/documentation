<!--
SPDX-FileCopyrightText: 2022 Jason Maassen (Netherlands eScience Center) <j.maassen@esciencecenter.nl>
SPDX-FileCopyrightText: 2022 Jesús García Gonzalez (Netherlands eScience Center) <j.g.gonzalez@esciencecenter.nl>
SPDX-FileCopyrightText: 2022 Netherlands eScience Center
SPDX-FileCopyrightText: 2023 Christian Meeßen (GFZ) <christian.meessen@gfz-potsdam.de>
SPDX-FileCopyrightText: 2023 Helmholtz Centre Potsdam - GFZ German Research Centre for Geosciences

SPDX-License-Identifier: CC-BY-4.0
-->

# Documenting the RSD

[Visit the documentation here.](https://research-software-directory.github.io/documentation)

Any changes merge to the main branch will trigger automatically a build deploy to github pages.

## Configuration

Vuepress is configured via [docs/.vuepress/config.js](docs/.vuepress/config.js).

If you would like to host a customised version of this documentation, you can create a `docs/.vuepress/custom_config.js`. This configuration will overwrite the default configuration.

**NOTE:** If you create a custom configuration by copy-pasting `docs/.vuepress/config.js`, remember to remove the `try` block:

```javascript
try {
  conf = require('./custom_config')
  console.log("Loading custom configuration.")
} catch (ex) {
  console.log("No custom configuration found. Using standard configuration.")
}
```

## Running locally:

```bash
yarn install
yarn dev
```

## Add a new document to the guide

Edit the information inside the `/docs` folder.
