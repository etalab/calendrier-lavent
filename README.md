# Le calendrier de l'avent de l'Open Data

> Pas de data, pas de chocolat !

# Installer

Pour déveloper, fixer une bricole ou autre.

```bash
git clone git@github.com:etalab/calendrier-lavent.git
cd calendrier-lavent
bundle install
bundle exec jekyll s
```

# Publier un article

1. [Créer un fichier][] — par exemple, `_posts/2017-12-01.md` afin de le publier le **1er décembre 2017** ;
2. S'inspirer de ce template comme contenu de fichier :

```markdown
---
title: Fichier des prénoms
advent_day: 2017-12-01
contribution:
  type: dataset
  publisher: INSEE
  url: https://www.data.gouv.fr/fr/datasets/fichier-des-prenoms-edition-2016/
---

Le fichier national des prénoms de l'INSEE est disponible en open data depuis le 1er janvier 2017.
```

[Créer un fichier]: https://github.com/etalab/calendrier-lavent/new/master?filename=_posts/20xx-12-xx.md
