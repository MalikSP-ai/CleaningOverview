# CleaningOverview

Rengøringstimer: en lille app til at holde styr på rengøringstimer og hvad der skal betales.

- `rengoringstimer.html` er hele appen (HTML, CSS og JavaScript i én fil).
- Den er udgivet som en Claude-artifact, hvor timerne gemmes i artifactens database.
- Åbnes filen et andet sted, gemmes timerne i browserens localStorage i stedet.

## Sådan regner den

For hver gang: (Gik − Kom) + ekstra timer = timer til betaling.
Til betaling = summen af ubetalte timer × timeprisen.

Timeprisen gælder alt, der ikke er betalt endnu. Når man trykker "Marker som betalt",
gemmes den timepris, der gjaldt på det tidspunkt, sammen med de betalte gange.
