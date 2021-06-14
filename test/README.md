# Ausführen der Tests
Entweder aus dem root Verzeichnis:

> `$ bash test.sh` 
> 
ausführen, oder im Ordner `test`:

> `$ npm test` oder `$ npm t` oder `$ npx jest`
> 
ausführen
# Nur ausgewählte Tests ausführen
Dazu müssen in der Datei `integration-tests/jest.config.js` die unerwünschten Test-Suits auskommentiert werden.
Ebenfalls müssen neue tests dort eingefügt werden.
Um einzelne Tests innerhalb einer Testsuite auszufüren, muss der test mit `.only()` erweitert werden. Z.B.:
```typescript
test('test 1', async () => {
  ...
});
```
wird geändert zu:
```typescript
test.only('test 1', async () => {
  ...
});
```
Daraufhin werden in der Testsuite (`describe(...)`) nur die mit only markierten tests ausgeführt.
Möchte man nur einen einzelnen Test **NICHT** ausführen, so wird anstelle von `only()` die funktion `skip()` verwendet.
# Front-end Unit-Tests
## Anforderungen
### Login
- [x] Einen erfolgreichen Login (user: `"user"`, password: `"password"`).
- [x] Einen erfolglosen Login Versuch mit korrektem User und falschem Password.
- [x] Ein erfolglosen Login Versuch mit inkorrektem User und korrektem Password.
  
### Datei-Management
- [x] Das erfolgreiche Erstellen einer Datei.
- [x] Der Versuch des Erstellens einer Datei, mit dem Namen einer bereits existierenden Datei.
- [x] Das Löschen einer / mehrerer Datei.
- [x] Der erfolgreiche Upload einer / mehrerer Datei.
- [x] Der erfolglose Upload einer / mehrerer Dateien mit falscher Endung.

### Validierung
- [x] Das erfolgreiche Validieren einer / mehrerer Dateien.
- [x] Der erfolglose Validieren einer / mehrerer Dateien.

### Export
- [x] Das erfolgreiche exportieren der Generate einer / mehrerer Dateien.
- [x] Der erfolglose exportieren der Generate einer / mehrerer Dateien

# Über die Integrationstests
- Die Tests wurden mit dem Framework [Selenium](https://www.selenium.dev/documentation/en/) in der Sprache [Typescript](https://www.typescriptlang.org/) erstellt.
- Zur Ausführung und Verwaltung der Tests wurde das Testing-Framework [Jest](https://jestjs.io/) - spezifischer [TS-Jest](https://kulshekhar.github.io/ts-jest/) - verwendet.
- Wichtig für die Erstellung mit Typescriupt / Selenium:
  - [Promises](https://basarat.gitbook.io/typescript/future-javascript/promise) -> Asynchronität in JS / TS
  - [Page Object Models](https://www.selenium.dev/documentation/en/guidelines_and_recommendations/page_object_models/) -> Aufbau der Seiten 
- Die wichtigsten Elemente im Zusammenhang mit Jest sind:
  - [Setup und Teardown der Tests](https://jestjs.io/docs/setup-teardown)
  - [Tests von asynchronem Code](https://jestjs.io/docs/asynchronous)
- Die Navigation der Seiten erfolgt über separate Page-Klassen (siehe SignInPage)
- Die Pages sollten dabei die Verwendung von Selenium von den Tests abstrahieren
- Die Tests sollten bis auf das Setup/Teardown nicht mit Selenium arbeiten