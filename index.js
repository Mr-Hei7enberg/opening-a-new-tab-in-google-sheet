function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('goTo', 'goTo')
    .addToUi()
}

function goTo() {
  let htmlOutput = HtmlService
    .createHtmlOutput(
      `<script>
      window.open("https://google.com");
      google.script.host.close();
      </script>`)
    .setWidth(20)
    .setHeight(20);
  SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'Переход');
}
