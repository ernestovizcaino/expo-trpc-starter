import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Renders `fallback` during web server rendering and `children` once on the client.
 *
 * Use it around components that fetch through tRPC with Suspense: the server has no
 * browser origin, so relative `/api/trpc` requests can't be resolved there.
 * On native there is no server render, so children render immediately.
 */
export function ClientOnly(props: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return isClient ? props.children : (props.fallback ?? null);
}
