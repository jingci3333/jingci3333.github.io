$(document).ready(function() {
    // Get Log File
    function getLog() {
        $.ajax({
            url: 'file:///xxx/xxx/Desktop/app/logfile.txt', // fake path obvi
            dataType: 'text',
            success: function(text) {
                $("#Adaptors").text(text);
                setTimeout(getLog, 10000); // refresh every 10 seconds
                console.log("got Log: ", text);
            }
        })
    }
  
    getLog();
  });