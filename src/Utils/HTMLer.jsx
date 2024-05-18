import React from "react";

function HTMLer({ html: htmlCode, isIframe: isIframe }) {
  return (
    <>
      {!isIframe ? (
        <div
          style={{
            border: "1px",
            padding: "10px",
            margin: "auto",
            width: "60%",
            alignItems: "center",
          }}
          dangerouslySetInnerHTML={{ __html: htmlCode }}
        />
      ) : (
        <iframe srcdoc={htmlCode}></iframe>
      )}
    </>
  );
}

export default HTMLer;
