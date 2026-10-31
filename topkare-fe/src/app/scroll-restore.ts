/**
 * Poll briefly until the page is rendered enough (`ready`), then call `apply`.
 * Gives up silently (never applies) if the page never becomes ready, or if the restore
 * went stale (`isCurrent()` false, e.g. a newer navigation started) or the user started
 * scrolling (wheel / touch / key). Returns a cancel function.
 */
export function restoreWhenReady(
  ready: () => boolean,
  apply: () => void,
  isCurrent: () => boolean,
  maxTries = 30,
  intervalMs = 50,
  target: Pick<Window, 'addEventListener' | 'removeEventListener'> = window,
): () => void {
  let done = false;
  let timer: ReturnType<typeof setTimeout> | null = null;
  const events = ['wheel', 'touchstart', 'keydown'] as const;

  const finish = () => {
    done = true;
    if (timer !== null) clearTimeout(timer);
    events.forEach(e => target.removeEventListener(e, finish));
  };
  events.forEach(e => target.addEventListener(e, finish, { passive: true }));

  let tries = 0;
  const step = () => {
    if (done) return;
    if (!isCurrent()) return finish();
    if (ready()) {
      finish();
      apply();
      return;
    }
    if (tries++ >= maxTries) return finish(); // page never got ready: do nothing
    timer = setTimeout(step, intervalMs);
  };
  timer = setTimeout(step, 0);
  return finish;
}
