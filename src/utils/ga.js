export const track = (eventName, eventProperties) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventProperties);
  }
};
