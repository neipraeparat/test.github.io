
  var test = document.referrer;
    var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
      appId: "f6692edf-bd91-4ca1-8a39-75001a367343",
       safari_web_id: "web.onesignal.auto.5136aa20-d33c-4de6-8d7f-c3f8c4b264dc",
      autoRegister: false,
      notifyButton: {
        enable: false /* Set to false to hide */
      },
  
      promptOptions: {
        /* actionMessage limited to 90 characters */
        actionMessage: "Vuoi ricevere informazioni sul tuo prodotto?",
        /* acceptButtonText limited to 15 characters */
        acceptButtonText: "SI",
        /* cancelButtonText limited to 15 characters */
        cancelButtonText: "NO"
      }
    }]);
    OneSignal.push(function() {
      OneSignal.showHttpPrompt();
    });
    

