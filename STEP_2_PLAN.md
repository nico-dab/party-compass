# Step 2: focused, rules-based Party Compass

## Goal and boundary

Help a player enter a party, pick any allowed class and subclass, see a clear party-fit explanation, and understand their current and later-level path. Keep the experience free and offline-capable after first load. Native APK/iPhone packaging is planned below but deferred at the owner's request. A live AI service, login, shared cloud data, and a full digital character sheet are outside step 2.

## Current implementation

The static app now has separate party, class, and subclass-path screens. It includes 13 classes and all 76 subclasses listed on the Dungeon Mister 2024 index as checked on 2026-09-27, 10 suggested core species with free-text entry for other species, sourcebook toggles for Eberron, Ravenloft, Heroes of Faerun, and Arcana Unleashed, original strategy prompts, and local saving. `catalog.mjs` owns the catalog, `advisor.mjs` owns deterministic scoring and separate uncertain-party scenarios, and `app.mjs` owns UI/state. `audit-catalog.mjs` compares the catalog with the live index. A manifest and service worker cache the app for offline use after first load. Node 24 and npm 11 are available here. Java and `adb` are on PATH; Android Studio and the SDK were not found in their usual Windows locations. The project has no native app or Git repository.

## Build sequence

### 1. Make the catalog reliable and easy to edit — core structure done

- Keep the catalog, recommendation logic, and UI in separate small modules, and CSS readable. This structure is in place.
- Each visible option has a canonical name, 2024/5.5e context, sourcebook, short original summary, source-guide fallback, and role tags. Expansion options are labeled and can be excluded by book. The 10 core species are suggested in a free-text field so other allowed species can also be entered.
- Every catalog subclass has a feature timeline. All 28 expansion guides were reviewed on 2026-09-28 for milestones, build choices, and optional feat ideas. `node scan-guides.mjs --refresh` checks heading levels against local data; semantic rules review remains manual. Explicit spell tables are recorded as granted lists, while other spell suggestions remain examples. Never infer a grant from a recommendation.
- Keep `README.md` and `AGENTS.md` current as code and decisions change.

**Check:** no recommendation depends on an unverified feature, expansion labels are visible, and `node test.mjs` passes.

### 2. Make each screen about one decision — implemented

1. **Party setup:** enter party size, names, known class/subclass/species, allowed books, and each uncertain teammate's possible classes. Show a compact party summary and a single “Continue” action.
2. **Choose your class:** show a short recommended group with one-line reasons and an obvious “Browse every class” control. Keep the player's preferred class visible even when its role fit is lower.
3. **Choose subclass path:** rank allowed paths in a compact desktop selector or native mobile select. Put the selected subclass front and center in a wide reading panel with readable feature timelines, build choices, class feat milestones, spell notes, and current/later strategy. Distinguish granted features from optional advice. Keep the campaign goal below the path and preserve saved selections.

Use simple in-page screen state and browser history where needed; do not add a routing framework just for three screens. Save progress locally between screens. On narrow phones, show one decision and one primary action at a time.

**Check:** a new player can go from party entry to a saved class/subclass without scrolling through the entire catalog. The subclass view shows short current, next, and later strategy prompts. Desktop and phone browser checks are required after UI changes.

### 3. Recommend for all entered combinations — implemented for current catalog

- Calculate role coverage from the actual classes, subclasses, current level, and party goals. Recalculate on every choice; do not enumerate all possible party combinations in a static table.
- Treat “Manish may be Ranger or a caster” as separate scenarios. Show “If Ranger…” and “If caster…” recommendations until a class is confirmed. An unknown caster must remain an uncertainty, since a Cleric and Wizard cover different needs.
- Keep the current user's preference influential without hiding weaknesses. Rank all classes, then rank subclasses again within **any** selected class. Explain the largest uncovered needs and the selected option's contribution. Let sourced species traits refine a suggestion without assuming species controls ability scores in 2024 rules.
- Keep one small set of behavior checks for the default party, Ranger versus healing/arcane caster, a non-shortlisted class, unavailable expansion content, and level-sensitive subclass coverage. The recommendation result is inspectable without a browser.

**Done when:** the same party inputs always produce the same ordered results and reasons; changing an uncertain choice or level visibly updates them; no class is a dead end.

### 4. Native distribution — planned only

- For immediate iPhone and Android access, host the current installable web app over HTTPS. iPhone users can use Safari's “Add to Home Screen”; the app caches its own files after first load. This requires hosting, but no Apple Developer membership or AI subscription. Real-device offline acceptance is still outstanding.
- If the group later wants independent native apps on **both** Android and iPhone, prefer evaluating [Expo](https://docs.expo.dev/workflow/overview/) first. Expo/EAS can cloud-build without Android Studio or Xcode on this Windows machine, but React Native screens would replace the current HTML/CSS. Reuse the pure catalog and advisor logic. Plan a browser-data export/import before switching storage.
- An Expo Android build profile can produce a directly installable [APK](https://docs.expo.dev/build-reference/apk/). iPhone distribution to friends through TestFlight or registered devices requires [Apple Developer Program membership](https://developer.apple.com/programs/enroll/), currently USD 99/year in the US. Expo Go is a useful preview, not the final standalone app.
- For native release, choose a stable package/bundle ID, test both real devices offline, keep signing credentials private, and verify saved data and back navigation after an update. Google Play publication is separate.

**Future check:** an Android release APK and an iPhone distribution path are demonstrated on real devices. No native build is part of the current step.

## Future upgrade path

The catalog and deterministic recommendation result remain the source of truth. A later optional AI feature could explain those results in character-friendly language, but it must not invent mechanics or replace rule checks. No AI service or subscription is required for step 2.

## Packaging references

- [Expo cloud development workflow](https://docs.expo.dev/workflow/overview/)
- [Expo Android APK profile](https://docs.expo.dev/build-reference/apk/)
- [Apple Developer enrollment](https://developer.apple.com/programs/enroll/)
- [Apple iPhone Home Screen web app](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/27/ios/27)
# Later: installable native builds

Do this after the remote web version is in use. The immediate Android deliverable is a locally generated, signed APK that installs directly on Android devices. Keep the existing HTML/CSS/JavaScript app and wrap it with Capacitor so the feature work remains shared with the web version. On Windows, install the Android SDK/Android Studio toolchain, add the Capacitor Android shell, build a release APK, then test installation and offline behavior on a physical Android device.

An APK cannot install on iPhone. For iPhone, build a separate signed iOS package from the same Capacitor web app using Xcode on a Mac or a cloud build service. Direct iPhone testing requires Apple provisioning and registered device identifiers; broader beta sharing uses TestFlight and Apple Developer Program membership. Revisit Expo only if the product needs a genuinely native React Native interface or native behavior that the web app cannot provide.

Acceptance: both Android and iPhone builds open the same saved party data format, preserve the app’s offline behavior, and pass a real-device smoke test. No native build is part of the current Netlify deployment.
