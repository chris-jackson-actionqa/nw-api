export default function PrettierSection() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Prettier</h2>
      <h3>Install</h3>
      <pre>npm install --save-dev prettier</pre>
      <h3>.prettierrc.yaml</h3>
      {/* prettier-ignore */}
      <pre>
trailingComma: "es5" <br />
tabWidth: 4 <br />
semi: false <br />
singleQuote: true <br />
      </pre>
    </main>
  );
}
