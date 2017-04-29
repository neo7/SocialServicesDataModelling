let htmlCanvasTemplateInstance = null;
class HTMLCanvasTemplate
{
  constructor(){
    if (!htmlCanvasTemplateInstance) {
          htmlCanvasTemplateInstance = this;
        }
  }

  createHTMLCheckBox(name, value, checked, clazz, nameElement)
  {
    var checkboxloc = document.createElement('input');
    checkboxloc.type = "checkbox";
    checkboxloc.name = name;
    checkboxloc.value = value;
    checkboxloc.id = value;
    checkboxloc.checked = checked;
    checkboxloc.className = clazz;

    return checkboxloc;
  }

  createHTMLRadio(name, value, checked, clazz, label)
  {
    var radio = document.createElement('input');
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    radio.id = value;
    radio.checked = checked;
    radio.className = clazz;
    radio.label = label;

    return radio;
  }

  createHTMLNewLine()
  {
    var brloc = document.createElement("BR");

    return brloc;
  }



  createHTMLSelectOption(id, name, value, label)
  {
    var option = document.createElement("option");
    option.id = id;
    option.name = name;
    option.value = value;
    option.label = label;
    option.appendChild(document.createTextNode(name))

    return option;
  }

}
