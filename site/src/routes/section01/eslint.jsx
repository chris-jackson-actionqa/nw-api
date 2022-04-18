import { NoBackpackSharp } from "@mui/icons-material";

export default function EslintSection() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Eslint</h2>
      <h3>Install</h3>
      {/* prettier-ignore */}
      npm install eslint --save-dev
      <br />
      npm init @eslint/config <br />
      npm install --save-dev eslint-config-prettier
      <br />
      <h3>.eslintrc.yaml</h3>
      {/* prettier-ignore */}
      <pre>
env:<br />
    &nbsp;&nbsp;browser: true<br />
    &nbsp;&nbsp;commonjs: true<br />
    &nbsp;&nbsp;es2021: true<br />
extends: [eslint:recommended, prettier]<br />
parserOptions:<br />
    &nbsp;&nbsp;ecmaVersion: latest<br />
rules: {'{}'}<br />
      </pre>
    </main>
  );
}
