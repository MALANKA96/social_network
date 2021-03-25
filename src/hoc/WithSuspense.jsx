import * as React from "react";

const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<div>LOOOAD...</div>}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};

export default withSuspense;
