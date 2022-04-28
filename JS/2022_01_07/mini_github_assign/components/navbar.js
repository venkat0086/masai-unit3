let navbar = () => {
  return `<div id="navbar">
  <div id="logo">
    <a href="index.html">
      <img
        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4
        "
        alt=""
      />
    </a>
  </div>

  <div id="search">
    <input type="text" id="search-input" placeholder="Search Github" />
  </div>

  <div id="options">
    <ul id="list">
      <li>Pull Request</li>
      <li>ISsues</li>
      <li>MArketPlace</li>
      <li><a href="explore.html">Explore</a></li>
    </ul>
  </div>
  <div id="profile">
    <img
      id="profile-img"
      src="https://static.toiimg.com/photo/msid-72295960/72295960.jpg?545889"
      alt=""
    />
  </div>
</div>`;
};
export default navbar;
