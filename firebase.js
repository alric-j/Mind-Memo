
  // Set the configuration for your app
  // TODO: Replace with your project's config object

  src="https://www.gstatic.com/firebasejs/5.7.3/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyApL2nMoiTQQ-gvkdYxZc65s81nudF3S_w",
      authDomain: "mind-memo.firebaseapp.com",
      databaseURL: "https://mind-memo.firebaseio.com",
      projectId: "mind-memo",
      storageBucket: "mind-memo.appspot.com",
      messagingSenderId: "177637158714"
    };
    firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
