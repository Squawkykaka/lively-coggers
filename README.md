[![CodeFactor](https://www.codefactor.io/repository/github/squawkykaka/lively-coggers/badge/main)](https://www.codefactor.io/repository/github/squawkykaka/lively-coggers/overview/main)

# This is a modpack for a SMP launching in a few weeks

Mainly based around create with some storage mods thrown in and integrated with create

## Dev Installation

1. Create a new instance on Forge 1.20.1 in Prism Launcher.
2. Open the instance folder.
3. Navigate to the parent directory of the instance folder.
4. Clone the repository:
   ```sh
   git clone https://github.com/Squawkykaka/lively-coggers/
   ```
5. Rename the cloned folder to `.minecraft`.
6. in side that directory run the command `pakku fetch`
7. Launch the instance in prism launcher.
8. Create a world, and one inside it run
   ```sh
   /probejs dump
   ```
   this will make autocomplete work in vscode
9. Open the `.minecraft` folder in VSCode to make your changes.

Uses:
https://legacy.curseforge.com/minecraft/texture-packs/create-energistics

## Update guide

### Servers

1. Delete the `config`, `defaultconfigs`, `kubejs` and `mods` directory
2. Download the new server pack
3. Upload it to the server
4. extract all the files so the `kubejs`, `mods` and `configureddefaults` folders are in the right place
