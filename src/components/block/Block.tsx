"use client"

import Script from "next/script"

export default function Block() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"
        strategy="afterInteractive"
      />

      <Script id="disable-devtool-init" strategy="afterInteractive">
        {`
          if (typeof DisableDevtool !== "undefined") {
            DisableDevtool({
              disableMenu: true,
              disableSelect: false,
              disableCopy: false,
              disableCut: true,
              disablePaste: false,
              clearLog: true,
              interval: 500,
              detectors: [0, 1, 3, 4, 5, 6, 7],
              ondevtoolopen: function(type, next) {
                window.location.href = 'https://www.google.com/';
              }
            });
          }
        `}
      </Script>
    </>
  )
}