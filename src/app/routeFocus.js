let routeFocusRequested = false;

export function requestRouteFocus() {
  routeFocusRequested = true;
}

export function consumeRouteFocusRequest() {
  const requested = routeFocusRequested;
  routeFocusRequested = false;
  return requested;
}
