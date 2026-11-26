# CleaningOverview

Rengøring: en lille web-app til telefonen, der holder styr på rengøringstimer og hvad der skal betales.
Appen ligger på https://maliksp-ai.github.io/CleaningOverview/

## Filer

- `index.html` er selve appen (HTML, CSS og JavaScript i én fil).
- `manifest.webmanifest` og `icons/` giver appen navn og ikon på hjemmeskærmen.
- `sw.js` gemmer appen på telefonen, så den også virker uden internet.

## Hvor gemmes timerne

Timerne gemmes automatisk på telefonen (localStorage), hver gang man tilføjer eller retter noget.
De bliver liggende, indtil appen slettes, eller browserens data ryddes.

Under "Sikkerhedskopi" kan man kopiere alle timer som tekst og indlæse dem igen, fx på en ny telefon.
Indlæsning lægger kun de gange ind, der ikke allerede findes, så intet bliver dobbelt eller overskrevet.

Et link, der slutter med `#import=<data>`, indlæser en sikkerhedskopi med ét tryk. `<data>` er
sikkerhedskopiens JSON, komprimeret med raw deflate og kodet som base64url. Data i `#` sendes ikke
til serveren, og appen fjerner dem fra adressen, så snart de er indlæst.

## Sådan regner den

For hver gang: (Gik − Kom) + ekstra timer = timer til betaling.
Til betaling = summen af ubetalte timer × timeprisen.

Timeprisen gælder alt, der ikke er betalt endnu. Når man trykker "Marker som betalt",
gemmes den timepris, der gjaldt på det tidspunkt, sammen med de betalte gange.

## Opdateringer

Når du ændrer appens filer, skal du også ændre `CACHE` i `sw.js` (fx `rengoring-v4`),
så telefonerne henter den nye version.
