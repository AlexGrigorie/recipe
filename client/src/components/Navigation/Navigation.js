import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="ph5">
            <p
              onClick={() => onRouteChange("addrecipe")}
              className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy pointer"
            >
              Adaugă Rețetă
            </p>
            <p
              onClick={() => onRouteChange("signout")}
              className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy pointer"
            >
              Ieșire
            </p>
            <p
              onClick={() => onRouteChange("home")}
              className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy pointer"
            >
              Acasă
            </p>
          </div>
        </nav>
      </>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="ph5">
          <p
            onClick={() => onRouteChange("register")}
            className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy pointer"
          >
            Înregistrare
          </p>
          <p
            onClick={() => onRouteChange("signin")}
            className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy pointer"
          >
            Autentificare
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
