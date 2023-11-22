function Welcome() {
  return (
    <div
      data-bs-smooth-scroll="true"
      className="bg-body-tertiary rounded-2  col-7 overflow-scroll max-height-300"
    >
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

      <code>npx create-react-app myOwnName --save-dev</code>

      <p>
        Wenn das Alles erledigt ist können wir dann unser Projekt im Developer
        Modus starten und sehen die standard generierte Seite von React in{" "}
        <a href="http://localhost:3000/repo">http://localhost:3000/repo</a>{" "}
        wobei sie repo mit den von Ihnen erstellten Repository Namen ersetzen
        müssen
      </p>
    </div>
  );
}

export default Welcome;
