# Comandos básicos de git

#### Iniciar un repositorio

Para iniciar un repositorio de git en un directorio, se debe ejecutar el siguiente comando:

```bash
git init
```

para conectarnos a github necesitamos

- crear un repositorio en github
- copiar la url del repositorio
  con estos comandos

```bash
git remote add origin url_del_repo
git branch -M main
git push -u origin main
```

para crear una rama y posarse sobre ella

```bash
git checkout -b nombreRama
```

para cambiar de rama

```bash
git checkout nombreRama
```

para solo crear rama

```bash
git branch nombreRama
```

## Qué es un commit?

---

Es un punto en la historia de un proyecto en el que se guardan los cambios realizados en los archivos del proyecto. Cada commit tiene un mensaje que describe los cambios realizados en el proyecto.

---

crear un commit

```bash
git add .
git commit -m "Add: local storage para tareas"
```

mandar esos cambios para github, si la rama no existe en github, se crea
crear rama remota

```bash
 git push
  git push --set-upstream origin bases_de_git

```

para obtener todas las ramas que estan en github

```bash
git fetch
git checkout nombreRama
```

para obtener los cambios de una rama

```bash
git pull
```
