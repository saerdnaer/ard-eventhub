# ARD-Eventhub / Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-beta2] - 2021-03-25

### Added

- Add trailing 0 in service publisher-ids if number is only 5 digits

## [1.0.0-beta1] - 2021-03-24

🚧 BREAKING CHANGES for `serviceIds` 🚧

### Added

- New detailed return output when posting events for each service (`published`, `blocked`, `failed`)
- Improved log output in JSON format for better monitoring

### Changed

- Now using `services` with required fields `type`, `externalId` and `publisherId` to identify a publishers' channel

### Removed

- No longer using `serviceIds` as required identification keys
- `event` in the POST body for new events is now called `name` and is no longer required
  - variable is inserted using the event name provided by the URL

## [0.1.7] - 2021-03-18

### Changed

- Add auth verification for unit tests
- Check `content-type` in unit tests
- Update unit tests for new ESLint config

## [0.1.6] - 2021-03-17

### Changed

- Allow optional fields in POST /events to be `null`
- Remove field `isInternal` from POST /events

## [0.1.5] - 2021-03-17

### Changed

- Preventing errors when `institution.name` isn't properly set in the user account
- Enforcing separation between dev/prod topics and subscriptions
- New onboarding and naming docs

## [0.1.4] - 2021-03-16

### Changed

- Removed `attribution` from required media fields of new events
- Added OpenAPI documentation to the docs
- Update codebase with new ESLint config
- Add necessary ESLint exceptions for project

## [0.1.3] - 2021-03-16

### Changed

- Hotfix `content-type` bug for error responses
- Updated endpoint structure for `/events`
- Changed order in test.ingest to check topics first, then subscriptions

## [0.1.2] - 2021-03-16

- First deployed prototype
