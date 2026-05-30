# 🖋️ MarkedUp — Professional Markdown Studio & Live Previewer

MarkedUp is a commercial-grade, fully responsive single-page web application designed to help developers, authors, and technical writers edit, parse, analyze, and format markdown documents in real time. It features multiple workspaces themes, visual styling shortcuts, pre-built document templates, live lexical diagnostics, proportional scroll synchronization, interactive checklist toggles, and rich multi-format export engines.

---

## 🚀 Key Features

* **Multi-Theme Workspaces**: Swap between three highly curated CSS color systems designed for varying environments:
  * 🌌 **Obsidian Deep**: A low-contrast slate dark theme that mirrors modern offline IDEs for comfortable long-session writing.
  * 📝 **GitHub Studio**: A bright, professional light document viewport matching Github standard markdown rendering styles.
  * ⚡ **Cyberpunk Neon**: A glowing, electrifying glassmorphic dark theme with vibrant magenta accents and moving backdrop glow elements.
* **Proportional Scroll Synchronization**: Editor and Preview scrollbars stay perfectly aligned, bypassing height variations caused by large images, headers, or blockquotes. 
* **Interactive Checklist Toggling**: Toggling checkboxes `[ ]` or `[x]` inside the rendered preview panel automatically rewrites the raw Markdown source code in the editor textarea instantly.
* **Pre-built Templates Library**: Load structured boilerplate layouts immediately to kickstart your documents:
  * 🚀 **Standard README.md**: Complete with badge rows, badges, feature tables, code blocks, lists, and term parameters.
  * 📅 **Meeting Minutes**: Structured meeting logs featuring attendance checklists, agendas, schedules, and action grids.
  * 🔌 **API Documentation**: Detailed technical specifications showing REST endpoints, parameters lists, request blocks, and JSON structures.
* **Markdown Action Toolbar**: Highlight text and insert formatting syntax with one tap (Bold, Italic, Strikethrough, inline codes, blockquotes, code-blocks, lists, task-checklists, standard tables, links, images, and dividers).
* **Live Lexical Analysis & Readability meter**:
  * Real-time counters for lines, words, paragraphs, and characters.
  * **Flesch-Kincaid Readability Index**: Live estimation of writing reading ease (Grade levels metrics).
  * **Estimated Reading Time Tracker**: Assumes standard WPM metrics to compute reading durations.
  * **Key Term Density Tracker**: Identifies and maps weighting scales of the top 5 keywords.
* **Autosave Backups & Timelines**: Auto-saves your active draft in browser memory (`localStorage`) every 10 seconds. Keeps a slider timeline of the last 10 version snapshots so you never lose your draft.
* **Multi-Format Exporters**:
  * **Download Markdown**: Saves raw `.md` documents.
  * **Download Styled HTML**: Packages output with structural styles and embedded themes.
  * **Copy raw source / Copy parsed HTML markup** directly to clipboard.
  * **Print / Export PDF**: Leverages bespoke `@media print` print styles to generate clean, professional offline sheets without UI buttons.

---

## 🛠️ Tech Stack & Architecture

* **Core Structure**: Vue 3 (High-performance Global build CDN)
* **Parser Engine**: Marked.js (GFM-compliant, configured for high-speed compiling)
* **Script Sanitation**: DOMPurify (Secured filtering blocking XSS scripts)
* **Syntax Highlighting**: Highlight.js (Dynamic code syntax blocks colorizing)
* **Styling System**: Vanilla CSS3 featuring HSL custom variables, flexible Grid layouts, mobile viewports collapsing, scroll indicators, and animations.

---

## 🧠 Core Implementation details

### 1. Focus-Heuristic Scroll Synchronization
To keep split-screen scrolling synchronized without creating endless layout feedback loops (where Editor scrolls Preview, which triggers Preview scroll, which triggers Editor scroll), MarkedUp uses a dynamic **focus-pointer scroll synchronizer**:
```javascript
// Active cursor mouse handles set which scrollbar drives the viewport
// when both scrolling listeners are active
handleEditorScroll() {
  if (!this.syncScroll || this.scrollTarget !== 'editor') return;
  const editor = this.$refs.editorScroller;
  const preview = this.$refs.previewScroller;
  if (!editor || !preview) return;
  
  const ratio = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
  preview.scrollTop = ratio * (preview.scrollHeight - preview.clientHeight);
}
```

### 2. Live Readability Syllable Estimates
Readability is evaluated using the standardized W3C formulas for **Flesch Reading Ease** and **Flesch-Kincaid Grade Level**. To run this entirely in-browser without large external dictionaries, MarkedUp estimates word syllables dynamically using a regex-based vowel cluster heuristic with silent trailing adjustments:
```javascript
let syllables = 0;
wordMatch.forEach(w => {
  let cleanedWord = w.toLowerCase().replace(/[^a-z]/g, '');
  if (cleanedWord.length <= 3) { syllables += 1; return; }
  // Subtract silent 'e' suffixes
  if (cleanedWord.endsWith('e') && !cleanedWord.endsWith('le')) {
    cleanedWord = cleanedWord.slice(0, -1);
  }
  const clusters = cleanedWord.match(/[aeiouy]+/g);
  syllables += clusters ? clusters.length : 1;
});
```

### 3. Click-Event Markdown Checklist Re-writers
When a checkbox input is clicked in the rendered preview pane, a delegated handler catches the index `k` of the clicked checkbox. It then scans the raw markdown input line-by-line, locating the `k`th matching list pattern (`- [ ]` or `- [x]`) and toggles its state in the source string:
```javascript
toggleMarkdownCheckboxAtIndex(targetIndex) {
  const lines = this.markdownInput.split('\n');
  let checkboxCount = 0;
  const checkboxRegex = /^(\s*[-*+]\s+\[)([ xX])(\]\s+)/;
  
  for (let i = 0; i < lines.length; i++) {
    if (checkboxRegex.test(lines[i])) {
      if (checkboxCount === targetIndex) {
        lines[i] = lines[i].replace(checkboxRegex, (match, prefix, char, suffix) => {
          const toggledChar = (char === ' ' || char === '') ? 'x' : ' ';
          return prefix + toggledChar + suffix;
        });
        this.markdownInput = lines.join('\n');
        return;
      }
      checkboxCount++;
    }
  }
}
```

---

## 📥 How to Run Locally

Since MarkedUp is structured as a **No-Build SPA**, you do not need to install heavy compiler pipelines or bundle frameworks.

### 1. Open the project folder
```bash
cd "DAY7 --MARKDOWN PREVIEWER"
```

### 2. Boot up a local static server
You can use any light-weight server. For instance, launching Python's built-in module:
```bash
python3 -m http.server 8080
```

### 3. Open in Browser
Open your browser and navigate to:
```http
http://localhost:8080
```

---

## 💡 What I Learned

* **Event Debouncing & Focus Heuristics**: Solved the classic infinite loop challenge of bidirectional scrollbars by establishing simple hover `scrollTarget` pointers, making synchronization feel incredibly smooth and responsive.
* **Regex Lexical Auditing**: Learned how to construct highly efficient lexical parses in Vanilla JS to measure syllable counts and keywords without relying on slow external packages.
* **Click Delegation & Markdown Mutation**: Discovered how to bridge the gap between rendered compiled HTML outputs and raw text editor sources by using DOM index matching. This lets us build interactive preview checkboxes that update our source files directly.
