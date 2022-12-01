export function addPairView() {
    document.getElementsByTagName('main')[0].innerHTML = ''
    const section = document.createElement('section');
    section.setAttribute('id', 'create');

    section.innerHTML = `<div class="form">
    <h2>Add item</h2>
    <form class="create-form">
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
      />

      <button type="submit">post</button>
    </form>
  </div>`

    document.getElementsByTagName('main')[0].appendChild(section)
}