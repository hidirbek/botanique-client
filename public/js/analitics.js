let url = "http://localhost:3030/tool_info";
fetch(url)
  .then((response) => response.json())
  .then((arr) => {
    const wrapper = document.querySelector("table");
    let childElements = arr.map((item) => {
      let childDiv = document.createElement("tr");
      childDiv.classList.add("table-row");
      childDiv.innerHTML = `
    <td class="use_date">${item.start_at}</td>
    <td>
      <p class="use_status">В работе</p>
      <p class="using_field">${item.work_type}</p>
    </td>
    <td>
      <p class="work_info">
        <b class="work_info-title">${Object.keys(item.works)}</b>
        <br/>
        ${Object.values(item.works)}
        </p>
    </td>
    <td class="result-col">
      <p class="result">${item.result}</p>
      <i class="fa-solid fa-check"></i>
    </td>
    <td class="username">${item.username}</td>
  `;
      return childDiv;
    });

    childElements.forEach((div) => {
      wrapper.appendChild(div);
    });
  });
