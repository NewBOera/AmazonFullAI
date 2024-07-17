function getSecondLevelDomain(hostname) {
  const domainParts = hostname.split(".");
  if (domainParts.length > 2) {
    return domainParts.slice(-2);
  }

  return domainParts;
}

function changeDynamicDomain(className, hostname, isDomain) {
  const domainParts = getSecondLevelDomain(hostname);
  const domain = domainParts.join(".");
  const name = domainParts[0];

  const spanDomain = document.querySelectorAll(className);
  spanDomain.forEach((element) => {
    isDomain ? (element.textContent = domain) : (element.textContent = name);
    // element.href = `mailto:info@${domain}.com`;
  });
}

const hostname = window.location.hostname;
changeDynamicDomain(".dyn-domain", hostname, true);
changeDynamicDomain(".dyn-name", hostname, false);
