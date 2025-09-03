# iTalki Fixer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Chrome extension that automatically hides unwanted elements on iTalki, giving you a cleaner, distraction-free experience.

## What It Hides

The extension automatically removes:

- **AI Chat Assistant** - The red speech bubble with "I'm here to keep things supp..." message
- **Drops Collection Banner** - The blue banner with "100 drops ready to collect"
- **Other unwanted UI elements** - Various promotional and distracting content

## Before & After

### Before (with unwanted elements):

![Before - iTalki with unwanted elements](resources/before.png)

### After (clean interface):

![After - iTalki with clean interface](resources/after.png)

## Files

- `manifest.json` - Extension configuration
- `background.js` - Background service worker
- `content.js` - Content script that hides elements

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable Developer mode
3. Click "Load unpacked" and select this folder

## Usage

The extension automatically runs on all iTalki pages and hides unwanted elements. No user interaction required - it just works!

## How It Works

The extension uses intelligent polling to find and hide elements as they load, ensuring that even dynamically loaded content is automatically removed.
