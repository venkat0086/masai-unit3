let navbar = () => {
  return `<div class="left">
      <input
        type="text"
        name=""
        id="name"
        placeholder="search for a movie...."
      />
      <button onclick="search()" id="btn">Search</button>
    </div>
    <div>
      <div id="click-home">Home</div>
      <div id="click-login">Login</div>
      <div id="click-signup">Sign-up</div>
    </div>`;
};

export { navbar };
