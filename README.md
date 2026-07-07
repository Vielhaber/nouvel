# Nouvel Premium B2B Pellet-Heizstrahler Landing Page

Eine hochmoderne, visuell ansprechende und conversion-optimierte B2B-Landingpage für die gewerbliche Produktlinie der Outdoor-Pellet-Heizstrahler (Pellet-Heizstrahler) von **Nouvel**.

Diese Landingpage wurde speziell für die Zielgruppen **HoReCa** (Hotels, Restaurants, Cafés), **Biergärten**, **Event-Agenturen**, **Großhändler** und **Bau-/Gartenmärkte** entwickelt.

## 🚀 Live-Features

1. **B2B Hero Section:** Hochkonvertierende Überschriften, Trust-Indikatoren für gewerbliche Kunden und direkte Handlungsaufforderungen (CTAs) zur Händler-Preisliste und technischen PDF-Datenblättern.
2. **Sortiments-Showcase:** Detaillierte Darstellung der 4 Premium-Modelle:
   * **Victoria** (Art. 404834) - Das elegante Säulen-Standmodell
   * **Samutu** (Art. 404832) - Das Premium-Modell mit regelbarem Ventilator & Powerbank
   * **Bonita** (Art. 404833) - Das eckige Premium-Modell mit Rollen & Powerbank
   * **Lanterna** (Art. 405446) - Das kompakte Tisch-Modell
3. **Interaktiver ROI- & Betriebskosten-Rechner:** Live-Kalkulator zum Vergleich von Flüssiggas-Heizstrahlern vs. Holzpellet-Strahlern. Zeigt wöchentliche/jährliche Einsparungen, CO₂-Reduktion (für ESG-Nachhaltigkeitsziele) und die Amortisationszeit (ROI) in Monaten.
4. **Dynamische Charts:** Pure CSS-Balkendiagramme, die auf Slider-Eingaben reagieren (Betriebskosten pro Stunde & jährlicher CO₂-Ausstoß).
5. **Logistik- & Daten-Matrix:** Übersichtliche B2B-Tabelle mit Abmessungen, Gewichten (Netto/CU-Brutto), Verbrauchswerten, Nennleistung und Paletten-Verpackungseinheiten (VPE).
6. **2-Step B2B Lead Capture Form:** Ein zweistufiges, validiertes Lead-Formular zur Erfassung von Firmendaten, geplanter Abnahmemenge und Kontaktdaten.

---

## 🛠️ Tech Stack

* **Framework:** React 19 + Vite 8
* **Styling:** Tailwind CSS v4 (nativ via `@tailwindcss/vite` Plugin)
* **Icons:** Lucide React
* **Build-Tool:** Rolldown (Vite 8 Default Bundler)

---

## 💻 Lokale Installation & Ausführung

Stellen Sie sicher, dass Sie **Node.js** (Empfohlen >= v18) installiert haben.

1. **Repository klonen oder herunterladen**
2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```
3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Öffnen Sie anschließend **[http://localhost:5173/](http://localhost:5173/)** im Webbrowser.

4. **Für die Produktion bauen:**
   ```bash
   npm run build
   ```
   Die optimierten, statischen Assets werden im Ordner `/dist` generiert.

---

## 📦 Veröffentlichung auf GitHub & Deployment

### 1. Projekt zu GitHub hinzufügen
Führen Sie in diesem Projektordner folgende Befehle im Terminal aus:

```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "feat: initial commit Nouvel B2B landing page"

# Hauptzweig auf main umbenennen
git branch -M main

# Verbindung zu Ihrem leeren GitHub Repository herstellen (Ersetze URL)
git remote add origin https://github.com/DEIN-BENUTZERNAME/DEIN-REPOS-NAME.git

# Code hochladen
git push -u origin main
```

### 2. Deployment auf GitHub Pages (Vite-optimiert)
Am einfachsten lässt sich das Projekt mit `gh-pages` hosten:

1. Installieren Sie das gh-pages Paket:
   ```bash
   npm install -D gh-pages
   ```
2. Fügen Sie Ihr GitHub Repository in der `vite.config.js` als `base` hinzu:
   ```javascript
   // vite.config.js
   export default defineConfig({
     base: '/DEIN-REPOS-NAME/', // Wichtig für korrekte Asset-Pfade!
     plugins: [react(), tailwindcss()],
   })
   ```
3. Fügen Sie die Deployment-Skripte in der `package.json` unter `"scripts"` hinzu:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Starten Sie das Deployment:
   ```bash
   npm run deploy
   ```
   Ihre Landingpage ist nun unter `https://DEIN-BENUTZERNAME.github.io/DEIN-REPOS-NAME/` erreichbar!
