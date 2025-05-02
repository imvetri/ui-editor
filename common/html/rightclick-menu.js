var types = types || [];
var styles = styles || {};

function edittype(e) {
    types[i].name = prompt("Edit name", types[i].name)
}
function reset() {
    if (window.storagemovenext && window.storagemoveprev) {
        storagebox.storagemovenext = window.storagemovenext
        storagebox.storagemoveprev = window.storagemoveprev
        window.storagebox = undefined
        window.storagemovenext = undefined
        window.storagemoveprev = undefined
        window.pickstoragebox = false
        window.storagebox = undefined;
    }
}
function markname() {
    var currentbox = boxes.find(e => e === window.currentbox)
    currentbox.rcname = prompt("ENTER A NAME", currentbox.rcname)
}

function markfrom() {
    flow = {};
    flow.from = currentboxid
}
function markto() {
    flow.to = currentboxid
}

function markflowon(e) {
    if (e.srcElement.json.name === "VALID") {
        flow.validCheck = true;
        return;
    }
    if (e.srcElement.json.name === "CLICK") {
        flow.CLICK = currentboxid
    }
    if (e.srcElement.json.name === "ENTER") {
        flow.ENTER = currentboxid
    }
    flow.on = e.srcElement.json.name
    saveflow(flow)
}
function saveflow(flow) {
    dChildren[flow.from].flow = flow
}
function markmshowonvalid() {
    show.on = "VALID"
    show.input = currentboxid
    saveshow(show)
}
function markshowoninvalid() {
    show.on = "INVALID"
    show.input = currentboxid
    saveshow(show)
}
function saveshow(show) {
    dChildren[show.input].shows = dChildren[show.input].shows || []
    var target = dChildren[show.input].shows.findIndex(s => s.on === show.on)
    if (target == -1) {
        dChildren[show.input].shows.push(show)
    } else
        dChildren[show.input].shows[target] = show
}

function markthis() {
    show = {};
    show.this = currentboxid
}
function markhere() {
    show.here = currentboxid
}
function addstyle(e) {
    var name = prompt("Name")
    var property = prompt("Property")
    var value = prompt("Value")
    styles=JSON.parse(localStorage.styles || "{}")
    styles[name] = styles[name] || {}
    styles[name][property] = styles[name][property] || {}
    styles[name][property][value] = styles[name][property][value] || "";
    localStorage.styles = JSON.stringify(styles)
    e.stopPropagation();
}

function addDataNew(e) {
    var name = prompt("ENTER NAME")
    var type = prompt("ENTER - TYPE or VALUE")
    var typs = []
    if (type === "TYPE") {
        while (true) {
            var typ = prompt("ENTER TYPE NAMES, one by one. Leave empty to end")
            if (typ == "")
                break;
            typs.push(typ)
        }
    }
    types.push({
        name: name,
        rule: "",
        type: type,
        typs: typs
    })
    e.stopPropagation();
}
var c = {
    name: "MENU",
    click: () => {}
    ,
    children: [{
        name: "IMPORT",
        children: [{
            name: "DESIGN",
            children: [],
            click: (e) => {
                var path = prompt("Enter image URL")
                e.stopPropagation()
            }
        }],
        click: () => {}
    }, {
        name: "MARK",
        children: [{
            name: "INPUT",
            getchildren: () => types.map(t => {
                return {
                    name: t.name,
                    click: (e) => {
                        var currentbox = boxes.find(e => e === window.currentbox).element.json
                        currentbox.rtype = "content"
                        currentbox.rctype = "Input"
                        currentbox.rctypename = t.name
                    }
                    ,
                    getchildren: (e) => {
                        return t.typs?.map(name => {
                            return {
                                name: name,
                                click: (e) => {
                                    var currentbox = boxes.find(e => e === window.currentbox).element.json
                                    currentbox.rtype = "content"
                                    currentbox.rctype = "Input"
                                    currentbox.rctypename = t.name+"."+name
                                }
                                ,
                                children: []
                            }
                        }
                        ) || [];
                    }
                }
            }
            ),
            click: () => {}
        }, {
            name: "OUTPUT",
            children: [{
                name: "Text",
                click: () => {
                    var currentbox = boxes.find(e => e === window.currentbox)
                    currentbox.rtype = "content"
                    currentbox.rctype = "Text"
                    currentbox.rcvalue = prompt("Enter value", currentbox.rcvalue)
                }
                ,
                children: []
            }, {
                name: "Image",
                click: () => {
                    var currentbox = boxes.find(e => e === window.currentbox)
                    currentbox.rtype = "content"
                    currentbox.rctype = "Image"
                    currentbox.rcvalue = prompt("Enter value", currentbox.rcvalue)
                }
                ,
                children: []

            }, {
                name: "READ FROM THIS",
                getchildren: () => window?.currentbox?.storage[0] ? Object.keys(window?.currentbox?.storage[0]).map(e => {
                    return {
                        name: e,
                        children: [],
                        click: (e) => {
                            window.outputbox.rcvalue = currentbox.index;
                            window.outputbox.rcprop = e.srcElement.innerText;
                            window.outputbox = undefined;
                            window.picksourcebox = false;
                        }
                    }
                }
                ) : [],
                click: (e) => {
                    window.outputbox.rcvalue = currentbox.index;
                    window.outputbox = undefined;
                    window.picksourcebox = false;
                }
            }],
            click: () => {
                var currentbox = boxes.find(e => e === window.currentbox)
                currentbox.rtype = "content"
                currentbox.rctype = "Data source"
                if (!window.picksourcebox) {
                    window.picksourcebox = true
                    window.outputbox = currentbox;
                }
            }
        }, {
            name: "STORAGE",
            children: [{
                name: "MOVE NEXT",
                children: [],
                click: (e) => {
                    window.storagemovenext = currentboxid;
                    reset()
                }
            }, {
                name: "MOVE PREV",
                children: [],
                click: (e) => {
                    window.storagemoveprev = currentboxid;
                    reset()
                }
            }],
            click: (e) => {
                if (!window.pickstoragebox) {
                    window.pickstoragebox = true
                    window.storagebox = currentbox;
                    currentbox.rctype = ""
                    return
                }
            }
        }, {
            name: "NAME",
            children: [{
                name: () => {
                    return boxes.find(e => e === window.currentbox).rcname || ""
                }
                ,
                children: [],
                click: () => {}
            }],
            click: markname
        }],
        click: () => {}
    }, {
        name: "MOVE",
        children: [{
            name: "FROM",
            click: markfrom,
            children: []
        }, {
            name: "TO",
            click: markto,
            children: []
        }, {
            name: "ON",
            click: () => {}
            ,
            children: [{
                name: "VALID",
                click: markflowon,
                children: []
            }, {
                name: "ENTER",
                click: markflowon,
                children: []
            }, {
                name: "CLICK",
                click: markflowon,
                children: []
            }]
        }],
        click: () => {}
    }, {
        name: "SHOW",
        children: [{
            name: "THIS",
            children: [],
            click: markthis
        }, {
            name: "HERE",
            children: [],
            click: markhere
        }, {
            name: "ON",
            children: [{
                name: "VALID",
                children: [],
                click: markmshowonvalid
            }, {
                name: "INVALID",
                children: [],
                click: markshowoninvalid
            }],
            click: () => {}
        }],
        click: () => {}
    }, {
        name: "DECORATE",
        children: [{
            name: "APPLY",
            click: () => {}
            ,
            getchildren: () => Object.keys(JSON.parse(localStorage.styles)).map(name => {
                return {
                    name: name,
                    click: (e) => {
                        boxes[currentboxid].decorate = boxes[currentboxid].decorate || {}
                        Object.keys(styles[name]).forEach(e => {
                            boxes[currentboxid].decorate[e] = Object.keys(styles[name][e])[0]
                        }
                        )
                    }
                    ,
                    getchildren: () => Object.keys(JSON.parse(localStorage.styles)[name]).map(property => {
                        return {
                            name: property,
                            getchildren: () => Object.keys(JSON.parse(localStorage.styles)[name][property]).map(value => {
                                return {
                                    name: value,
                                    children: [],
                                    click: () => {
                                        boxes[currentboxid].decorate = boxes[currentboxid].decorate || {}
                                        boxes[currentboxid].decorate[property] = value
                                    }
                                }
                            }
                            ),
                            click: () => {}
                        }
                    }
                    )
                }
            }
            )
        }, {
            name: "ADD",
            click: addstyle,
            children: []
        }],
        click: () => {}
    }, {
        name: "DATA",
        click: () => {}
        ,
        children: [{
            name: "ADD",
            click: addDataNew,
            getchildren: () => types.map( (type, i) => {
                window.currentType = type
                return {
                    name: type.name,
                    children: [{
                        name: "IN",
                        click: () => {
                            types[i].rule = "IN"
                            types[i].source = currentboxid
                        }
                        ,
                        children: []
                    }, {
                        name: "NOT IN",
                        click: () => {
                            types[i].rule = "NOT IN"
                            types[i].source = currentboxid
                        }
                        ,
                        children: []
                    }, {
                        name: "ANY",
                        click: () => {
                            types[i].rule = "ANY"
                            types[i].source = currentboxid
                        }
                        ,
                        children: []
                    }, {
                        name: "DELETE",
                        click: (e) => {
                            types[i]
                            types = [...types.slice(0, i), ...types.slice(i + 1, types.length)]
                            boxes[0].types = types;
                        }
                        ,
                        children: []
                    }],
                    click: edittype
                }
            }
            )
        }]
    }, {
        name: "LOOK",
        children: [],
        click: () => {
            var boxindex = boxes.findIndex(s => window.currentbox === s)
            console.log("http://localhost:3000/result.html?index:${boxindex};storageindex:0")
            window.openresult(`http://localhost:3000/result.html?index:${boxindex};storageindex:0`)
        }
    }]
}
