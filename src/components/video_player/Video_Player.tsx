"use client"

import Script from "next/script"

function Video_Player({ link }: { link: string }) {

  return (
    <>
      <div id="player" style={{ width: "100%", height: "100%" }}></div>
      <Script strategy="afterInteractive">
        {`
          if (window.Clappr) {
            new window.Clappr.Player({
              source: "${link}",
              parentId: "#player",
              width: "100%",
              height: "100%"
            });
          }
        `}
      </Script>
    </>
  )
}

export default Video_Player