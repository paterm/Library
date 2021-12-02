export interface PortalComponent {
  /** A HTML element, component instance, or function that returns either. The container will have the portal children appended to it.
   By default, it uses the body of the top-level document object, so it's simply document.body most of the time. */
  container?: Element
}
