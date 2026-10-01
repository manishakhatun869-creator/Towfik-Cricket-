# Towfik Cricket Score

A responsive, browser-ready redesign preview for **Towfik Cricket Score**. It gives the app a new cricket identity and a premium scoreboard experience across overview, live scores, fixtures, competitions, rankings, and player insights.

## Run the preview

This is a dependency-free static front end. From the repository root, run:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173` (or use the Arena live preview when the server is started there).

## Preview interactions

- Switch between Overview, Live scores, Fixtures, Competitions, Rankings, and Player insights.
- Open a match centre and switch between Summary, Scorecard, and Commentary.
- Filter fixtures by day and format; save matches, follow competitions, and set reminders.
- Search for teams, matches, and sample player profiles. Saved preferences stay in local storage.
- The new wordmark and app/favicon icon use the **Towfik Cricket Score** identity.

## Important source-project note

The repository’s original `CRICFy TV_7.1.zip` is a packaged Android APK (compiled DEX/resources and native libraries), not an Android Studio source project. Its protected/compiled UI cannot be safely redesigned while preserving the original native app behavior from this file alone. This preview is a separate front-end concept with **illustrative sample scores and no connected live-data service**. To apply the same redesign to the installable Android app and keep its existing native features intact, provide the original Android Studio project (or its source repository); the APK will also need to be rebuilt and signed again.
