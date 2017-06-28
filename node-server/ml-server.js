var express = require('express');
var app = express();
var _ = require('lodash');

var appServerType = {
  http: 'HTTP',
  xdbc: 'XDBC',  
}

var dbRelation = {
  security: 'Security',
  schemas: 'Schemas',
  triggers: 'Triggers',  
}

var forests = [
  {id:0, name:'App-Services'},
  {id:1, name:'Documents'},
  {id:2, name:'Extensions'},
  {id:3, name:'Fab'},
  {id:4, name:'Last-Login'},
  {id:5, name:'Meters'},
  {id:6, name:'mlsonforest'},
  {id:7, name:'Modules'},
  {id:8, name:'Schemas'},
  {id:9, name:'Security'},
  {id:10, name:'Triggers'},  
];

var appServers = [
  {id:0, name:'Manage'},
  {id:1, name:'Health-Check'},
  {id:2, name:'App-services'},
  {id:3, name:'mlsprer'},
  {id:4, name:'Admin'},
];

var DBList = [
  { id: 0,  name: 'App-Services', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Documents', id: 1, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'App-Services', id: 0 }], appServers: [{ name: 'Manage', id: 0, type: appServerType.http, isDefault: true }, { name: 'HealthCheck', id: 1, type: appServerType.http, isDefault: true }] },
  { id: 1,  name: 'Documents',    isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas }, { name: 'Triggers', id: 10, relation: dbRelation.triggers }],    forests: [{ name: 'Documents',    id: 1 }], appServers: [{ name: 'App-Services', id: 4, type: appServerType.http, isDefault: true }] },
  { id: 2,  name: 'Extensions',   isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Extensions',   id: 2 }], },
  { id: 3,  name: 'Fab',          isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Fab',          id: 3 }], },
  { id: 4,  name: 'Last-Login',   isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Last-Login',   id: 4 }], },
  { id: 5,  name: 'Meters',       isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas },],                                                                forests: [{ name: 'Meters',       id: 5 }], },
  { id: 6,  name: 'mlcon',        isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas }, ],                                                               forests: [{ name: 'mlsonforest',  id: 6 }], appServers: [{ name: 'mlsprer', id: 3, type: appServerType.http, isDefault: true }, ] },
  { id: 7,  name: 'Modules',      isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas },],                                                                forests: [{ name: 'Modules',      id: 7 }], },
  { id: 8,  name: 'Schemas',      isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas },],                                                                forests: [{ name: 'Schemas',      id: 8 }], },
  { id: 9,  name: 'Security',     isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas },],                                                                forests: [{ name: 'Security',     id: 9 }], appServers: [{ name: 'Admin', id: 4, type: appServerType.http, isDefault: true },] },
  { id: 10, name: 'Triggers',     isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas',   id: 8, relation: dbRelation.schemas },],                                                                forests: [{ name: 'Triggers',     id: 10 }], },
]

var objectAccessDetalis = [];

var objectTypes = {
  forest: "Forest",
  database: "Database",
  cluster: "Cluster",
  appServers: "App Server"
}

app.use(function(req, res, next) {
  console.log('test')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/dblist', function (req, res) {
  res.end(JSON.stringify(DBList));
})

function addToAccessList(objectType, name, id){
  objectAccessDetalis.push({objectType: objectType, name:name, id: id, accessTime: new Date()})
}

app.get('/forests', function (req, res) {
  var forestAndDb = _.map(forests, function(forest){
    var mapDb = _.find(DBList, function(db){ return _find(db.forests, {id: forest.id})});
    
    if(mapDb){
      return _.extend(forest, {database: {id: mapDb.id, name: mapDb.name}});
    }
    
    return forest;
  });
  
  res.end(JSON.stringify(forestsAndDb));
})

app.get('/requestTrend', function (req, res) {
  var startDate = new Date(req.query.startDate);
  var endData = new Date(req.query.endDate);
  var dataPointsCount = req.query.dataPointsCount;

  var bucketSize = (endData.getTime() - startDate.getTime())/dataPointsCount;

  dataBucket = [];

  for(i=0; i< dataPointCount; i++){
    dataBucket.push({
      startDate: new Date(startDate.getTime() + i*bucketSize), 
      endData:  new Date(startDate.getTime() + (i+1)*bucketSize)}
    );
  }

  var trendFor = req.query.trendFor;

  var groupedData = _(objectAccessDetalis)
                    .filter(function(value){
                      return value.objectType == trendFor && value.accessTime < endDate && value.accessTime >= startDate;
                    })
                    .groupBy('name')
                    .mapKeys(function(value, key){
                      return {name: key, data:  _.map(dataBucket, function(chunk){
                        return _.filter(value, function(accessDetail){
                            return accessDetail.accessTime >= chunk.startDate && accessDetail.accessTime < chunk.endDate;
                        });
                      })}
                    })
                    .valueOf();

  return groupedData;

})

app.post('/setForestToDB', function (req, res) {
  var db = req.body.database;
  var selectedForests = req.body.selectedForests;
  _.extend(_.find(DBList, {id: db.id}), {forests: selectedForests})
  
  addToAccessList(objectTypes.database, db.name, db.id);
  
  res.end('true');
})

app.post('/createDB', function (req, res) {
  var db = req.body.database;
  DBList.push(db);

  addToAccessList(objectTypes.database, db.name, db.id);

  res.end('true');
})

app.post('/createForest', function (req, res) {
  var forest = req.body.forest;
  forests.push(forest);

  addToAccessList(objectTypes.forest, forest.name, forest.id);

  res.end('true');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("ML Server listening at http://%s:%s", host, port)

})
