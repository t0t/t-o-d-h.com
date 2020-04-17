# LiveLike :blue_heart: :cyclone: :full_moon: :surfer:

### Living Design System & Holistic Workflow based on systemic functional paradigm.

Turning your ideas into tangible prototypes.

	We don't reinvent the wheels, we make them better

* Filosofía:
	* Reusable `*.pug` components
	* Uses `Sass` with BEM naming convention

* It uses:
	* Bootstrap 4
	* Pug
	* Sass
	* Prepross
	* Git / github [GitHub](http://github.com)
	* Nucleo Icon System [Nucleo App](https://nucleoapp.com)
	* SketchApp
	* Trello
	* Brand.ai
	* Now UI Kit
	* BEM
	* Formspree [Formspree](https://formspree.io/)

### Dont Repeat Yourself

Componentes generados con el motor de templates Pug:

```pug
extends layouts/_default
block title
	title TODH
block prepend styles
block body
	body.index-page
		include partials/components/navbars/_navbar-3
		.wrapper(role='main')
			block content
				include includes/_main
	block scripts
		script(src='' integrity='' crossorigin='')
		script(src='' type='text/javascript')
```

Tan simple como comentar aquellos componentes que no deseamos incluir en nuestro proyecto:

```pug
//- Atoms
include ../partials/atoms/_atoms

//- Molecules
include ../partials/molecules/_molecules

//- Components
include ../partials/components/_navbars
include ../partials/components/_cards
include ../partials/components/_carousels
include ../partials/components/_features
//- include ../partials/components/_projects
include ../partials/components/_blogs
//- include ../partials/_comments
//- include ../partials/components/_teams
//- include ../partials/components/_pricing
include ../partials/components/_testimonials
include ../partials/components/_contactus
include ../partials/components/_prefooter
include ../partials/components/_footers
```

**CSS**

Usa Bootstrap 4 y Now UI Kit para un prototipado rápido directamente en el navegador.

```sass
@import 'now-ui-kit/variables';
@import 'now-ui-kit/mixins';
```
---
### T O D H ![Logo TODH](./assets/img/logo-todh.svg)

**Transmite. Observa. Discierne. Haz.**

* Reconociendo patrones universales
	* Sentir el orden, cómo todo ya funciona en coherencia dentro de un universo sistémico y holístico.
	* Crear como ya lo hace la vida
* Consolidar lo que ya funciona bien
* Acción contínua incremental

Para percibir en coherencia el proceso de la Creación.

[t-o-d-h.com](http://t-o-d-h.com)

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

---

### ¿Nos dejamos transformar por el vínculo?

By **Sergio Forés**

*Artista holístico / Diseñador / Front-end*

Soy un árbol encerrado en el cuerpo de una semilla.

[Linkedin](https://es.linkedin.com/in/sergiofores) |
[Twitter](https://twitter.com/t0tinspire) |
[Instagram](https://www.instagram.com/t.o.d.h/)
