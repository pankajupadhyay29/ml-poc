var express = require('express');
var bodyParser = require('body-parser')
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
    { id: 0, name: 'App-Services' },
    { id: 1, name: 'Documents' },
    { id: 2, name: 'Extensions' },
    { id: 3, name: 'Fab' },
    { id: 4, name: 'Last-Login' },
    { id: 5, name: 'Meters' },
    { id: 6, name: 'Mlsonforest' },
    { id: 7, name: 'Modules' },
    { id: 8, name: 'Schemas' },
    { id: 9, name: 'Security' },
    { id: 10, name: 'Triggers' },
];

var appServers = [
    { id: 0, name: 'Manage' },
    { id: 1, name: 'Health-Check' },
    { id: 2, name: 'App-services' },
    { id: 3, name: 'mlsprer' },
    { id: 4, name: 'Admin' },
];

var DBList = [
        { id: 0, name: 'App-Services', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Documents', id: 1, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'App-Services', id: 0 }], appServers: [{ name: 'Manage', id: 0, type: appServerType.http, isDefault: true }, { name: 'HealthCheck', id: 1, type: appServerType.http, isDefault: true }] },
        { id: 1, name: 'Documents', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, { name: 'Triggers', id: 10, relation: dbRelation.triggers }], forests: [{ name: 'Documents', id: 1 }], appServers: [{ name: 'App-Services', id: 4, type: appServerType.http, isDefault: true }] },
        { id: 2, name: 'Extensions', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Extensions', id: 2 }], },
        { id: 3, name: 'Fab', isAvailable: false, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Fab', id: 3 }], },
        { id: 4, name: 'Last-Login', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, { name: 'App-Services', id: 0, relation: dbRelation.triggers }], forests: [{ name: 'Last-Login', id: 4 }], },
        { id: 5, name: 'Meters', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Meters', id: 5 }], },
        { id: 6, name: 'Mlcon', isAvailable: false, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Mlsonforest', id: 6 }], appServers: [{ name: 'mlsprer', id: 3, type: appServerType.http, isDefault: true }, ] },
        { id: 7, name: 'Modules', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Modules', id: 7 }], },
        { id: 8, name: 'Schemas', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Schemas', id: 8 }], },
        { id: 9, name: 'Security', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Security', id: 9 }], appServers: [{ name: 'Admin', id: 4, type: appServerType.http, isDefault: true }, ] },
        { id: 10, name: 'Triggers', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: 'Triggers', id: 10 }], },
		 { id: 11, name: 'Riggers', isAvailable: true, relatedDatabase: [{ name: 'Security', id: 9, relation: dbRelation.security }, { name: 'Schemas', id: 8, relation: dbRelation.schemas }, ], forests: [{ name: '', id: 11 }], },
    ]
    //-------------------------------------------------------
var Barchart = [{
    key: "Cumulative Return",
    values: [{
            "label": "A",
            "value": 29.765957771107
        },
        {
            "label": "B",
            "value": 0
        },
        {
            "label": "C",
            "value": 32.807804682612
        },
        {
            "label": "D",
            "value": 196.45946739256
        },
        {
            "label": "E",
            "value": 0.19434030906893
        },
        {
            "label": "F",
            "value": 98.079782601442
        },
    ]
}]
var LChart = [{
        values: [{ x: 1, y: 5 }, { x: 5, y: 10 }, { x: 7, y: 8 }], //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e' //color - optional: choose your own line color.
    },
    {
        values: [{ x: 2, y: 10 }, { x: 5, y: 5 }, { x: 7, y: 11 }], //values - represents the array of {x,y} data points,
        key: 'Cosine Wave',
        color: '#2ca02c'
    },
    {
        values: [{ x: 3, y: 5 }, { x: 6, y: 11 }, { x: 7, y: 12 }], //values - represents the array of {x,y} data points,
        key: 'Another sine wave',
        color: '#7777ff',
        area: true //area - set to true if you want this line to turn into a filled area chart.
    }
]

var SAChart = [{
    "key": "North America",
    "values": [
        [1025409600000, 23.041422681023],
        [1028088000000, 19.854291255832],
        [1030766400000, 21.02286281168],
        [1033358400000, 22.093608385173],
        [1036040400000, 25.108079299458],
        [1038632400000, 26.982389242348],
        [1041310800000, 19.828984957662],
        [1043989200000, 19.914055036294],
        [1046408400000, 19.436150539916],
        [1049086800000, 21.558650338602],
        [1051675200000, 24.395594061773],
        [1054353600000, 24.747089309384],
        [1056945600000, 23.491755498807],
        [1059624000000, 23.376634878164],
        [1062302400000, 24.581223154533],
        [1064894400000, 24.922476843538],
        [1067576400000, 27.357712939042],
        [1070168400000, 26.503020572593],
        [1072846800000, 26.658901244878],
        [1075525200000, 27.065704156445],
        [1078030800000, 28.735320452588],
        [1080709200000, 31.572277846319],
        [1083297600000, 30.932161503638],
        [1085976000000, 31.627029785554],
        [1088568000000, 28.728743674232],
        [1091246400000, 26.858365172675],
        [1093924800000, 27.279922830032],
        [1096516800000, 34.408301211324],
        [1099195200000, 34.794362930439],
        [1101790800000, 35.609978198951],
        [1104469200000, 33.574394968037],
        [1107147600000, 31.979405070598],
        [1109566800000, 31.19009040297],
        [1112245200000, 31.083933968994],
        [1114833600000, 29.668971113185],
        [1117512000000, 31.490638014379],
        [1120104000000, 31.818617451128],
        [1122782400000, 32.960314008183],
        [1125460800000, 31.313383196209],
        [1128052800000, 33.125486081852],
        [1130734800000, 32.791805509149],
        [1133326800000, 33.506038030366],
        [1136005200000, 26.96501697216],
        [1138683600000, 27.38478809681],
        [1141102800000, 27.371377218209],
        [1143781200000, 26.309915460827],
        [1146369600000, 26.425199957518],
        [1149048000000, 26.823411519396],
        [1151640000000, 23.850443591587],
        [1154318400000, 23.158355444054],
        [1156996800000, 22.998689393695],
        [1159588800000, 27.9771285113],
        [1162270800000, 29.073672469719],
        [1164862800000, 28.587640408904],
        [1167541200000, 22.788453687637],
        [1170219600000, 22.429199073597],
        [1172638800000, 22.324103271052],
        [1175313600000, 17.558388444187],
        [1177905600000, 16.769518096208],
        [1180584000000, 16.214738201301],
        [1183176000000, 18.729632971229],
        [1185854400000, 18.814523318847],
        [1188532800000, 19.789986451358],
        [1191124800000, 17.070049054933],
        [1193803200000, 16.121349575716],
        [1196398800000, 15.141659430091],
        [1199077200000, 17.175388025297],
        [1201755600000, 17.286592443522],
        [1204261200000, 16.323141626568],
        [1206936000000, 19.231263773952],
        [1209528000000, 18.446256391095],
        [1212206400000, 17.822632399764],
        [1214798400000, 15.53936647598],
        [1217476800000, 15.255131790217],
        [1220155200000, 15.660963922592],
        [1222747200000, 13.254482273698],
        [1225425600000, 11.920796202299],
        [1228021200000, 12.122809090924],
        [1230699600000, 15.691026271393],
        [1233378000000, 14.720881635107],
        [1235797200000, 15.387939360044],
        [1238472000000, 13.765436672228],
        [1241064000000, 14.631445864799],
        [1243742400000, 14.292446536221],
        [1246334400000, 16.170071367017],
        [1249012800000, 15.948135554337],
        [1251691200000, 16.612872685134],
        [1254283200000, 18.778338719091],
        [1256961600000, 16.756026065421],
        [1259557200000, 19.385804443146],
        [1262235600000, 22.950590240168],
        [1264914000000, 23.61159018141],
        [1267333200000, 25.708586989581],
        [1270008000000, 26.883915999885],
        [1272600000000, 25.893486687065],
        [1275278400000, 24.678914263176],
        [1277870400000, 25.937275793024],
        [1280548800000, 29.461381693838],
        [1283227200000, 27.357322961861],
        [1285819200000, 29.057235285673],
        [1288497600000, 28.549434189386],
        [1291093200000, 28.506352379724],
        [1293771600000, 29.449241421598],
        [1296450000000, 25.796838168807],
        [1298869200000, 28.740145449188],
        [1301544000000, 22.091744141872],
        [1304136000000, 25.07966254541],
        [1306814400000, 23.674906973064],
        [1309406400000, 23.418002742929],
        [1312084800000, 23.24364413887],
        [1314763200000, 31.591854066817],
        [1317355200000, 31.497112374114],
        [1320033600000, 26.67238082043],
        [1322629200000, 27.297080015495],
        [1325307600000, 20.174315530051],
        [1327986000000, 19.631084213898],
        [1330491600000, 20.366462219461],
        [1333166400000, 19.284784434185],
        [1335758400000, 19.157810257624]
    ]
}]
var chart = [{ Type: 'discreteBarChart', Data: Barchart }, { Type: 'lineChart', Data: LChart }, { Type: 'stackedAreaChart', Data: SAChart }]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/Chart', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.end(JSON.stringify(chart));
    })
    //-------------------------------------------------------

var objectAccessDetalis = [];

var objectTypes = {
    forest: "Forest",
    database: "Database",
    cluster: "Cluster",
    appServers: "App Server"
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    next();
});

app.get('/dblist', function(req, res) {
    res.end(JSON.stringify(DBList));
})

function addToAccessList(objectType, name, id) {
    objectAccessDetalis.push({ objectType: objectType, name: name, id: id, accessTime: new Date() })
}

app.get('/forests', function(req, res) {
    var forestAndDb = _.map(forests, function(forest) {
        var mapDb = _.find(DBList, function(db) { return _.find(db.forests, function(f) { return f.id == forest.id }) });

        if (!_.isEmpty(mapDb)) {
            return _.extend(forest, { database: { id: mapDb.id, name: mapDb.name } });
        }

        return forest;
    });

    res.end(JSON.stringify(forestAndDb));
})

app.get('/requestTrend', function(req, res) {
    var startDate = new Date(req.query.startDate);
    var endDate = new Date(req.query.endDate);
    var dataPointsCount = req.query.dataPointsCount;

    var bucketSize = (endDate.getTime() - startDate.getTime()) / dataPointsCount;

    dataBucket = [];

    for (i = 0; i < dataPointsCount; i++) {
        dataBucket.push({
            startDate: new Date(startDate.getTime() + i * bucketSize),
            endDate: new Date(startDate.getTime() + (i + 1) * bucketSize)
        });
    }

    var trendFor = req.query.trendFor || objectTypes.forest;
    var groupedData = [];
    var grp = _(objectAccessDetalis)
        .filter(function(value) {
            return value.objectType == trendFor && value.accessTime < endDate && value.accessTime >= startDate;
        })
        .groupBy('name')
        .valueOf();

    _.forEach(grp, function(value, key) {
        var g = {
            name: key,
            data: _.map(dataBucket, function(chunk) {
                var data = _.filter(value, function(accessDetail) {
                    return accessDetail.accessTime >= chunk.startDate && accessDetail.accessTime < chunk.endDate;
                })

                return { startDate: chunk.startDate, endDate: chunk.endDate, data: data };
            })
        }

        groupedData.push(g);
    })

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(groupedData));

})

var dbAvailablity = [
    { timestamp: new Date(), UnavialableDB: 0 }
];
app.get('/toggleAvailability', function(req, res) {
    var id = req.query.id;
    var db = _.find(DBList, function(db) { return db.id == id });
    if (!db) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(DBList));
        return;
    }

    addToAccessList(objectTypes.database, db.name, db.id);

    var last = dbAvailablity[dbAvailablity.length - 1];
    var available = db.isAvailable;

    db.isAvailable = !available;

    dbAvailablity.push({
        timestamp: new Date(),
        UnavialableDB: !available ? Math.max(last.UnavialableDB - 1, 0) : Math.min(last.UnavialableDB + 1, DBList.length)
    });
    res.end('true');

})

app.get('/requestAvailabilityTrend', function(req, res) {
    var startDate = new Date(req.query.startDate);
    var endDate = new Date(req.query.endDate);
    var dataPointsCount = req.query.dataPointsCount;

    var bucketSize = (endDate.getTime() - startDate.getTime()) / dataPointsCount;

    dataBucket = [];

    for (i = 0; i < dataPointsCount; i++) {
        dataBucket.push({
            startDate: new Date(startDate.getTime() + i * bucketSize),
            endDate: new Date(startDate.getTime() + (i + 1) * bucketSize)
        });
    }

    var groupedData = _.map(dataBucket, function(chunk) {
        var filtered = _(dbAvailablity)
            .filter(function(value) {
                return value.timestamp >= chunk.startDate && value.timestamp < chunk.endDate;
            }).valueOf();
        var last = _.last(filtered);
        var count = (last || { UnavialableDB: 0 }).UnavialableDB

        return _.extend(chunk, {
            data: last
        });
    })
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(groupedData));

})


app.get('/requestForest', function(req, res) {
    var forestName = req.query.forestName;
    var forestId = req.query.forestId;

    addToAccessList(objectTypes.forest, forestName, forestId);

    res.end('true');
})

app.get('/requestDatabase', function(req, res) {
    var dbName = req.body.dbName;
    var dbId = req.body.dbId;

    addToAccessList(objectTypes.database, dbName, dbId);

    res.end('true');
})

app.post('/setForestToDB', function(req, res) {
    var db = req.body.database;
    var selectedForests = req.body.selectedForests;

    //remove these forest form existing
    _.forEach(DBList, function(d) {
        _.remove(d.forests, function(f) {
            return _.find(selectedForests, function(forest) { return forest.id == f.id });
        })
    })

    //add these to current db
    var database = _.find(DBList, function(d) { return d.id == db.id });
    database.forests = selectedForests;
    //_.extend(, {forests: selectedForests})

    addToAccessList(objectTypes.database, db.name, db.id);

    res.end(JSON.stringify(DBList));
})

app.post('/createDB', function(req, res) {
    var db = req.body.database;
    DBList.push(db);

    addToAccessList(objectTypes.database, db.name, db.id);

    res.end('true');
})

app.post('/createForest', function(req, res) {
    var forest = req.body.forest;
    forests.push(forest);

    addToAccessList(objectTypes.forest, forest.name, forest.id);

    res.end('true');
})

app.get('/recent', function(req, res) {
    var recent = _(objectAccessDetalis).uniqWith(function(obj, other) {
        return obj.objectType == other.objectType && obj.name == other.name
    }).take(5).valueOf();
    res.end(JSON.stringify(recent));
})

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;
    console.log("ML Server listening at http://%s:%s", host, port);

})
