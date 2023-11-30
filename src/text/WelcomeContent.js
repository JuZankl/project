import Terminal from "../comp/Terminal";

export function Text_g() {
  return (
    <div>
      <h1>Hallo und Herzlich Willkommen auf dieser Website!</h1>

      <p>
        Hier finden Sie spannende Informationen zum Thema Webdesign, direkt von
        einem lernenden Schüler. Manchmal ist es hilfreich, bestimmte Themen aus
        der Perspektive eines Schülers erklärt zu bekommen :)
      </p>

      <p>
        Auf dieser selbstgemachten Website können Sie eine Vielzahl von
        Informationen und Einblicken in die Welt des Webdesigns erhalten,
        einschließlich Details zu den von mir verwendeten Tools. Da dieses
        Projekt mein eigenes ist, kann ich keine regelmäßigen Updates
        garantieren, da ich höchstwahrscheinlich auch an anderen Projekten
        arbeite. Dennoch hoffe ich, Ihnen einen kleinen Einblick in die
        Webprogrammierung bieten zu können.
      </p>

      <h2>Setup:</h2>

      <p>
        Für das Setup verwende ich GitHub Pages als Hosting-Plattform, um auf
        Webserver zu verzichten und einfache "statische Seiten" zu
        veröffentlichen. Als Arbeitsumgebung nutze ich den
        Open-Source-Code-Editor VSCode. Als Frontend-Tool kommt React zum
        Einsatz, und für einfache CSS- und Responsive-Bearbeitungen verwende ich
        Bootstrap als Frontend-Framework. Um Ihr eigenes Projekt zu starten,
        sollten Sie VSCode auf Ihrem Gerät installiert haben und über einen
        GitHub-Account verfügen.
      </p>

      <h2>First Step:</h2>

      <p>
        Zuerst wird ein Repository auf GitHub erstellt und in VSCode geklont.
        Anschließend installieren wir in diesem erstellten Repository eine
        React-Anwendung. Dann erstellen wir eine verbindung mit GitHub Pages und
        zum Schluss fügen wir noch etwas in der der package.json datei hinzu
      </p>
      <Terminal
        code={`
      npx create-react-app myOwnName --save-dev
      npm install gh-pages --save-dev
      `}
        terminalName="VSCode Terminal"
      />
      <br />
      <Terminal
        code={`
    'homepage': 'https://GitUsername.github.io/repo',
      
    'start': 'react-scripts start',
    'build': 'react-scripts build',
    'test': 'react-scripts test',
    'eject': 'react-scripts eject',
    'predeploy': 'npm run build',
    'deploy': 'gh-pages -d build',`}
        terminalName="package.json"
      />
      <br />

      <p>
        Wenn das Alles erledigt ist können wir dann unser Projekt im Developer
        Modus starten und sehen die standard generierte Seite von React in{" "}
        <a href="http://localhost:3000/repo">http://localhost:3000/repo</a>{" "}
        wobei Sie repo mit den von Ihnen erstellten Repository Namen ersetzen
        müssen
      </p>
      <Terminal
        code={`
      npm start
      `}
        terminalName="VSCode Terminal"
      />
      <br />
      <p>
        Um nun Ihre erstellte Reactbased Website im Internet findbar zu machen,
        müssen Sie zuerst Ihr Project auf GitHub Publishen dannach können sie
        den Link mit{" "}
        <a href="https://GitUsername.github.io/repo">
          https://GitUsername.github.io/repo
        </a>{" "}
        aufrufen und Ihre Website einsehen :)
      </p>
      <Terminal
        code={`
      npm run deploy
      `}
        terminalName="VSCode Terminal"
      />
      <br />
    </div>
  );
}

export function Text_e() {
  return (
    <div>
      <h1>Hello and Welcome to this Website!</h1>

      <p>
        Here, you'll find exciting information about web design, directly from a
        learning student. Sometimes, it's helpful to get certain topics
        explained from the perspective of a student :)
      </p>

      <p>
        On this homemade website, you can get a variety of information and
        insights into the world of web design, including details about the tools
        I use. Since this project is my own, I can't guarantee regular updates,
        as I'm most likely working on other projects as well. Nevertheless, I
        hope to provide you with a glimpse into web programming.
      </p>

      <h2>Setup:</h2>

      <p>
        For the setup, I use GitHub Pages as a hosting platform to avoid web
        servers and publish simple "static pages." As my working environment, I
        use the open-source code editor VSCode. React serves as the frontend
        tool, and for simple CSS and responsive edits, I use Bootstrap as the
        frontend framework. To start your own project, you should have VSCode
        installed on your device and have a GitHub account.
      </p>

      <h2>First Step:</h2>

      <p>
        First, create a repository on GitHub and clone it in VSCode. Next,
        install a React application in this created repository. Then, connect it
        to GitHub Pages, and finally, add something to the package.json file.
      </p>
      <Terminal
        code={`
      npx create-react-app myOwnName --save-dev
      npm install gh-pages --save-dev
      `}
        terminalName="VSCode Terminal"
      />
      <br />
      <Terminal
        code={`
    'homepage': 'https://GitUsername.github.io/repo',
      
    'start': 'react-scripts start',
    'build': 'react-scripts build',
    'test': 'react-scripts test',
    'eject': 'react-scripts eject',
    'predeploy': 'npm run build',
    'deploy': 'gh-pages -d build',`}
        terminalName="package.json"
      />
      <br />

      <p>
        Once all of this is done, we can start our project in developer mode and
        see the standard generated React page at{" "}
        <a href="http://localhost:3000/repo">http://localhost:3000/repo</a>,
        replacing "repo" with the name of the repository you created.
      </p>
      <Terminal
        code={`
      npm start
      `}
        terminalName="VSCode Terminal"
      />
      <br />
      <p>
        To make your created React-based website accessible on the internet, you
        need to first publish your project on GitHub. After that, you can access
        the link with{" "}
        <a href="https://GitUsername.github.io/repo">
          https://GitUsername.github.io/repo
        </a>{" "}
        to view your website :)
      </p>
      <Terminal
        code={`
      npm run deploy
      `}
        terminalName="VSCode Terminal"
      />
      <br />
    </div>
  );
}
