# Helsinki City Bike App 🚴
Application for viewing data from Helsinki City Bikes, built using React, TypeScript, ASP.NET Core, .NET Entity Framework and SQLite. 

### Prerequisites
For the backend, you need `.NET 6` and for the client, you need `Node.js` and `npm`.

The app uses ports 7000 (Client), 7001 (Backend, Https), 7002 (Backend, Http)

### How to run?
Backend
Runnable standalone (Does not require .NET 6 installation!) executable can be downloaded **[here](https://github.com/RisenOutcast/HelsinkiCityBikeApp/releases)**, run the .exe and close with Ctrl+C.
Otherwise, you can build it yourself using Visual Studio or .NET CLI

Client
Clone repo
run `npm install`
run `npm start`

### Running the backend for the first time:
The newly downloaded database is empty, you need to add these files to HelsinkiCityBikeApi\Data -folder

* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
* <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>
* <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

Getting the data from these files might take a while and eat up some RAM. I recommend restarting the backend after it has collected the data.

### Backend Endpoints

`/Journey` Params: `startIndex`,`numberOfItems`
Returns the specified number of journeys from the specified start index.

`/Journey/Amount`
Returns how many journeys are currently present in the database.

`/Journey/DepartureStation`, Params: `stationId`
Returns number of departures from the specified station (id).

`/Journey/ReturnStation`, Params: `stationId`
Returns number of returns from the specified station (id).

`/Station` Params: `startIndex`,`numberOfItems`
Returns the specified number of stations from the specified start index.

`/Station/Amount`
Returns how many stations are currently present in the database.

`/Station/{stationId}` Params: `{stationId}`
Returns only the specified station.

### Updating the Database structure:

Changes to the database structure can be made with the `Update-Database` command. More info on it can be found [here](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli).

To quickly summarise the functionality of updating the database: Make changes to database code, run `Add-Migration <name>`, and run `Update-Database`.
