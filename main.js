    function start() {
      var button = document.getElementById('button')
	, loaded = false
	, handler = function (e) {
	    if (!loaded) {
		loaded = true;
		button.value = "Execute";
		button.disabled = false;
		window.jqconsole.Enable();
	    }
	    window.jqconsole.Write(e.data, 'jqconsole-output');
	    window.jqconsole.Enable();
	    
	};
	window.worker = new Worker('worker.js')
	window.worker.addEventListener('message', handler, false);

	button.onclick = function() {
	    window.worker.postMessage(window.editor.getValue());
	    $.cookie('saved_ws', window.editor.getValue());
	};
    };
    window.onload = start;

    $(function () {
        window.editor = ace.edit("input");
	window.editor.setTheme("ace/theme/clouds");
	window.editor.getSession().setMode("ace/mode/python");
	if($.cookie('saved_ws')!=null) window.editor.setValue($.cookie('saved_ws'));
	window.editor.selection.clearSelection();
	window.jqconsole = $('#output').jqconsole('', '>>>');
        window.jqconsole.SetIndentWidth(1);  
        var startPrompt = function () {
          window.jqconsole.Prompt(true, function (input) {
            window.jqconsole.Disable();
            window.worker.postMessage(input);
            startPrompt();
          }, function (input) {  // Continue if the last character is a backslash.  
            if (/\\$/.test(input)) return 0;
            if (/:$/.test(input)) return window.jqconsole.GetIndentWidth();
            var lines = input.split('\n')
            var count = lines[lines.length - 1].match(/^ /g);
            if(count!==null && count.length>0) return 0;
            return false;
          });
        };
        startPrompt();
    });
    function get_sel() { // get selection or text from cursor to end 
      r=window.editor.getSelectionRange();
      r.end.row = editor.session.getLength();
      
      return window.editor.getCopyText() || window.editor.session.getTextRange(r);
    }
    function open_win()
    {
      dow=window.open('');
      dow.document.write("<pre>"+$('.jqconsole-old-prompt, .jqconsole-output').text()+"</pre>");
      dow.document.write("<button onclick='window.close()'>Закрыть</button>");
      dow.focus();
    }
