var panels = chrome.devtools.panels;

panels.elements.createSidebarPane("Font Size",
  function(sidebar) {

    function updateContent() {
      // document.addEventListener('DOMContentLoaded', (event) => {
        function getPanelContents() {

          // let bodyId = "";
          // function findBodyId() {
            // const bodyClasses = document.getElementsByTagName(body).className;
            // const bodyIdClass = bodyClasses.split(" ");
            // const bodyId = bodyIdClass[0].split("body--id-")[1];
          // }
          // findBodyId();
          let bodyId = 'HEY';
          if ($('body').lenght) {
            bodyId = 'Oi'

          }
          return {
            //if live
            "Open in local" : window.getComputedStyle($0).getPropertyValue('font-size'),
            
            "CSS Path" : window.getComputedStyle($0).getPropertyValue('font-size'),
            "Open Backoffice Page" : `https://showoff.asp.events/cmsadmin/pages/editor/contentID/${bodyId}`,
            // "Body Id" : `https://showoff.asp.events/cmsadmin/pages/editor/contentID/${bodyId}`,
            //Link:https://showoff.asp.events/cmsadmin/pages/editor/contentID/number
            
            // Check if the link is live/preview/local
            // Check if the link is a library (!$('div.section))
            //Link:https://showoff.asp.events/cbLibraries/entries/index/library//number

            // let bodyId = '';

            "Panel Id" : window.getComputedStyle($0).getPropertyValue('font-size'),
            //Link:https://showoff.asp.events/cmsadmin/panels/editor/contentID/207958
            "Font Size" : window.getComputedStyle($0).getPropertyValue('font-size'),
            "jQUery" : $(document).ready(function(){ console.log('ready'); }),
          }
        }
        
        sidebar.setExpression(
          "(" + getPanelContents.toString() + ")()"
          );
      // });
    }

    updateContent();

    panels
      .elements
      .onSelectionChanged
      .addListener(updateContent);

 });