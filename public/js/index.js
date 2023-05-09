let url = "http://localhost:3030/tool_titles";
fetch(url)
  .then((response) => response.json())
  .then((arr) => {
    const wrapper = document.querySelector(".fav_tool_title-wrapper");
    let childElements = arr.map((item) => {
      let childDiv = document.createElement("div");
      childDiv.classList.add("fav_tool_titles");
      childDiv.innerHTML = `
    <img class="tool-img" src="${item.tool_img}" alt=""/>
    <p class="tools-title">${item.tool_title}</p>
    <select class="status-value" name="" id="">
      <option class="trueValue" value=""}>Свободен</option>
      <option class="falseValue" value="">Несвободен</option>
    </select>
    <i class="${item.tool_notification}"></i>
  `;
      const trueValue = document.querySelector(".trueValue");
      const falseValue = document.querySelector(".falseValue");
      // arr.map((item) => {
      //   if (item.tool_title) {
      //     trueValue.setAttribute("selected", "selected");
      //   } else {
      //     falseValue.setAttribute("selected", "selected");
      //   }
      // });
      return childDiv;
    });

    childElements.forEach((div) => {
      wrapper.appendChild(div);
    });
  });
