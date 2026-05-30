/* MarkedUp — Professional Markdown Editor & Live Previewer Vue Application Engine */

const { createApp, nextTick } = Vue;

createApp({
  data() {
    return {
      // Document Metadata
      documentTitle: 'draft.md',
      markdownInput: '', // Initialized in mounted() with intro text
      
      // Workspace states
      viewMode: 'split',      // 'split' | 'editor' | 'preview'
      activeTheme: 'theme-obsidian', // 'theme-obsidian' | 'theme-github' | 'theme-cyberpunk'
      activeSidebar: null,    // 'cheatsheet' | 'templates' | 'stats' | 'history' | null
      layoutRatio: 'equal',   // 'equal' | 'narrow' | 'wide'
      
      // Secondary UI toggles
      syncScroll: true,
      showHTMLSource: false,
      showThemeMenu: false,
      showExportMenu: false,
      
      // Toast state
      toast: {
        show: false,
        message: '',
        type: 'info'
      },
      toastTimer: null,
      
      // Scroll synchronization sync pointers
      scrollTarget: 'editor', // 'editor' | 'preview'
      isScrolling: false,
      
      // Confirmation drawers
      selectedTemplateToLoad: null,
      
      // Local History Drafts Array
      history: [],
      
      // Theme options definition
      themes: [
        { id: 'theme-obsidian', name: 'Obsidian Deep' },
        { id: 'theme-github', name: 'GitHub Studio' },
        { id: 'theme-cyberpunk', name: 'Cyberpunk Neon' }
      ],
      
      // Cheatsheet data catalog
      cheatsheet: [
        {
          category: 'Basic Typography',
          items: [
            { label: 'Bold Text', display: '**bold**', snippet: '**text**', cursorOffset: 2 },
            { label: 'Italic Text', display: '*italic*', snippet: '*text*', cursorOffset: 1 },
            { label: 'Strikethrough', display: '~~strike~~', snippet: '~~text~~', cursorOffset: 2 },
            { label: 'Inline Code', display: '`code`', snippet: '`code`', cursorOffset: 1 }
          ]
        },
        {
          category: 'Headers & Structure',
          items: [
            { label: 'Heading 1', display: '# H1', snippet: '# Heading 1\n', cursorOffset: 0 },
            { label: 'Heading 2', display: '## H2', snippet: '## Heading 2\n', cursorOffset: 0 },
            { label: 'Heading 3', display: '### H3', snippet: '### Heading 3\n', cursorOffset: 0 },
            { label: 'Divider Line', display: '---', snippet: '\n---\n', cursorOffset: 0 }
          ]
        },
        {
          category: 'Blocks & Lists',
          items: [
            { label: 'Blockquote', display: '> quote', snippet: '> Quote text\n', cursorOffset: 0 },
            { label: 'Unordered List', display: '- item', snippet: '- Item 1\n- Item 2\n', cursorOffset: 0 },
            { label: 'Ordered List', display: '1. item', snippet: '1. Item 1\n2. Item 2\n', cursorOffset: 0 },
            { label: 'Checklist Task', display: '- [ ] task', snippet: '- [ ] Task item\n', cursorOffset: 0 }
          ]
        },
        {
          category: 'Rich Elements',
          items: [
            { label: 'Hyperlink', display: '[text](url)', snippet: '[Google](https://google.com)', cursorOffset: 0 },
            { label: 'Image Link', display: '![alt](url)', snippet: '![Logo](https://picsum.photos/300/200)', cursorOffset: 0 },
            { label: 'Standard Table', display: '| A | B |', snippet: '| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n', cursorOffset: 0 },
            { label: 'Code Block', display: '```lang', snippet: '```javascript\nconsole.log("Hello World");\n```\n', cursorOffset: 0 }
          ]
        }
      ],
      
      // Template library library documents
      templates: [
        {
          id: 'tpl-readme',
          name: 'Standard README.md',
          description: 'A premium, professional Github project layout with headers, badging grids, code snippets, lists, and installation charts.',
          tags: ['GitHub', 'Documentation'],
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
          content: `# 🚀 AwesomeProject — High Fidelity Software Solution

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)]()

AwesomeProject is a high-performance, robust, and accessible enterprise application built to help engineering teams streamline their visual pipeline integrations instantly.

---

## ⚡ Key Features

* **Real-time Synchronized Pipelines**: Map your active visual variables with lightning fast response rates.
* **Ambient Lighting Theme Engine**: Fully responsive dark/light models tailored to individual user aesthetics.
* **Strict Security Architectures**: Integrated sanitization nodes (DOMPurify) preventing malicious scripts.
* **Dynamic Markdown Interactivity**: Click checklists inside compilation output, updating raw repository source codes automatically.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Purpose |
| ----- | ---------- | ------- |
| Core | React 19 / Vue 3 | Reactive interface compilation |
| Engine | Marked.js | Markdown compilation engine |
| Security | DOMPurify | Dynamic scripting sanitation |
| Highlights | Highlight.js | Code syntax decorations |

---

## 📥 Quick Installation Guide

Launch your development stack in under 60 seconds:

\`\`\`bash
# 1. Clone the core repository
git clone https://github.com/developer/awesome-project.git

# 2. Open project folder
cd awesome-project

# 3. Download critical dependencies
npm install

# 4. Launch visual development server
npm run dev
\`\`\`

## 🧠 Core Architectural Flow

Below is a demonstration of how our parsing interface compiles code blocks securely:

\`\`\`javascript
// Configure Marked.js compilation engine with DOMPurify sanitizers
function compileMarkdown(rawText) {
  const dirtyHTML = marked.parse(rawText);
  const cleanHTML = DOMPurify.sanitize(dirtyHTML);
  return cleanHTML;
}

console.log(compileMarkdown("# Dynamic Header"));
\`\`\`

## 📝 Roadmap & Progress Checkpoints

Track our current development lifecycle priorities:

- [x] Integrate standard Marked.js markdown parsing core.
- [x] Configure custom Highlight.js styling bindings.
- [ ] Build proportional scroll synchronization handlers.
- [ ] Implement cloud backups for persistent checkpoints.

---

## 📄 License & Terms

This project is licensed under the MIT License - see the [LICENSE.md](file:///Users/pandu/LICENSE.md) file for terms.
`
        },
        {
          id: 'tpl-meeting',
          name: 'Meeting Minutes & Agenda',
          description: 'Keep your team focused with structured headers, attendees checklist, schedules, action lists, and meeting status metrics.',
          tags: ['Corporate', 'Organization'],
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
          content: `# 📅 Core Project Sync // Weekly Review Minutes

**Date**: May 30, 2026  
**Time**: 10:00 AM - 11:00 AM EST  
**Facilitator**: Lead Architect  
**Location**: Virtual Room / Discord Workspace

---

## 👥 Attendance & Roles

- [x] **Lead Architect** (Chair)
- [x] **Senior Frontend Developer** (Scribe)
- [x] **Product Owner** (Stakeholder)
- [ ] **QA Engineer** (Apologies received)

---

## 🎯 Meeting Agenda

1. **Sprint Review**: Progress on Weekly Web challenges.
2. **Design Audit**: Feedback on the Markdown sync scroll accuracy.
3. **Task Allocation**: Distributing exporters and HTML compilers.
4. **Open Floor**: General questions and system performance.

---

## 📝 Key Discussions & Decisions

### 1. No-Build SPA vs. Heavy Vite Build
* **Decision**: Approved a lightweight CDN-based structure to speed up loading and reduce operational dependencies.
* **Rationale**: Simple single-page utility applications perform significantly faster in standard browser sandboxes without intermediate bundlers.

### 2. Synced Scrolling Mechanics
* **Discussion**: Scroll loops are triggering jitter on heavy image pages.
* **Resolution**: Adopted the mouse-focus selector heuristic, keeping track of active pointers to bypass looping scroll triggers.

---

## ⚡ Critical Action Checklist

Please complete all assignments by Friday:

| Owner | Task Description | Deadline | Status |
| ----- | ---------------- | -------- | ------ |
| Frontend | Compile final CSS styles for light/dark viewports | June 2 | - [x] Done |
| Backend | Configure server proxies for secure analytics | June 4 | - [ ] Pending |
| QA Lead | Conduct cross-browser viewport responsive tests | June 5 | - [ ] Not Started |

> **Important Quote from Product Team**: 
> *"Aesthetics are a primary deliverable. Users should feel wowed on first glance by the theme layouts."*

`
        },
        {
          id: 'tpl-api',
          name: 'API Reference Documentation',
          description: 'A crisp, professional API reference outline featuring endpoints badges, JSON request/response payloads, and database fields.',
          tags: ['Developers', 'Tech Specs'],
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
          content: `# 🔌 MarkedUp External Exporter // REST API Reference

The MarkedUp API provides programmatic interfaces for transforming raw markdown streams into sanitized HTML layouts, reading documents stats, and rendering styling parameters.

## 🔑 Authentication

All requests to the exporter engine must include your client API token in the authorization header:

\`\`\`http
Authorization: Bearer YOUR_REST_SECRET_TOKEN
\`\`\`

---

## 🛰️ 1. Exporter Parser Endpoint

### \`POST /api/v1/compile\`

Transform a raw markdown input string into standardized, sanitized HTML structures with code highlighter annotations.

#### 📥 Request Parameters (JSON Payload)

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| \`title\` | String | Yes | Name of output file (e.g. \`document.md\`) |
| \`content\` | String | Yes | Raw markdown formatted character stream |
| \`theme\` | String | No | Color theme style for codes (\`obsidian\`, \`github\`) |

#### 📤 Response Structure (\`200 OK\`)

\`\`\`json
{
  "status": "success",
  "data": {
    "title": "document.md",
    "wordCount": 124,
    "readability": "8.5",
    "html": "<h1 id=\\"header\\">Header</h1>\\n<p>Compiled text.</p>"
  },
  "timestamp": 1779878239000
}
\`\`\`

#### 🔴 Client Error Example (\`400 Bad Request\`)

\`\`\`json
{
  "status": "error",
  "code": "MISSING_REQUIRED_BODY",
  "message": "The body is missing the required parameter: 'content'."
}
\`\`\`

---

## 📊 2. Reading Diagnostics Endpoint

### \`POST /api/v1/diagnose\`

Execute advanced lexical audits on text blocks.

\`\`\`http
POST /api/v1/diagnose HTTP/1.1
Host: api.markedup.studio
Content-Type: application/json

{
  "text": "The quick brown fox jumps over the lazy dog."
}
\`\`\`

#### Response:

\`\`\`json
{
  "words": 9,
  "sentences": 1,
  "characters": 43,
  "fleschScore": 85.5,
  "readabilityClass": "badge-easy",
  "readabilityLabel": "Easy (5th Grade)"
}
\`\`\`
`
        }
      ]
    };
  },

  computed: {
    // Return theme name for top bar
    currentThemeName() {
      const active = this.themes.find(t => t.id === this.activeTheme);
      return active ? active.name : 'Obsidian Deep';
    },

    // Vue Watch Render: Main Marked compiler + Purifier sanitizers
    renderedMarkdown() {
      if (!this.markdownInput) {
        return '<p class="text-secondary-label" style="text-align:center; padding-top:40px;">No content written in the editor. Write markdown to preview.</p>';
      }
      try {
        // Simple sanitization config + highlight code elements
        const rawHtml = marked.parse(this.markdownInput);
        return DOMPurify.sanitize(rawHtml, {
          ADD_ATTR: ['target', 'checked', 'disabled'], // Enable targets and checkbox check attributes
          USE_PROFILES: { html: true }
        });
      } catch (err) {
        return `<p style="color:var(--danger-color)">Error parsing markdown: ${err.message}</p>`;
      }
    },

    // Return HTML source code view formatted cleanly
    cleanHTMLSourceCode() {
      return this.renderedMarkdown;
    },

    // Sidebar Title display
    sidebarTitle() {
      switch(this.activeSidebar) {
        case 'cheatsheet': return 'Markdown Cheatsheet';
        case 'templates': return 'Template Library';
        case 'history': return 'Version Timeline';
        case 'stats': return 'Lexical Audit';
        default: return '';
      }
    },

    // Readability grade meter fill calculation
    readabilityMeterStyle() {
      // Map grade level (typically 0-16) to percentage (0% - 100%)
      const grade = Math.min(Math.max(parseFloat(this.stats.readabilityGrade) || 0, 1), 16);
      const percentage = ((grade - 1) / 15) * 100;
      return {
        width: `${percentage}%`,
        backgroundColor: grade < 6 ? '#10b981' : grade < 11 ? '#f59e0b' : '#ef4444'
      };
    },

    // Main document text stats analyzer
    stats() {
      const text = this.markdownInput || '';
      
      // Clean string counts
      const chars = text.length;
      
      // Word count
      const wordMatch = text.match(/\b\w+\b/g);
      const words = wordMatch ? wordMatch.length : 0;
      
      // Line count
      const lines = text ? text.split('\n').length : 0;
      
      // Sentence count (ends with .?! or line boundaries)
      const sentenceMatch = text.match(/[.!?]+(\s|$)/g);
      const sentences = sentenceMatch ? sentenceMatch.length : (words > 0 ? 1 : 0);
      
      // Paragraphs (double lines)
      const paragraphs = text ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
      
      // Syllables estimation count (Vowels rule, silent terminal 'e')
      let syllables = 0;
      if (wordMatch) {
        wordMatch.forEach(w => {
          let cleanedWord = w.toLowerCase().replace(/[^a-z]/g, '');
          if (cleanedWord.length <= 3) {
            syllables += 1;
            return;
          }
          // Remove suffix e if it's silent (e.g. gate, but not bee/she)
          if (cleanedWord.endsWith('e') && !cleanedWord.endsWith('le')) {
            cleanedWord = cleanedWord.slice(0, -1);
          }
          // Count vowel clusters
          const clusters = cleanedWord.match(/[aeiouy]+/g);
          syllables += clusters ? clusters.length : 1;
        });
      }

      // Est. Reading time (assumes 200 WPM)
      const readingTime = Math.max(Math.ceil(words / 200), 1);
      
      // Readability scores
      // 1. Flesch Reading Ease Formula: 206.835 - 1.015 * (words/sentences) - 84.6 * (syllables/words)
      let fleschScore = 100;
      if (words > 0 && sentences > 0) {
        fleschScore = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
      }
      fleschScore = Math.min(Math.max(Math.round(fleschScore * 10) / 10, 0), 100);
      
      // 2. Flesch-Kincaid Grade Level: 0.39 * (words/sentences) + 11.8 * (syllables/words) - 15.59
      let gradeLevel = 0;
      if (words > 0 && sentences > 0) {
        gradeLevel = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;
      }
      gradeLevel = Math.min(Math.max(Math.round(gradeLevel * 10) / 10, 0), 16);
      
      // Readability ratings labels
      let label = 'Very Easy';
      let rClass = 'badge-easy';
      if (fleschScore < 30) {
        label = 'Professional (College)';
        rClass = 'badge-hard';
      } else if (fleschScore < 50) {
        label = 'Difficult (High School)';
        rClass = 'badge-hard';
      } else if (fleschScore < 70) {
        label = 'Standard (8th-9th Grade)';
        rClass = 'badge-medium';
      } else if (fleschScore < 90) {
        label = 'Easy (6th Grade)';
        rClass = 'badge-easy';
      }
      
      // Term Density Extraction (Top 5 words longer than 4 chars)
      const densityMap = {};
      if (wordMatch) {
        wordMatch.forEach(w => {
          const cw = w.toLowerCase();
          if (cw.length > 4) {
            densityMap[cw] = (densityMap[cw] || 0) + 1;
          }
        });
      }
      const keywords = Object.keys(densityMap)
        .map(word => ({ word, count: densityMap[word] }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // syllable estimation helper metric
      let avgWordLen = words > 0 ? Math.round((chars / words) * 10) / 10 : 0;

      return {
        chars,
        words,
        lines,
        sentences,
        paragraphs,
        readingTime,
        readabilityGrade: gradeLevel.toFixed(1),
        readabilityFlesch: fleschScore,
        readabilityLabel: label,
        readabilityClass: rClass,
        keywords,
        avgWordLen
      };
    }
  },

  watch: {
    // Highlight code blocks on preview updates
    renderedMarkdown() {
      this.triggerSyntaxHighlighting();
    },
    
    // Auto-sync highlight CSS styles theme links
    activeTheme(newTheme) {
      const link = document.getElementById('hljs-theme-link');
      if (link) {
        if (newTheme === 'theme-github') {
          link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
        } else if (newTheme === 'theme-cyberpunk') {
          link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.min.css';
        } else {
          link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
        }
      }
    }
  },

  mounted() {
    // Initialise Default Markdown Guide on visual load
    this.markdownInput = `# 🖋️ Welcome to MarkedUp Markdown Studio

MarkedUp is a sleek, premium visual editor crafted with **Vue 3** and **Marked.js**. It features a modern split-screen workspace, rich formatting shortcuts, responsive scrollbars, and advanced live text audit panels.

Start writing directly in the editor pane, explore standard syntaxes in the **Cheatsheet panel**, or load pre-built document schemas from the **Templates panel**!

---

## 🚀 Interactive Preview Checklists

Double check your task items directly inside this preview window! Click any checkbox below:

- [x] Create core web layout architectures (\`index.html\`)
- [x] Structure premium theme palettes (\`style.css\`)
- [x] Configure Marked.js + DOMPurify secure parsers
- [ ] Build proportional scroll synchronization handlers
- [ ] Implement local drafts version history sliders

---

## 🎨 Layout and Theme Presets

Choose from our three harmonious, state-of-the-art workspace themes via the header toolbar:
1. **Obsidian Deep**: Premium slate dark mode for maximum focus.
2. **GitHub Studio**: Clean, sleek light document styling.
3. **Cyberpunk Neon**: Glowing synthwave workspace with glassmorphism overlays.

You can also adjust split layout view distributions using the toolbar tab options (**Split**, **Editor**, **Preview**) or target width percentages:
* **3:7 Tab**: Expands the live preview viewport.
* **5:5 Tab**: Equal screen split.
* **7:3 Tab**: Enlarges the writing textarea canvas.

---

## 📊 Live Lexical Analysis Dashboard

Expand the **Stats sidebar tab** on the left navigation drawer to audit your writing performance metrics:
* Characters, words, and paragraph counts.
* Estimated reading time estimation.
* **Flesch-Kincaid Grade Readability Index**: Computes language complexity grade targets.
* **Key Term Density**: Analyzes word weights automatically.

---

## 💡 Syntax Demonstrations

Here is a quick overview of how styles render in MarkedUp:

### 1. Typography & Inline Elements
*You can write italics*, **bold text lines**, ~~strikethroughs~~, or inline tags like \`const studio = "MarkedUp";\`.
Create external links effortlessly: [Explore Google](https://google.com).

### 2. Formatted Code Highlight block
Our compiler automatically integrates **Highlight.js** syntax styling:

\`\`\`javascript
// Reactive scroll synchronization event handlers
function handleScrollSync(sourceEl, targetEl) {
  const scrollPercentage = sourceEl.scrollTop / (sourceEl.scrollHeight - sourceEl.clientHeight);
  targetEl.scrollTop = scrollPercentage * (targetEl.scrollHeight - targetEl.clientHeight);
}
\`\`\`

### 3. Styled Grid Tables

| Metric | Obsidian theme | GitHub theme | Cyberpunk theme |
| :--- | :--- | :--- | :--- |
| **Accent Hue** | Violet / Purple | Indigo Blue | Hot Magenta |
| **Canvas Color** | #121214 | #ffffff | #0a0b12 |
| **Aesthetics** | Professional | Minimalist | Electrifying |

### 4. Styled Blockquotes
> "Great layout inspires deep thoughts. Keep writing, keep previewing, and export beautiful assets instantly." 

---

## 📄 Seamless Asset Exports

When you finish drafting, open the **Export menu** to compile your file instantly:
* **Download Markdown**: Saves raw \`.md\` drafts locally.
* **Download Styled HTML**: Packages compilation output, complete with structural styles.
* **Copy HTML / Copy Markdown Source**: Fast clipboard sharing.
* **Print / Export PDF**: Fires optimized document printing styles.
`;

    // Initialize document title
    this.documentTitle = 'draft.md';

    // Global Key Listener for Keyboard Shortcuts (Ctrl+S / Cmd+S / Ctrl+B / Ctrl+I)
    window.addEventListener('keydown', this.handleGlobalShortcuts);

    // Initialize Local drafts history list from LocalStorage
    this.loadHistoryList();

    // Trigger Initial Syntax Highlighting
    this.triggerSyntaxHighlighting();

    // Schedule 10 second Auto Saver Loop
    this.autosaveInterval = setInterval(this.autosaveDraft, 10000);
    
    // Schedule 30 second History Version Snapshots Loop
    this.historyInterval = setInterval(this.snapshotHistory, 30000);
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleGlobalShortcuts);
    clearInterval(this.autosaveInterval);
    clearInterval(this.historyInterval);
  },

  methods: {
    // Toast Notification Dispatcher
    showToast(message, type = 'info') {
      if (this.toastTimer) {
        clearTimeout(this.toastTimer);
      }
      this.toast.message = message;
      this.toast.type = type;
      this.toast.show = true;
      
      this.toastTimer = setTimeout(() => {
        this.toast.show = false;
      }, 3000);
    },

    // Toggle Dropdown menus
    toggleThemeMenu() {
      this.showThemeMenu = !this.showThemeMenu;
      this.showExportMenu = false;
    },
    
    toggleExportMenu() {
      this.showExportMenu = !this.showExportMenu;
      this.showThemeMenu = false;
    },

    selectTheme(themeId) {
      this.activeTheme = themeId;
      this.showThemeMenu = false;
      this.showToast(`Swapped to theme: ${this.currentThemeName}`, 'success');
    },

    // Sidebar Toggler Panels
    toggleSidebar(panel) {
      if (this.activeSidebar === panel) {
        this.activeSidebar = null;
      } else {
        this.activeSidebar = panel;
        this.showThemeMenu = false;
        this.showExportMenu = false;
      }
    },

    // Formatting insertion core engine
    insertMarkdown(prefix, suffix = '', cursorOffset = 0) {
      const textarea = this.$refs.markdownTextarea;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const originalText = this.markdownInput;
      
      const selection = originalText.substring(start, end);
      const replacement = prefix + selection + suffix;
      
      this.markdownInput = originalText.substring(0, start) + replacement + originalText.substring(end);
      
      // Refocus & reset cursor positions
      nextTick(() => {
        textarea.focus();
        if (start === end) {
          // No selection: place cursor in between prefix and suffix
          const newPos = start + prefix.length;
          textarea.setSelectionRange(newPos, newPos);
        } else {
          // Re-highlight the original selection with styling around it
          const newStart = start + prefix.length;
          const newEnd = end + prefix.length;
          textarea.setSelectionRange(newStart - cursorOffset, newEnd + suffix.length - cursorOffset);
        }
      });
    },

    // Helper: Code block insertion
    insertCodeBlock() {
      this.insertMarkdown('```javascript\n', '\n```\n', 0);
    },

    // Helper: Table insertion template
    insertTable() {
      const tableTpl = '\n| Header 1 | Header 2 |\n| -------- | -------- |\n| Cell 1   | Cell 2   |\n';
      this.insertMarkdown(tableTpl, '', 0);
    },

    // Keypress handles in text areas (Tabs indents support)
    handleTextareaKeydown(event) {
      const textarea = this.$refs.markdownTextarea;
      if (!textarea) return;

      // Handle TAB key
      if (event.key === 'Tab') {
        event.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const originalText = this.markdownInput;
        
        // Insert 4 spaces standard tab
        this.markdownInput = originalText.substring(0, start) + '    ' + originalText.substring(end);
        
        nextTick(() => {
          const newPos = start + 4;
          textarea.setSelectionRange(newPos, newPos);
        });
      }
    },

    // Global Key Listener for shortcuts
    handleGlobalShortcuts(event) {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? event.metaKey : event.ctrlKey;
      
      if (modifier) {
        // Ctrl+S / Cmd+S : Download markdown
        if (event.key === 's') {
          event.preventDefault();
          this.exportMarkdown();
        }
        // Ctrl+B / Cmd+B : Bold
        else if (event.key === 'b') {
          event.preventDefault();
          this.insertMarkdown('**', '**', 2);
        }
        // Ctrl+I / Cmd+I : Italic
        else if (event.key === 'i') {
          event.preventDefault();
          this.insertMarkdown('*', '*', 1);
        }
        // Ctrl+K / Cmd+K : Inline code
        else if (event.key === 'k') {
          event.preventDefault();
          this.insertMarkdown('`', '`', 1);
        }
      }
    },

    // Syntax Highlighting Post-render Hooks
    triggerSyntaxHighlighting() {
      nextTick(() => {
        const previewEl = document.getElementById('rendered-preview-content');
        if (previewEl) {
          previewEl.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
          });
        }
      });
    },

    // ----------------------------------------------------
    // PROPORTIONAL SCROLL SYNCHRONIZATION ALGORITHM
    // ----------------------------------------------------
    handleEditorScroll() {
      if (!this.syncScroll || this.scrollTarget !== 'editor') return;
      
      const editor = this.$refs.editorScroller;
      const preview = this.$refs.previewScroller;
      if (!editor || !preview) return;
      
      // Calculate active scrolling ratio
      const maxEditorScroll = editor.scrollHeight - editor.clientHeight;
      if (maxEditorScroll <= 0) return;
      
      const ratio = editor.scrollTop / maxEditorScroll;
      
      // Proportional matching scrolls
      const maxPreviewScroll = preview.scrollHeight - preview.clientHeight;
      preview.scrollTop = ratio * maxPreviewScroll;
    },

    handlePreviewScroll() {
      if (!this.syncScroll || this.scrollTarget !== 'preview') return;
      
      const editor = this.$refs.editorScroller;
      const preview = this.$refs.previewScroller;
      if (!editor || !preview) return;
      
      const maxPreviewScroll = preview.scrollHeight - preview.clientHeight;
      if (maxPreviewScroll <= 0) return;
      
      const ratio = preview.scrollTop / maxPreviewScroll;
      
      const maxEditorScroll = editor.scrollHeight - editor.clientHeight;
      editor.scrollTop = ratio * maxEditorScroll;
    },

    // ----------------------------------------------------
    // INTERACTIVE TASK LISTS CHECKBOX TOGGLE ALGORITHM
    // ----------------------------------------------------
    handlePreviewClick(event) {
      // Find if clicked element is standard list item checkbox
      const target = event.target;
      if (target.tagName === 'INPUT' && target.getAttribute('type') === 'checkbox') {
        const preview = document.getElementById('rendered-preview-content');
        if (!preview) return;
        
        // Locate index of this checkbox among all checkboxes in the preview container
        const checkboxes = Array.from(preview.querySelectorAll('input[type="checkbox"]'));
        const clickedIndex = checkboxes.indexOf(target);
        if (clickedIndex === -1) return;
        
        // Find corresponding checkpoint in markdown source and toggle it
        this.toggleMarkdownCheckboxAtIndex(clickedIndex);
      }
    },

    toggleMarkdownCheckboxAtIndex(targetIndex) {
      const lines = this.markdownInput.split('\n');
      let checkboxCount = 0;
      
      // Regex definitions for checkbox syntaxes (- [ ], - [x], * [ ], * [x])
      const checkboxRegex = /^(\s*[-*+]\s+\[)([ xX])(\]\s+)/;
      
      for (let i = 0; i < lines.length; i++) {
        if (checkboxRegex.test(lines[i])) {
          if (checkboxCount === targetIndex) {
            // Found matching target: swap check markers
            lines[i] = lines[i].replace(checkboxRegex, (match, prefix, char, suffix) => {
              const toggledChar = (char === ' ' || char === '') ? 'x' : ' ';
              return prefix + toggledChar + suffix;
            });
            
            // Re-compile input source
            this.markdownInput = lines.join('\n');
            this.showToast('Checklist state updated in editor source!', 'info');
            return;
          }
          checkboxCount++;
        }
      }
    },

    // ----------------------------------------------------
    // AUTOSAVE & TIMELINES MANAGER
    // ----------------------------------------------------
    autosaveDraft() {
      if (this.markdownInput) {
        localStorage.setItem('markedup_active_draft_content', this.markdownInput);
        localStorage.setItem('markedup_active_draft_title', this.documentTitle);
        // Toggle saved badge visual animations in badge UI
        const tag = document.querySelector('.autosave-tag');
        if (tag) {
          tag.classList.remove('active-saving');
          void tag.offsetWidth; // Reflow reset
          tag.classList.add('active-saving');
        }
      }
    },

    snapshotHistory() {
      if (!this.markdownInput) return;
      
      const lastDraft = this.history[0];
      // Avoid saving identical sequential backups
      if (lastDraft && lastDraft.content === this.markdownInput) return;

      const newDraft = {
        timestamp: Date.now(),
        content: this.markdownInput,
        title: this.documentTitle,
        preview: this.markdownInput.slice(0, 100).replace(/[#*`~>-]/g, '').trim(),
        wordCount: this.stats.words,
        charCount: this.stats.chars
      };

      // Add to array, cap at 10 items
      this.history.unshift(newDraft);
      this.history = this.history.slice(0, 10);
      
      localStorage.setItem('markedup_history_drafts', JSON.stringify(this.history));
      this.showToast('Version backup snapshot captured.', 'info');
    },

    loadHistoryList() {
      // 1. Restore active writing drafts
      const savedInput = localStorage.getItem('markedup_active_draft_content');
      const savedTitle = localStorage.getItem('markedup_active_draft_title');
      if (savedInput) {
        this.markdownInput = savedInput;
      }
      if (savedTitle) {
        this.documentTitle = savedTitle;
      }

      // 2. Restore timelines
      const savedHistory = localStorage.getItem('markedup_history_drafts');
      if (savedHistory) {
        try {
          this.history = JSON.parse(savedHistory);
        } catch(e) {
          this.history = [];
        }
      }
    },

    loadHistoryDraft(draft) {
      this.markdownInput = draft.content;
      this.documentTitle = draft.title || 'restored_draft.md';
      this.showToast('Restored version from history timeline!', 'success');
      this.activeSidebar = null; // Close panel
    },

    clearHistoryList() {
      this.history = [];
      localStorage.removeItem('markedup_history_drafts');
      this.showToast('Timeline history cleared.', 'error');
    },

    // ----------------------------------------------------
    // TEMPLATE LIBRARY CONFIRMATION DIALOGS
    // ----------------------------------------------------
    confirmLoadTemplate(template) {
      this.selectedTemplateToLoad = template;
      const modal = document.getElementById('confirmModal');
      if (modal) {
        modal.showModal();
      }
    },

    closeConfirmModal() {
      const modal = document.getElementById('confirmModal');
      if (modal) {
        modal.close();
      }
      this.selectedTemplateToLoad = null;
    },

    executeLoadTemplate() {
      if (this.selectedTemplateToLoad) {
        // Snapshot active draft to history before overwriting
        this.snapshotHistory();
        
        // Overwrite active model
        this.markdownInput = this.selectedTemplateToLoad.content;
        this.documentTitle = this.selectedTemplateToLoad.id + '_preset.md';
        
        this.showToast(`Loaded Template: ${this.selectedTemplateToLoad.name}`, 'success');
        this.closeConfirmModal();
        this.activeSidebar = null; // Close side drawer
      }
    },

    // Clear editor dialogs
    triggerClearConfirm() {
      const modal = document.getElementById('clearConfirmModal');
      if (modal) {
        modal.showModal();
      }
    },

    closeClearModal() {
      const modal = document.getElementById('clearConfirmModal');
      if (modal) {
        modal.close();
      }
    },

    executeClearEditor() {
      this.snapshotHistory(); // Backup before deleting
      this.markdownInput = '';
      this.documentTitle = 'draft.md';
      this.showToast('Editor cleared. Auto-backup saved in history.', 'error');
      this.closeClearModal();
    },

    // ----------------------------------------------------
    // ASSETS IMPORT / EXPORTER CONTROLLERS
    // ----------------------------------------------------
    triggerFileInput() {
      const input = document.getElementById('markdown-file-input');
      if (input) {
        input.click();
      }
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        this.snapshotHistory(); // Backup active draft
        this.markdownInput = e.target.result;
        this.documentTitle = file.name;
        this.showToast(`Imported File: ${file.name}`, 'success');
      };
      reader.readAsText(file);
      
      // Reset input value so same file can be reloaded
      event.target.value = '';
    },

    // Downloader core helper
    downloadFile(content, filename, contentType) {
      const blob = new Blob([content], { type: contentType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },

    exportMarkdown() {
      if (!this.markdownInput) {
        this.showToast('Editor is empty, nothing to export!', 'error');
        return;
      }
      this.downloadFile(this.markdownInput, this.documentTitle, 'text/markdown;charset=utf-8');
      this.showToast(`Downloaded Markdown: ${this.documentTitle}`, 'success');
      this.showExportMenu = false;
    },

    exportHTMLFile() {
      if (!this.markdownInput) {
        this.showToast('Editor is empty, nothing to export!', 'error');
        return;
      }
      
      // Package styled HTML container with inline styling
      const styleSheetsText = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
        .map(el => {
          if (el.tagName === 'STYLE') return el.outerHTML;
          return `<link rel="stylesheet" href="${el.href}">`;
        })
        .join('\n');

      const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.documentTitle} // Exported from MarkedUp</title>
  ${styleSheetsText}
  <style>
    body {
      background: var(--bg-primary, #ffffff);
      color: var(--text-main, #24292f);
      font-family: var(--font-sans, system-ui, sans-serif);
      margin: 0;
      padding: 0;
    }
    .exported-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 24px;
      background: var(--preview-bg, #ffffff);
      border: 1px solid var(--border-color, #d0d7de);
      border-radius: var(--radius-lg, 12px);
      box-shadow: var(--shadow-md);
    }
    @media (max-width: 768px) {
      .exported-container {
        margin: 10px;
        padding: 16px;
      }
    }
  </style>
</head>
<body class="${this.activeTheme}">
  <main class="exported-container markdown-rendered-body">
    ${this.renderedMarkdown}
  </main>
</body>
</html>`;

      const outputName = this.documentTitle.replace(/\.[^/.]+$/, "") + '.html';
      this.downloadFile(fullHTML, outputName, 'text/html;charset=utf-8');
      this.showToast(`Downloaded Styled HTML: ${outputName}`, 'success');
      this.showExportMenu = false;
    },

    copyRawMarkdown() {
      if (!this.markdownInput) {
        this.showToast('Editor is empty, nothing to copy!', 'error');
        return;
      }
      navigator.clipboard.writeText(this.markdownInput)
        .then(() => {
          this.showToast('Copied raw Markdown source to clipboard!', 'success');
        })
        .catch(() => {
          this.showToast('Failed to copy text.', 'error');
        });
      this.showExportMenu = false;
    },

    copyCompiledHTML() {
      if (!this.markdownInput) {
        this.showToast('Editor is empty, nothing to copy!', 'error');
        return;
      }
      navigator.clipboard.writeText(this.renderedMarkdown)
        .then(() => {
          this.showToast('Copied compiled, sanitized HTML markup!', 'success');
        })
        .catch(() => {
          this.showToast('Failed to copy HTML.', 'error');
        });
      this.showExportMenu = false;
    },

    triggerPrintPDF() {
      this.showExportMenu = false;
      this.showToast('Opening print dialog... Print or Save as PDF.', 'info');
      // Delay printing slightly to let toast render and close export menu safely
      setTimeout(() => {
        window.print();
      }, 500);
    }
  }
}).mount('#app');
