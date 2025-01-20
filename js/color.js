function colorSwitch(primary) {
  const root = document.documentElement; // Reference the :root element
  root.style.setProperty('--twitterC', primary);
  bezier(primary);
}

