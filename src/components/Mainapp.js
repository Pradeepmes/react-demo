import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

// 1. Fallback UI shown when an error happens
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ color: "red", marginTop: "1rem" }}>
      <p>😢 Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// 2. This component will crash if 'crash' is true
function BuggyComponent({ crash }) {
  if (crash) {
    throw new Error("Boom! Component crashed.");
  }
  return <h3>✅ No errors. Everything is good here.</h3>;
}

// 3. Your main app component
export default function Mainapp() {
  const [inputValue, setInputValue] = useState("");
  const [shouldCrash, setShouldCrash] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>💡 React Error Boundary Example</h2>

      {/* Safe input field - not inside error boundary */}
      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "1rem" }}
      />

      <br />

      {/* Button to trigger crash */}
      <button onClick={() => setShouldCrash(true)} style={{ marginTop: "1rem" }}>
        🚨 Click to Crash Component
      </button>

      {/* ErrorBoundary only wraps the risky part */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setShouldCrash(false)} // resets the crash state
        resetKeys={[shouldCrash]} // re-run when this changes
      >
        <BuggyComponent crash={shouldCrash} />
      </ErrorBoundary>
    </div>
  );
}

