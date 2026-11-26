# CleaningOverview

Rengøring: en lille web-app til iPhone, der holder styr på rengøringstimer og hvad der skal betales.

## Filer

- `index.html` er selve appen (HTML, CSS og JavaScript i én fil).
- `manifest.webmanifest` og `icons/` giver appen navn og ikon på hjemmeskærmen.
- `sw.js` gemmer appen på telefonen, så den også virker uden internet.

Timerne gemmes på telefonen (localStorage). Under "Sikkerhedskopi" i appen kan du kopiere
alle timer som tekst og indlæse dem igen, fx på en ny telefon.

## Sådan regner den

For hver gang: (Gik − Kom) + ekstra timer = timer til betaling.
Til betaling = summen af ubetalte timer × timeprisen.

Timeprisen gælder alt, der ikke er betalt endnu. Når man trykker "Marker som betalt",
gemmes den timepris, der gjaldt på det tidspunkt, sammen med de betalte gange.

## Udgiv med GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → vælg branchen og mappen `/ (root)`.
Appen ligger derefter på `https://<brugernavn>.github.io/CleaningOverview/`.

Når du ændrer appens filer, skal du også ændre `CACHE` i `sw.js` (fx `rengoring-v2`),
så telefonerne henter den nye version.
