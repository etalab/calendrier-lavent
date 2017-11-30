# Le calendrier de l'avent de l'Open Data

> Pas de data, pas de chocolat !

# Installer

Pour développer, fixer une bricole ou autre.

```bash
git clone git@github.com:etalab/calendrier-lavent.git
cd calendrier-lavent
bundle install
bundle exec jekyll serve
```

# Publier un article

1. [Créer un fichier][] — par exemple, `_posts/2017-12-01-prenoms.md` afin de le publier le **1er décembre 2017** ;
2. S'inspirer de ce template comme contenu de fichier :

```markdown
---
title: Fichier des prénoms
contribution:
  type: dataset
  publisher: INSEE
  url: https://www.data.gouv.fr/fr/datasets/fichier-des-prenoms-edition-2016/
---

Accroche en moins de 10 mots.

<!--more-->

Le reste du contenu affiché sur la page du calendrier de l'Avent relatif à ce jour.

<!-- on peut même embarquer des embed de datasets -->
<div data-udata-dataset-id="586a824588ee3835ec3f4e61"></div>
```

[Créer un fichier]: https://github.com/etalab/calendrier-lavent/new/master?filename=_posts/20xx-12-xx-dataset.md
