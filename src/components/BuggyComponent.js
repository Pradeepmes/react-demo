function BuggyComponent({ crash }) {
  if (crash) {
    throw new Error("Boom! Component crashed.");
  }
  return <h3>✅ No errors. Everything is good here.</h3>;
}