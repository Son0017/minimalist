let navbar = document.querySelector(".navbar");
let togle = document.querySelector(".toggle");
let x = 0;
togle.addEventListener("click", () => {
  if (x == 0) {
    navbar.classList.add("hidden");
    togle.innerHTML = `
    <i>
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M9.00003 8.79286L0.868301 0.661133L0.161194 1.36824L8.29292 9.49997L0.161194 17.6317L0.868301 18.3388L9.00003 10.2071L17.1318 18.3388L17.8389 17.6317L9.70714 9.49997L17.8389 1.36824L17.1318 0.661133L9.00003 8.79286Z" fill="#33323D"/>
</g>
</svg>
  </i>
    `;
    x = 1;
  } else {
    navbar.classList.remove("hidden");
    togle.innerHTML = `
    <i>
              <svg
                width="24"
                height="13"
                viewBox="0 0 24 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group">
                  <rect id="Rectangle" width="24" height="1" fill="#33323D" />
                  <rect
                    id="Rectangle Copy"
                    y="6"
                    width="24"
                    height="1"
                    fill="#33323D"
                  />
                  <rect
                    id="Rectangle Copy 2"
                    y="12"
                    width="24"
                    height="1"
                    fill="#33323D"
                  />
                </g>
              </svg>
            </i>
    `;
    x = 0;
  }
});
