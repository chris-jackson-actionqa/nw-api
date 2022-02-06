export default function ExampleSite() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Example Site</h2>
        <p>The example site has all the pages we'll be writing tests against.  You will need to download the code from github and run the site on your machine.</p>
        <ul>
            <li><a href="https://git-scm.com/downloads" target="_blank">Install Git.</a>  (May already be installed if you are on Mac or Linux)</li>
            <li><a href="https://github.com/chris-jackson-actionqa/nw-api" target="_blank"><i>nw-api</i> on Github</a></li>
        </ul>
        <h3>Install and start the example site</h3>
        <pre>
            
git clone https://github.com/chris-jackson-actionqa/nw-api.git <br/>
cd nw-api<br/>
cd site<br/>
npm i<br/>
npm start<br/>
            
        </pre>
        <p>Your code should be running on <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>
      </main>
    );
  }
  