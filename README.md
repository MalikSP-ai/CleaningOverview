# CleaningOverview

Rengøring: en lille web-app til telefonen, der holder styr på rengøringstimer og hvad der skal betales.
Appen ligger på https://maliksp-ai.github.io/CleaningOverview/

## Filer

- `index.html` er selve appen (HTML, CSS og JavaScript i én fil).
- `manifest.webmanifest` og `icons/` giver appen navn og ikon på hjemmeskærmen.
- `sw.js` gemmer appen på telefonen, så den også virker uden internet.
- `firebase-config.js` har Firebase-indstillingerne. Er værdien `null`, gemmes timerne kun på telefonen.
- `firestore.rules` er reglerne for databasen: hver bruger kan kun se og ændre sine egne timer.
- `vendor/firebase/` er Firebase JavaScript SDK 10.12.2 (Apache-2.0), lagt ind så appen ikke henter kode fra andre sider.

## Hvor gemmes timerne

- Uden login: kun på telefonen (localStorage).
- Logget ind: online i Firebase Firestore under `users/<bruger-id>/`, med en kopi på telefonen,
  så appen også virker offline. Ændringer sendes, når telefonen er online igen.
- Første gang man logger ind, bliver de timer, der kun lå på telefonen, gemt online.

Under "Sikkerhedskopi" i appen kan du kopiere alle timer som tekst og indlæse dem igen.

## Sådan regner den

For hver gang: (Gik − Kom) + ekstra timer = timer til betaling.
Til betaling = summen af ubetalte timer × timeprisen.

Timeprisen gælder alt, der ikke er betalt endnu. Når man trykker "Marker som betalt",
gemmes den timepris, der gjaldt på det tidspunkt, sammen med de betalte gange.

## Opdateringer

Når du ændrer appens filer, skal du også ændre `CACHE` i `sw.js` (fx `rengoring-v3`),
så telefonerne henter den nye version.
