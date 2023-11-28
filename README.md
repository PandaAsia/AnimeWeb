# Aprendiendo _Markdowon_

Esto es un parrafo

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore

Aplicando _Cursiva_ y **Negrita**, **_cursiva y negrita_**

# Encabezado1

## Encabezado2

### Encabezado3

#### Encabezado4

##### Encabezado5

###### Encabezado6

[Animefolder](https://pandaasia.github.io/AnimeFolder/#/)

[Aprendiendo _Markdown_](#aprendiendo-markdowon)

![this is anime](assets/Boku%20no%20Kokoro%20no%20Yabai%20Yatsu.jpg)

---

este es un texto

---

y este es otro texto

1. primavera
1. verano
1. invierno
1. otoño

- primavera
- verano
- invierno
- otoño

* primavera
  - abril
  - mayo
    - nuevo animes
* verano
* invierno
* oto

citas

> Siempre tienes opcion de no tener opnion-Marco Aurello

> Siempre tienes opcion de no tener opnion-Marco Aurello
>
> Siempre tienes opcion de no tener opnion-Marco Aurello
>
> Siempre tienes opcion de no tener opnion-Marco Aurello

Tablas

| Nombre | Edad | Correo       |
| ------ | ---- | ------------ |
| jerry  | 15   | jerry64gamil |
| shana  | 12   | shana@       |

codigo

```js
((d) => {
  let $expanbtn = d.querySelectorAll(".card-items a");
  let $mostrarTitulo = d.querySelectorAll(".card-title");
  function Expander(index) {
    for (let i = 0; i < $expanbtn.length; i++) {
      if (index == i) {
        $expanbtn[i].parentElement.classList.toggle("expand");
        $mostrarTitulo[i].classList.toggle("change-visibily");
      } else {
        $expanbtn[i].parentElement.classList.remove("expand");
        $mostrarTitulo[i].classList.remove("change-visibily");
      }
    }
  }

  $expanbtn.forEach((btn, index) => {
    btn.addEventListener("mouseenter", () => {
      Expander(index);
    });
    btn.addEventListener("mouseleave", () => {
      Expander(index);
    });
  });
})(document);
```

<!--Esto es un comentario en markdonw-->
