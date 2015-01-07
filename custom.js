// JS for CodeMirror search.js to add keyboard shortcuts

$([IPython.events]).on('app_initialized.NotebookApp', function () {
    IPython.load_extensions('search');

    var os = navigator.appVersion.indexOf('Mac')

    if (os != -1) {
        var f = 'Cmd-f';
        var r = 'Cmd-Alt-f';
        var ra = 'Cmd-Alt-r';
    } else {
        var f = 'Ctrl-f';
        var r = 'Ctrl-Shift-f';
        var ra = 'Ctrl-Shift-r';
    }

    IPython.keyboard_manager.edit_shortcuts.add_shortcut(f, {
    help : 'search',
    help_index : 'zz',
    handler : function (event) {
        var cell = IPython.notebook.get_selected_cell();
        IPython.keyboard_manager.disable();
        cell.code_mirror.execCommand('find');
        document.activeElement.onfocusout = function() {
            IPython.keyboard_manager.enable();
        }
        return false;
    }}
);
    IPython.keyboard_manager.edit_shortcuts.add_shortcut(r, {
    help : 'replace',
    help_index : 'zz',
    handler : function (event) {
        var cell = IPython.notebook.get_selected_cell();
        IPython.keyboard_manager.disable();
        cell.code_mirror.execCommand('replace');
        var interv = setInterval(function() {
            if (document.getElementsByClassName('CodeMirror-dialog').  length == 0) {
                IPython.keyboard_manager.enable();
                clearInterval(interv);
            }
        }, 1000);
        return false;
    }}
);
    IPython.keyboard_manager.edit_shortcuts.add_shortcut(ra, {
    help : 'replace all',
    help_index : 'zz',
    handler : function (event) {
        var cell = IPython.notebook.get_selected_cell();
        IPython.keyboard_manager.disable();
        cell.code_mirror.execCommand('replaceAll');
        var interv = setInterval(function() {
            if (document.getElementsByClassName('CodeMirror-dialog').  length == 0) {
                IPython.keyboard_manager.enable();
                clearInterval(interv);
            }
        }, 1000);
        return false;
    }}
);
});
