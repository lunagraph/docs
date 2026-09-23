// Download rows, matching the list on lunagraph.com/download. Styles live in
// style.css under "Download list". Icons are Phosphor, same as the website.

export const LgIcon = ({ d, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" className={className}>
    <path d={d} />
  </svg>
);

export const LG_ICONS = {
  apple:
    "M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z",
  windows:
    "M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z",
  chrome:
    "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,73.72,40H128a48.08,48.08,0,0,0-45.6,33l-23.08-40A87.89,87.89,0,0,1,128,40ZM40,128a87.44,87.44,0,0,1,9.56-39.86L86.43,152c.06.1.13.19.19.28A48,48,0,0,0,137.82,175l-23.1,40A88.14,88.14,0,0,1,40,128Zm92.69,87.87L169.57,152c.08-.14.14-.28.22-.42a47.88,47.88,0,0,0-6-55.58H210a88,88,0,0,1-77.29,119.87Z",
  download:
    "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z",
  arrowUpRight:
    "M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z",
  arrowRight:
    "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z",
};

export const DownloadList = ({ children }) => (
  <ul role="list" className="lg-download-list not-prose">
    {children}
  </ul>
);

// `icon` is "apple", "windows", or "chrome". Pass `external` for store links
// that open in a new tab; everything else is a direct file download.
export const DownloadRow = ({ icon, title, version, file, href, action = "Download", external = false }) => (
  <li className="lg-download-row">
    <div className="lg-download-info">
      <LgIcon d={LG_ICONS[icon]} className="lg-download-icon" />
      <div className="lg-download-text">
        <p className="lg-download-title">{title}</p>
        <p className="lg-download-detail">
          {version && <span className="lg-mono">v{version}</span>}
          {version && file && <span aria-hidden="true" className="lg-dot" />}
          {file && <span className={file.startsWith(".") ? "lg-mono" : undefined}>{file}</span>}
        </p>
      </div>
    </div>
    <a
      href={href}
      className="lg-pill-button"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
    >
      {!external && <LgIcon d={LG_ICONS.download} className="lg-pill-icon" />}
      {action}
      {external && <LgIcon d={LG_ICONS.arrowUpRight} className="lg-pill-icon" />}
    </a>
  </li>
);

export const NextStepTile = ({ title, href, children }) => (
  <a href={href} className="lg-next-tile not-prose">
    <div className="lg-next-text">
      <p className="lg-next-title">{title}</p>
      <p className="lg-next-body">{children}</p>
    </div>
    <LgIcon d={LG_ICONS.arrowRight} className="lg-next-arrow" />
  </a>
);
