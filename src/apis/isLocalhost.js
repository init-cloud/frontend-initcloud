import { BaseURL, LocalBaseURL } from "./api";

function isLocalhost() {
  let currentURL = window.location.href.split('/')[2].includes('localhost' || '127.0.0.1')
  return (currentURL ? LocalBaseURL : BaseURL);
}

export default isLocalhost;