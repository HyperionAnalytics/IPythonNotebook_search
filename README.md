IPython Notebook Search and Replace With RegEx Support
======================

IPython Notebook extension enabling search, replace, and replace all functionality with regular expression support.<br>
**This extension works only in IPython notebook v.2.x.x.**

## Installation
These installation instructions are for "vanilla" IPython Notebook setup. If you have themed and customized your IPython Notebook, I will assume you know how to patch this into custom.css and custom.js files.
#### Linux and OS X
Copy **custom.css** and **custom.js** files into:<br>
**~/.ipython/profile_default/static/custom**<br>
You will overwrite two existing place-holding files with same names.<br><br>
Copy **search.js** into:<br>
**~/.ipython/nbextensions**
#### Windows
Copy **custom.css** and **custom.js** files into:<br>
**C:\Users\YourUserName\\.ipython\profile_default\static\custom**<br>
You will overwrite two existing place-holding files with same names.<br><br>
Copy **search.js** into:<br>
**C:\Users\YourUserName\\.ipython\nbextensions**

## Keyboard Shortcuts
### Linux and Windows
Search: `Crtl` - `f`<br>
Find next: `Ctrl` - `g`<br>
Find previous: `Ctrl` - `Shift` - `g`<br><br>
Replace: `Ctrl` - `Shift` - `f`<br><br>
Replace all: `Ctrl` - `Shift` - `r`
### OS X
Search: `Cmd` - `f`<br>
Find next: `Cmd` - `g`<br>
Find previous: `Cmd` - `Alt` - `g`<br><br>
Replace: `Cmd` - `Alt` - `f`<br><br>
Replace all: `Cmd` - `Alt` - `r`

## Using Extension
The extension works in cell edit mode and operates only on currently edited cell.
#### Find / Search
Invoke find / search dialog with `Crtl` - `f` or `Cmd` - `f`, input search term into the dialog text box (RegEx must be enclosed between two forward slashes `/regex_search/`), and hit `Enter`. This will highlight all found instances in yellow, with selected one being highlighted in dark yellow. Move forward `Ctrl` - `g`, `Cmd` - `g`, and backward `Ctrl` - `Shift` - `g`, `Cmd` - `Alt` - `g`. Selected instance can be modified in place.<br>
![alt txt](https://github.com/HyperionAnalytics/IPythonNotebook_search/blob/master/images/search "Search")<br>
![alt txt](https://github.com/HyperionAnalytics/IPythonNotebook_search/blob/master/images/highlights "Highlights")
#### Replace
Invoke replace dialog with `Ctrl` - `Shift` - `f` or `Cmd` - `Alt` - `f`, input replace-search term into the dialog text box (RegEx must be enclosed between two forward slashes `/regex_search/`), and hit `Enter`. Input replace-with term into the dialog text box, and hit `Enter`. Click `Yes` or `No` buttons to replace highlighted instance or `Stop` to exit replace mode.<br>
![alt txt](https://github.com/HyperionAnalytics/IPythonNotebook_search/blob/master/images/replace "Replace")
![alt txt](https://github.com/HyperionAnalytics/IPythonNotebook_search/blob/master/images/replace_dialog "Replace dialog")
#### Replace All
Invoke replace all with `Ctrl` - `Shift` - `r` or `Cmd` - `Alt` - `r`, input replace-search term into the dialog text box (RegEx must be enclosed between two forward slashes `/regex_search/`), and hit `Enter`. Input replace-all term into the dialog text box, and hit `Enter`.

## Credits
This extension was compiled from [IPython contrib repo](https://github.com/ipython-contrib/IPython-notebook-extensions/wiki) and [Joel Moberg's repo](https://github.com/joelmo/dot-ipython), and uses CodeMirror search.js for its functionality.




