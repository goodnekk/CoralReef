# coral reef
![coral](images/coral.png "coral")

An __open source, socio-technical__ system for __do-it-yourself__ design using __digital manufacturing__. Mimicking a natural coral reef, it should function as a decentralized, self-organizing eco-system that provides a skeleton for it's inhabitants to build on and live in.

The most important part is a database containing components and assemblies that people can use to build their own furniture, appliances or even vehicles. There is also a design environment that mediates the design process using the database.

## Basic plan

The database contains components and assemblies. A component is a parametrically defined object. It contains information about: 

### Parametric geometry

![parametric](images/parametric.png "parametric")
Geometry should be defined parametrically. This simplifies the finding and fitting of components considerably, since the amount of individual objects is reduced to a minimum. This should be done as often as possible. Even if in reality there are only a few different component types, such as in the case off-the-shelf components(screws, motors, etc).

### Interfaces and Patterns
![interfaces](images/assembly.png "interfaces")
Components contain information about how they can be combined with other components to form assemblies. The parametric model allows the user to freely scale and morph an assembly without having to worry about replacing individual components. Interfaces have standard assembly methods which can be used to generate a product assembly manual.

Assemblies and combinations that are re-used often are captured in design patterns. Patterns are global solutions to problems that appear often, that can however be implemented in different ways. Certain problems have certain optimized solutions that should be captured and search-able within the database.

### Materials, Sourcing and Manufacturing
![3dprint](images/3dprint.png "3dprint")

Components contain information about the possible materials and manufacturing methods that are available for it. This information can be linked to databases containing information about local production and sourcing facilities (fab-labs, parts-shops, etc). This allows a user to source all the components as cheaply as possible. Maybe there could even be a web shop for selling parts that are particularly hard to find locally.

Price information can be used to generate price estimations for a project.

## Development
Coral reef is an open source project and still in development. If you are interested you can visit our [github](https://github.com/goodnekk/CoralReef) page. If you would like to join the development team please send an [email](mailto:marcel@wolkenmachine.nl?SUBJECT=coral reef). The idea is to use collaborative hackathons as the main form of development. We plan on organizing one in the near future.