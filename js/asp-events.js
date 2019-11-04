var panels = chrome.devtools.panels;

panels.elements.createSidebarPane("Font Size",
  function(sidebar) {

    function updateContent() {

      function getPanelContents() {

        return {
          //if live
          "Open in local" : window.getComputedStyle($0).getPropertyValue('font-size'),
          
          "CSS Path" : window.getComputedStyle($0).getPropertyValue('font-size'),
          "Body Id" : window.getComputedStyle($0).getPropertyValue('font-size'),
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
    }

    updateContent();

    panels
      .elements
      .onSelectionChanged
      .addListener(updateContent);

 });