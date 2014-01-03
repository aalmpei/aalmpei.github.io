      function start() {
        var input = document.getElementById('input')
          , output = document.getElementById('output')
          , button = document.getElementById('button')
          , worker = new Worker('worker.js')
          , loaded = false
          , handler = function (e) {
              if (!loaded) {
                  loaded = true;
                  button.value = "Execute";
                  input.disabled = false;
                  button.disabled = false;
                  return;
              }
              output.value += e.data;
          };

          worker.addEventListener('message', handler, false);

          button.onclick = function() {
              worker.postMessage(input.value);
          };
      };
      window.onload = start;

