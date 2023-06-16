var clicks = 0;

function puto() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

<p>
  Clicks: <a id="clicks">0</a>
</p>;
