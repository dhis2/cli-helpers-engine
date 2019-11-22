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
