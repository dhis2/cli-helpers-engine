## [3.2.1](https://github.com/dhis2/cli-helpers-engine/compare/v3.2.0...v3.2.1) (2022-01-06)


### Bug Fixes

* **create-module-loader:** handle case where findProject root returns undefined ([#151](https://github.com/dhis2/cli-helpers-engine/issues/151)) ([d27204d](https://github.com/dhis2/cli-helpers-engine/commit/d27204ddfd7a87c6680b5562e364221b005a5343))

# [3.2.0](https://github.com/dhis2/cli-helpers-engine/compare/v3.1.1...v3.2.0) (2021-12-07)


### Features

* **pretty-print:** add a helper to print relative paths ([ff36a9b](https://github.com/dhis2/cli-helpers-engine/commit/ff36a9b868c3478c5730552ad184a2ced9458435))

## [3.1.1](https://github.com/dhis2/cli-helpers-engine/compare/v3.1.0...v3.1.1) (2021-11-29)


### Bug Fixes

* catch unhandled rejections ([50ca241](https://github.com/dhis2/cli-helpers-engine/commit/50ca241c3e135a754e2582a9305486b9caf35372))

# [3.1.0](https://github.com/dhis2/cli-helpers-engine/compare/v3.0.0...v3.1.0) (2021-11-18)


### Features

* **loadmodule:** add project-local module loader ([8e9a204](https://github.com/dhis2/cli-helpers-engine/commit/8e9a2043dd117a72d9db3379d9ed531d37045463))

# [3.0.0](https://github.com/dhis2/cli-helpers-engine/compare/v2.4.0...v3.0.0) (2021-06-14)


### chore

* remove node 10 support ([#101](https://github.com/dhis2/cli-helpers-engine/issues/101)) ([c23d472](https://github.com/dhis2/cli-helpers-engine/commit/c23d472c68147c738af9c19b4622f24c5f614b3d))


### BREAKING CHANGES

* New minimum version for Node is 12.

# [2.4.0](https://github.com/dhis2/cli-helpers-engine/compare/v2.3.0...v2.4.0) (2021-06-08)


### Features

* **reporter:** log levels ([#98](https://github.com/dhis2/cli-helpers-engine/issues/98)) ([d82fe6a](https://github.com/dhis2/cli-helpers-engine/commit/d82fe6a18e0adbd5e3b10b185d77590768ddd5ad))

# [2.3.0](https://github.com/dhis2/cli-helpers-engine/compare/v2.2.0...v2.3.0) (2021-05-31)


### Features

* add helper to identify the project root path ([#96](https://github.com/dhis2/cli-helpers-engine/issues/96)) ([442dd66](https://github.com/dhis2/cli-helpers-engine/commit/442dd66681d44c6cabc4ec6b1b454da79cb8be7b)), closes [/github.com/dhis2/cli-style/blob/master/src/utils/paths.js#L10-L24](https://github.com//github.com/dhis2/cli-style/blob/master/src/utils/paths.js/issues/L10-L24)

# [2.2.0](https://github.com/dhis2/cli-helpers-engine/compare/v2.1.1...v2.2.0) (2021-05-14)


### Features

* add additional process exec functions ([#92](https://github.com/dhis2/cli-helpers-engine/issues/92)) ([53f2a58](https://github.com/dhis2/cli-helpers-engine/commit/53f2a584be23d485b4ab2be72858226e93e5f299))

## [2.1.1](https://github.com/dhis2/cli-helpers-engine/compare/v2.1.0...v2.1.1) (2020-12-16)


### Bug Fixes

* add inquirer to the set of dependencies ([#67](https://github.com/dhis2/cli-helpers-engine/issues/67)) ([b4a6e41](https://github.com/dhis2/cli-helpers-engine/commit/b4a6e417806b8c71a2572f02a37b25786459a7c8))

# [2.1.0](https://github.com/dhis2/cli-helpers-engine/compare/v2.0.2...v2.1.0) (2020-12-11)


### Features

* add a prompt utility which wraps inquirer ([#64](https://github.com/dhis2/cli-helpers-engine/issues/64)) ([59b6dee](https://github.com/dhis2/cli-helpers-engine/commit/59b6deef10861973dbb234f8f11c136c987cc320))

## [2.0.2](https://github.com/dhis2/cli-helpers-engine/compare/v2.0.1...v2.0.2) (2020-11-06)


### Bug Fixes

* cut release to complete migration to jira ([6ea2e18](https://github.com/dhis2/cli-helpers-engine/commit/6ea2e18e4327299799e28dbf73aa50e35cefc2ab))

## [2.0.1](https://github.com/dhis2/cli-helpers-engine/compare/v2.0.0...v2.0.1) (2020-05-06)


### Bug Fixes

* upgrade dependencies ([f5b3573](https://github.com/dhis2/cli-helpers-engine/commit/f5b3573e82299fe4066b59fbfcb3e0873a0c04c2))

# [2.0.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.5.0...v2.0.0) (2020-04-02)


### chore

* update node engine to >=10 ([a9c2115](https://github.com/dhis2/cli-helpers-engine/commit/a9c21150f3f4d0a49bf3f94cbf5b6eba00f87c89))
* update node engine version >= 10 ([3c5f05f](https://github.com/dhis2/cli-helpers-engine/commit/3c5f05f60418daccd15106f3e93f562a71462468))


### BREAKING CHANGES

* Require Node engine version to be >= 10.
* Update Node requirement to >=10

# [1.5.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.4.2...v1.5.0) (2019-11-22)


### Features

* re-export chalk so we don't have additional deps everywhere ([#27](https://github.com/dhis2/cli-helpers-engine/issues/27)) ([94f2259](https://github.com/dhis2/cli-helpers-engine/commit/94f22596c9c12f7039ada264ad38ee15e0447659))

## [1.4.2](https://github.com/dhis2/cli-helpers-engine/compare/v1.4.1...v1.4.2) (2019-09-02)


### Bug Fixes

* use shell: true option in exec to support windows ([#25](https://github.com/dhis2/cli-helpers-engine/issues/25)) ([0a732f5](https://github.com/dhis2/cli-helpers-engine/commit/0a732f5))

## [1.4.1](https://github.com/dhis2/cli-helpers-engine/compare/v1.4.0...v1.4.1) (2019-08-28)


### Bug Fixes

* verify statuscode is between 200-399 ([#23](https://github.com/dhis2/cli-helpers-engine/issues/23)) ([9d829e5](https://github.com/dhis2/cli-helpers-engine/commit/9d829e5))

# [1.4.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.3.1...v1.4.0) (2019-08-24)


### Features

* support captured output when running exec ([0119fe6](https://github.com/dhis2/cli-helpers-engine/commit/0119fe6))

## [1.3.1](https://github.com/dhis2/cli-helpers-engine/compare/v1.3.0...v1.3.1) (2019-08-24)


### Bug Fixes

* use fs-extra's readdir, not readDir ([a6093f4](https://github.com/dhis2/cli-helpers-engine/commit/a6093f4))

# [1.3.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.2.1...v1.3.0) (2019-06-03)


### Features

* expose read and write commands for files in cache ([#16](https://github.com/dhis2/cli-helpers-engine/issues/16)) ([f0f10f8](https://github.com/dhis2/cli-helpers-engine/commit/f0f10f8))

## [1.2.1](https://github.com/dhis2/cli-helpers-engine/compare/v1.2.0...v1.2.1) (2019-05-23)


### Bug Fixes

* move the command configuration to the module itself ([#14](https://github.com/dhis2/cli-helpers-engine/issues/14)) ([44db99d](https://github.com/dhis2/cli-helpers-engine/commit/44db99d))

# [1.2.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.1.0...v1.2.0) (2019-05-14)


### Features

* read properties from config file and merge with defaults ([#12](https://github.com/dhis2/cli-helpers-engine/issues/12)) ([6a2b06c](https://github.com/dhis2/cli-helpers-engine/commit/6a2b06c))

# [1.1.0](https://github.com/dhis2/cli-helpers-engine/compare/v1.0.1...v1.1.0) (2019-05-10)


### Features

* **cache:** add support for request option-object ([#7](https://github.com/dhis2/cli-helpers-engine/issues/7)) ([064a601](https://github.com/dhis2/cli-helpers-engine/commit/064a601))

## [1.0.1](https://github.com/dhis2/cli-helpers-engine/compare/v1.0.0...v1.0.1) (2019-03-27)


### Bug Fixes

* properly catch error and end/close events for raw fetch case ([#5](https://github.com/dhis2/cli-helpers-engine/issues/5)) ([233035a](https://github.com/dhis2/cli-helpers-engine/commit/233035a))

# [1.0.0](https://github.com/dhis2/cli-helpers-engine/compare/v0.13.0...v1.0.0) (2019-03-25)


### Bug Fixes

* add travis and semantic release ([#1](https://github.com/dhis2/cli-helpers-engine/issues/1)) ([94f3859](https://github.com/dhis2/cli-helpers-engine/commit/94f3859))


### Features

* change release script to the new one ([#2](https://github.com/dhis2/cli-helpers-engine/issues/2)) ([844c0bc](https://github.com/dhis2/cli-helpers-engine/commit/844c0bc))


### BREAKING CHANGES

* This is now cut using the official @dhis2/cli.
