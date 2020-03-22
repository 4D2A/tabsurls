# TabsURLs

Web extension to copy tabs URLs to clipboard.

## Packaging

> Packaging the extension is **not** mandatory for local or development usage.

* Run the script `make.sh`

## Installation

### Temporary installation

* Go to `about:debugging` then *This Firefox*
* Select *Load Temporary Add-on*
* Select either the packaged extension file `tabsurls.zip` or one of the extension source file (e.g. `manifests.json`)

### Permanent installation

* Add the following block into `manifest.json`:

```json
"browser_specific_settings": {
  "gecko": {
    "id": "tabsurls@example.com"
  }
}
```

* Disable the extension signature verification:
  * Go to `about:config`
  * Switch `xpinstall.signatures.required` to `false`
* Install the extension from file:
  * Go to `about:addons`
  * Select the gear icon then *Install Add-on From File*
  * Select the packaged extension file `tabsurls.zip`
