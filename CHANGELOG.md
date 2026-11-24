# Changelog

All notable changes to this project will be documented here.

This project loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and uses semantic versioning where practical.

## Unreleased

### Added

- Expo SDK 58 starter setup with Expo Router API Routes.
- tRPC v11, TanStack Query, SuperJSON, and Zod wiring.
- React Native focus and network handling for TanStack Query.
- Public open-source project docs and GitHub templates.
- Reset script aligned with the current `create-expo-app` `src/app` structure.

### Changed

- tRPC client uses relative `/api/trpc` by default for Expo Router API routes.
- Documented the Expo Router folder layout verified from a fresh Expo project.
- Upgraded to Expo SDK 58 (React Native 0.88, React 19.3) and bumped tRPC, TanStack Query, and Zod.

### Fixed

- Web server rendering no longer fails with `Invalid URL`: Suspense tRPC queries now render client-only via `ClientOnly`.
