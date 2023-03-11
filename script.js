var html_input = [];
var css_input = [];
var js_input = [];

var html_input_mainDiv = document.querySelector('section#html-input > div.code-input');
var css_input_mainDiv = document.querySelector('section#css-input > div.code-input');
var js_input_mainDiv = document.querySelector('section#js-input > div.code-input');
var output_frame = document.querySelector('iframe#output-frame');
var all_html_input;
var all_css_input;

var suggestion_loading_bar = document.querySelector('div.suggestion-loading-main div.suggestion-loading-bar');
var suggestion_box = document.querySelector('div.suggestion-box');
var suggestion_box_Text = document.querySelector('div.suggestion-box > p');
suggestion_loading_bar.style.width = 0;

html_input_mainDiv.addEventListener('keyup', function (e) {

  var html_input_divs = document.querySelectorAll('section#html-input > div.code-input > div.one-code-line')
  if (html_input_mainDiv.innerHTML == '') {
    html_input_mainDiv.innerHTML = `<div class="one-code-line commented-line" contenteditable="false"><xmp><!--Start writing from line one--></xmp></div><div class="one-code-line">.</div>`;
  }
  for (i = 1; i < html_input_divs.length; i++) {

    html_input[i] = html_input_divs[i].innerText;

    all_html_input = html_input.join('');
  }
  output_frame.contentDocument.body.innerHTML = all_html_input;

})

css_input_mainDiv.addEventListener('keyup', () => {

  var css_input_divs = document.querySelectorAll('section#css-input > div.code-input > div.one-code-line')
  if (css_input_mainDiv.innerHTML == '') {
    css_input_mainDiv.innerHTML = `<div class="one-code-line commented-line" contenteditable="false"><xmp><!--Start writing from line one--></xmp></div><div class="one-code-line">CSS...</div>`;
  }
  for (i = 1; i < css_input_divs.length; i++) {

    css_input[i] = css_input_divs[i].innerText;

    all_css_input = css_input.join('');
  }
  output_frame.contentDocument.head.innerHTML = '<style>' + all_css_input + '</style>';
})
//making layout switch buttons
change_layout_button = document.querySelectorAll('div.editor-tools-wrapper>div.editor-layout-buttons>div.change-layout-button')[0];
layout_clickCount = 0;

change_layout_button.addEventListener('click', function () {
  layout_clickCount++;
  if (layout_clickCount % 2 == 0) {

    document.querySelector('div.input-sections-wrapper').style.gridTemplateColumns = 'repeat(2, 50%)';
    document.querySelector('div.input-sections-wrapper').style.gridTemplateRows = '50vh';
    document.querySelector('div.input-sections-wrapper').style.height = '50vh';
    document.querySelector('div.input-sections-wrapper').style.width = '100%';
    document.querySelector('section.output-section').style.height = '100vh';
    document.querySelector('section.output-section').style.width = '100%';
    document.querySelector('div.all-content-wrapper').style.flexDirection = 'column';
  }
  else {

    document.querySelector('div.input-sections-wrapper').style.gridTemplateColumns = 'repeat(1, 100%)';
    document.querySelector('div.input-sections-wrapper').style.gridTemplateRows = '45vh 45vh';
    document.querySelector('div.input-sections-wrapper').style.height = '90vh';
    document.querySelector('div.input-sections-wrapper').style.width = '50vw';
    document.querySelector('section.output-section').style.height = '89vh';
    document.querySelector('section.output-section').style.width = '50%';
    document.querySelector('div.all-content-wrapper').style.flexDirection = 'row';

    if(window.innerWidth >= 600){
    suggestion_box_Text.innerHTML = 'You can also press <kbd>ctrl+alt+L</kbd> to switch layout.'
    suggestion_box.style.display = 'flex'

    setTimeout(() => {
      suggestion_box.style.display = 'none';
    }, 2000);
  }
  }

})
//layout switch buttons end

//making text wrapp
var text_wrap_main = document.querySelector('div.text-wrap-main');
var text_wrap_check = document.querySelector('div.text-wrap-main > span');
var code_line = document.querySelectorAll('section.input-section div.code-input > div.one-code-line');
var text_wrap_click = 0;


text_wrap_main.addEventListener('click', () => {
  text_wrap_click++

  if (text_wrap_click % 2 == 0) {

    text_wrap_check.style.display = 'none';
    code_line.forEach(currentItem => {
      currentItem.style.whiteSpace = 'normal';
    });
  }
  else {

    text_wrap_check.style.display = 'block';
    code_line.forEach(currentItem => {
      currentItem.style.whiteSpace = 'nowrap';
    });
    
    if(window.innerWidth >= 600){
    suggestion_box_Text.innerHTML = 'You can also press <kbd>alt+Z</kbd> to toggle text wrap.'
    suggestion_box.style.display = 'flex'

    setTimeout(() => {
      suggestion_box.style.display = 'none';
    }, 2000);
  }
  }
})
//text wrapp end

//making theme toggle button
var theme_click_count = 0;
var theme_toggler = document.querySelector('div.theme-toggler');

var theme_toggle_moon = `<svg class="theme-toggle-moon" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
  <path opacity="0.15"
  d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z"
  fill="#000000"></path>
  <path
  d="M3 17C10.952 18.6176 16.6829 8.75775 11 3C16.0007 3.13144 20 7.11149 20 12C20 16.9715 16.1188 21 11 21C7.77111 21 4.65938 19.4319 3 17Z"
  stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path>
  </g>
  </svg>`;
var theme_toggle_sun = `<svg class="theme-toggle-sun" height="200px" width="200px" version="1.1" id="_x34_"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
  xml:space="preserve" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
  <g>
  <g>
  <g>
  <path style="fill:#BFB61E;"
  d="M258.373,448.122c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 c11.784,0,21.336-37.611,21.336-45.742C279.709,449.518,270.156,448.122,258.373,448.122z">
  </path>
  <path style="fill:#BFB61E;"
  d="M352.653,422.86c-10.205,5.891-17.78,11.876-9.41,26.374c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C371.829,413.4,362.858,416.968,352.653,422.86z">
  </path>
  <path style="fill:#BFB61E;"
  d="M448.046,344.432c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C482.883,375.576,455.087,348.497,448.046,344.432z">
  </path>
  <path style="fill:#BFB61E;"
  d="M465.07,238.225c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.396,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C510.812,247.777,473.2,238.225,465.07,238.225z">
                  </path>
                  <path style="fill:#BFB61E;"
                      d="M426.71,137.735c-14.498,8.37-10.93,17.341-5.038,27.546c5.892,10.204,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C471.099,123.137,433.75,133.67,426.71,137.735z">
                      </path>
                      <path style="fill:#BFB61E;"
                      d="M164.092,422.86c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.393,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C181.872,434.737,174.297,428.752,164.092,422.86z">
                      </path>
                      <path style="fill:#BFB61E;"
                      d="M424.226,259.561c0-45.799-18.564-87.263-48.577-117.276L141.097,376.837 c30.013,30.013,71.477,48.578,117.276,48.578C349.971,425.415,424.226,351.159,424.226,259.561z">
                  </path>
                  </g>
              <g>
              <path style="fill:#C6BA56;"
                      d="M164.11,96.239c-10.143,5.855-19.05,9.401-27.297-4.618c-0.082-0.083-0.165-0.247-0.248-0.412 c-4.123-7.009-14.596-44.367-4.453-50.305c7.669-4.454,25.07,10.308,34.719,20.781c3.298,3.464,5.69,6.433,6.68,8.164 C181.84,84.364,174.336,90.384,164.11,96.239z">
                      </path>
                  <g>
                      <path style="fill:#C6BA56;"
                      d="M279.729,52.861v0.577c-0.248,16.164-9.732,17.566-21.359,17.566 c-9.319,0-17.236-0.907-20.122-9.483c-0.824-2.227-1.237-5.113-1.237-8.66c0-5.03,3.629-21.276,9.154-32.987 c3.546-7.257,7.752-12.782,12.205-12.782c1.319,0,2.639,0.495,3.876,1.402C272.225,15.174,279.729,45.604,279.729,52.861z">
                      </path>
                      <path style="fill:#C6BA56;"
                      d="M95.085,165.264c-5.938,10.226-11.875,17.813-26.39,9.401 c-3.958-2.227-14.432-11.793-21.854-21.524c-0.082-0.083-0.165-0.165-0.165-0.248c-5.69-7.504-9.484-15.091-6.928-19.545 c5.938-10.226,43.213,0.33,50.305,4.371c1.237,0.742,2.391,1.484,3.381,2.226C103.909,147.699,100.445,155.945,95.085,165.264z">
                      </path>
                      <path style="fill:#C6BA56;"
                      d="M69.85,259.524c0,11.546-1.32,21.03-17.236,21.359h-0.907c-7.834,0-43.13-8.907-45.605-20.122 c-0.082,0-0.082,0-0.082,0c0-0.412-0.083-0.824-0.083-1.237c0-4.536,5.69-8.824,13.112-12.205 c11.711-5.525,27.709-9.071,32.657-9.071c4.701,0,8.164,0.742,10.721,2.062C69.108,243.773,69.85,251.113,69.85,259.524z">
                      </path>
                      <path style="fill:#C6BA56;"
                      d="M68.7,344.432c-7.041,4.065-34.837,31.144-28.945,41.349c5.892,10.205,43.241-0.328,50.281-4.393 c14.498-8.37,10.93-17.341,5.038-27.546C89.183,343.637,83.197,336.062,68.7,344.432z">
                      </path>
                      <path style="fill:#C6BA56;"
                      d="M352.653,96.263c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C334.873,84.386,342.448,90.371,352.653,96.263z">
                      </path>
                      <path style="fill:#C6BA56;"
                      d="M258.373,93.708c-91.598,0-165.853,74.255-165.853,165.853 c0,45.799,18.563,87.262,48.577,117.276l234.552-234.552C345.635,112.271,304.172,93.708,258.373,93.708z">
                      </path>
                      </g>
              </g>
              </g>
          <g>
              <path style="fill:#EFE748;"
                  d="M252.408,440.964c-11.783,0-21.337,1.395-21.337,18.136c0,8.131,9.553,45.742,21.337,45.742 s21.336-37.611,21.336-45.742C273.744,442.36,264.191,440.964,252.408,440.964z">
              </path>
              <path style="fill:#EFE748;"
              d="M346.688,415.702c-10.205,5.892-17.78,11.877-9.41,26.375c4.065,7.041,31.144,34.837,41.349,28.945 c10.205-5.892-0.328-43.241-4.393-50.282C365.864,406.242,356.893,409.81,346.688,415.702z">
              </path>
              <path style="fill:#EFE748;"
              d="M442.081,337.274c-14.498-8.37-20.483-0.795-26.375,9.41c-5.892,10.205-9.46,19.176,5.038,27.546 c7.041,4.065,44.39,14.598,50.282,4.393C476.918,368.418,449.122,341.339,442.081,337.274z">
              </path>
              <path style="fill:#EFE748;"
              d="M459.105,231.066c-16.741,0-18.136,9.553-18.136,21.337c0,11.784,1.395,21.336,18.136,21.336 c8.13,0,45.742-9.553,45.742-21.336C504.846,240.619,467.235,231.066,459.105,231.066z">
              </path>
              <path style="fill:#EFE748;"
              d="M420.744,130.577c-14.497,8.37-10.93,17.341-5.038,27.546c5.892,10.205,11.877,17.78,26.375,9.41 c7.041-4.065,34.837-31.144,28.945-41.349C465.134,115.979,427.785,126.511,420.744,130.577z">
              </path>
              <path style="fill:#EFE748;"
              d="M158.127,415.702c-10.205-5.892-19.176-9.46-27.546,5.038c-4.065,7.041-14.598,44.39-4.392,50.282 c10.205,5.892,37.283-21.904,41.349-28.945C175.907,427.578,168.332,421.594,158.127,415.702z">
              </path>
              <path style="fill:#EFE748;"
              d="M418.261,252.403c0-45.799-18.564-87.263-48.577-117.276L135.132,369.679 c30.014,30.013,71.477,48.578,117.276,48.578C344.006,418.257,418.261,344.001,418.261,252.403z">
              </path>
              </g>
              <g>
              <path style="fill:#FAF2AF;"
              d="M158.09,89.065c-7.67,4.453-14.679,7.587-21.277,2.557c-2.144-1.567-4.206-4.041-6.268-7.587 c-4.041-7.01-14.597-44.367-4.371-50.223c9.814-5.69,34.967,19.545,40.657,27.874c0.33,0.412,0.577,0.742,0.742,1.072 C175.903,77.189,168.316,83.209,158.09,89.065z">
              </path>
              <g>
              <path style="fill:#FAF2AF;"
              d="M273.709,45.687c0,0.577,0,1.155-0.083,1.65c-0.577,15.174-9.814,16.493-21.194,16.493 c-4.288,0-8.247-0.165-11.628-1.237c-0.907-0.247-1.732-0.659-2.556-1.072c-2.722-1.402-4.866-3.711-6.02-7.422 c-0.083-0.083,0-0.083,0-0.083c-0.742-2.227-1.155-5.03-1.155-8.329c0-4.865,3.464-20.452,8.824-32.08 c3.216-7.01,7.175-12.617,11.381-13.442C251.69,0.083,252.02,0,252.432,0c3.547,0,6.927,3.463,9.814,8.494 c0.99,1.649,1.897,3.464,2.804,5.443C270.328,25.482,273.709,40.904,273.709,45.687z">
              </path>
              <path style="fill:#FAF2AF;"
              d="M89.147,158.09c-5.937,10.226-11.875,17.813-26.39,9.484c-2.969-1.732-9.648-7.505-15.916-14.432 c-0.082-0.083-0.165-0.165-0.165-0.248c-8.577-9.401-16.246-20.864-12.865-26.719c5.855-10.226,43.213,0.33,50.222,4.371 c5.195,3.051,8.164,6.185,9.401,9.401C95.662,145.637,92.858,151.658,89.147,158.09z">
              </path>
              <path style="fill:#FAF2AF;"
              d="M63.83,252.432c0,11.793-1.402,21.277-18.142,21.277H45.44c-5.03-0.083-20.122-3.382-31.503-8.577 c-2.886-1.402-5.608-2.804-7.835-4.371c-0.082,0-0.082,0-0.082,0C2.309,258.205,0,255.401,0,252.432c0-0.33,0-0.742,0.165-1.072 c0.742-4.041,5.69-7.669,12.04-10.886c11.793-5.608,28.451-9.401,33.482-9.401c1.897,0,3.629,0.165,5.196,0.412 c6.762,0.99,9.978,4.288,11.545,8.824c0.412,1.072,0.66,2.309,0.825,3.546C63.748,246.412,63.83,249.381,63.83,252.432z">
              </path>
              <path style="fill:#FAF2AF;"
              d="M84.034,374.237c-5.196,3.051-27.379,9.649-40.739,8.576c-1.567-0.083-2.969-0.33-4.288-0.742 c-2.392-0.66-4.206-1.815-5.195-3.464c-0.908-1.567-1.072-3.629-0.577-5.855c2.804-12.206,23.503-32.08,29.523-35.461 c2.969-1.732,5.608-2.804,7.917-3.216c7.917-1.732,12.453,2.969,16.659,9.566c0.577,0.99,1.237,1.979,1.814,3.051 c2.062,3.711,3.959,7.175,4.701,10.556C95.25,363.268,93.353,368.876,84.034,374.237z">
              </path>
              <path style="fill:#FAF2AF;"
              d="M346.688,89.104c10.205,5.892,19.176,9.46,27.546-5.038c4.065-7.041,14.598-44.39,4.393-50.282 c-10.205-5.892-37.284,21.904-41.349,28.945C328.908,77.228,336.483,83.213,346.688,89.104z">
              </path>
              <path style="fill:#FAF2AF;"
              d="M369.701,135.164l-0.743,0.742l-3.381,3.381L135.164,369.701 c-2.474-2.474-4.783-4.948-7.092-7.587c-6.185-7.009-11.793-14.514-16.741-22.513c-15.668-25.318-24.74-55.171-24.74-87.168 c0-91.621,74.221-165.842,165.842-165.842c29.936,0,58.057,7.917,82.385,21.936C347.6,115.784,359.31,124.773,369.701,135.164z">
                  </path>
                  </g>
                  </g>
                  </g>
                  </g>
                  </svg>`;
var root_css = document.querySelector(':root');
document.querySelector('div.theme-toggler-wrapper').addEventListener('click', function () {

  theme_click_count++;

  if (theme_click_count % 2 != 0) {
    theme_toggler.style.transform = 'translate(-50%) rotate(0deg)';
    theme_toggler.innerHTML = theme_toggle_moon;

    root_css.style.setProperty('--root-primary', 'var(--dark-theme-primary)');
    root_css.style.setProperty('--root-secondary', 'var(--dark-theme-secondary)');
    root_css.style.setProperty('--root-text-color', 'var(--dark-theme-text-color)');
    root_css.style.setProperty('--root-others', 'var(--dark-theme-others)');

    if(window.innerWidth >= 600){
    suggestion_box_Text.innerHTML = 'You can also press <kbd>ctrl+Q</kbd> to switch theme.'
    suggestion_box.style.display = 'flex'

    setTimeout(() => {
      suggestion_box.style.display = 'none';
    }, 2000);
  }

  }
  else {
    theme_toggler.style.transform = 'translate(-90%) rotate(-360deg)';
    theme_toggler.innerHTML = theme_toggle_sun;

    root_css.style.setProperty('--root-primary', 'var(--light-theme-primary)');
    root_css.style.setProperty('--root-secondary', 'var(--light-theme-secondary)');
    root_css.style.setProperty('--root-text-color', 'var(--light-theme-text-color)');
    root_css.style.setProperty('--root-others', 'var(--light-theme-others)');
  }
})
//theme toggle button end

//making copy button
var copy_button = document.querySelectorAll('section.input-section > div.copy-button');
copy_button.forEach(copyButton => {
  copyButton.addEventListener('mousedown', (e) => {
    e.target.style.background = 'var(--root-primary)';
  })
  copyButton.addEventListener('mouseup', (e) => {
    e.target.style.background = 'transparent';
  })
});
var temporary_inputElement;
copy_button[0].addEventListener('click', () => {

  temporary_inputElement = document.createElement('input');
  temporary_inputElement.setAttribute('value', all_html_input);
  temporary_inputElement.setAttribute('id', 'temporary-input-element');
  document.body.appendChild(temporary_inputElement);
  temporary_inputElement.select();

  document.execCommand('copy');
  document.querySelector('input#temporary-input-element').style.display = 'none';
  document.querySelector('input#temporary-input-element').remove();

  suggestion_box_Text.innerHTML = 'HTML copied to clipboard!'
    suggestion_box.style.display = 'flex'

    setTimeout(() => {
      suggestion_box.style.display = 'none';
    }, 2000);
})
copy_button[1].addEventListener('click', () => {

  temporary_inputElement = document.createElement('input');
  temporary_inputElement.setAttribute('value', all_css_input);
  temporary_inputElement.setAttribute('id', 'temporary-input-element');
  document.body.appendChild(temporary_inputElement);
  temporary_inputElement.select();

  document.execCommand('copy');
  document.querySelector('input#temporary-input-element').style.display = 'none';
  document.querySelector('input#temporary-input-element').remove();

  suggestion_box_Text.innerHTML = 'CSS copied to clipboard!'
    suggestion_box.style.display = 'flex'
  
    setTimeout(() => {
      suggestion_box.style.display = 'none';
    }, 2000);
})
//end copy button

document.onkeydown = (e) => {
  if (e.altKey && e.which == 90) {
    text_wrap_click++;
    if (text_wrap_click % 2 == 0) {

      text_wrap_check.style.display = 'none';
      code_line.forEach(currentItem => {
        currentItem.style.whiteSpace = 'normal';
      });
    }
    else {

      text_wrap_check.style.display = 'block';
      code_line.forEach(currentItem => {
        currentItem.style.whiteSpace = 'nowrap';
      });
    }
  }
  if (e.ctrlKey && e.altKey && e.which == 76) {
    layout_clickCount++;
    if (layout_clickCount % 2 == 0) {

      document.querySelector('div.input-sections-wrapper').style.gridTemplateColumns = 'repeat(2, 50%)';
      document.querySelector('div.input-sections-wrapper').style.gridTemplateRows = '50vh';
      document.querySelector('div.input-sections-wrapper').style.height = '50vh';
      document.querySelector('div.input-sections-wrapper').style.width = '100%';
      document.querySelector('section.output-section').style.height = '100vh';
      document.querySelector('section.output-section').style.width = '100%';
      document.querySelector('div.all-content-wrapper').style.flexDirection = 'column';
    }
    else {

      document.querySelector('div.input-sections-wrapper').style.gridTemplateColumns = 'repeat(1, 100%)';
      document.querySelector('div.input-sections-wrapper').style.gridTemplateRows = '45vh 45vh';
      document.querySelector('div.input-sections-wrapper').style.height = '90vh';
      document.querySelector('div.input-sections-wrapper').style.width = '50vw';
      document.querySelector('section.output-section').style.height = '89vh';
      document.querySelector('section.output-section').style.width = '50%';
      document.querySelector('div.all-content-wrapper').style.flexDirection = 'row';
    }
  }
  if (e.ctrlKey && e.which == 81) {
    theme_click_count++

    if (theme_click_count % 2 != 0) {
      theme_toggler.style.transform = 'translate(-50%) rotate(0deg)';
      theme_toggler.innerHTML = theme_toggle_moon;

      root_css.style.setProperty('--root-primary', 'var(--dark-theme-primary)');
      root_css.style.setProperty('--root-secondary', 'var(--dark-theme-secondary)');
      root_css.style.setProperty('--root-text-color', 'var(--dark-theme-text-color)');
      root_css.style.setProperty('--root-others', 'var(--dark-theme-others)');
    }
    else {
      theme_toggler.style.transform = 'translate(-90%) rotate(-360deg)';
      theme_toggler.innerHTML = theme_toggle_sun;

      root_css.style.setProperty('--root-primary', 'var(--light-theme-primary)');
      root_css.style.setProperty('--root-secondary', 'var(--light-theme-secondary)');
      root_css.style.setProperty('--root-text-color', 'var(--light-theme-text-color)');
      root_css.style.setProperty('--root-others', 'var(--light-theme-others)');
    }
  }
}




